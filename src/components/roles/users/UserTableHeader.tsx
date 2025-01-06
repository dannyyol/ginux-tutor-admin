import React from 'react';

const UserTableHeader = () => {
  return (
    <tr className="text-left">
      <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Name</th>
      <th className="hidden md:table-cell px-6 py-4 text-sm font-medium text-gray-500">Email</th>
      <th className="hidden lg:table-cell px-6 py-4 text-sm font-medium text-gray-500">Phone</th>
      <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Role</th>
      <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Actions</th>
    </tr>
  );
};

export default UserTableHeader;