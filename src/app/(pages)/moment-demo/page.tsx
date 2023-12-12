import { Box, Typography } from '@mui/material'
import moment from 'moment'

export default function Page() {
    const month = moment().month(moment().month()-5).format('MMMM')
    return <Box>
        <Typography>{month}</Typography>
    </Box>
}