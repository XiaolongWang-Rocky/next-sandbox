'use client'
import React from 'react'

interface PageProps {
    value: number | null;
}

export default function Page({ value }: PageProps) {
    console.log('Page rendered')
    console.log('Value in Page:', value)
    return <p>Value is {value}</p>
}