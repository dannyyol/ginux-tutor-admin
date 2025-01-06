import React from 'react';
import { Wallet, Users, ClipboardList, Layout } from 'lucide-react';
import StatCard from './stats/StatCard';
import RevenueChart from './charts/RevenueChart';
import EngagementChart from './charts/EngagementChart';
import StudentSlider from '../students/StudentSlider';
import TransactionTable from '../transactions/TransactionTable';
import ChannelProgress from './channels/ChannelProgress';
import TransactionMetrics from './metrics/TransactionMetrics';
import StatisticDonut from './charts/StatisticDonut';

const DashboardContent = () => {
  return (
    <div className="p-4 md:p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        <StatCard
          title="Revenue"
          value="$10,000.00"
          icon={Wallet}
          iconColor="bg-purple-500"
        />
        <StatCard
          title="Students"
          value="1.6M"
          icon={Users}
          iconColor="bg-blue-500"
        />
        <StatCard
          title="Tasks"
          value="3,275"
          icon={ClipboardList}
          iconColor="bg-green-500"
        />
        <StatCard
          title="Channels"
          value="10"
          icon={Layout}
          iconColor="bg-orange-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
        <RevenueChart />
        <EngagementChart />
      </div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl">
          <ChannelProgress />
        </div>
        <div className="bg-white p-6 rounded-xl">
          <StatisticDonut />
        </div>
        <div className="bg-white p-6 rounded-xl">
          <TransactionMetrics />
        </div>
      </div>

      <StudentSlider />
      <TransactionTable />
    </div>
  );
};

export default DashboardContent;