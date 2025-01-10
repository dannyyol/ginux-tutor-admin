import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/dashboard/DashboardContent';
import StudentsPage from './pages/StudentsPage';
import ChannelsPage from './pages/ChannelsPage';
import PostsPage from './pages/PostsPage';
import RolesPage from './pages/RolesPage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
        <Header onMenuClick={toggleSidebar} />
        
        <main className="lg:ml-64 pt-16">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardContent />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/channels/*" element={<ChannelsPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/roles" element={<RolesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;