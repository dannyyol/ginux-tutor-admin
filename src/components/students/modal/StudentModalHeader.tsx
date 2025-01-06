import React from 'react';
import { X } from 'lucide-react';

interface StudentModalHeaderProps {
  onClose: () => void;
}

const StudentModalHeader = ({ onClose }: StudentModalHeaderProps) => {
  return (
    <div className="p-6 border-b border-gray-200 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Details</h2>
      <button
        onClick={onClose}
        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default StudentModalHeader;