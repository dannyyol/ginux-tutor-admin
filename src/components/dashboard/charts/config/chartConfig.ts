import { ChartOptions } from 'chart.js';

export const revenueChartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const engagementChartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];