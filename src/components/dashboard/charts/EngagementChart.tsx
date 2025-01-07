import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { engagementChartOptions } from './config/chartConfig';
import { engagementData } from './data/chartData';
import { useTheme } from '../../../context/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const EngagementChart = () => {
  const { isDarkMode } = useTheme();

  const options = {
    ...engagementChartOptions,
    scales: {
      ...engagementChartOptions.scales,
      y: {
        ...engagementChartOptions.scales?.y,
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
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Engagement Analytics</h3>
      <Line options={options} data={engagementData} />
    </div>
  );
};

export default EngagementChart;