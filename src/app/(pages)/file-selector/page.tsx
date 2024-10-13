'use client'
import { Box } from '@mui/material'

export default function Page() {
    const handleFileSelect = (event) => {
        const {files} = event.target
        for(let i=0;i<files.length;i++) {
            if (files[i].type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.onload = function() {
                        console.log(`Image File: ${files[i].name}, Width: ${img.width}, Height: ${img.height}`)
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(files[i]);
            } else if (files[i].type.startsWith('video/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const video = document.createElement('video');
                    video.onloadedmetadata = function() {
                        console.log(`Video File: ${files[i].name}, Width: ${video.videoWidth}, Height: ${video.videoHeight}`)
                    };
                    video.src = URL.createObjectURL(files[i]);
                };
                reader.readAsDataURL(files[i]);
            }
        }
    }

    return <Box>
        <input type='file' onChange={handleFileSelect} multiple accept='image/jpeg, image/png, video/mp4, video/quicktime'/>
    </Box>
}