import React, { useState } from 'react';
import { users } from '../data';
import MultiSelect from './MultiSelect';
import { AlertCircle } from 'lucide-react';

const permissions = [
  { id: 1, name: 'Create User' },
  { id: 2, name: 'Edit User' },
  { id: 3, name: 'Delete User' },
  { id: 4, name: 'View Users' },
  { id: 5, name: 'Manage Roles' },
  { id: 6, name: 'View Analytics' },
  { id: 7, name: 'Manage Settings' },
  { id: 8, name: 'Access API' },
  { id: 9, name: 'Manage Channels' },
  { id: 10, name: 'Edit Content' }
];

const PermissionsForm = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser || selectedPermissions.length === 0) {
      return;
    }

    // In a real app, this would be an API call
    console.log('Updating permissions:', {
      userId: selectedUser,
      permissions: selectedPermissions
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select User
          </label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          >
            <option value="">Select a user...</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Permissions
          </label>
          <MultiSelect
            options={permissions}
            selected={selectedPermissions}
            onChange={setSelectedPermissions}
          />
        </div>
      </div>

      {showSuccess && (
        <div className="mt-4 p-4 bg-green-50 rounded-lg flex items-center gap-2 text-green-700">
          <AlertCircle className="h-5 w-5" />
          <span>Permissions updated successfully!</span>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={!selectedUser || selectedPermissions.length === 0}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Update Permissions
        </button>
      </div>
    </form>
  );
}

export default PermissionsForm;