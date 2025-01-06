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
import { revenueChartOptions } from './config/chartConfig';
import { revenueData } from './data/chartData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Total Revenue</h3>
      <Bar options={revenueChartOptions} data={revenueData} />
    </div>
  );
};

export default RevenueChart;