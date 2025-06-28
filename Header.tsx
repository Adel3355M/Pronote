import React from 'react';
import { User, LogOut, Menu } from 'lucide-react';

interface HeaderProps {
  user?: {
    username: string;
  };
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-3 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img 
                src="https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&w=60&h=40&fit=crop" 
                alt="Île-de-France" 
                className="h-6 sm:h-8"
              />
              <div className="text-blue-600 font-semibold text-base sm:text-lg">
                mon <span className="text-teal-500">Lycée</span>.net
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="text-right hidden sm:block">
              <div className="font-semibold text-gray-800 text-sm lg:text-base">LYCEE LOUISE MICHEL LYCEE POLYVALENT REGIONAL</div>
              <div className="text-xs sm:text-sm text-gray-600">
                Espace Élèves - GLODEAN Giorgiana (1 STMG2)
                {user && (
                  <span className="ml-2 text-blue-600">({user.username})</span>
                )}
              </div>
            </div>
            
            {/* Version mobile simplifiée */}
            <div className="text-right sm:hidden">
              <div className="text-xs text-gray-600">
                GLODEAN Giorgiana
                {user && (
                  <span className="block text-blue-600">({user.username})</span>
                )}
              </div>
            </div>
            
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
            </div>
            
            {onLogout && (
              <button
                onClick={onLogout}
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors touch-manipulation"
                title="Se déconnecter"
              >
                <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Déconnexion</span>
              </button>
            )}
            
            <div className="text-red-500 font-bold text-sm sm:text-lg">PRONOTE</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;