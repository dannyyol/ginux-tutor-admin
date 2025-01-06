import React from 'react';
import { Search, X } from 'lucide-react';

interface MobileSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSearch = ({ isOpen, onClose }: MobileSearchProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 p-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            autoFocus
          />
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default MobileSearch;