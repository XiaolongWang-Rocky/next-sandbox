'use client'
import { Box, Button, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
    const storyList = [1, 2, 3, 4, 5, 6, 7];
    const [selectedStory, setSelectedStory] = useState(1);

    const displayStories = useMemo(() => {
        const i = storyList.findIndex(item => item === selectedStory);
        const start = i - 2 < 0 ? 0 : i - 2;
        const end = i + 3 > storyList.length ? storyList.length : i + 3;
        const displayList = storyList.slice(start, end);

        // 填充前后占位符
        if (i - 2 < 0) {
            for (let j = 0; j < 2 - i; j++) {
                displayList.unshift(null); // 左侧占位符
            }
        }
        if (i + 3 > storyList.length) {
            for (let k = 0; k < i + 3 - storyList.length; k++) {
                displayList.push(null); // 右侧占位符
            }
        }
        return displayList;
    }, [selectedStory]);

    const handlePrevious = () => {
        if (selectedStory > 1) setSelectedStory(prev => prev - 1);
    };

    const handleNext = () => {
        if (selectedStory < storyList.length) setSelectedStory(prev => prev + 1);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                sx={{
                    width: '95%',
                    height: '600px',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <motion.div
                    initial={false}
                    animate={{ x: -((selectedStory - 1) * 20) + '%' }} // 根据选中的故事计算偏移量
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                        display: 'flex',
                        gap: '20px', // 控制图片之间的间距
                    }}
                >
                    {displayStories.map((item, index) => (
                        <Box
                            key={item ?? index} // 使用 item 或 index 作为唯一键
                            sx={{
                                width: item === selectedStory ? '26%' : '18%',
                                aspectRatio: '1/1',
                                border: '1px solid black',
                                borderRadius: '6px',
                                backgroundColor: item === selectedStory ? '#11ffcd' : 'gray',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '4rem',
                                fontWeight: 700,
                            }}
                        >
                            {item || ''}
                        </Box>
                    ))}
                </motion.div>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Button disabled={selectedStory === 1} onClick={handlePrevious}>Previous</Button>
                <Button disabled={selectedStory === storyList.length} onClick={handleNext}>Next</Button>
            </Box>
        </Box>
    );
}
