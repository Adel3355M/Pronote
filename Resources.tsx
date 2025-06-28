import React from 'react';
import { FileText, Download, Folder } from 'lucide-react';

const Resources = () => {
  const resources = [
    { subject: 'MATHEMATIQUES', file: 'TP pl42.py', date: 'déposé le 22 mai', icon: '📄', size: '2.1 KB' },
    { subject: 'MATHEMATIQUES', file: 'Jazz.pdf', date: 'déposé le 22 mai', icon: '📕', size: '1.2 MB' },
    { subject: 'MATHEMATIQUES', file: 'Eval B.pdf', date: 'déposé le 19 mai', icon: '📕', size: '856 KB' },
    { subject: 'MATHEMATIQUES', file: 'Eval A.pdf', date: 'déposé le 19 mai', icon: '📕', size: '743 KB' },
    { subject: 'MATHEMATIQUES', file: 'Evo81.ods', date: 'déposé le 15 mai', icon: '📊', size: '45 KB' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-3 sm:p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Folder className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">Ressources pédagogiques</h2>
        </div>
      </div>
      <div className="p-2 sm:p-4">
        <div className="space-y-2 sm:space-y-3">
          {resources.slice(0, 4).map((resource, index) => (
            <div key={index} className="border-l-4 border-teal-500 pl-2 sm:pl-3 py-2 bg-teal-50 rounded-r-lg">
              <div className="flex items-start justify-between space-x-2">
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-teal-600 mb-1">
                    {resource.subject}
                  </div>
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <span className="text-sm sm:text-lg">{resource.icon}</span>
                    <span className="text-xs sm:text-sm text-blue-600 hover:underline cursor-pointer font-medium truncate">
                      {resource.file}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="text-xs text-gray-500">{resource.date}</div>
                    <div className="text-xs text-gray-500">{resource.size}</div>
                  </div>
                </div>
                <button className="p-1.5 sm:p-2 hover:bg-teal-100 rounded-lg transition-colors touch-manipulation">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                </button>
              </div>
            </div>
          ))}
          
          {resources.length > 4 && (
            <div className="text-center pt-2">
              <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium touch-manipulation">
                Voir toutes les ressources ({resources.length})
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;