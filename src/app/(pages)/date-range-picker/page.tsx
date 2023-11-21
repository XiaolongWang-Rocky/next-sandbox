'use client'
import { Dialog, DialogContent, DialogActions, Button, Box } from '@mui/material';
import React, {useState} from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Page() {
    const [dateRange, setDateRange] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    })
    const [open, setOpen] = useState(false)
    const handleApply = () => {
      setOpen(false)
      console.log(dateRange.startDate.toISOString())
      dateRange.endDate.setHours(23, 59, 59, 999)
      console.log(dateRange.endDate.toISOString())
    }

    // console.log(dateRange[0]?.startDate?.toISOString())
    // console.log(dateRange[0]?.endDate?.toISOString())
      
    return <Box>
      <Dialog
      open={open}
      onClose={()=>setOpen(false)}
      >
        <DialogContent>
          <DateRange
          editableDateInputs={true}
          onChange={item => setDateRange(item.selection)}
          moveRangeOnFirstSelection={false}
          ranges={[dateRange]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button onClick={handleApply}>Apply</Button>
        </DialogActions>
      </Dialog>
      <Button onClick={()=>setOpen(true)}>Open range picker</Button>
    </Box>
}
