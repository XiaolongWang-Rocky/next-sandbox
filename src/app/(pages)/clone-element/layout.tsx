'use client'
import React, { useEffect, useState } from "react"
import Parent from "./Parent";
import Child from "./Child";

export default function Layout({children}) {
    console.log('Layout rendered')
    const [value, setValue] = useState<number | null>(2)

    useEffect(() => {
        setTimeout(() => {
            setValue(8)
            console.log('Value set to 8')
        }, 2000)
    }, [])

    return (
        <>
            <Parent><Child /></Parent>
            <p>Following are children</p>
            {React.Children.map(children, (child) =>{
                console.log(value)
                console.log(React.cloneElement(child, { value }))
                return React.isValidElement(child) ? React.cloneElement(child, { value }) : child
            } 
            )}
        </>
    )
}