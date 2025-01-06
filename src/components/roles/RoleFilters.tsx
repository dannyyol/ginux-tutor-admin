import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import CreateUserModal from './modals/CreateUserModal';
import AssignRoleModal from './modals/AssignRoleModal';

const RoleFilters = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAssignRoleModal, setShowAssignRoleModal] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search for an entry"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filters
          </button>
          
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Create User
          </button>

          <button 
            onClick={() => setShowAssignRoleModal(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Assign Role
          </button>
        </div>
      </div>

      <CreateUserModal 
        isOpen={showCreateModal} 
        onClose={() => setShowCreateModal(false)} 
      />

      <AssignRoleModal
        isOpen={showAssignRoleModal}
        onClose={() => setShowAssignRoleModal(false)}
      />
    </>
  );
};

export default RoleFilters;