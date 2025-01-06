import React from 'react';
import RoleStats from '../components/roles/RoleStats';
import RoleTabs from '../components/roles/RoleTabs';
import UserRoleTable from '../components/roles/UserRoleTable';
import RoleFilters from '../components/roles/RoleFilters';

const RolesPage = () => {
  return (
    <div className="p-4 md:p-6">
      <RoleStats />
      <div className="mt-6">
        {/* <RoleFilters /> */}
        <RoleTabs />
        {/* <UserRoleTable /> */}
      </div>
    </div>
  );
};

export default RolesPage;