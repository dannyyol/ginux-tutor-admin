import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DynamicInputGroup from '../common/DynamicInputGroup';

const MAX_ROWS = 8;

const AdvanceInformation = () => {
  const [teachings, setTeachings] = useState<string[]>(['']);
  const [targetAudience, setTargetAudience] = useState<string[]>(['']);
  const [requirements, setRequirements] = useState<string[]>(['']);

  const handleAddItem = (items: string[], setItems: (items: string[]) => void) => {
    if (items.length < MAX_ROWS) {
      setItems([...items, '']);
    }
  };

  const handlePreview = () => {
    console.log('Preview:', { teachings, targetAudience, requirements });
  };

  return (
    <form className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow">
      <div className="max-w-3xl">
        <div className="space-y-8">
          {/* What you will teach section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                What you will teach in this channel ({teachings.length}/{MAX_ROWS})
              </h3>
              {teachings.length < MAX_ROWS && (
                <button
                  type="button"
                  onClick={() => handleAddItem(teachings, setTeachings)}
                  className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-500"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add new
                </button>
              )}
            </div>
            <DynamicInputGroup
              items={teachings}
              onChange={setTeachings}
              placeholder="What you will teach in this channel..."
            />
          </div>

          {/* Target Audience section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                Target Audience ({targetAudience.length}/{MAX_ROWS})
              </h3>
              {targetAudience.length < MAX_ROWS && (
                <button
                  type="button"
                  onClick={() => handleAddItem(targetAudience, setTargetAudience)}
                  className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-500"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add new
                </button>
              )}
            </div>
            <DynamicInputGroup
              items={targetAudience}
              onChange={setTargetAudience}
              placeholder="Who this channel is for..."
            />
          </div>

          {/* Channel Requirements section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">
                Channel requirements ({requirements.length}/{MAX_ROWS})
              </h3>
              {requirements.length < MAX_ROWS && (
                <button
                  type="button"
                  onClick={() => handleAddItem(requirements, setRequirements)}
                  className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-500"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add new
                </button>
              )}
            </div>
            <DynamicInputGroup
              items={requirements}
              onChange={setRequirements}
              placeholder="What is your channel requirements..."
            />
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Previous
            </button>
            <div className="space-x-3">
              <button
                type="button"
                onClick={handlePreview}
                className="px-6 py-2 border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-800"
              >
                Preview
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600"
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AdvanceInformation;
