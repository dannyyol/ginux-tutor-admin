import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const PublishChannel = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const maxLength = 500;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxLength) {
      setWelcomeMessage(text);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Publish Channel</h2>
        <div className="space-x-3">
          <button className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg">
            Save
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Save & Preview
          </button>
        </div>
      </div>

      <div className="max-w-3xl">
        <div className="space-y-6">
          {/* Welcome Message Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Welcome Message
            </label>
            <div className="relative">
              <textarea
                value={welcomeMessage}
                onChange={handleMessageChange}
                placeholder="Enter channel starting message here..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
              <div className="absolute right-3 bottom-3 flex items-center gap-2 text-sm text-gray-500">
                <span>{welcomeMessage.length}/{maxLength}</span>
              </div>
            </div>
          </div>

          {/* Channel Preview Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Channel Preview</h3>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              {welcomeMessage ? (
                <p className="text-gray-600 whitespace-pre-wrap">{welcomeMessage}</p>
              ) : (
                <p className="text-gray-400 italic">Your welcome message will appear here...</p>
              )}
            </div>
          </div>

          {/* Publishing Guidelines */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-blue-900 mb-1">Publishing Guidelines</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Ensure all required information is filled out correctly</li>
                  <li>• Review your content for accuracy and clarity</li>
                  <li>• Check that all media content meets our quality standards</li>
                  <li>• Verify pricing and availability settings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50">
            Previous
          </button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Create Channel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishChannel;