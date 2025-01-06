import React from 'react';
import { X } from 'lucide-react';
import AssignRoleForm from './AssignRoleForm';

interface AssignRoleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssignRoleModal: React.FC<AssignRoleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Assign Role</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <AssignRoleForm onClose={onClose} />
      </div>
    </div>
  );
};

export default AssignRoleModal;