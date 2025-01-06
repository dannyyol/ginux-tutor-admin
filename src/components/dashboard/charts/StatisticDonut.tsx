import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticDonut = () => {
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
        },
      },
    },
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Statistic</h3>
      <div className="relative">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-bold">186</div>
          <div className="text-sm text-gray-500">Posts</div>
        </div>
      </div>
    </div>
  );
};

export default StatisticDonut;