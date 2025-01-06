import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalItems, currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-gray-500">
        Showing 1 to {totalItems} of {totalItems} entries
      </p>
      <div className="flex gap-2">
        <button 
          className="p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded">1</button>
        <button className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50">2</button>
        <button 
          className="p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;