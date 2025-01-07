import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from '../../../context/ThemeContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticDonut = () => {
  const { isDarkMode } = useTheme();

  const data = {
    labels: ['Active Posts', 'Pending Review', 'Declined'],
    datasets: [
      {
        data: [186, 47, 23],
        backgroundColor: [
          'rgb(99, 102, 241)',
          'rgb(249, 115, 22)',
          'rgb(239, 68, 68)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          color: isDarkMode ? '#9CA3AF' : '#6B7280',
        },
      },
    },
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Statistic</h3>
      <div className="relative">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-bold dark:text-white">186</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Posts</div>
        </div>
      </div>
    </div>
  );
};

export default StatisticDonut;