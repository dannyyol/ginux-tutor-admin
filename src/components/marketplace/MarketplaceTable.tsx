import React from 'react';
import { Eye, PenSquare } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'LogiXpress Theme with Dashboard',
    description: 'Lorem ipsum dolor sit amet......',
    technologies: 'HTML, CSS, JAVA...',
    price: 'N40,000',
    status: 'Active'
  },
  {
    id: 2,
    name: 'LogiXpress Theme with Dashboard',
    description: 'Lorem ipsum dolor sit amet......',
    technologies: 'HTML, CSS, JAVA...',
    price: 'N10,000',
    status: 'Pending'
  },
  {
    id: 3,
    name: 'LogiXpress Theme with Dashboard',
    description: 'Lorem ipsum dolor sit amet......',
    technologies: 'HTML, CSS, JAVA...',
    price: 'N10,000',
    status: 'Pending'
  }
];

const MarketplaceTable = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr className="text-left">
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Channels</th>
              <th className="hidden md:table-cell px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Description</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">No of Students</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Price</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 md:px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://via.placeholder.com/40"
                      alt={product.name}
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                    <span className="font-medium dark:text-gray-100">{product.name}</span>
                  </div>
                </td>
                <td className="hidden md:table-cell px-6 py-4 text-gray-500 dark:text-gray-400">{product.description}</td>
                <td className="px-4 md:px-6 py-4 dark:text-gray-100">{product.technologies}</td>
                <td className="px-4 md:px-6 py-4 dark:text-gray-100">{product.price}</td>
                <td className="px-4 md:px-6 py-4">
                  <span className={`inline-flex px-2 py-1 rounded-full text-sm ${
                    product.status === 'Active' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' 
                      : 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
                      <Eye className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
                      <PenSquare className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 md:p-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing 1 to {products.length} of {products.length} entries
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded">1</button>
            <button className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300">2</button>
            <button className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceTable;