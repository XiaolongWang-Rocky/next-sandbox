'use client'
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function Page() {
    const [dataList, setDataList] = useState([100])
    const [loadingPrev, setLoadingPrev] = useState(false)
    const [loadingNext, setLoadingNext] = useState(false)
    const [initialized, setInitialized] = useState(false)
    const [isInitScrolled, setIsInitScrolled] = useState(false)
    const wrapperRef = useRef(null)
    const selectedRef = useRef(null)

    const loadMore = async (direction: string) => {
        if (!initialized) return
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

    useEffect(() => {
        setTimeout(() => {
            setDataList([95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105])
            setInitialized(true)
        }, 2000)
    }, [])

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollBottom = window.innerHeight + scrollTop;

        // 顶部加载更多
        if (scrollTop === 0) {
            loadMore('up');
        }

        // 底部加载更多
        if (scrollBottom >= document.documentElement.scrollHeight) {
            loadMore('down');
        }
    }

    useEffect(() => {
        if (initialized) {
            window.addEventListener('scroll', handleScroll)
            if(!isInitScrolled) {
                selectedRef.current.scrollIntoView({behavior: 'instant'})
                setIsInitScrolled(true)
            }
        }
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [initialized, dataList, isInitScrolled]) //'dataList' must be added as the dependency, otherwise its value won't change in the listener's callback function

    useEffect(() => {
        console.log(wrapperRef.current.scrollHeight)
    }, [dataList])

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        }}
    >
        <Typography
        sx={{
            width: '300px',
            height: '50px',
            background: 'lightgray',
            position: 'sticky',
            top: 0,
            zIndex: 2
        }}
        >Header</Typography>
        <Box
        ref={wrapperRef}
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
                data-item={item}
                key={item}
                sx={{
                    width: '300px',
                    height: `${(item % 3 + 1) * 100}px`,
                    backgroundColor: '#a2fdff',
                    borderRadius: '6px',
                    scrollMarginTop: '50px'
                }}
                ref={item === 98 ? selectedRef : null}
            >
                <Typography sx={{ fontWeight: 600, textAlign: 'center', pt: '20px', fontSize: '20px' }}>{item}</Typography>
            </Box>)
        }
        </Box>
    </Box>
}