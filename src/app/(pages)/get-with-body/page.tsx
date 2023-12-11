'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState(null)
    const paramsObj = {
        platform: 'browser',
        category: 'mmorpg',
    }

    useEffect(()=>{
        axios.get('https://www.freetogame.com/api/games', {params: paramsObj})
        .then(res => console.log(res))
    }, [])

    return <div></div>
}