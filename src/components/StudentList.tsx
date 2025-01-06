import React from 'react';

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
];

const StudentList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">New Students <span className="ml-2 px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">4</span></h2>
          <button className="text-sm text-purple-600 hover:text-purple-700">View all</button>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {students.map((student) => (
            <div key={student.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={student.avatar} alt={student.name} className="h-10 w-10 rounded-full" />
                <div>
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-gray-500">{student.date}</p>
                </div>
              </div>
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

export default StudentList;