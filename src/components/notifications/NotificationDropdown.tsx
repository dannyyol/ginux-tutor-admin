import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import MobileNotification from './MobileNotification';
import { notifications } from './notificationData';

const NotificationDropdown = ({ onClose }: { onClose: () => void }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return <MobileNotification notifications={notifications} onClose={onClose} />;
  }

  return (
    <>
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Notifications</h3>
          <button 
            className="text-xs text-purple-600 hover:text-purple-700"
            onClick={() => {
              // Add mark all as read logic here
              onClose();
            }}
          >
            Mark all as read
          </button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 hover:bg-gray-50 cursor-pointer ${
              !notification.isRead ? 'bg-purple-50' : ''
            }`}
          >
            <p className="font-medium text-sm">{notification.title}</p>
            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <button className="text-sm text-purple-600 hover:text-purple-700 w-full text-center">
          View all notifications
        </button>
      </div>
    </>
  );
};

export default NotificationDropdown;