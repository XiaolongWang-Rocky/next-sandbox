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
  responsive: true,
  plugins: {
    legend: {
      position: 'none'
    },
    title: {
      display: false
    },
  },
  scales: {
    y: {
        display: false
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map((item, index) => Math.floor(Math.random()*10) * index),
      borderColor: 'white',
      borderWidth: 6,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map((item, index) => Math.floor(Math.random()*14) * index),
      borderColor: 'yellow',
      borderWidth: 1,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Page() {
  return <Line options={options} data={data} />;
}