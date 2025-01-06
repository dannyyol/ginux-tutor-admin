import { Transaction } from './types';

export const transactions: Transaction[] = [
  {
    id: 1,
    name: 'Martin Lewis',
    email: 'martinlewis@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    paymentType: 'Flutterway',
    paidDate: '17.08.2024',
    paidTime: '10:00 AM',
    amount: 240,
    status: 'failed'
  },
  {
    id: 2,
    name: 'Sofia Annisa',
    email: 'annisasofia@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    paymentType: 'Flutterway',
    paidDate: '16.08.2024',
    paidTime: '10:00 AM',
    amount: 170,
    status: 'successful'
  },
  {
    id: 3,
    name: 'Shakir Ramzi',
    email: 'shakirramzi@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    paymentType: 'Flutterway',
    paidDate: '15.08.2024',
    paidTime: '10:00 AM',
    amount: 350,
    status: 'failed'
  },
  {
    id: 4,
    name: 'Matius Okoye',
    email: 'matiusoko@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    paymentType: 'Flutterway',
    paidDate: '14.08.2024',
    paidTime: '10:00 AM',
    amount: 570,
    status: 'successful'
  }
];