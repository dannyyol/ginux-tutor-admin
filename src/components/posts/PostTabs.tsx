import React from 'react';
import { PostTab } from './types';

interface PostTabsProps {
  activeTab: PostTab;
  onTabChange: (tab: PostTab) => void;
  counts: {
    active: number;
    pending: number;
  };
}

const PostTabs = ({ activeTab, onTabChange, counts }: PostTabsProps) => {
  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => onTabChange('active')}
        className={`flex items-center px-4 py-2 border-b-2 -mb-px ${
          activeTab === 'active'
            ? 'border-purple-500 text-purple-600'
            : 'border-transparent text-gray-500 hover:text-gray-700'
        }`}
      >
        Active Post
        <span className="ml-2 bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full text-xs">
          {counts.active}
        </span>
      </button>
      <button
        onClick={() => onTabChange('pending')}
        className={`flex items-center px-4 py-2 border-b-2 -mb-px ${
          activeTab === 'pending'
            ? 'border-purple-500 text-purple-600'
            : 'border-transparent text-gray-500 hover:text-gray-700'
        }`}
      >
        Pending Post
        <span className="ml-2 bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full text-xs">
          {counts.pending}
        </span>
      </button>
      <button
        onClick={() => onTabChange('history')}
        className={`px-4 py-2 border-b-2 -mb-px ${
          activeTab === 'history'
            ? 'border-purple-500 text-purple-600'
            : 'border-transparent text-gray-500 hover:text-gray-700'
        }`}
      >
        History
      </button>
    </div>
  );
};

export default PostTabs;