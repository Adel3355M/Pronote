import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';
import { generateWeeks, generateScheduleData } from '../utils/scheduleData';

const Schedule = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const weeks = generateWeeks();
  const scheduleData = generateScheduleData(weeks);

  const currentWeekData = weeks[currentWeek];
  const currentSchedule = scheduleData[currentWeek] || {};

  const navigateWeek = (direction) => {
    if (direction === 'prev' && currentWeek > 0) {
      setCurrentWeek(currentWeek - 1);
    } else if (direction === 'next' && currentWeek < weeks.length - 1) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-3 sm:p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Emploi du temps</h2>
          </div>
        </div>
        
        {/* Navigation des semaines */}
        <div className="flex items-center justify-center space-x-2">
          <button 
            onClick={() => navigateWeek('prev')}
            disabled={currentWeek === 0}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-medium text-gray-700 text-xs sm:text-sm text-center px-2">
            {currentWeekData.label}
          </span>
          <button 
            onClick={() => navigateWeek('next')}
            disabled={currentWeek === weeks.length - 1}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Emploi du temps mobile optimisé */}
      <div className="p-2 sm:p-4">
        <div className="space-y-1.5 sm:space-y-2">
          {currentWeekData.timeSlots.slice(0, 8).map((time, timeIndex) => {
            // Afficher seulement les cours du lundi (dayIndex = 0) pour la page d'accueil
            const daySchedule = currentSchedule[0] || [];
            const courseAtTime = daySchedule.find(course => course.time === time);
            
            return (
              <div key={timeIndex} className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 sm:w-12 flex-shrink-0 text-xs font-medium text-gray-600 text-center">
                  {time}
                </div>
                <div className={`flex-1 p-2 sm:p-3 rounded-lg text-xs transition-all hover:shadow-sm ${
                  courseAtTime 
                    ? `${courseAtTime.color} ${courseAtTime.textColor}` 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {courseAtTime ? (
                    <div className="space-y-0.5">
                      {courseAtTime.status && (
                        <div className="font-semibold text-center text-red-600 text-xs">
                          {courseAtTime.status}
                        </div>
                      )}
                      <div className="font-semibold text-xs sm:text-sm">{courseAtTime.subject}</div>
                      <div className="opacity-90 text-xs">{courseAtTime.teacher}</div>
                      {courseAtTime.teacher2 && (
                        <div className="opacity-90 text-xs">{courseAtTime.teacher2}</div>
                      )}
                      <div className="opacity-75 text-xs flex items-center">
                        <span>{courseAtTime.room}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="italic text-xs text-center py-1">Pas de cours</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Légende mobile optimisée */}
      <div className="px-2 sm:px-4 pb-3 sm:pb-4">
        <div className="text-xs text-gray-500">
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-200 rounded"></div>
              <span className="text-xs">Français/Espagnol</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-200 rounded"></div>
              <span className="text-xs">Mathématiques</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-200 rounded"></div>
              <span className="text-xs">Gestion</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-200 rounded"></div>
              <span className="text-xs">Anglais/EPS</span>
            </div>
          </div>
          <div className="mt-2 text-center">
            <span className="text-blue-600 font-medium text-xs">Semaine {currentWeek + 1}/44</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;