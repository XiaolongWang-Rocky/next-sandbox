'use client'
import { Box, FormControl, IconButton, Input, InputAdornment, InputBase, InputLabel, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'

export default function Page() {
    const [value, setValue] = useState('')

    return <Box sx={{display: 'flex', width: '100%', pt: '200px', justifyContent: 'center'}}>
        <Box
        sx={{
            display: 'flex',
            position: 'relative',
        }}
        >
            <InputBase
            sx={{
                color: '#fff',
                backgroundColor: '#1a1a1a',
                borderRadius: '12px',
                '& .MuiInputBase-input': {
                    padding: '12px'
                }
            }}
            placeholder='Search'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <IconButton
            onClick={() => alert(value)}
            sx={{
                position: 'absolute',
                zIndex: 2,
                right: 0,
                top: '5px'
            }}
            >
                <SearchIcon sx={{color: '#a8a8a8'}}/>
            </IconButton>
        </Box>
    </Box>
}