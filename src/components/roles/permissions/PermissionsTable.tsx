import React, { useState } from 'react';
import { users } from '../data';
import { PenSquare } from 'lucide-react';
import PermissionBadges from './PermissionBadges';
import EditPermissionsModal from './EditPermissionsModal';

interface UserPermission {
  userId: number;
  permissions: string[];
}

const userPermissions: UserPermission[] = [
  { userId: 1, permissions: ['Create User', 'Edit User', 'View Users', 'Manage Roles', 'View Analytics', 'Manage Settings'] },
  { userId: 2, permissions: ['View Users', 'View Analytics', 'Edit Content'] },
  { userId: 3, permissions: ['View Users', 'Edit Content'] },
  { userId: 4, permissions: ['View Users', 'Access API', 'View Analytics'] },
];

const PermissionsTable = () => {
  const [editingUser, setEditingUser] = useState<UserPermission | null>(null);
  const [permissions, setPermissions] = useState<UserPermission[]>(userPermissions);

  const handleSavePermissions = (userId: number, newPermissions: string[]) => {
    setPermissions(permissions.map(p => 
      p.userId === userId ? { ...p, permissions: newPermissions } : p
    ));
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="text-left">
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">User</th>
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Permissions</th>
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {permissions.map((item) => {
                const user = users.find(u => u.id === item.userId);
                return user ? (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center">
                        <img src={user.avatar} alt="" className="h-8 w-8 rounded-full mr-3" />
                        <div>
                          <span className="font-medium block">{user.name}</span>
                          <span className="text-sm text-gray-500">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <PermissionBadges permissions={item.permissions} />
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <button 
                        onClick={() => setEditingUser(item)}
                        className="p-2 hover:bg-purple-50 rounded-lg text-purple-600 transition-colors"
                      >
                        <PenSquare className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ) : null;
              })}
            </tbody>
          </table>
        </div>
      </div>

      {editingUser && (
        <EditPermissionsModal
          user={users.find(u => u.id === editingUser.userId)!}
          currentPermissions={editingUser.permissions}
          onClose={() => setEditingUser(null)}
          onSave={handleSavePermissions}
        />
      )}
    </>
  );
};

export default PermissionsTable;