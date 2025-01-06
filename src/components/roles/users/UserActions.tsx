import React from 'react';

const UserActions = () => {
  return (
    <div className="flex gap-2">
      <button className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 hover:bg-green-200">
        Enable
      </button>
      <button className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200">
        Disable
      </button>
      <button className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 hover:bg-red-200">
        Block
      </button>
    </div>
  );
};

export default UserActions;