'use client'
import React, { useState, useEffect, ReactNode } from "react"

interface LayoutProps {
    children: ReactNode;
}

export default function Parent({ children }: LayoutProps) {
    console.log('Layout rendered')
    const [parentValue, setParentValue] = useState<number | null>(null)

    useEffect(() => {
        setTimeout(() => {
            setParentValue(999)
            console.log('Value set to 8')
        }, 2000)
    }, [])

    return (
        <>
            <h1>Parent component: </h1>
            {React.Children.map(children, (child) =>{
                return React.isValidElement(child) ? React.cloneElement(child, { parentValue }) : child
            } 
            )}
        </>
    )
}