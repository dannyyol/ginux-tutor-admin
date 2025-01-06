import React from 'react';
import { Post } from './types';
import PostTableRow from './PostTableRow';
import Pagination from '../common/Pagination';

interface PostTableProps {
  posts: Post[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PostTable = ({ posts, currentPage, onPageChange }: PostTableProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left">
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Post</th>
              <th className="hidden md:table-cell px-6 py-4 text-sm font-medium text-gray-500">Description</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Posted by</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Date</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Likes</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {posts.map((post) => (
              <PostTableRow key={post.id} post={post} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 md:p-6 border-t border-gray-200">
        <Pagination
          totalItems={posts.length}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default PostTable;