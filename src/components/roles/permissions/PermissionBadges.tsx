import React, { useState } from 'react';

interface PermissionBadgesProps {
  permissions: string[];
}

const PermissionBadges = ({ permissions }: PermissionBadgesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (permissions.length <= 5 || isExpanded) {
    return (
      <div className="flex flex-wrap gap-2">
        {permissions.map((permission, index) => (
          <span
            key={index}
            className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700"
          >
            {permission}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {permissions.slice(0, 2).map((permission, index) => (
        <span
          key={index}
          className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700"
        >
          {permission}
        </span>
      ))}
      <button
        onClick={() => setIsExpanded(true)}
        className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
      >
        +{permissions.length - 2} more
      </button>
    </div>
  );
};

export default PermissionBadges;