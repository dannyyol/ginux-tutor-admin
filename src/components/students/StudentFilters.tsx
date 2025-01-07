import React from 'react';
import { Download, Filter } from 'lucide-react';

const StudentFilters = () => {
  return (
    <div className="space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
      <div className="w-full md:w-1/3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for an entry"
            className="w-full pl-4 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">Filters</span>
        </button>
        
        <select className="flex-1 sm:flex-none px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <option>All Data</option>
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
        
        <select className="flex-1 sm:flex-none px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
        </select>
        
        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 w-full sm:w-auto">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download</span>
        </button>
      </div>
    </div>
  );
};

export default StudentFilters;
