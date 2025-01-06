import { months } from '../config/chartConfig';

export const revenueData = {
  labels: months,
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

export const engagementData = {
  labels: months,
  datasets: [
    {
      fill: true,
      label: 'Engagement',
      data: [30, 40, 35, 50, 45, 40],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
    },
  ],
};