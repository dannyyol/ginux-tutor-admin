import React, { useState } from 'react';
import FormInput from '../forms/FormInput';
import FormSelect from '../forms/FormSelect';

interface AssignRoleFormProps {
  onClose: () => void;
}

const AssignRoleForm: React.FC<AssignRoleFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Role assigned:', formData);
    onClose();
  };

  const roles = [
    { value: 'super_admin', label: 'Super Admin' },
    { value: 'admin', label: 'Admin' },
    { value: 'editor', label: 'Editor' },
    { value: 'viewer', label: 'Viewer' }
  ];

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
        />
        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your Last name"
        />
      </div>

      <div className="mb-6">
        <FormSelect
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={roles}
          placeholder="Select role"
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Assign Role
        </button>
      </div>
    </form>
  );
};

export default AssignRoleForm;