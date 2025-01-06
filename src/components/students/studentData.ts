export interface Student {
  id: number;
  name: string;
  avatar: string;
  plan: string;
  ginuxCoin: number;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Expired';
  amount: number;
}

export const students: Student[] = [
  {
    id: 1,
    name: 'Daffa Naufal',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    plan: 'Frontend',
    ginuxCoin: 100,
    startDate: '1 Jan 2024',
    endDate: '23 May 2024',
    status: 'Active',
    amount: 1200
  },
  {
    id: 2,
    name: 'Jack Miller',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    plan: 'Backend',
    ginuxCoin: 50,
    startDate: '1 Jan 2024',
    endDate: '31 Jan 2024',
    status: 'Expired',
    amount: 130
  },
  // Add more student data as needed
];