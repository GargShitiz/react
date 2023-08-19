import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    pv: 4800,
    amt: 2181,
  },
 
  
];

const LineChart1 =()=>{
  return(
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 40,
            left: -10,
            bottom: 50,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

  )
}
export default LineChart1