'use client'
import { Box, Button, Typography, Collapse } from "@mui/material";
import { useMemo, useState } from "react";
import { TransitionGroup } from 'react-transition-group';
import useWindowSize from "@/app/hooks/useWindowSize";

export default function Page() {
    const storyList = [1, 2, 3, 4, 5, 6, 7]
    const [selectedStory, setSelectedStory] = useState(4)
    const { wInnerWidth, wInnerHeight } = useWindowSize()
    const displayStories = useMemo(() => {
        const i = storyList.findIndex(item => item === selectedStory)
        const start = i - 2 < 0 ? 0 : i - 2
        const end = i + 3 > storyList.length ? storyList.length : i + 3
        const displayList = storyList.slice(start, end)
        if (i - 2 < 0) {
            for (let j = 0; j < 2 - i; j++) {
                displayList.unshift(0 - j)
            }
        }
        if (i + 3 > storyList.length) {
            for (let k = 0; k < i + 3 - storyList.length; k++) {
                displayList.push(0 - (i + 3 + k))
            }
        }
        console.log(displayList)
        return displayList
    }, [selectedStory])
    const hasPrev = useMemo(() => {
        const i = storyList.findIndex(item => item === selectedStory)
        return i > 0
    }, [selectedStory])
    const hasNext = useMemo(() => {
        const i = storyList.findIndex(item => item === selectedStory)
        return i < storyList.length - 1
    }, [selectedStory])

    const goPrev = () => {
        setSelectedStory(prevState => prevState - 1)
    }

    const goNext = () => {
        setSelectedStory(prevState => prevState + 1)
    }
    const centerStoryDimension = useMemo(() => {
        let tempWidth = 0.3675 * (wInnerWidth - 320)
        let mediaWidth = tempWidth * 0.7653
        let mediaHeight = mediaWidth * 16 / 9
        let tempHeight = mediaHeight + 40
        if (tempHeight > wInnerHeight * 0.95) {
            tempHeight = wInnerHeight * 0.95
            mediaHeight = tempHeight - 40
            mediaWidth = mediaHeight * 9 / 16
            tempWidth = mediaWidth / 0.7653
        }
        return {
            width: tempWidth,
            height: tempHeight
        }
    }, [wInnerWidth, wInnerHeight])


    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%'
        }}
    >
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '80px'
            }}
        >
            <TransitionGroup component={null}>
                {
                    displayStories.map((item) => <Collapse key={item} orientation="horizontal">
                        {
                            item > 0 ? <Box
                                sx={{
                                    width: selectedStory === item ? centerStoryDimension.width : centerStoryDimension.width * 0.34013,
                                    flexShrink: 0,
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                }}
                            >
                                {selectedStory === item && <Button disabled={!hasPrev} onClick={goPrev} sx={{ minWidth: 'unset' }}>P</Button>}
                                <Box
                                    sx={{
                                        width: selectedStory === item ? '76.53%' : '100%',
                                        borderRadius: '4px',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            width: '100%',
                                            aspectRatio: '9/16',
                                            backgroundColor: 'gray',
                                            fontSize: '4rem',
                                            fontWeight: 700,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >{item}</Typography>
                                    {selectedStory === item && <Box sx={{ backgroundColor: 'pink', width: '100%', height: '40px' }}>Comment Area</Box>}
                                </Box>
                                {selectedStory === item && <Button disabled={!hasNext} onClick={goNext} sx={{ minWidth: 'unset' }}>N</Button>}
                            </Box> : <Box
                                sx={{
                                    width: '10.2vw',
                                    aspectRatio: '9/16',
                                    flexShrink: 0,
                                }}
                            ></Box>
                        }
                    </Collapse>
                    )
                }
            </TransitionGroup>
        </Box>
    </Box>
}