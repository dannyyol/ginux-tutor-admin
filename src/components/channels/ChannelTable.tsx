import React from 'react';
import { Eye, PenSquare } from 'lucide-react';
import { channels } from './data';

interface ChannelTableProps {
  activeTab: 'all' | 'active' | 'inactive';
}

const ChannelTable = ({ activeTab }: ChannelTableProps) => {
  const filteredChannels = channels.filter(channel => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return channel.status === 'Active';
    return channel.status === 'Inactive';
  });

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left">
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Channels</th>
              <th className="hidden md:table-cell px-6 py-4 text-sm font-medium text-gray-500">Description</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">No of Students</th>
              <th className="hidden md:table-cell px-6 py-4 text-sm font-medium text-gray-500">Start Date</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 md:px-6 py-4 text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredChannels.map((channel) => (
              <tr key={channel.id} className="hover:bg-gray-50">
                <td className="px-4 md:px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{channel.icon}</span>
                    <span className="font-medium">{channel.name}</span>
                  </div>
                </td>
                <td className="hidden md:table-cell px-6 py-4 text-gray-500">{channel.description}</td>
                <td className="px-4 md:px-6 py-4">{channel.students}</td>
                <td className="hidden md:table-cell px-6 py-4">{channel.startDate}</td>
                <td className="px-4 md:px-6 py-4">
                  <span className={`inline-flex px-2 py-1 rounded-full text-sm ${
                    channel.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {channel.status}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Eye className="h-5 w-5 text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <PenSquare className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 md:p-6 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">Showing 1 to {filteredChannels.length} of {channels.length} entries</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded">1</button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelTable;