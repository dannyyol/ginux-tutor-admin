export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'Adeoni Mulli Yewande',
    email: 'adeonimuli@gmail.com',
    phone: '09077081222',
    role: 'Super Admin',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Martin Lewis',
    email: 'martin.lewis@gmail.com',
    phone: '09077081223',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Sarah Chen',
    email: 'sarah.chen@gmail.com',
    phone: '09077081224',
    role: 'Editor',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    phone: '09077081225',
    role: 'Viewer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];