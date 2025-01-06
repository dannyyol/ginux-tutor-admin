import React from 'react';

interface StudentDetailFieldProps {
  label: string;
  value: string | number;
  className?: string;
}

const StudentDetailField = ({ label, value, className = '' }: StudentDetailFieldProps) => {
  return (
    <div className={`border-b border-dashed border-gray-200 py-4 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
    </div>
  );
};

export default StudentDetailField;