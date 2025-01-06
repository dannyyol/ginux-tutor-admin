import React from 'react';

const BasicInformation = () => {
  return (
    <form className="p-6">
      <div className="max-w-3xl">
        <div className="space-y-6">
          {/* Channel Title */}
          <div>
            <label htmlFor="channelTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Channel Title
            </label>
            <div className="relative">
              <input
                type="text"
                id="channelTitle"
                placeholder="Enter Channel Title"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="absolute right-0 top-0 h-full flex items-center pr-3">
                <span className="text-sm text-gray-500">0/30</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <div className="relative">
                <textarea
                id="description"
                rows={4}
                placeholder="Enter your channel descriptions"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
                <div className="absolute right-0 top-8 h-full flex items-center pr-3">
                  <span className="text-sm text-gray-500">0/80</span>
                </div>
            </div>
            
          </div>

          {/* Additional Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="channelLanguage" className="block text-sm font-medium text-gray-700 mb-1">
                Channel Language
              </label>
              <select
                id="channelLanguage"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select...</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>

            <div>
              <label htmlFor="channelLevel" className="block text-sm font-medium text-gray-700 mb-1">
                Channel Level
              </label>
              <select
                id="channelLevel"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select...</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <select
                id="price"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select...</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="duration"
                  placeholder="Channel duration"
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <select className="w-24 px-4 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Day</option>
                  <option>Week</option>
                  <option>Month</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <div className="space-x-3">
              <button
                type="button"
                className="px-6 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50"
              >
                Preview
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BasicInformation;