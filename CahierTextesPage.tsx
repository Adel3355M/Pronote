import React, { useState } from 'react';
import { ChevronDown, Calendar, Grid, List, BookOpen, Clock } from 'lucide-react';

const CahierTextesPage = () => {
  const [activeTab, setActiveTab] = useState('contenu-ressources');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [viewMode, setViewMode] = useState('chronologique');
  const [selectedDate, setSelectedDate] = useState('lun. 26 mai');
  const [selectedTheme, setSelectedTheme] = useState('tous-themes');

  const tabs = [
    { id: 'contenu-ressources', label: 'Contenu et ressources' },
    { id: 'travail-faire', label: 'Travail à faire' }
  ];

  const subjects = [
    { id: 'all', name: 'Toutes les matières', count: null },
    { id: 'mathematiques', name: 'MATHÉMATIQUES', count: 2 },
    { id: 'francais', name: 'FRANÇAIS', count: 3 },
    { id: 'anglais', name: 'ANGLAIS LV1', count: 1 },
    { id: 'histoire-geo', name: 'HISTOIRE-GÉOGRAPHIE', count: 2 },
    { id: 'espagnol', name: 'ESPAGNOL LV2', count: 1 },
    { id: 'sciences-gestion', name: 'SC.GESTION&NUMÉRIQUE', count: 2 },
    { id: 'management', name: 'MANAGEMENT', count: 1 },
    { id: 'droit-eco', name: 'DROIT ET ÉCONOMIE', count: 2 },
    { id: 'eps', name: 'ED.PHYSIQUE & SPORT.', count: 1 }
  ];

  const coursesData = [
    {
      date: 'Lundi 02 juin',
      courses: [
        {
          subject: 'MATHÉMATIQUES',
          teacher: 'M. HULIN J.',
          time: '14h10 à 15h15',
          type: 'Révision',
          content: 'Dérivée et étude de fonctions.',
          category: 'Travaux pratiques',
          color: 'border-l-blue-500'
        }
      ]
    },
    {
      date: 'Lundi 26 mai',
      courses: [
        {
          subject: 'MATHÉMATIQUES',
          teacher: 'M. HULIN J.',
          time: '14h10 à 15h15',
          type: 'Révisions',
          content: 'Dérivée.',
          category: 'Travaux pratiques',
          color: 'border-l-blue-500'
        }
      ]
    },
    {
      date: 'Vendredi 23 mai',
      courses: [
        {
          subject: 'FRANÇAIS',
          teacher: 'M. DILGER J.',
          time: '08h00 à 09h00',
          type: 'Cours',
          content: 'Analyse littéraire - Les figures de style dans la poésie romantique.',
          category: 'Cours magistral',
          color: 'border-l-red-500'
        },
        {
          subject: 'ANGLAIS LV1',
          teacher: 'M. ESTRADA F.',
          time: '10h10 à 11h10',
          type: 'Expression orale',
          content: 'Présentation des projets - Thème: "Future careers and ambitions".',
          category: 'Travaux pratiques',
          color: 'border-l-green-500'
        }
      ]
    },
    {
      date: 'Jeudi 22 mai',
      courses: [
        {
          subject: 'HISTOIRE-GÉOGRAPHIE',
          teacher: 'Mme RENÉ H.',
          time: '09h50 à 10h45',
          type: 'Cours',
          content: 'La Première Guerre mondiale - Les causes et le déclenchement du conflit.',
          category: 'Cours magistral',
          color: 'border-l-yellow-500'
        },
        {
          subject: 'SC.GESTION&NUMÉRIQUE',
          teacher: 'M. NOEL K.',
          time: '14h05 à 15h00',
          type: 'TP',
          content: 'Création d\'une base de données - Gestion des stocks d\'une entreprise.',
          category: 'Travaux pratiques',
          color: 'border-l-purple-500'
        }
      ]
    },
    {
      date: 'Mercredi 21 mai',
      courses: [
        {
          subject: 'MANAGEMENT',
          teacher: 'M. KOUROUMA A.',
          time: '08h00 à 09h00',
          type: 'Cours',
          content: 'Les styles de management - Management participatif vs autoritaire.',
          category: 'Cours magistral',
          color: 'border-l-teal-500'
        },
        {
          subject: 'ESPAGNOL LV2',
          teacher: 'Mme MAALLOU N.',
          time: '13h10 à 14h05',
          type: 'Expression écrite',
          content: 'Rédaction d\'une lettre formelle - Candidature pour un emploi.',
          category: 'Travaux pratiques',
          color: 'border-l-orange-500'
        }
      ]
    },
    {
      date: 'Mardi 20 mai',
      courses: [
        {
          subject: 'DROIT ET ÉCONOMIE',
          teacher: 'M. GHDAS S.',
          time: '10h45 à 11h40',
          type: 'Cours',
          content: 'Le contrat de travail - Les différents types de contrats et leurs spécificités.',
          category: 'Cours magistral',
          color: 'border-l-pink-500'
        },
        {
          subject: 'ED.PHYSIQUE & SPORT.',
          teacher: 'M. LAURENT B.',
          time: '15h00 à 16h15',
          type: 'Pratique',
          content: 'Handball - Techniques de tir et tactiques défensives.',
          category: 'Activité physique',
          color: 'border-l-indigo-500'
        }
      ]
    }
  ];

  const filteredCourses = selectedSubject === 'all' 
    ? coursesData 
    : coursesData.map(day => ({
        ...day,
        courses: day.courses.filter(course => 
          course.subject.toLowerCase().includes(selectedSubject.toLowerCase()) ||
          selectedSubject === 'all'
        )
      })).filter(day => day.courses.length > 0);

  const renderTravailAFaire = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Message principal */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex flex-col items-center justify-center py-20 px-6">
            {/* Illustration avec papillons */}
            <div className="relative mb-8">
              <div className="w-48 h-48 bg-blue-50 rounded-full flex items-center justify-center relative overflow-hidden">
                {/* Papillon principal (bleu et jaune) */}
                <div className="absolute top-12 right-16 transform rotate-12">
                  <div className="relative">
                    {/* Corps du papillon */}
                    <div className="w-1 h-8 bg-gray-600 rounded-full mx-auto"></div>
                    {/* Ailes supérieures */}
                    <div className="absolute -top-2 -left-3 w-6 h-4 bg-blue-600 rounded-full transform -rotate-12"></div>
                    <div className="absolute -top-2 -right-3 w-6 h-4 bg-yellow-400 rounded-full transform rotate-12"></div>
                    {/* Ailes inférieures */}
                    <div className="absolute top-2 -left-2 w-4 h-3 bg-blue-500 rounded-full transform -rotate-45"></div>
                    <div className="absolute top-2 -right-2 w-4 h-3 bg-yellow-300 rounded-full transform rotate-45"></div>
                    {/* Points décoratifs */}
                    <div className="absolute -top-1 -left-2 w-1 h-1 bg-yellow-500 rounded-full"></div>
                    <div className="absolute -top-1 -right-2 w-1 h-1 bg-blue-700 rounded-full"></div>
                  </div>
                </div>

                {/* Papillon secondaire (vert) */}
                <div className="absolute bottom-16 left-12 transform -rotate-12">
                  <div className="relative">
                    {/* Corps du papillon */}
                    <div className="w-1 h-6 bg-gray-600 rounded-full mx-auto"></div>
                    {/* Ailes supérieures */}
                    <div className="absolute -top-1 -left-2 w-4 h-3 bg-green-500 rounded-full transform -rotate-12"></div>
                    <div className="absolute -top-1 -right-2 w-4 h-3 bg-green-400 rounded-full transform rotate-12"></div>
                    {/* Ailes inférieures */}
                    <div className="absolute top-1 -left-1 w-3 h-2 bg-green-600 rounded-full transform -rotate-45"></div>
                    <div className="absolute top-1 -right-1 w-3 h-2 bg-green-300 rounded-full transform rotate-45"></div>
                    {/* Points décoratifs */}
                    <div className="absolute top-0 -left-1 w-1 h-1 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-0 -right-1 w-1 h-1 bg-orange-400 rounded-full"></div>
                  </div>
                </div>

                {/* Arc décoratif */}
                <div className="absolute top-8 left-8 w-16 h-8 border-4 border-yellow-400 rounded-full border-b-transparent border-r-transparent transform rotate-45"></div>
                <div className="absolute bottom-12 right-8 w-12 h-6 border-4 border-green-400 rounded-full border-t-transparent border-l-transparent transform -rotate-12"></div>
                
                {/* Cercle central décoratif */}
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Message principal */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Aucun travail à faire n'a été saisi depuis le 26/05/2025
            </h3>
            
            <p className="text-gray-600 text-center max-w-md">
              Profitez de ce moment de liberté ! Vos professeurs n'ont pas encore donné de nouveaux devoirs depuis cette date.
            </p>

            {/* Boutons d'action optionnels */}
            <div className="flex items-center space-x-4 mt-8">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm">
                Actualiser
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors text-sm">
                Voir l'historique
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContenuRessources = () => {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Grid className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">Contenu</h2>
          </div>
        </div>

        <div className="p-6">
          {filteredCourses.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                {day.date}
              </h3>
              
              <div className="space-y-4">
                {day.courses.map((course, courseIndex) => (
                  <div 
                    key={courseIndex} 
                    className={`border-l-4 ${course.color} bg-gray-50 p-4 rounded-r-lg hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-blue-600 text-sm">
                          {course.subject}
                        </h4>
                        <p className="text-sm text-gray-600">{course.teacher}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-700">
                          {course.time}
                        </div>
                        <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {course.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <span className="font-medium text-gray-800">{course.type}</span>
                    </div>
                    
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {course.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">Aucun contenu trouvé pour cette matière.</p>
            </div>
          )}
        </div>
      </div>
    );
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

      {activeTab === 'travail-faire' ? (
        <div className="p-6">
          {renderTravailAFaire()}
        </div>
      ) : (
        <div className="flex">
          {/* Sidebar gauche */}
          <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-blue-600 mb-4">
                Contenu et ressources pédagogiques :
              </h3>
              
              <div className="space-y-1">
                {subjects.map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => setSelectedSubject(subject.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left text-sm rounded transition-colors ${
                      selectedSubject === subject.id
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className={subject.id === 'all' ? 'font-medium' : ''}>
                      {subject.name}
                    </span>
                    {subject.count && (
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {subject.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="flex-1 p-6">
            {/* En-tête avec contrôles */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setViewMode('chronologique')}
                    className={`flex items-center space-x-2 px-3 py-2 rounded text-sm transition-colors ${
                      viewMode === 'chronologique'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Vue chronologique</span>
                  </button>
                  <button
                    onClick={() => setViewMode('hebdomadaire')}
                    className={`flex items-center space-x-2 px-3 py-2 rounded text-sm transition-colors ${
                      viewMode === 'hebdomadaire'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    <span>Vue hebdomadaire</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">depuis</span>
                    <div className="relative">
                      <select 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="lun. 26 mai">lun. 26 mai</option>
                        <option value="lun. 19 mai">lun. 19 mai</option>
                        <option value="lun. 12 mai">lun. 12 mai</option>
                        <option value="lun. 05 mai">lun. 05 mai</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <select 
                      value={selectedTheme}
                      onChange={(e) => setSelectedTheme(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="tous-themes">Tous les thèmes</option>
                      <option value="cours">Cours magistraux</option>
                      <option value="tp">Travaux pratiques</option>
                      <option value="revisions">Révisions</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section Contenu */}
            {renderContenuRessources()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CahierTextesPage;