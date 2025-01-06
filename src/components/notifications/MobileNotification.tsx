import React from 'react';
import { X } from 'lucide-react';
import { Notification } from './types';

interface MobileNotificationProps {
  notifications: Notification[];
  onClose: () => void;
}

const MobileNotification = ({ notifications, onClose }: MobileNotificationProps) => {
  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <div className="flex items-center gap-4">
          <button 
            className="text-sm text-purple-600"
            onClick={() => {
              // Add mark all as read logic here
              onClose();
            }}
          >
            Mark all as read
          </button>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-64px)]">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b border-gray-100 ${
              !notification.isRead ? 'bg-purple-50' : ''
            }`}
          >
            <p className="font-medium">{notification.title}</p>
            <p className="text-gray-600 mt-1">{notification.message}</p>
            <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNotification;