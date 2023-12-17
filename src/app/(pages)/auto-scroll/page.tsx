'use client'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Box } from '@mui/material'
import { useState } from 'react'

export default function Page() {
    const dataList = Array.from({length: 10}, (_, i) => i+1)
    const [category, setCategory] = useState(1)
    const scrollToX = (x: any) => {
        setCategory(x)
        scroller.scrollTo('item,' + x, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        })
    }

    return <Box sx={{height: '400px', width: '300px', margin: '30px auto', border: '2px solid gray'}}>
        <Element id='scroll-container' style={{height: '100%', overflow: 'auto'}}>
            <Box
            sx={{
                backgroundColor: 'brown',
                color: 'white',
                margin: '5px 0',
                textAlign: 'center',
            }}
            >
                item 0
            </Box>
            {
                dataList.map((item)=><Element
                name={'item,' + item}
                key={item}
                onClick={()=>scrollToX(item)}
                >
                    <Box
                    sx={{
                        backgroundColor: 'brown',
                        color: 'white',
                        margin: '5px 0',
                        textAlign: 'center',
                    }}
                    >
                        item {item}
                        {item === category && <Content />}
                    </Box>
                </Element>)
            }
        </Element>
    </Box>

}

function Content() {
    return <Box sx={{height: '300px', width: '100%'}}>
        Content
    </Box>
}