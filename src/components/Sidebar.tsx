import React, { useEffect } from 'react';
import { 
  LayoutGrid, Users, Layers, MessageSquare, 
  ShoppingBag, Receipt, Settings, LogOut
} from 'lucide-react';

const menuItems = [
  { icon: LayoutGrid, label: 'Dashboard', path: 'dashboard' },
  { icon: Users, label: 'Students', path: 'students' },
  { icon: Layers, label: 'Channels', path: 'channels' },
  { icon: MessageSquare, label: 'Posts', path: 'posts', badge: '12' },
  { icon: ShoppingBag, label: 'Market Place', path: 'marketplace' },
  { icon: Receipt, label: 'Transactions', path: 'transactions' },
  { icon: Settings, label: 'Settings', path: 'settings' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onPageChange: (page: string) => void;
  currentPage: string;
}

const Sidebar = ({ isOpen, onClose, onPageChange, currentPage }: SidebarProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      if (isOpen && sidebar && !sidebar.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const handleMenuItemClick = (path: string) => {
    onPageChange(path);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20" />
      )}

      <aside
        id="sidebar"
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-30 transform transition-transform duration-200 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <LayoutGrid className="h-6 w-6 text-purple-600" />
            <span className="ml-2 font-semibold text-xl dark:text-white">Dashboard</span>
          </div>
        </div>

        <div className="flex-1 py-6">
          <div className="px-4">
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-4">MAIN MENU</p>
            <nav>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick(item.path);
                  }}
                  className={`flex items-center justify-between px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg mb-1 ${
                    currentPage === item.path ? 'bg-purple-50 dark:bg-gray-700 text-purple-600 dark:text-purple-400' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-3" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-0.5 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="p-4">
          <button
            className="flex items-center w-full px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;