import React, { useState } from 'react';
import SettingsTabs from '../components/settings/SettingsTabs';
import AccountSettings from '../components/settings/AccountSettings';
import SecuritySettings from '../components/settings/SecuritySettings';
import ApplicationSettings from '../components/settings/ApplicationSettings';

type TabType = 'account' | 'security' | 'application';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('account');

  return (
    <div className="p-4 md:p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-semibold dark:text-white">Settings</h1>
        </div>
        
        <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="p-6">
          {activeTab === 'account' && <AccountSettings />}
          {activeTab === 'security' && <SecuritySettings />}
          {activeTab === 'application' && <ApplicationSettings />}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;