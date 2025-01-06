export type TabType = 'users' | 'roles' | 'permissions';

export interface Role {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
}