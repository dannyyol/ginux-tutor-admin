import React from 'react';
import { X } from 'lucide-react';

interface DynamicInputGroupProps {
  items: string[];
  onChange: (items: string[]) => void;
  placeholder: string;
}

const DynamicInputGroup = ({ items, onChange, placeholder }: DynamicInputGroupProps) => {
  const handleChange = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    onChange(newItems);
  };

  const handleRemove = (index: number) => {
    if (items.length > 1) {
      const newItems = items.filter((_, i) => i !== index);
      onChange(newItems);
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="relative flex items-center gap-3">
          <span className="text-sm text-gray-500 w-6">{index + 1}</span>
          <div className="flex-1 relative">
            <input
              type="text"
              value={item}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={placeholder}
              className="w-full px-4 py-2 pr-20 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="absolute right-0 top-0 h-full flex items-center pr-3">
              <span className="text-sm text-gray-500">0/30</span>
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="ml-2 p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicInputGroup;