import React from 'react';

const stats = [
  { label: 'Total Users', count: 126, type: 'total' },
  { label: 'Active Users', count: 89, type: 'active' },
  { label: 'Blocked Users', count: 37, type: 'blocked' },
];

const RoleStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-4">
          <span className={`text-sm ${
            stat.type === 'total' ? 'text-purple-500' :
            stat.type === 'active' ? 'text-green-500' : 'text-red-500'
          }`}>
            {stat.label}
          </span>
          <p className="text-2xl font-semibold mt-1">{stat.count}</p>
        </div>
      ))}
    </div>
  );
};

export default RoleStats;