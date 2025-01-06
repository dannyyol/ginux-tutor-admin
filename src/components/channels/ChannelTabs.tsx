import React from 'react';

interface ChannelTabsProps {
  activeTab: 'all' | 'active' | 'inactive';
  onTabChange: (tab: 'all' | 'active' | 'inactive') => void;
}

const ChannelTabs = ({ activeTab, onTabChange }: ChannelTabsProps) => {
  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="-mb-px flex space-x-8">
        <button
          onClick={() => onTabChange('all')}
          className={`pb-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'all'
              ? 'border-purple-500 text-purple-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          All Channels
        </button>
        <button
          onClick={() => onTabChange('active')}
          className={`pb-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'active'
              ? 'border-purple-500 text-purple-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Active Channels
        </button>
        <button
          onClick={() => onTabChange('inactive')}
          className={`pb-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'inactive'
              ? 'border-purple-500 text-purple-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Inactive Channels
        </button>
      </nav>
    </div>
  );
};

export default ChannelTabs;