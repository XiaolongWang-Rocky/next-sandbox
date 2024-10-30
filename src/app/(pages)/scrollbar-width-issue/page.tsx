import { Box, Typography } from '@mui/material'

export default function Page() {
    const dataList = [1, 2, 3, 4, 5, 6, 7, 8]

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}
    >
        {
            dataList.map(item => <Typography key={item} sx={{ width: '100%', height: '200px', backgroundColor: 'gray' }}>{item}</Typography>)
        }
    </Box>
}