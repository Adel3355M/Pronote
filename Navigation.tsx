import React, { useState } from 'react';
import { Home, BookOpen, FileText, Calendar, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Page d\'accueil' },
    { id: 'mes-donnees', icon: FileText, label: 'Mes données' },
    { id: 'cahier-textes', icon: BookOpen, label: 'Cahier de textes' },
    { id: 'notes', icon: FileText, label: 'Notes' },
    { id: 'vie-scolaire', icon: Calendar, label: 'Vie scolaire' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation desktop */}
      <nav className="bg-gray-700 text-white hidden sm:block">
        <div className="px-6">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-white text-gray-800 border-b-2 border-blue-500' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-600'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Navigation mobile */}
      <div className="sm:hidden">
        {/* Bouton menu mobile */}
        <div className="bg-gray-700 text-white px-3 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-600 rounded-lg transition-colors touch-manipulation"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <span className="text-sm font-medium">
              {navItems.find(item => item.id === currentPage)?.label || 'Menu'}
            </span>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMobileMenuOpen && (
          <div className="bg-gray-700 border-t border-gray-600">
            <div className="px-3 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors touch-manipulation ${
                    currentPage === item.id
                      ? 'bg-white text-gray-800' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-600'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;