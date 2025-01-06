import React from 'react';
import StudentStats from '../components/students/StudentStats';
import StudentTable from '../components/students/StudentTable';
import StudentFilters from '../components/students/StudentFilters';

const StudentsPage = () => {
  return (
    <div className="p-4 md:p-6">
      <StudentStats />
      <div className="mt-6">
        <StudentFilters />
        <StudentTable />
      </div>
    </div>
  );
};

export default StudentsPage;