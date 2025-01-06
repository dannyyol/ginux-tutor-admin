import { Channel, ChannelStats } from './types';

export const channelStats: ChannelStats = {
  active: 12,
  inactive: 3,
};

export const channels: Channel[] = [
  {
    id: 1,
    name: 'Frontend Development',
    description: 'Lorem ipsum dolor sit amet......',
    students: 1000,
    startDate: '23 May 2024',
    status: 'Active',
    icon: '💻'
  },
  {
    id: 2,
    name: 'Backend Development',
    description: 'Lorem ipsum dolor sit amet......',
    students: 950,
    startDate: '31 Jan 2024',
    status: 'Inactive',
    icon: '⚙️'
  },
  {
    id: 3,
    name: 'Data Science',
    description: 'Lorem ipsum dolor sit amet......',
    students: 330,
    startDate: '23 May 2024',
    status: 'Active',
    icon: '📊'
  },
  {
    id: 4,
    name: 'AI & Robotics',
    description: 'Lorem ipsum dolor sit amet......',
    students: 1400,
    startDate: '23 May 2024',
    status: 'Inactive',
    icon: '🤖'
  }
];