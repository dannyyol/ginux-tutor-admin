import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { students } from './studentData';
import StudentModal from './StudentModal';
import type { Student } from './studentData';

const StudentTable = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="text-left">
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Users</th>
                <th className="hidden md:table-cell px-6 py-4 text-sm font-medium text-gray-500">Plan</th>
                <th className="hidden lg:table-cell px-6 py-4 text-sm font-medium text-gray-500">Ginux coin</th>
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Start Date</th>
                <th className="hidden md:table-cell px-6 py-4 text-sm font-medium text-gray-500">End Date</th>
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Status</th>
                <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student) => (
                <tr 
                  key={student.id} 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedStudent(student)}
                >
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center">
                      <img src={student.avatar} alt="" className="h-8 w-8 rounded-full mr-3" />
                      <div>
                        <span className="font-medium block">{student.name}</span>
                        <span className="text-sm text-gray-500 md:hidden">{student.plan}</span>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-4">{student.plan}</td>
                  <td className="hidden lg:table-cell px-6 py-4">{student.ginuxCoin}</td>
                  <td className="px-4 md:px-6 py-4">{student.startDate}</td>
                  <td className="hidden md:table-cell px-6 py-4">{student.endDate}</td>
                  <td className="px-4 md:px-6 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-sm ${
                      student.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">${student.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 md:p-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">Showing 1 to 4 of 20 entries</p>
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
      </div>

      <StudentModal 
        student={selectedStudent} 
        onClose={() => setSelectedStudent(null)} 
      />
    </>
  );
};

export default StudentTable;