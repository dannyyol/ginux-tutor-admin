import React from 'react';
import { User } from '../types';
import UserActions from './UserActions';

interface UserRowProps {
  user: User;
}

const UserRow = ({ user }: UserRowProps) => {
  return (
    <tr className="hover:bg-gray-50">
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
        <UserActions />
      </td>
    </tr>
  );
};

export default UserRow;