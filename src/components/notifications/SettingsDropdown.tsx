import React from 'react';
import { User, Lock, HelpCircle, LogOut } from 'lucide-react';

const menuItems = [
  { icon: User, label: 'Profile Settings' },
  { icon: Lock, label: 'Security' },
  { icon: HelpCircle, label: 'Help & Support' },
  { icon: LogOut, label: 'Logout' }
];

const SettingsDropdown = () => {
  return (
    <>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center"
        >
          <item.icon className="h-4 w-4 mr-3 text-gray-500" />
          <span className="text-sm text-gray-700">{item.label}</span>
        </div>
      ))}
    </>
  );
};

export default SettingsDropdown;