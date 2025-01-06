export type PostStatus = 'active' | 'pending' | 'draft';

export interface Post {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  date: string;
  status: PostStatus;
  likes: number;
}

export type PostTab = 'active' | 'pending' | 'history';