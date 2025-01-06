import React from 'react';

interface StudentStatusSelectProps {
  status: 'Active' | 'Expired';
  onChange: (status: 'Active' | 'Expired') => void;
}

const StudentStatusSelect = ({ status, onChange }: StudentStatusSelectProps) => {
  return (
    <div className="absolute top-6 right-6">
      <select
        value={status}
        onChange={(e) => onChange(e.target.value as 'Active' | 'Expired')}
        className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white"
      >
        <option value="Active">Active</option>
        <option value="Expired">Expired</option>
      </select>
    </div>
  );
};

export default StudentStatusSelect;