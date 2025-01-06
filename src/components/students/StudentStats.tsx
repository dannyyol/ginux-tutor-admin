import React from 'react';

interface StatCardProps {
  label: string;
  count: number;
  period: string;
  type: 'active' | 'expired' | 'alumni';
}

const StatCard = ({ label, count, period, type }: StatCardProps) => {
  const colors = {
    active: 'text-orange-500',
    expired: 'text-blue-500',
    alumni: 'text-purple-500'
  };

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col">
      <span className={`text-sm ${colors[type]}`}>{label}</span>
      <div className="flex items-baseline mt-1">
        <span className="text-2xl font-semibold">{count}</span>
        <span className="text-sm text-gray-500 ml-2">{period}</span>
      </div>
    </div>
  );
};

const StudentStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard label="Active" count={12} period="This Month" type="active" />
      <StatCard label="Expired" count={3} period="This Month" type="expired" />
      <StatCard label="Alumni" count={3} period="This Month" type="alumni" />
    </div>
  );
};

export default StudentStats;