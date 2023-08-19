import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 46 },
  { name: 'Group B', value: 54 },
];
const COLORS = ['#FF9777', '#FFEAE4'];
const valve = [40, 0];

export default class Example extends PureComponent {


  render() {
    return (
      <PieChart width={180} height={150} >
        <Pie
          data={data}
          cx={85}
          cy={70}
          innerRadius={45}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={-2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              cornerRadius={(valve[index % valve.length])}
            />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
