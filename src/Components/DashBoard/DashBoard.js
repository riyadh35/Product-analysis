import React from 'react';
import { LineChart, Line, Tooltip, XAxis, YAxis, BarChart, Bar, CartesianGrid, Legend } from 'recharts';
import './DashBoard.css'

const DashBoard = () => {
    const data = [
        {
            name: 'Supplier A',
            price: 4000,
            sales: 2400,
            amt: 2400,
        },
        {
            name: 'Supplier B',
            price: 3000,
            sales: 1398,
            amt: 2210,
        },
        {
            name: 'Supplier C',
            price: 2000,
            sales: 9800,
            amt: 2290,
        },
        {
            name: 'Supplier D',
            price: 2780,
            sales: 3908,
            amt: 2000,
        },
        {
            name: 'Supplier E',
            price: 1890,
            sales: 4800,
            amt: 2181,
        },
        {
            name: 'Supplier F',
            price: 2390,
            sales: 3800,
            amt: 2500,
        },
        {
            name: 'Supplier G',
            price: 3490,
            sales: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className='chart'>
            <LineChart width={400} height={300} data={data}>
                <Line dataKey={'price'}></Line>
                <Line dataKey={'sales'}></Line>
                <XAxis dataKey={'name'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>
            <BarChart width={500} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <Bar dataKey={'price'} fill="#8884d8"></Bar>
                <Bar dataKey={'sales'} fill="#82ca9d"></Bar>
                <XAxis dataKey={'name'}></XAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </BarChart>
        </div>
    );
};

export default DashBoard;