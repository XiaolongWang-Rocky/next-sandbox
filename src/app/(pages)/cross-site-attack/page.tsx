'use client'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

export default function CrossSiteAttack() {
    const [value, setValue] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setValue('<script>alert("aaa")</script>')
        }, 2000)
    }, [])

    return <Box>
        {value}
    </Box>
}