'use client'
import { useEffect, useRef, useState } from 'react';
import { Box, Typography, List, ListItemButton, ListItem, ListItemText, Button } from '@mui/material';

export default function Page() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // 如果点击的目标不在下拉菜单内，关闭下拉菜单
            event.preventDefault()
            event.stopPropagation()
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        // 添加全局点击事件监听器
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // 在组件卸载时移除事件监听器，以防止内存泄漏
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []); // 空依赖数组表示该effect只会在组件挂载和卸载时运行

    return (
        <Box>
            {open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                    }}
                />
            )}
            <Button onClick={()=>alert('click me')}>Click me</Button>
            <Box
                ref={containerRef}
                sx={{ margin: '50px auto', border: '1px solid black', width: '300px', textAlign: 'center' }}
            >
                <Typography onClick={() => setOpen((prevState) => !prevState)}>Select</Typography>
                <List sx={{ display: open ? 'block' : 'none' }}>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Option 1" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Option 2" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Option 3" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}