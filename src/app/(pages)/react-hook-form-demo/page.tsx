import { Box, TextField, Input, FormControl, Divider } from "@mui/material";

export default function Page() {
    return <Box sx={{padding: '30px'}}>
        <FormControl>
            <TextField label='Phone'/>
        </FormControl>
        <Divider sx={{my: '20px'}}/>
        <Box component='fieldset' sx={{border: '1px solid black', px: '8px'}}>
            <Box component='legend' sx={{px: '6px'}}>Mobile</Box>
            <Input sx={{border: '1px solid orange'}}/>
        </Box>
    </Box>
}