// Utilitaire partagé pour les données d'emploi du temps
export const generateWeeks = () => {
  const weeks = [];
  const startDate = new Date(2024, 8, 2); // 2 septembre 2024
  const weekTypes = ['P', 'A', 'B'];
  const timeSlotVariations = [
    ['08h00', '09h00', '10h10', '11h10', '12h10', '13h10', '14h10', '15h15', '16h15', '17h10', '18h10'],
    ['08h30', '09h30', '10h40', '11h40', '12h40', '13h40', '14h40', '15h45', '16h45', '17h40', '18h40'],
    ['08h15', '09h15', '10h25', '11h25', '12h25', '13h25', '14h25', '15h30', '16h30', '17h25', '18h25'],
    ['08h45', '09h45', '10h55', '11h55', '12h55', '13h55', '14h55', '16h00', '17h00', '17h55', '18h55'],
    ['08h20', '09h20', '10h30', '11h30', '12h30', '13h30', '14h30', '15h35', '16h35', '17h30', '18h30']
  ];

  for (let i = 0; i < 44; i++) {
    const weekStart = new Date(startDate);
    weekStart.setDate(startDate.getDate() + (i * 7));
    
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 4); // Vendredi
    
    const formatDate = (date) => {
      const day = date.getDate().toString().padStart(2, '0');
      const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
      return `${day}/${months[date.getMonth()]}`;
    };

    const days = [];
    for (let j = 0; j < 6; j++) {
      const currentDay = new Date(weekStart);
      currentDay.setDate(weekStart.getDate() + j);
      const dayNames = ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
      const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
      
      days.push({
        date: i + 1,
        month: months[currentDay.getMonth()],
        dayName: dayNames[j],
        fullDate: currentDay.getDate()
      });
    }

    weeks.push({
      label: `du ${formatDate(weekStart)} au ${formatDate(weekEnd)} - Semaine ${weekTypes[i % 3]}`,
      days: days,
      timeSlots: timeSlotVariations[i % timeSlotVariations.length]
    });
  }

  return weeks;
};

export const generateScheduleData = (weeks) => {
  const subjects = [
    { name: 'MATHEMATIQUES', teacher: 'HULIN J.', room: '223', color: 'bg-teal-200', textColor: 'text-teal-800' },
    { name: 'FRANCAIS', teacher: 'DILGER J.', room: '103', color: 'bg-red-200', textColor: 'text-red-800' },
    { name: 'ANGLAIS LV1', teacher: 'ESTRADA F.', room: '123', color: 'bg-blue-200', textColor: 'text-blue-800' },
    { name: 'HISTOIRE-GEOGRAPHIE', teacher: 'RENE H.', room: '205', color: 'bg-yellow-200', textColor: 'text-yellow-800' },
    { name: 'SC.GESTION&NUMERIQUE', teacher: 'NOEL K.', room: '109i', color: 'bg-gray-200', textColor: 'text-gray-800' },
    { name: 'ESPAGNOL LV2', teacher: 'MAALLOU N.', room: '104', color: 'bg-red-200', textColor: 'text-red-800' },
    { name: 'DROIT ET ECONOMIE', teacher: 'GHDAS S.', room: '121', color: 'bg-pink-200', textColor: 'text-pink-800' },
    { name: 'MANAGEMENT', teacher: 'KOUROUMA A.', room: '122', color: 'bg-green-200', textColor: 'text-green-800' },
    { name: 'ED.PHYSIQUE & SPORT.', teacher: 'LAURENT B.', room: 'Gymnase', color: 'bg-blue-200', textColor: 'text-blue-800' },
    { name: 'ETLV', teacher: 'ESTRADA F., NOEL K.', room: '123', color: 'bg-orange-200', textColor: 'text-orange-800' }
  ];

  const specialEvents = [
    { name: 'Cours annulé', color: 'bg-red-200', textColor: 'text-red-800', status: 'Cours annulé' },
    { name: 'Changement de salle', color: 'bg-teal-200', textColor: 'text-teal-800', status: 'Changement de salle' },
    { name: 'Exceptionnel', color: 'bg-green-200', textColor: 'text-green-800' },
    { name: 'Matière non désignée', color: 'bg-yellow-200', textColor: 'text-yellow-800' }
  ];

  const scheduleData = {};

  // Utiliser une seed fixe pour avoir des données cohérentes
  let seed = 12345;
  const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let weekIndex = 0; weekIndex < 44; weekIndex++) {
    scheduleData[weekIndex] = {};
    
    for (let dayIndex = 0; dayIndex < 5; dayIndex++) { // Lundi à Vendredi
      const daySchedule = [];
      const timeSlots = weeks[weekIndex].timeSlots;
      
      // Générer 3-6 cours par jour de manière déterministe
      const numCourses = 3 + Math.floor(seededRandom() * 4);
      const usedTimeSlots = [];
      
      for (let i = 0; i < numCourses; i++) {
        let timeSlotIndex;
        do {
          timeSlotIndex = Math.floor(seededRandom() * timeSlots.length);
        } while (usedTimeSlots.includes(timeSlotIndex));
        
        usedTimeSlots.push(timeSlotIndex);
        
        // 20% de chance d'avoir un événement spécial
        if (seededRandom() < 0.2) {
          const specialEvent = specialEvents[Math.floor(seededRandom() * specialEvents.length)];
          const originalSubject = subjects[Math.floor(seededRandom() * subjects.length)];
          
          daySchedule.push({
            time: timeSlots[timeSlotIndex],
            subject: specialEvent.name,
            teacher: originalSubject.name,
            teacher2: originalSubject.teacher,
            room: originalSubject.room,
            color: specialEvent.color,
            textColor: specialEvent.textColor,
            status: specialEvent.status
          });
        } else {
          const subject = subjects[Math.floor(seededRandom() * subjects.length)];
          daySchedule.push({
            time: timeSlots[timeSlotIndex],
            subject: subject.name,
            teacher: subject.teacher,
            room: subject.room,
            color: subject.color,
            textColor: subject.textColor
          });
        }
      }
      
      // Trier par heure
      daySchedule.sort((a, b) => {
        const timeA = parseInt(a.time.replace('h', '').replace(':', ''));
        const timeB = parseInt(b.time.replace('h', '').replace(':', ''));
        return timeA - timeB;
      });
      
      scheduleData[weekIndex][dayIndex] = daySchedule;
    }
  }

  return scheduleData;
};