import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const students = [
  {
    id: 1,
    name: 'Martin Lewis',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: '3 Sep 2024',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Sofia Annisa',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: '3 Sep 2024',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Shakir Ramzi',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: '3 Sep 2024',
    status: 'Active',
  },
  {
    id: 4,
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    date: '3 Sep 2024',
    status: 'Active',
  }
];

const StudentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= students.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? students.length - itemsPerPage : prev - 1
    );
  };

  const visibleStudents = students.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">New Students <span className="ml-2 px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">4</span></h2>
          <div className="flex items-center space-x-2">
            <button onClick={prevSlide} className="p-1 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button onClick={nextSlide} className="p-1 hover:bg-gray-100 rounded-full">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          {visibleStudents.map((student) => (
            <div key={student.id} className="flex flex-col items-center p-4 border border-gray-100 rounded-lg">
              <img src={student.avatar} alt={student.name} className="h-16 w-16 rounded-full mb-3" />
              <h3 className="font-medium text-center">{student.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{student.date}</p>
              <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                {student.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentSlider;