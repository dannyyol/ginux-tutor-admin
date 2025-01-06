import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TransactionRow from './TransactionRow';
import { transactions } from './data';

const TransactionTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm mt-6">
      <div className="p-4 md:p-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
              <option>All Data</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm">
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="text-left">
                  <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Name</th>
                  <th className="hidden md:table-cell px-6 py-4 text-sm font-medium text-gray-500">Email</th>
                  <th className="hidden lg:table-cell px-6 py-4 text-sm font-medium text-gray-500">Payment Type</th>
                  <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Paid Date</th>
                  <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Amount</th>
                  <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                  <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <TransactionRow key={transaction.id} transaction={transaction} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">Showing 1 to 4 of 20 entries</p>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded">1</button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50">2</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;