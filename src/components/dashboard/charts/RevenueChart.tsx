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
import { useTheme } from '../../../context/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  const { isDarkMode } = useTheme();

  const options = {
    ...revenueChartOptions,
    scales: {
      ...revenueChartOptions.scales,
      y: {
        ...revenueChartOptions.scales?.y,
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDarkMode ? '#9CA3AF' : '#6B7280',
        },
      },
      x: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: isDarkMode ? '#9CA3AF' : '#6B7280',
        },
      },
    },
    plugins: {
      ...revenueChartOptions.plugins,
      legend: {
        ...revenueChartOptions.plugins?.legend,
        labels: {
          color: isDarkMode ? '#9CA3AF' : '#6B7280',
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Total Revenue</h3>
      <Bar options={options} data={revenueData} />
    </div>
  );
};

export default RevenueChart;