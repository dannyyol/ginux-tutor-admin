import React from 'react';
import { Filter, Download } from 'lucide-react';

const TransactionsPage = () => {
  return (
    <div className="p-4 md:p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold dark:text-white">Transactions</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 dark:text-gray-300">
                <option>All Data</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
              <select className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 dark:text-gray-300">
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr className="text-left">
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Invoice ID</th>
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Payment Type</th>
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Payment Method</th>
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Paid Date</th>
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Paid Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 md:px-6 py-4 dark:text-gray-300">#{`INV-${String(index + 1).padStart(4, '0')}`}</td>
                  <td className="px-4 md:px-6 py-4 dark:text-gray-300">Channel fee</td>
                  <td className="px-4 md:px-6 py-4 dark:text-gray-300">Flutterway</td>
                  <td className="px-4 md:px-6 py-4 dark:text-gray-300">{`${8 + Math.floor(index / 3)} Feb 2024`}</td>
                  <td className="px-4 md:px-6 py-4 dark:text-gray-300">$500</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 md:p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Showing 1 to 10 of 60 entries</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded">1</button>
              <button className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300">2</button>
              <button className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;