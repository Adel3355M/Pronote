import React from 'react';
import { AlertTriangle, MessageSquare, TrendingUp } from 'lucide-react';

const Correspondence = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-3 sm:p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">Carnet de correspondance</h2>
        </div>
      </div>
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
        <div className="flex items-start space-x-2 sm:space-x-3">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-red-600 text-sm">Absence non justifiée</div>
            <div className="text-xs sm:text-sm text-gray-600">le 11 juin de 9h00 à 11h10</div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-3 sm:pt-4">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <h3 className="font-semibold text-gray-800 text-sm">Dernières notes</h3>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">Aucune nouvelle note</p>
        </div>
      </div>
    </div>
  );
};

export default Correspondence;