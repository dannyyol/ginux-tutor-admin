import React from 'react';
import { users } from './data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RoleFilters from '../../components/roles/RoleFilters';

const UsersList = () => {
  return (
    <div className="p-6">
      <RoleFilters />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left">
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Name</th>
              <th className="hidden md:table-cell px-6 py-4 text-sm font-medium text-gray-500">Email</th>
              <th className="hidden lg:table-cell px-6 py-4 text-sm font-medium text-gray-500">Phone</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Role</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 md:px-6 py-4">
                  <div className="flex items-center">
                    <img src={user.avatar} alt="" className="h-8 w-8 rounded-full mr-3" />
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="hidden md:table-cell px-6 py-4 text-gray-500">{user.email}</td>
                <td className="hidden lg:table-cell px-6 py-4 text-gray-500">{user.phone}</td>
                <td className="px-4 md:px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
                    {user.role}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 hover:bg-green-200">
                      Enable
                    </button>
                    <button className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200">
                      Disable
                    </button>
                    <button className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 hover:bg-red-200">
                      Block
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">Showing 1 to {users.length} of {users.length} entries</p>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded">1</button>
          <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50">2</button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersList;