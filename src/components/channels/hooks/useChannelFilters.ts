import { useState, useMemo } from 'react';
import { Channel, ChannelTabType } from '../types';
import { channels } from '../data';

export const useChannelFilters = () => {
  const [activeTab, setActiveTab] = useState<ChannelTabType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChannels = useMemo(() => {
    return channels.filter(channel => {
      const matchesTab = 
        activeTab === 'all' || 
        (activeTab === 'active' && channel.status === 'Active') ||
        (activeTab === 'inactive' && channel.status === 'Inactive');

      const matchesSearch = 
        channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        channel.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    filteredChannels
  };
};