import React, { useState } from 'react';
import { TabType } from './types';
import RolesList from './RolesList';
import UsersList from './users/UsersList';
import PermissionsList from './permissions/PermissionsList';

const RoleTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>('users');

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="border-b border-gray-200">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('users')}
              className={`pb-4 -mb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'users'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <span className="ml-2">All Users</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('roles')}
              className={`pb-4 -mb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'roles'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <span className="ml-2">Roles</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('permissions')}
              className={`pb-4 -mb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'permissions'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <span className="ml-2">Permissions</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {activeTab === 'users' && <UsersList />}
      {activeTab === 'roles' && <RolesList />}
      {activeTab === 'permissions' && <PermissionsList />}
    </div>
  );
};

export default RoleTabs;