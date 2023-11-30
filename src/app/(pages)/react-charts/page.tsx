'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const rowData = [
  {month: 1, value: 54, count: 7},
  {month: 2, value: 78, count: 12},
  {month: 3, value: 34, count: 5},
  {month: 4, value: 223, count: 22},
  {month: 5, value: 115, count: 17},
  {month: 6, value: 38, count: 8},
  {month: 7, value: 87, count: 15},
  {month: 8, value: 55, count: 6},
  {month: 9, value: 3, count: 1},
  {month: 10, value: 332, count: 45},
  {month: 11, value: 164, count: 26},
  {month: 12, value: 11, count: 3}
]

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      display: false
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: false,
        // text: 'Month',
      },
      min: 1,
      max: 12,
      ticks: {
        stepSize: 5,
        callback: value => value % 5 === 0 ? value : '',
      }
    },
    y: {
      type: 'linear',
      position: 'right',
      title: {
        display: false,
        // text: 'Value',
      },
    },
  },
};

export default function Page() {
  const months = rowData.map(entry => entry.month)
  const amounts = rowData.map(entry => entry.value)
  const values = rowData.map(entry => entry.count)

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Values',
        data: amounts,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartData2 = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Counts',
        data: values,
        fill: false,
        borderColor: 'rgb(75, 102, 223)',
        tension: 0.1,
      },
    ],
  };

  return <div style={{height: '400px'}}>
    <Line
    data={chartData}
    options={{
      ...options,
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: false,
            // text: 'Month',
          },
          min: 1,
          max: 12,
          ticks: {
            stepSize: 5,
            callback: value => value % 5 === 0 ? value : '',
            display: false
          }
        },
        y: {
          type: 'linear',
          position: 'right',
          title: {
            display: false,
            // text: 'Value',
          },
        },
      }
    }}
    />
    <Line data={chartData2} options={options} />
  </div>
}