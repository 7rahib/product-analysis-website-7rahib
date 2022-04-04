import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='flex justify-center items-center m-12'>
            <div>
                <div>
                    <h1 className='text-2xl m-7'>Chart for sell over the month</h1>
                </div>
                <div>
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-2xl m-7'>Chart for sell over the month</h1>
                </div>
                <div>
                    <BarChart width={600} height={300} data={data}>
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;