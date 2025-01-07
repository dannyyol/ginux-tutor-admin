import React from 'react';
import { TabType } from '../../../types/channel';

interface TabHeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs = [
  { id: 'basic', label: 'Basic Information', icon: '📋' },
  { id: 'advance', label: 'Advance Information', icon: '📝' },
  { id: 'curriculum', label: 'Curriculum', icon: '📚' },
  { id: 'publish', label: 'Publish Channel', icon: '🚀' }
];

const TabHeader = ({ activeTab, onTabChange }: TabHeaderProps) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id as TabType)}
            className={`flex items-center px-6 py-4 border-b-2 whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-purple-500 text-purple-600 dark:border-purple-400 dark:text-purple-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabHeader;
