import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import TabHeader from '../components/channels/tabs/TabHeader';
import BasicInformation from '../components/channels/tabs/BasicInformation';
import AdvanceInformation from '../components/channels/tabs/AdvanceInformation';
import Curriculum from '../components/channels/tabs/Curriculum';
import PublishChannel from '../components/channels/tabs/PublishChannel';
import { TabType } from '../types/channel';

const AddChannelPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('basic');

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Channels
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <TabHeader activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === 'basic' && <BasicInformation />}
        {activeTab === 'advance' && <AdvanceInformation />}
        {activeTab === 'curriculum' && <Curriculum />}
        {activeTab === 'publish' && <PublishChannel />}
      </div>
    </div>
  );
};

export default AddChannelPage;