import { Notification } from './types';

export const notifications: Notification[] = [
  {
    id: 1,
    title: "New Student Registration",
    message: "Martin Lewis has registered for Frontend course",
    time: "5 min ago",
    isRead: false
  },
  {
    id: 2,
    title: "Course Completion",
    message: "Sofia Annisa completed Backend Development",
    time: "1 hour ago",
    isRead: false
  },
  {
    id: 3,
    title: "Payment Received",
    message: "Payment received from Shakir Ramzi",
    time: "2 hours ago",
    isRead: true
  }
];