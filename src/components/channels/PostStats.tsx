import React from 'react';

const PostStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h3 className="text-orange-500 dark:text-orange-400 text-sm mb-1">Active Channels</h3>
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">45</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h3 className="text-orange-500 dark:text-orange-400 text-sm mb-1">Inactive Channels</h3>
        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">12</p>
      </div>
    </div>
  );
};

export default PostStats;