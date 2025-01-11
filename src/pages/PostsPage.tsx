import React, { useState } from 'react';
import PostTabs from '../components/posts/PostTabs';
import PostFilters from '../components/posts/PostFilters';
import PostTable from '../components/posts/PostTable';
import { Post, PostTab } from '../components/posts/types';
import PostStats from '../components/channels/PostStats';

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    description: 'Learn the basics of React and start building modern web applications...',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    author: {
      id: '1',
      name: 'Justin Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: '23-04-2024',
    status: 'active',
    likes: 245
  },
  {
    id: '2',
    title: 'Advanced TypeScript Patterns',
    description: 'Explore advanced TypeScript patterns and best practices for large applications...',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    author: {
      id: '2',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: '22-04-2024',
    status: 'pending',
    likes: 182
  },
  {
    id: '3',
    title: 'Building Scalable APIs',
    description: 'Learn how to design and build scalable REST APIs using Node.js...',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    author: {
      id: '3',
      name: 'Martin Lewis',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    date: '21-04-2024',
    status: 'active',
    likes: 324
  }
];

const PostsPage = () => {
  const [activeTab, setActiveTab] = useState<PostTab>('active');
  const [currentPage, setCurrentPage] = useState(1);

  const handleCreatePost = () => {
    console.log('Creating new post...');
  };

  const filteredPosts = mockPosts.filter(post => {
    if (activeTab === 'active') return post.status === 'active';
    if (activeTab === 'pending') return post.status === 'pending';
    return true; // 'history' tab shows all posts
  });

  return (
    <div className="p-4 md:p-6">
      <PostStats />
      <div className="mb-6">
        <PostTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          counts={{
            active: mockPosts.filter(p => p.status === 'active').length,
            pending: mockPosts.filter(p => p.status === 'pending').length
          }}
        />
      </div>

      <PostFilters onCreatePost={handleCreatePost} />
      
      <PostTable
        posts={filteredPosts}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PostsPage;