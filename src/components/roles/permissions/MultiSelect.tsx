import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown, X } from 'lucide-react';

interface Option {
  id: number;
  name: string;
}

interface MultiSelectProps {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect = ({ options, selected, onChange }: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (optionId: number) => {
    const stringId = optionId.toString();
    if (selected.includes(stringId)) {
      onChange(selected.filter(id => id !== stringId));
    } else {
      onChange([...selected, stringId]);
    }
  };

  const removeOption = (optionId: string) => {
    onChange(selected.filter(id => id !== optionId));
  };

  const renderSelectedContent = () => {
    if (selected.length === 0) {
      return <span className="text-gray-500">Select permissions...</span>;
    }

    if (selected.length > 5) {
      return (
        <span className="text-gray-700">
          {selected.length} of {options.length} selected
        </span>
      );
    }

    return selected.map(id => {
      const option = options.find(opt => opt.id.toString() === id);
      return option ? (
        <span
          key={option.id}
          className="inline-flex items-center px-2 py-1 rounded bg-purple-100 text-purple-700 text-sm"
        >
          {option.name}
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeOption(id);
            }}
            className="ml-1 hover:text-purple-900"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ) : null;
    });
  };

  return (
    <div className="relative" ref={containerRef}>
      <div
        className="min-h-[2.5rem] px-4 py-2 border border-gray-200 rounded-lg bg-white cursor-pointer flex flex-wrap gap-2 items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {renderSelectedContent()}
        <button className="ml-auto">
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {options.map(option => (
            <div
              key={option.id}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center"
              onClick={() => toggleOption(option.id)}
            >
              <div className="w-4 h-4 border border-gray-300 rounded mr-3 flex items-center justify-center">
                {selected.includes(option.id.toString()) && (
                  <Check className="h-3 w-3 text-purple-600" />
                )}
              </div>
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;