import React from 'react';

const stats = [
  { label: 'Active Products', count: 12, type: 'active' },
  { label: 'Pending Approval', count: 3, type: 'pending' },
  { label: 'Total Revenue', count: '$3000', period: 'This Month', type: 'revenue' }
];

const MarketplaceStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <span className={`text-sm ${
            stat.type === 'active' ? 'text-orange-500' :
            stat.type === 'pending' ? 'text-blue-500' :
            'text-purple-500'
          }`}>
            {stat.label}
          </span>
          <div className="flex items-baseline mt-1">
            <span className="text-2xl font-semibold dark:text-white">{stat.count}</span>
            {stat.period && (
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{stat.period}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketplaceStats;