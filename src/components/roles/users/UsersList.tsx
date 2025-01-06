import React, { useState } from 'react';
import { users } from '../data';
import UserRow from './UserRow';
import UserTableHeader from './UserTableHeader';
import Pagination from './Pagination';

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <UserTableHeader />
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination 
        totalItems={users.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UsersList;