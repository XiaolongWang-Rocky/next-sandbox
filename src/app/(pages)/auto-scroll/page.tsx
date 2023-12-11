'use client'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Box } from '@mui/material'

export default function Page() {
    const dataList = Array.from({length: 10}, (_, i) => i+1)
    const scrollToX = (x: any) => {
        console.log(x)
        scroller.scrollTo(x, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        })
    }

    return <Element id='scroll-container' style={{height: '500px', width: '300px', margin: '30px auto', overflow: 'auto', border: '2px solid gray'}}>
        {
            dataList.map((item)=><Element
            name={'item' + item}
            key={item}
            onClick={()=>scrollToX('item' + item)}
            >
                <Box
                sx={{
                    backgroundColor: 'brown',
                    color: 'white',
                    margin: '5px 0',
                    textAlign: 'center',
                    height: '150px'
                }}
                >
                    item {item}
                </Box>
            </Element>)
        }
    </Element>
}