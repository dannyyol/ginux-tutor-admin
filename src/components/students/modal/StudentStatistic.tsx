import React from 'react';

interface StudentStatisticProps {
  label: string;
  value: string | number;
}

const StudentStatistic = ({ label, value }: StudentStatisticProps) => {
  return (
    <div className="border-b border-dashed border-gray-200 py-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-600">{label}</span>
        <span className="text-orange-500">{value}</span>
      </div>
    </div>
  );
};

export default StudentStatistic;