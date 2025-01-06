import React from 'react';
import { Filter } from 'lucide-react';

interface PostFiltersProps {
  onCreatePost: () => void;
}

const PostFilters = ({ onCreatePost }: PostFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <div className="w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          Filters
        </button>
        
        <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white">
          <option>All Data</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>

        <button 
          onClick={onCreatePost}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default PostFilters;