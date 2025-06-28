import React from 'react';
import { Clock, AlertCircle, ChevronRight } from 'lucide-react';
import { getUpcomingHomework, formatDateFrench, getPriorityColor, getTypeIcon } from '../utils/homeworkData';

const WorkToDo = () => {
  const upcomingHomework = getUpcomingHomework();

  if (upcomingHomework.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-3 sm:p-4 border-b border-gray-200">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">Travail à faire</h2>
        </div>
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-center py-6 sm:py-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎉</div>
              <p className="text-gray-600 text-sm">Aucun travail à faire</p>
              <p className="text-gray-500 text-xs mt-1">Profitez de ce moment !</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-3 sm:p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">Travail à faire</h2>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
            <span className="text-xs sm:text-sm text-blue-600 font-medium">
              {upcomingHomework.length} tâche{upcomingHomework.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>
      <div className="p-2 sm:p-4 space-y-2 sm:space-y-3">
        {upcomingHomework.slice(0, 3).map((homework) => (
          <div 
            key={homework.id} 
            className={`border-l-4 p-2.5 sm:p-3 rounded-r-lg transition-all hover:shadow-md ${getPriorityColor(homework.priority)}`}
          >
            <div className="flex items-start justify-between space-x-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1.5 sm:space-x-2 mb-1">
                  <span className="text-sm sm:text-lg">{getTypeIcon(homework.type)}</span>
                  <div className="text-xs sm:text-sm font-semibold text-blue-600 truncate">
                    {homework.subject}
                  </div>
                  {homework.priority === 'high' && (
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                  )}
                </div>
                <div className="text-xs text-gray-600 mb-1 truncate">{homework.teacher}</div>
                <div className="font-medium text-gray-800 mb-1 text-xs sm:text-sm line-clamp-2">
                  {homework.title}
                </div>
                <div className="text-xs text-gray-700 line-clamp-2 sm:line-clamp-none">
                  {homework.description}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-gray-500">Pour le</div>
                <div className="text-xs sm:text-sm font-medium text-gray-700">
                  {formatDateFrench(homework.dueDate)}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {upcomingHomework.length > 3 && (
          <div className="text-center pt-2">
            <span className="text-xs text-gray-500">
              +{upcomingHomework.length - 3} autre{upcomingHomework.length - 3 > 1 ? 's' : ''} tâche{upcomingHomework.length - 3 > 1 ? 's' : ''}
            </span>
          </div>
        )}
        
        <div className="pt-2 sm:pt-3 border-t border-gray-200">
          <button className="flex items-center justify-center w-full text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium py-2 touch-manipulation">
            Voir tout le travail à faire
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkToDo;