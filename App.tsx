import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Schedule from './components/Schedule';
import WorkToDo from './components/WorkToDo';
import Resources from './components/Resources';
import Correspondence from './components/Correspondence';
import Agenda from './components/Agenda';
import InfoPanel from './components/InfoPanel';
import MyDataPage from './components/MyDataPage';
import NotesPage from './components/NotesPage';
import VieScolairePage from './components/VieScolairePage';
import CahierTextesPage from './components/CahierTextesPage';

interface User {
  username: string;
  password: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (credentials: { username: string; password: string }) => {
    // In production, this would validate against a real authentication system
    setUser(credentials);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'mes-donnees':
        return <MyDataPage />;
      case 'notes':
        return <NotesPage />;
      case 'vie-scolaire':
        return <VieScolairePage />;
      case 'cahier-textes':
        return <CahierTextesPage />;
      case 'home':
      default:
        return (
          <main className="px-3 sm:px-6 py-4 sm:py-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Left Column - Schedule */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <Schedule />
              </div>
              
              {/* Middle Columns - Main Content */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-1 lg:order-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <WorkToDo />
                  <Correspondence />
                </div>
                <Resources />
                <Agenda />
              </div>
              
              {/* Right Column - Info Panel */}
              <div className="lg:col-span-1 order-3">
                <InfoPanel />
              </div>
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={handleLogout} />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;