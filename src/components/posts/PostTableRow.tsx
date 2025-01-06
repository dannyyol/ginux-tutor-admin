import React from 'react';
import { Eye, PenSquare, Heart } from 'lucide-react';
import { Post } from './types';

interface PostTableRowProps {
  post: Post;
}

const PostTableRow = ({ post }: PostTableRowProps) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 md:px-6 py-4">
        <div className="flex items-center gap-3">
          <img 
            src={post.thumbnail} 
            alt={post.title}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <span className="font-medium">{post.title}</span>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-4 text-gray-500">
        <p className="truncate max-w-md">{post.description}</p>
      </td>
      <td className="px-4 md:px-6 py-4">
        <div className="flex items-center gap-2">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="h-8 w-8 rounded-full"
          />
          <span>{post.author.name}</span>
        </div>
      </td>
      <td className="px-4 md:px-6 py-4 text-gray-500">{post.date}</td>
      <td className="px-4 md:px-6 py-4">
        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
          post.status === 'active'
            ? 'bg-green-100 text-green-700'
            : post.status === 'pending'
            ? 'bg-yellow-100 text-yellow-700'
            : 'bg-gray-100 text-gray-700'
        }`}>
          {post.status}
        </span>
      </td>
      <td className="px-4 md:px-6 py-4">
        <div className="flex items-center gap-1 text-rose-500">
          <Heart className="h-4 w-4" />
          <span>{post.likes}</span>
        </div>
      </td>
      <td className="px-4 md:px-6 py-4">
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Eye className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <PenSquare className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PostTableRow;