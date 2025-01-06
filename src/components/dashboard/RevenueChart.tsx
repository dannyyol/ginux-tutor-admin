import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const data = {
  labels,
  datasets: [
    {
      label: 'Cash',
      data: [65, 45, 35, 45, 35, 55],
      backgroundColor: 'rgb(99, 102, 241)',
    },
    {
      label: 'GinuxCoin',
      data: [45, 35, 25, 35, 25, 35],
      backgroundColor: 'rgb(199, 210, 254)',
    },
  ],
};

const RevenueChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Total Revenue</h3>
      <Bar options={options} data={data} />
    </div>
  );
};

export default RevenueChart;