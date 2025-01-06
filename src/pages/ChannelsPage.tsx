import React, { useState } from 'react';
import ChannelStats from '../components/channels/ChannelStats';
import ChannelFilters from '../components/channels/ChannelFilters';
import ChannelTable from '../components/channels/ChannelTable';
import ChannelTabs from '../components/channels/ChannelTabs';
import AddChannelPage from './AddChannelPage';

const ChannelsPage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'inactive'>('all');
  const [showAddChannel, setShowAddChannel] = useState(false);

  if (showAddChannel) {
    return <AddChannelPage />;
  }

  return (
    <div className="p-4 md:p-6">
      <ChannelStats />
      <div className="mt-6">
        <ChannelTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <ChannelFilters onAddChannel={() => setShowAddChannel(true)} />
        <ChannelTable activeTab={activeTab} />
      </div>
    </div>
  );
};

export default ChannelsPage;