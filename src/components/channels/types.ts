export type ChannelTabType = 'all' | 'active' | 'inactive';

export interface Channel {
  id: number;
  name: string;
  description: string;
  students: number;
  startDate: string;
  status: 'Active' | 'Inactive';
  icon: string;
}