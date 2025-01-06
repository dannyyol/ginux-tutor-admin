import { LucideIcon } from 'lucide-react';

export interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
}

export interface DashboardStats {
  revenue: string;
  students: string;
  tasks: string;
  channels: string;
}