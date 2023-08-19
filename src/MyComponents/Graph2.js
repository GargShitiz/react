import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    pv: 2100,
    amt: 2400,
  },
  {
    name: 'Page B',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    pv: 2850,
    amt: 2290,
  },
  {
    name: 'Page D',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page H',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page I',
    pv: 8998,
    amt: 2210,
  },
  {
    name: 'Page J',
    pv: 8000,
    amt: 2290,
  },
  {
    name: 'Page K',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page L',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page M',
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page N',
    pv: 4300,
    amt: 2100,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 6;

  return (
    <g>
      <circle cx={x + width} cy={y + height / 2} r={radius}  fill="#FF9777"
        style={{
          transition: 'r 0.3s ease-in-out'
        }}
        onMouseEnter={(e) => {
          e.target.setAttribute('r', radius * 1.5);
        }}
        onMouseLeave={(e) => {
          e.target.setAttribute('r', radius);
        }}
      />
      {/* <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text> */}
    </g>
  );
};

export default class Example extends PureComponent {

  render() {
    return (
      <div style={{ maxWidth: '650px', height: '400px', marginTop: '1px', marginLeft: '-1.2rem', fontSize: '10px' }}>
        <ResponsiveContainer width="100%" height="97%">
          <BarChart
            layout='vertical'
            width={500}
            height={400}
            data={data}
            barSize={3}
            margin={{
              top: 20,
              right: 10,
              left: 20,
              bottom: -7,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis dataKey="pv" type='number' axisLine={false} tickLine={false} />
            <YAxis dataKey="name" type='category' axisLine={false} tickLine={false} />
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            <Bar dataKey="pv" fill="#7C90F1" minPointSize={5}>
              <LabelList dataKey="name" content={renderCustomizedLabel} />
              onMouseEnter={() => this.handleBarMouseEnter('pv')}
              onMouseLeave={this.handleBarMouseLeave}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
          </div>
        );
  }
}
