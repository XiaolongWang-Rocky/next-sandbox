'use client'
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, } from 'recharts';

const data = [
    {
        month: 'Jan',
        uv: 0,
        pv: 2400,
    },
    {
        month: 'Feb',
        uv: 0,
        pv: 1398,
    },
    {
        month: 'Mar',
        uv: 0,
        pv: 9800,
    },
    {
        month: 'Apr',
        uv: 0,
        pv: 3908,
    },
    {
        month: 'May',
        uv: 35,
        pv: 4800,
    },
    {
        month: 'Jun',
        uv: 0,
        pv: 3800,
    },
    {
        month: 'Jul',
        uv: 0,
        pv: 4300,
    },
    {
        month: 'Aug',
        uv: 0,
        pv: 3654,
    },
    {
        month: 'Sep',
        uv: 20,
        pv: 2877,
    },
    {
        month: 'Oct',
        uv: 0,
        pv: 1920,
    },
    {
        month: 'Nov',
        uv: 0,
        pv: 5440,
    },
    {
        month: 'Dec',
        uv: 0,
        pv: 3770,
    }
]

export default function Page() {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const tooltipContent = Object.entries(payload[0].payload)
            return (
                <div className="custom-tooltip">
                    <p className="label">{tooltipContent[0][1]}</p>
                    <p className="desc">{`${tooltipContent[1][0]} : ${tooltipContent[1][1]}`}</p>
                    <p className="desc">{`${tooltipContent[2][0]} : ${tooltipContent[2][1]}`}</p>
                </div>
            )
        }
        return null
    }

    return <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <ResponsiveContainer height={120} width={800}>
            <style>
                {`
                .bottom-up-animation {
                    transform-origin: bottom;
                    animation: bottomUpAnimation 1s ease-out;
                }

                @keyframes bottomUpAnimation {
                    from {
                    transform: scaleY(0);
                    }
                    to {
                    transform: scaleY(1);
                    }
                }
                `}
            </style>
            <AreaChart data={data} margin={{left: 10, bottom: 6, top: 10}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis interval={2} hide={true} axisLine={{stroke: 'red'}}/>
                <YAxis orientation='right' interval={0} axisLine={{stroke: 'red'}} tick={{fill: 'red'}} tickLine={false}/>
                <Area type="linear" dataKey="pv" stroke="#4298f5" dot={false} strokeWidth={2} fillOpacity={1} fill='rgba(66, 152, 245, 0.3)'/>
                <Tooltip content={<CustomTooltip />}/>
            </AreaChart>
            <AreaChart data={data} margin={{left: 10, top: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" interval={2} axisLine={{stroke: 'red'}} tick={{fill: 'red'}} tickLine={false}/>
                <YAxis orientation='right' axisLine={{stroke: 'red'}} tick={{fill: 'red'}} tickLine={false}/>
                <Area type="linear" dataKey="uv" stroke="#4298f5" strokeWidth={2} dot={false} fill='rgba(66, 152, 245, 0.3)' />
                <Tooltip content={<CustomTooltip />}/>
            </AreaChart>
        </ResponsiveContainer>
    </div>
}