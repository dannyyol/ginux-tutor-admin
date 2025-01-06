import React from 'react';
import { channelStats } from './data';

const ChannelStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-orange-500 text-sm mb-1">Active Channels</h3>
        <p className="text-2xl font-semibold">{channelStats.active}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-orange-500 text-sm mb-1">Inactive Channels</h3>
        <p className="text-2xl font-semibold">{channelStats.inactive}</p>
      </div>
    </div>
  );
};

export default ChannelStats;