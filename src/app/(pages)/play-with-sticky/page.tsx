import { Box, List, ListItem} from "@mui/material"

export default function Page() {
    const dataList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return <Box
    sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    }}>
        <Box
        sx={{
            flexGrow: 0,
            flexDirection: 'column',
            display: 'flex'
        }}
        >
            <Box
            sx={{
                backgroundColor: 'yellowgreen',
                fontSize: '30px',
                flexBasis: '50px',
                position: 'sticky',
                top: '0'
            }}
            >Header</Box>
            <List
            sx={{
                padding: 0,
                flexGrow: 1,
                overflow: 'auto'
            }}>
                {
                    dataList.map(item => <ListItem key={item} sx={{border: '1px solid black', height: '80px', color: 'blue'}}>{item}</ListItem>)
                }
            </List>
        </Box>
        <Box
        sx={{
            backgroundColor: 'yellowgreen',
            fontSize: '30px',
            flexBasis: '50px',
            position: 'sticky',
            top: '0'
        }}
        >Footer</Box>
    </Box>
}