'use client'
import { Box, Button, Typography } from "@mui/material";
import { useMemo, useState } from "react";

export default function Page() {
    const storyList = [1, 2, 3, 4, 5, 6, 7]
    const [selectedStory, setSelectedStory] = useState(1)
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

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
    >
        <Box
            sx={{
                display: 'flex',
                width: '95%',
                height: '600px',
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {
                displayStories.map(item => item > 0 ? <Typography
                    key={item}
                    sx={{
                        width: selectedStory === item ? '26%' : '18%',
                        aspectRatio: '1/1',
                        border: '1px solid black',
                        borderRadius: '6px',
                        backgroundColor: selectedStory === item ? '#11ffcd' : 'gray',
                        flexShrink: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '4rem',
                        fontWeight: 700
                    }}
                >{item}</Typography> : <Box
                    key={item}
                    sx={{
                        width: '18%',
                        aspectRatio: '1/1',
                        flexShrink: 0,
                    }}
                ></Box>)
            }
        </Box>
        <Box sx={{ display: 'flex' }}>
            <Button disabled={!hasPrev} onClick={() => setSelectedStory(prevState => prevState - 1)}>Previous</Button>
            <Button disabled={!hasNext} onClick={() => setSelectedStory(prevState => prevState + 1)}>Next</Button>
        </Box>

    </Box>
}