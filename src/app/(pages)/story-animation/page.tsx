'use client'
import { Box, Button, Zoom, Typography, Collapse } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { TransitionGroup } from 'react-transition-group';

export default function Page() {
    const storyList = [1, 2, 3, 4, 5, 6, 7]
    const [selectedStory, setSelectedStory] = useState(4)
    const [slideDirection, setSlideDirection] = useState()
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
        // setSelectedStory(prevState => prevState - 1)
        setSlideDirection('left')
    }

    const goNext = () => {
        // setSelectedStory(prevState => prevState + 1)
        setSlideDirection('right')
    }

    useEffect(() => {
        if (slideDirection === 'left') {
            setSelectedStory(prevState => prevState - 1)
            setSlideDirection(undefined)
        } else if (slideDirection === 'right') {
            setSelectedStory(prevState => prevState + 1)
            setSlideDirection(undefined)
        }
    }, [slideDirection])

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
                gap: '100px'
            }}
        >
            <TransitionGroup component={null}>
                {
                    displayStories.map((item) => <Collapse key={item} orientation="horizontal">
                        {
                            item > 0 ? <Box
                                sx={{
                                    width: selectedStory === item ? '30.6vw' : '10.2vw',
                                    aspectRatio: selectedStory === item ? '0.735' : '9/16',
                                    flexShrink: 0,
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center',
                                    overflow: 'hidden'
                                }}
                            >
                                {selectedStory === item && <Button disabled={!hasPrev} onClick={goPrev} sx={{ minWidth: 'unset' }}>P</Button>}
                                <Box
                                    sx={{
                                        width: selectedStory === item ? '73.5%' : '100%',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            width: selectedStory === item ? '73.5%' : '100%',
                                            height: '100%',
                                            backgroundColor: 'gray',
                                            borderRadius: '4px',
                                            fontSize: '4rem',
                                            fontWeight: 700,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >{item}</Typography>
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

                    // displayStories.map((item) => {
                    //     if (selectedStory === item) {
                    //         return <Zoom key={item} >
                    //             <Box
                    //                 sx={{
                    //                     width: '30vw',
                    //                     aspectRatio: '0.735',
                    //                     border: '1px solid pink',
                    //                     borderRadius: '6px',
                    //                     backgroundColor: '#11ffcd',
                    //                     flexShrink: 0,
                    //                     display: 'flex',
                    //                     justifyContent: 'space-between',
                    //                     alignItems: 'center',
                    //                 }}
                    //             >
                    //                 <Button disabled={!hasPrev} onClick={goPrev} sx={{ minWidth: 'unset' }}>P</Button>
                    //                 <Typography
                    //                     sx={{
                    //                         width: '73.5%',
                    //                         height: '100%',
                    //                         backgroundColor: 'gray',
                    //                         fontSize: '4rem',
                    //                         fontWeight: 700,
                    //                         display: 'flex',
                    //                         justifyContent: 'center',
                    //                         alignItems: 'center'
                    //                     }}
                    //                 >{item}</Typography>
                    //                 <Button disabled={!hasNext} onClick={goNext} sx={{ minWidth: 'unset' }}>N</Button>
                    //             </Box>
                    //         </Zoom>
                    //     } else {
                    //         return <Collapse key={item} orientation="horizontal">
                    //             {
                    //                 item > 0 ? <Box
                    //                     sx={{
                    //                         width: '200px',
                    //                         aspectRatio: '9/16',
                    //                         border: '1px solid black',
                    //                         borderRadius: '6px',
                    //                         backgroundColor: 'gray',
                    //                         flexShrink: 0,
                    //                         display: 'flex',
                    //                         justifyContent: 'center',
                    //                         alignItems: 'center',
                    //                     }}
                    //                 >
                    //                     <Typography
                    //                         sx={{
                    //                             fontSize: '4rem',
                    //                             fontWeight: 700
                    //                         }}
                    //                     >{item}</Typography>
                    //                 </Box> : <Box
                    //                     sx={{
                    //                         width: '200px',
                    //                         aspectRatio: '1/1',
                    //                         flexShrink: 0,
                    //                     }}
                    //                 ></Box>
                    //             }
                    //         </Collapse>
                    //     }
                    // })
                }
            </TransitionGroup>
        </Box>
    </Box>
}