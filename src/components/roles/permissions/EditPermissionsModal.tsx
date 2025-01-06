import React, { useState } from 'react';
import { X } from 'lucide-react';
import MultiSelect from './MultiSelect';

interface EditPermissionsModalProps {
  user: {
    id: number;
    name: string;
    email: string;
    avatar: string;
  };
  currentPermissions: string[];
  onClose: () => void;
  onSave: (userId: number, permissions: string[]) => void;
}

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

const EditPermissionsModal = ({ user, currentPermissions, onClose, onSave }: EditPermissionsModalProps) => {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
    currentPermissions.map(perm => 
      permissions.find(p => p.name === perm)?.id.toString() || ''
    ).filter(Boolean)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedPermissions = selectedPermissions.map(id => 
      permissions.find(p => p.id.toString() === id)?.name || ''
    ).filter(Boolean);
    onSave(user.id, updatedPermissions);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Edit Permissions</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <img src={user.avatar} alt="" className="h-10 w-10 rounded-full" />
            <div>
              <h3 className="font-medium">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Permissions
            </label>
            <MultiSelect
              options={permissions}
              selected={selectedPermissions}
              onChange={setSelectedPermissions}
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPermissionsModal;