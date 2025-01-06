import React, { useState } from 'react';
import { Bell, Search, Settings, Menu } from 'lucide-react';
import NotificationDropdown from './notifications/NotificationDropdown';
import SettingsDropdown from './notifications/SettingsDropdown';
import Dropdown from './common/Dropdown';
import MobileSearch from './search/MobileSearch';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  return (
    <>
      <MobileSearch 
        isOpen={showMobileSearch} 
        onClose={() => setShowMobileSearch(false)} 
      />
      
      <header className="h-16 fixed top-0 right-0 left-0 lg:left-64 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between h-full px-4 md:px-6">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setShowMobileSearch(true)}
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <div className="relative">
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowSettings(false);
                }}
              >
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <Dropdown 
                isOpen={showNotifications} 
                onClose={handleCloseNotifications} 
                width="w-80"
              >
                <NotificationDropdown onClose={handleCloseNotifications} />
              </Dropdown>
            </div>
            <div className="relative">
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  setShowSettings(!showSettings);
                  setShowNotifications(false);
                }}
              >
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              <Dropdown 
                isOpen={showSettings} 
                onClose={() => setShowSettings(false)} 
                width="w-56"
              >
                <SettingsDropdown />
              </Dropdown>
            </div>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;