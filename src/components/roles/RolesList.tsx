import React from 'react';
import { Filter } from 'lucide-react';
import RoleFilters from '../../components/roles/RoleFilters';

const roles = [
  { id: 1, name: 'Super Admin' },
  { id: 2, name: 'Admin' },
  { id: 3, name: 'Editor' },
  { id: 4, name: 'Viewer' }
];

const RolesList = () => {
  return (
    <div className="p-6">
      <RoleFilters />

      <div className="space-y-4">
        {roles.map((role) => (
          <div
            key={role.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
          >
            <span className="font-medium">{role.name}</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                Edit
              </button>
              <button className="px-3 py-1 text-sm text-red-600 bg-red-100 rounded-lg hover:bg-red-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesList;