import React from 'react';
import PermissionsForm from './PermissionsForm';
import PermissionsTable from './PermissionsTable';

const PermissionsList = () => {
  return (
    <div className="p-6">
      <PermissionsForm />
      <PermissionsTable />
    </div>
  );
};

export default PermissionsList;