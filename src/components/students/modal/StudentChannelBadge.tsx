import React from 'react';

interface StudentChannelBadgeProps {
  channel: string;
}

const StudentChannelBadge = ({ channel }: StudentChannelBadgeProps) => {
  return (
    <span className="text-orange-500 bg-orange-50 px-3 py-1 rounded-full text-sm">
      {channel}
    </span>
  );
};

export default StudentChannelBadge;