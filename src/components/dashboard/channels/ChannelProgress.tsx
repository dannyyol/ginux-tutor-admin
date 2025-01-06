import React from 'react';

const channels = [
  { name: 'Frontend', progress: '12/100' },
  { name: 'Backend', progress: '15/100' },
  { name: 'Data Science', progress: '15/100' },
  { name: 'AI and Robotics', progress: '90/120' },
  { name: 'Web Development', progress: '20/120' }
];

const ChannelProgress = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Channels</h3>
        <span className="text-purple-600 bg-purple-100 px-2 py-1 rounded-full text-xs">+4</span>
      </div>
      <div className="space-y-4">
        {channels.map((channel, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span>{channel.name}</span>
              <span>{channel.progress}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full" 
                style={{ width: `${(parseInt(channel.progress.split('/')[0]) / parseInt(channel.progress.split('/')[1])) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelProgress;