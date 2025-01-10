import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ApplicationSettings = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="max-w-2xl">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
            Theme
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`px-4 py-2 rounded-lg border ${
                !isDarkMode
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Light
            </button>
            <button
              onClick={toggleDarkMode}
              className={`px-4 py-2 rounded-lg border ${
                isDarkMode
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Dark
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Language
          </label>
          <select className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-100">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Notifications
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-gray-700 dark:text-gray-300">Email notifications</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span className="text-gray-700 dark:text-gray-300">Push notifications</span>
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSettings;