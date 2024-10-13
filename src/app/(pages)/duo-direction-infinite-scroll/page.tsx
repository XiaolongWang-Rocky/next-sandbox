'use client'
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useInfiniteScroll, { ScrollDirection } from 'react-easy-infinite-scroll-hook'

export default function Page() {
    const [dataList, setDataList] = useState([100])
    const [loadingPrev, setLoadingPrev] = useState(false)
    const [loadingNext, setLoadingNext] = useState(false)
    const [initialized, setInitialized] = useState(false)
    const [hasMore, setHasMore] = useState({
        up: true,
        down: true
    })

    const loadMore = async (direction: ScrollDirection) => {
        if (!initialized) return
        console.log(direction)
        if (direction === 'down') {
            console.log('loadingNext: ', loadingNext)
            if (!loadingNext) {
                setLoadingNext(true)
                setTimeout(() => {
                    const nextData = []
                    for (let i = 1; i < 6; i++) {
                        nextData.push(dataList[dataList.length - 1] + i)
                    }
                    setDataList(prevState => [...prevState, ...nextData])
                    setLoadingNext(false)
                }, 1000)
            }
        } else if (direction === 'up') {
            console.log('loadingPrev: ', loadingPrev)
            if (!loadingPrev) {
                setLoadingPrev(true)
                setTimeout(() => {
                    const prevData = []
                    for (let i = 1; i < 6; i++) {
                        prevData.unshift(dataList[0] - i)
                    }
                    setDataList(prevState => [...prevData, ...prevState])
                    setLoadingPrev(false)
                }, 2000)
            }
        }
    }

    useInfiniteScroll<HTMLDivElement>({
        next: loadMore,
        rowCount: dataList.length,
        hasMore,
        windowScroll: true,
        scrollThreshold: '5px'
    });

    useEffect(() => {
        console.log(dataList)
        setTimeout(() => {
            const nextData = []
            for (let i = 1; i < 6; i++) {
                nextData.push(dataList[dataList.length - 1] + i)
            }
            setDataList(prevState => [...prevState, ...nextData])
        }, 1000)
        setTimeout(() => {
            const prevData = []
            for (let i = 1; i < 6; i++) {
                prevData.unshift(dataList[0] - i)
            }
            setDataList(prevState => [...prevData, ...prevState])
            setInitialized(true)
        }, 2000)
    }, [])

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
            width: '100%'
        }}
    >
        {
            initialized && dataList.map(item => <Box
                key={item}
                sx={{
                    width: '300px',
                    height: `${(item % 3 + 1) * 100}px`,
                    backgroundColor: '#a2fdff',
                    borderRadius: '6px'
                }}
            >
                <Typography sx={{ fontWeight: 600, textAlign: 'center', pt: '20px', fontSize: '20px' }}>{item}</Typography>
            </Box>)
        }
    </Box>
}