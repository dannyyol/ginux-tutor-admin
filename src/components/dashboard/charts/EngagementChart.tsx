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
  return (
    <div className="bg-white p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Engagement Analytics</h3>
      <Line options={engagementChartOptions} data={engagementData} />
    </div>
  );
};

export default EngagementChart;