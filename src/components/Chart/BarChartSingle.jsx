import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';


const xLabels = [
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
];

export default function BarChartSingle( props) {
    const label =props.label;
    const pData=props.data;
  
  return (
    <div className='h-full '>
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: label, id: 'pvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </div>
  );
}
