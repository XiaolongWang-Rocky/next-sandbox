'use client'
import React, { useState } from 'react'
import { Box, Button, Modal } from '@mui/material'
import VideoJSPlayer from './VideoJS'

export default function Page() {
    const [showModal, setShowModal] = useState(false)

    return <Box>
        <Button onClick={() => setShowModal(true)}>show video</Button>
        <Modal open={showModal} onClose={() => setShowModal(false)} sx={{width: '450px'}}>
            <VideoJSPlayer videoUrl='https://stream.mux.com/8JIGyiUlSjTaNmEY2IFDbh6Grq5fGTP5KH2QPrvJNkM.m3u8?token=eyJraWQiOiJaMDEyeTJHZFQxVmJwTEJuaFVGTTJUT1JIMDFMTHk1YjAwMDBKbU5HbFpNMDA4NkUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4SklHeWlVbFNqVGFObUVZMklGRGJoNkdycTVmR1RQNUtIMlFQcnZKTmtNIiwiYXVkIjoidiIsImV4cCI6MTcxNjQxOTQ2OX0.lDEWo6VfqwocWmXlU-977B2_h-dDhRv2szItKbQ2JsJ2V7uUwMcUOh6YZp5FyyaF087QGfFQGTTwdM8KOt7gM5JoEaR1hIltiUBD0Ca2B3J962s1jH998KihrXWjf8dr_HF7c4orjygLdTbCxdvkcWxnHucJFt9cSmf1TypVprqv700HN4RTA8hZJIXtzndTVE2pWfJziVTS-rMDUz3RNxP8gl-7r0L7FOkjOuSEiu0bgFZMp0fwiWU7tt7ck5T06XA-G6g1eISOhsn2uwQ1zGT0LZ2QZRSOgZrkoJKdNBdL9sXdOjwv0oV5b3D5SSaxdvnYT9dhnXngJUc6SUIPfQ' />
        </Modal>
    </Box>
}