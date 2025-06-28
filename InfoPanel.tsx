import React from 'react';
import { Info, MessageSquare, Calendar, ChevronLeft, ChevronRight, Bell } from 'lucide-react';

const InfoPanel = () => {
  const infoItems = [
    {
      title: "Dernier jour de cantine le 11 juin 2025",
      author: "CICERONE B.",
      icon: "🍽️",
      date: "Il y a 2h"
    },
    {
      title: "Distribution convocations BAC 2025",
      author: "CLOUET L.",
      icon: "📋",
      date: "Hier"
    },
    {
      title: "Spécialité non poursuivie",
      author: "CLOUET L.",
      icon: "📚",
      date: "Il y a 3j"
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Informations & Sondages */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-3 sm:p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Informations</h2>
          </div>
        </div>
        <div className="p-2 sm:p-4">
          <div className="space-y-2 sm:space-y-3">
            {infoItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <span className="text-base sm:text-lg flex-shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-medium text-gray-800 line-clamp-2">
                    {item.title}
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="text-xs text-gray-500">{item.author}</div>
                    <div className="text-xs text-gray-400">{item.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Discussions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-3 sm:p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Discussions</h2>
          </div>
        </div>
        <div className="p-3 sm:p-4">
          <div className="text-center py-4 sm:py-6">
            <MessageSquare className="w-8 h-8 sm:w-12 sm:h-12 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-600 text-xs sm:text-sm">Aucun nouveau message</p>
          </div>
        </div>
      </div>

      {/* Menu de la cantine */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-3 sm:p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <span className="text-lg">🍽️</span>
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Menu cantine</h2>
          </div>
        </div>
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <button className="p-1 hover:bg-gray-100 rounded touch-manipulation">
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <span className="font-medium text-gray-700 text-xs sm:text-sm">Aujourd'hui</span>
            <button className="p-1 hover:bg-gray-100 rounded touch-manipulation">
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
          <div className="text-center py-4">
            <span className="text-4xl mb-2 block">🍽️</span>
            <p className="text-gray-600 text-xs sm:text-sm">Aucun menu disponible</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;