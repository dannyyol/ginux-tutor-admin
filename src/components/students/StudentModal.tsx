import React, { useState } from 'react';
import { Student } from './studentData';
import StudentModalHeader from './modal/StudentModalHeader';
import StudentStatusSelect from './modal/StudentStatusSelect';
import StudentDetailField from './modal/StudentDetailField';
import StudentChannelBadge from './modal/StudentChannelBadge';
import StudentStatistic from './modal/StudentStatistic';

interface StudentModalProps {
  student: Student | null;
  onClose: () => void;
}

const StudentModal: React.FC<StudentModalProps> = ({ student, onClose }) => {
  const [status, setStatus] = useState<'Active' | 'Expired'>(student?.status || 'Active');

  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
        <StudentModalHeader onClose={onClose} />
        <StudentStatusSelect status={status} onChange={setStatus} />
        
        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-24 h-24 rounded-full mb-4"
            />
          </div>

          <div className="space-y-2">
            <StudentDetailField label="Name" value={student.name} />
            <StudentDetailField label="Phone Number" value="234375172864" />
            <StudentDetailField label="Email Address" value={`${student.name.toLowerCase().replace(' ', '')}@gmail.com`} />
            <StudentDetailField label="Age" value="23" />
            <StudentDetailField label="Location" value="Lagos" />
            
            <div className="border-b border-dashed border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Channels</span>
                <StudentChannelBadge channel="Frontend Channel" />
              </div>
            </div>

            <StudentStatistic label="Post" value="23" />
            <StudentStatistic label="Ginux Coin" value="23" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;