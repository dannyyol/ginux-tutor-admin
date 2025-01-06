import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/dashboard/DashboardContent';
import StudentsPage from './pages/StudentsPage';
import ChannelsPage from './pages/ChannelsPage';
import PostsPage from './pages/PostsPage';
import RolesPage from './pages/RolesPage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
      <Header onMenuClick={toggleSidebar} />
      
      <main className="lg:ml-64 pt-16">
        {currentPage === 'dashboard' && <DashboardContent />}
        {currentPage === 'students' && <StudentsPage />}
        {currentPage === 'channels' && <ChannelsPage />}
        {currentPage === 'posts' && <PostsPage />}
        {currentPage === 'roles' && <RolesPage />}
      </main>
    </div>
  );
}

export default App;