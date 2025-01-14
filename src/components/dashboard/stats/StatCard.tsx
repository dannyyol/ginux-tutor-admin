import React from 'react';
import { StatCardProps } from './types';

const StatCard = ({ title, value, icon: Icon, iconColor }: StatCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-semibold mt-1 dark:text-white">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${iconColor}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;