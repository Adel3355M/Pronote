import React from 'react';
import { Calendar, Plus } from 'lucide-react';

const Agenda = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-3 sm:p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Agenda</h2>
          </div>
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors touch-manipulation">
            <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="text-center py-6 sm:py-8">
          <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-600 text-sm">Aucun événement à venir</p>
          <p className="text-gray-500 text-xs mt-1">Votre agenda est libre</p>
        </div>
      </div>
    </div>
  );
};

export default Agenda;