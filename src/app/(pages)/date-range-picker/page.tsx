'use client'
import React, {useState} from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Page() {
    const [dateRange, setDateRange] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    console.log(dateRange[0]?.startDate?.toISOString())
    console.log(dateRange[0]?.endDate?.toISOString())
      
    return <DateRange
    editableDateInputs={true}
    onChange={item => setDateRange([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={dateRange}
    />
}
