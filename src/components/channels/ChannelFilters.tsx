import React from 'react';
import { Filter } from 'lucide-react';

interface ChannelFiltersProps {
  onAddChannel: () => void;
}

const ChannelFilters = ({ onAddChannel }: ChannelFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <div className="w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search for an entry"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          Filters
        </button>
        
        <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white">
          <option>All Channels</option>
          <option>Active Channels</option>
          <option>Inactive Channels</option>
        </select>

        <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white">
          <option>2024</option>
          <option>2023</option>
        </select>

        <button 
          onClick={onAddChannel}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ml-auto md:ml-0"
        >
          Add Channel
        </button>
      </div>
    </div>
  );
};

export default ChannelFilters;