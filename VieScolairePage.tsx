import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { generateWeeks, generateScheduleData } from '../utils/scheduleData';

const VieScolairePage = () => {
  const [activeTab, setActiveTab] = useState('emploi-du-temps');
  const [currentWeek, setCurrentWeek] = useState(0);

  const tabs = [
    { id: 'emploi-du-temps', label: 'Emploi du temps' },
    { id: 'carnet', label: 'Carnet' }
  ];

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
    <div className="min-h-screen bg-gray-50">
      {/* Tabs de navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="p-6">
        {/* En-tête avec navigation */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-medium text-blue-600">Mon emploi du temps</h1>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => navigateWeek('prev')}
                disabled={currentWeek === 0}
                className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-medium text-gray-700 text-sm min-w-[280px] text-center">
                {currentWeekData.label}
              </span>
              <button 
                onClick={() => navigateWeek('next')}
                disabled={currentWeek === weeks.length - 1}
                className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Semaine {currentWeek + 1}/44</span>
          </div>
        </div>

        {/* Emploi du temps */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              {/* En-tête avec les jours */}
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="w-16 p-2 bg-gray-50 border-r border-gray-200"></th>
                  {currentWeekData.days.slice(0, 5).map((day, index) => (
                    <th key={index} className="p-2 bg-gray-50 border-r border-gray-200 text-center">
                      <div className="text-sm font-medium text-gray-800">{day.dayName}</div>
                      <div className="text-xs text-gray-600">{day.fullDate.toString().padStart(2, '0')} {day.month}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentWeekData.timeSlots.map((time, timeIndex) => (
                  <tr key={time} className="border-b border-gray-200">
                    <td className="w-16 p-2 bg-gray-50 border-r border-gray-200 text-xs font-medium text-gray-600 text-center">
                      {time}
                    </td>
                    {[0, 1, 2, 3, 4].map((dayIndex) => {
                      const daySchedule = currentSchedule[dayIndex] || [];
                      const courseAtTime = daySchedule.find(course => course.time === time);
                      
                      return (
                        <td key={dayIndex} className="p-1 border-r border-gray-200 h-16 align-top">
                          {courseAtTime && (
                            <div className={`${courseAtTime.color} ${courseAtTime.textColor} p-2 rounded text-xs h-full transition-all hover:shadow-md`}>
                              {courseAtTime.status && (
                                <div className="font-semibold text-center mb-1 text-red-600">
                                  {courseAtTime.status}
                                </div>
                              )}
                              <div className="font-semibold">{courseAtTime.subject}</div>
                              <div className="text-xs opacity-90">{courseAtTime.teacher}</div>
                              {courseAtTime.teacher2 && (
                                <div className="text-xs opacity-90">{courseAtTime.teacher2}</div>
                              )}
                              <div className="text-xs opacity-75">{courseAtTime.room}</div>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Légende */}
        <div className="mt-4 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-sm font-medium text-gray-800 mb-3">Légende</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-200 rounded"></div>
              <span>Français/Espagnol</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-teal-200 rounded"></div>
              <span>Mathématiques</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-200 rounded"></div>
              <span>Anglais/EPS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-200 rounded"></div>
              <span>Histoire-Géo</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-200 rounded"></div>
              <span>Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VieScolairePage;