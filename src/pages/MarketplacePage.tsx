import React, { useState } from 'react';
import { Filter, Download } from 'lucide-react';
import MarketplaceStats from '../components/marketplace/MarketplaceStats';
import MarketplaceTable from '../components/marketplace/MarketplaceTable';

const MarketplacePage = () => {
  return (
    <div className="p-4 md:p-6">
      <MarketplaceStats />
      
      <div className="mt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search for an entry"
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            
            <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-gray-300">
              <option>All Data</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>

            <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-gray-300">
              <option>2024</option>
              <option>2023</option>
            </select>

            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Add Product
            </button>
          </div>
        </div>

        <MarketplaceTable />
      </div>
    </div>
  );
};

export default MarketplacePage;