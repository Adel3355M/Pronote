import React, { useState } from 'react';
import { ChevronDown, Download, FileText, TrendingUp, BarChart3 } from 'lucide-react';

const NotesPage = () => {
  const [selectedTrimester, setSelectedTrimester] = useState(1);
  const [activeTab, setActiveTab] = useState('mes-notes');

  // Données des notes pour chaque trimestre
  const notesData = {
    1: {
      subjects: [
        {
          category: 'Tronc commun',
          items: [
            {
              subject: 'FRANÇAIS',
              teacher: 'M. DILGER',
              studentAvg: '6.50',
              classAvg: '10.44',
              appreciation: 'Insuffisant. De nombreuses absences.'
            },
            {
              subject: 'MATHÉMATIQUES',
              teacher: 'M. HULIN',
              studentAvg: '6.00',
              classAvg: '9.63',
              appreciation: 'Résultats insuffisants. Peu de travail, peu d\'implication et des absences. Il faut changer de comportement et se donner les moyens de progresser.'
            },
            {
              subject: 'HISTOIRE-GÉOGRAPHIE',
              teacher: 'Mme RENÉ',
              studentAvg: '11.72',
              classAvg: '12.86',
              appreciation: 'Des résultats en progrès au cours du trimestre, mais le travail peut encore être approfondi. Vous êtes cependant plus investie qu\'au début du trimestre, c\'est bien ! Continuez sur cette lancée.'
            },
            {
              subject: 'ENS. MORAL & CIVIQUE',
              teacher: 'Mme RENÉ',
              studentAvg: '13.00',
              classAvg: '14.12',
              appreciation: 'Malgré un manque de travail au début du trimestre, vous avez su vous ressaisir si l\'attitude était beaucoup plus positive dans la deuxième partie du trimestre. Vous avez donc progressé tout au long du trimestre. Continuez dans cette voie, maintenez vos efforts, c\'est très encourageant.'
            },
            {
              subject: 'ED.PHYSIQUE & SPORT.',
              teacher: 'M. PEREZ',
              studentAvg: '12.00',
              classAvg: '13.35',
              appreciation: 'Ensemble assez satisfaisant. Poursuivez dans cette voie.'
            }
          ]
        },
        {
          category: 'Langues',
          items: [
            {
              subject: 'ANGLAIS LV1',
              teacher: 'M. ESTRADA',
              studentAvg: '8.57',
              classAvg: '11.18',
              appreciation: 'Ensemble irrégulier. Manque d\'investissement personnel et d\'implication en cours.'
            },
            {
              subject: 'ETLV',
              teacher: '',
              studentAvg: '8.57',
              classAvg: '11.18',
              appreciation: ''
            },
            {
              subject: 'ESPAGNOL LV2',
              teacher: 'Mme MAALLOU',
              studentAvg: '10.50',
              classAvg: '11.26',
              appreciation: 'Des résultats justes, mais Giorgiana peut aisément progresser si elle s\'investit davantage en classe et accentue son travail personnel.'
            }
          ]
        },
        {
          category: 'Enseignement technologique',
          items: [
            {
              subject: 'DROIT ET ÉCONOMIE',
              teacher: 'M. GHDAS',
              studentAvg: '11.84',
              classAvg: '12.38',
              appreciation: 'Bon trimestre dans l\'ensemble, continuez ainsi.'
            },
            {
              subject: 'MANAGEMENT',
              teacher: 'M. KOUROUMA',
              studentAvg: '9.00',
              classAvg: '9.91',
              appreciation: 'Ensemble convenable. Vous devez participer davantage et fournir un travail personnel plus conséquent.'
            },
            {
              subject: 'SC.GESTION&NUMÉRIQUE',
              teacher: 'M. NOEL',
              studentAvg: '9.70',
              classAvg: '12.79',
              appreciation: 'Trimestre très juste, accentuez votre implication en classe et dans vos révisions afin d\'atteindre des résultats. Continuez vos efforts de participation à l\'oral.'
            }
          ]
        }
      ],
      generalAverage: { student: '10.00', class: '12.00' },
      schoolLife: {
        absences: '23 demi-journées (47h00) dont 9 sont non justifiées (13h00)'
      },
      globalAppreciation: 'L\'ensemble est juste. Il vous faut plus d\'implication dans le travail pour réussir votre second trimestre.'
    },
    2: {
      subjects: [
        {
          category: 'Tronc commun',
          items: [
            {
              subject: 'FRANÇAIS',
              teacher: 'M. DILGER',
              studentAvg: '7.25',
              classAvg: '13.00',
              appreciation: 'Bien, en progrès. Il faut continuer sur cette bonne lancée.'
            },
            {
              subject: 'MATHÉMATIQUES',
              teacher: 'M. HULIN',
              studentAvg: '7.50',
              classAvg: '10.33',
              appreciation: 'Trop peu d\'implication et de travail pour consolider des capacités dans la discipline. Les résultats sont en conséquence.'
            },
            {
              subject: 'HISTOIRE-GÉOGRAPHIE',
              teacher: 'Mme RENÉ',
              studentAvg: '12.25',
              classAvg: '12.25',
              appreciation: 'Des résultats en progrès, vous semblez avoir pris la mesure du travail à fournir, et êtes plus investie qu\'au premier trimestre. Gardez cette dynamique, poursuivez vos efforts.'
            },
            {
              subject: 'ENS. MORAL & CIVIQUE',
              teacher: 'Mme RENÉ',
              studentAvg: '14.00',
              classAvg: '15.56',
              appreciation: 'Travail très sérieux, à poursuivre au prochain trimestre.'
            },
            {
              subject: 'ED.PHYSIQUE & SPORT.',
              teacher: 'M. PEREZ',
              studentAvg: '13.50',
              classAvg: '13.80',
              appreciation: 'Absente une partie du cycle et lors des évaluations.'
            }
          ]
        },
        {
          category: 'Langues',
          items: [
            {
              subject: 'ANGLAIS LV1',
              teacher: 'M. ESTRADA',
              studentAvg: '9.25',
              classAvg: '15.00',
              appreciation: 'Des résultats corrects. Il faut approfondir le travail personnel et participer plus en cours pour progresser.'
            },
            {
              subject: 'ETLV',
              teacher: '',
              studentAvg: '9.25',
              classAvg: '15.00',
              appreciation: ''
            },
            {
              subject: 'ESPAGNOL LV2',
              teacher: 'Mme MAALLOU',
              studentAvg: '11.75',
              classAvg: '10.83',
              appreciation: 'Ensemble très fragile. Il faut consolider les apprentissages et s\'impliquer davantage en classe.'
            }
          ]
        },
        {
          category: 'Enseignement technologique',
          items: [
            {
              subject: 'DROIT ET ÉCONOMIE',
              teacher: 'M. GHDAS',
              studentAvg: '12.50',
              classAvg: '13.33',
              appreciation: 'Un bon trimestre dans l\'ensemble malgré de nombreuses absences en fin de trimestre.'
            },
            {
              subject: 'MANAGEMENT',
              teacher: 'M. KOUROUMA',
              studentAvg: '10.25',
              classAvg: '8.69',
              appreciation: 'Vous stagnez à un petit niveau. Il faut vous impliquer davantage dans votre travail personnel.'
            },
            {
              subject: 'SC.GESTION&NUMÉRIQUE',
              teacher: 'M. NOEL',
              studentAvg: '10.80',
              classAvg: '11.67',
              appreciation: 'Trimestre difficile, en raison de nombreuses absences incompatibles avec l\'exigence de la matière. Il faut vite remédier à cela si vous souhaitez obtenir des résultats à la hauteur de vos capacités.'
            }
          ]
        }
      ],
      generalAverage: { student: '10.75', class: '12.50' },
      schoolLife: {
        absences: '33 demi-journées (87h00) dont 14 sont non justifiées (23h00)'
      },
      globalAppreciation: 'Ensemble inégal. Il vous faut fournir plus de travail personnel dans l\'ensemble des matières pour assurer de meilleurs résultats, vous en êtes capable. Trop d\'absences.'
    },
    3: {
      subjects: [
        {
          category: 'Tronc commun',
          items: [
            {
              subject: 'FRANÇAIS',
              teacher: 'M. DILGER',
              studentAvg: '8.75',
              classAvg: '13.00',
              appreciation: 'Bien trop juste. Le travail n\'est pas assez approfondi.'
            },
            {
              subject: 'MATHÉMATIQUES',
              teacher: 'M. HULIN',
              studentAvg: '8.25',
              classAvg: '10.33',
              appreciation: 'Les résultats sont insuffisants, par manque de travail et d\'assiduité. Il faudra faire un réel effort l\'année prochaine sous peine de décrocher dans la matière.'
            },
            {
              subject: 'HISTOIRE-GÉOGRAPHIE',
              teacher: 'Mme RENÉ',
              studentAvg: '13.50',
              classAvg: '12.25',
              appreciation: 'Beaucoup de progrès ce trimestre. Maintenez ces efforts l\'an prochain, et soyez plus dynamique en classe.'
            },
            {
              subject: 'ENS. MORAL & CIVIQUE',
              teacher: 'Mme RENÉ',
              studentAvg: '15.00',
              classAvg: '15.56',
              appreciation: 'Le devoir maison était très satisfaisant, mais il faut aussi apprendre le cours...'
            },
            {
              subject: 'ED.PHYSIQUE & SPORT.',
              teacher: 'M. PEREZ',
              studentAvg: '14.00',
              classAvg: '14.20',
              appreciation: 'Ensemble satisfaisant.'
            }
          ]
        },
        {
          category: 'Langues',
          items: [
            {
              subject: 'ANGLAIS LV1',
              teacher: 'M. ESTRADA',
              studentAvg: '10.75',
              classAvg: '15.00',
              appreciation: 'Ensemble satisfaisant. Bonne participation. Élève sérieuse.'
            },
            {
              subject: 'ETLV',
              teacher: '',
              studentAvg: '10.75',
              classAvg: '15.00',
              appreciation: ''
            },
            {
              subject: 'ESPAGNOL LV2',
              teacher: 'Mme MAALLOU',
              studentAvg: '12.25',
              classAvg: '10.83',
              appreciation: 'Bilan convenable sur le plan des résultats écrits, mais la participation orale demeure inexistante.'
            }
          ]
        },
        {
          category: 'Enseignement technologique',
          items: [
            {
              subject: 'DROIT ET ÉCONOMIE',
              teacher: 'M. GHDAS',
              studentAvg: '13.25',
              classAvg: '13.33',
              appreciation: 'Quelques efforts ce trimestre pour combler certaines lacunes, c\'est bien.'
            },
            {
              subject: 'MANAGEMENT',
              teacher: 'M. KOUROUMA',
              studentAvg: '11.50',
              classAvg: '8.69',
              appreciation: 'Un début de trimestre moyen qui se termine par une très bonne note. La régularité sera la clé d\'une bonne année de terminale.'
            },
            {
              subject: 'SC.GESTION&NUMÉRIQUE',
              teacher: 'M. NOEL',
              studentAvg: '11.90',
              classAvg: '12.67',
              appreciation: 'Trimestre trop juste, des efforts ont été constatés dans vos révisions mais vos absences vous empêchent d\'atteindre des résultats.'
            }
          ]
        }
      ],
      generalAverage: { student: '11.50', class: '12.75' },
      schoolLife: {
        absences: '40 demi-journées (81h00) dont 35 sont non justifiées (69h00)'
      },
      globalAppreciation: 'Progrès notable ce trimestre. Continuez sur cette lancée pour l\'année prochaine.'
    }
  };

  const currentData = notesData[selectedTrimester];

  const tabs = [
    { id: 'mes-notes', label: 'Mes notes' },
    { id: 'bulletins', label: 'Bulletins' },
    { id: 'graphes', label: 'Graphiques' }
  ];

  const trimesterOptions = [
    { value: 1, label: 'Trimestre 1' },
    { value: 2, label: 'Trimestre 2' },
    { value: 3, label: 'Trimestre 3' }
  ];

  // Données pour les bulletins PDF
  const bulletinsPDF = [
    {
      id: 1,
      title: 'Bulletin Trimestre 1',
      date: '2024-12-20',
      size: '245 KB',
      status: 'Disponible'
    },
    {
      id: 2,
      title: 'Bulletin Trimestre 2',
      date: '2025-03-15',
      size: '238 KB',
      status: 'Disponible'
    },
    {
      id: 3,
      title: 'Bulletin Trimestre 3',
      date: '2025-06-20',
      size: '251 KB',
      status: 'Disponible'
    }
  ];

  // Fonction pour télécharger un bulletin PDF
  const downloadBulletin = (bulletinId: number) => {
    // Simulation du téléchargement
    const bulletin = bulletinsPDF.find(b => b.id === bulletinId);
    if (bulletin) {
      // En production, ceci ferait un appel API pour télécharger le PDF
      console.log(`Téléchargement du ${bulletin.title}`);
      // Simulation d'un téléchargement
      const link = document.createElement('a');
      link.href = '#'; // En production, ce serait l'URL du PDF
      link.download = `${bulletin.title.replace(/\s+/g, '_')}.pdf`;
      link.click();
    }
  };

  // Fonction pour créer les données de graphique
  const getChartData = () => {
    const subjects = ['FRANÇAIS', 'MATHÉMATIQUES', 'HISTOIRE-GÉOGRAPHIE', 'ANGLAIS LV1', 'ESPAGNOL LV2', 'DROIT ET ÉCONOMIE', 'MANAGEMENT', 'SC.GESTION&NUMÉRIQUE'];
    
    return subjects.map(subject => {
      const t1Data = notesData[1].subjects.flatMap(cat => cat.items).find(item => item.subject === subject);
      const t2Data = notesData[2].subjects.flatMap(cat => cat.items).find(item => item.subject === subject);
      const t3Data = notesData[3].subjects.flatMap(cat => cat.items).find(item => item.subject === subject);
      
      return {
        subject: subject.replace(/\s+/g, ' '),
        t1: t1Data ? parseFloat(t1Data.studentAvg) : 0,
        t2: t2Data ? parseFloat(t2Data.studentAvg) : 0,
        t3: t3Data ? parseFloat(t3Data.studentAvg) : 0,
        classT1: t1Data ? parseFloat(t1Data.classAvg) : 0,
        classT2: t2Data ? parseFloat(t2Data.classAvg) : 0,
        classT3: t3Data ? parseFloat(t3Data.classAvg) : 0
      };
    });
  };

  const chartData = getChartData();

  // Fonction pour obtenir la couleur selon la note
  const getGradeColor = (grade: number) => {
    if (grade >= 16) return 'bg-green-500';
    if (grade >= 14) return 'bg-green-400';
    if (grade >= 12) return 'bg-yellow-400';
    if (grade >= 10) return 'bg-orange-400';
    if (grade >= 8) return 'bg-red-400';
    return 'bg-red-500';
  };

  const renderBulletinsTab = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Bulletins scolaires</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FileText className="w-4 h-4" />
            <span>{bulletinsPDF.length} bulletin{bulletinsPDF.length > 1 ? 's' : ''} disponible{bulletinsPDF.length > 1 ? 's' : ''}</span>
          </div>
        </div>

        <div className="grid gap-4">
          {bulletinsPDF.map((bulletin) => (
            <div key={bulletin.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{bulletin.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>Généré le {new Date(bulletin.date).toLocaleDateString('fr-FR')}</span>
                      <span>•</span>
                      <span>{bulletin.size}</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">{bulletin.status}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => downloadBulletin(bulletin.id)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
              <span className="text-white text-xs font-bold">i</span>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-1">Information</h4>
              <p className="text-sm text-blue-700">
                Les bulletins sont générés automatiquement à la fin de chaque trimestre. 
                Vous pouvez les télécharger au format PDF pour les imprimer ou les conserver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGraphsTab = () => (
    <div className="space-y-6">
      {/* Évolution de la moyenne générale */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800">Évolution de la moyenne générale</h3>
        </div>
        
        <div className="h-64 flex items-end space-x-8 px-4">
          {[1, 2, 3].map((trimester) => {
            const data = notesData[trimester];
            const studentAvg = parseFloat(data.generalAverage.student);
            const classAvg = parseFloat(data.generalAverage.class);
            const maxHeight = 200;
            const studentHeight = (studentAvg / 20) * maxHeight;
            const classHeight = (classAvg / 20) * maxHeight;
            
            return (
              <div key={trimester} className="flex-1 flex flex-col items-center">
                <div className="w-full flex justify-center space-x-4 mb-2">
                  {/* Barre élève */}
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-12 ${getGradeColor(studentAvg)} rounded-t transition-all duration-500`}
                      style={{ height: `${studentHeight}px` }}
                    ></div>
                    <div className="text-xs font-medium text-gray-700 mt-1">{studentAvg}</div>
                    <div className="text-xs text-gray-500">Élève</div>
                  </div>
                  
                  {/* Barre classe */}
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-12 bg-gray-400 rounded-t transition-all duration-500"
                      style={{ height: `${classHeight}px` }}
                    ></div>
                    <div className="text-xs font-medium text-gray-700 mt-1">{classAvg}</div>
                    <div className="text-xs text-gray-500">Classe</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-800 mt-2">T{trimester}</div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 flex justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Mes notes</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-400 rounded"></div>
            <span>Moyenne de classe</span>
          </div>
        </div>
      </div>

      {/* Graphique par matière */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-800">Évolution par matière</h3>
        </div>
        
        <div className="space-y-4">
          {chartData.map((subject, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-800 text-sm">{subject.subject}</h4>
                <div className="flex space-x-4 text-xs text-gray-600">
                  <span>T1: {subject.t1}</span>
                  <span>T2: {subject.t2}</span>
                  <span>T3: {subject.t3}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                {[1, 2, 3].map((trimester) => {
                  const studentGrade = subject[`t${trimester}`];
                  const classGrade = subject[`classT${trimester}`];
                  const maxWidth = 100;
                  const studentWidth = (studentGrade / 20) * maxWidth;
                  const classWidth = (classGrade / 20) * maxWidth;
                  
                  return (
                    <div key={trimester} className="flex-1">
                      <div className="text-xs text-gray-600 mb-1">T{trimester}</div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${getGradeColor(studentGrade)}`}
                              style={{ width: `${studentWidth}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium">{studentGrade}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 bg-gray-400 rounded-full transition-all duration-500"
                              style={{ width: `${classWidth}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">{classGrade}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h4 className="font-semibold text-gray-800 mb-2">Meilleure progression</h4>
          <div className="text-2xl font-bold text-green-600">+2.25</div>
          <div className="text-sm text-gray-600">Histoire-Géographie</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h4 className="font-semibold text-gray-800 mb-2">Moyenne actuelle</h4>
          <div className="text-2xl font-bold text-blue-600">11.50</div>
          <div className="text-sm text-gray-600">Trimestre 3</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h4 className="font-semibold text-gray-800 mb-2">{"Matières > 12/20"}</h4>
          <div className="text-2xl font-bold text-purple-600">6/8</div>
          <div className="text-sm text-gray-600">Ce trimestre</div>
        </div>
      </div>
    </div>
  );

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
        {activeTab === 'bulletins' ? (
          renderBulletinsTab()
        ) : activeTab === 'graphes' ? (
          renderGraphsTab()
        ) : (
          <>
            {/* En-tête avec sélecteur de trimestre */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-semibold text-blue-600">Mon bulletin de notes</h1>
              <div className="relative">
                <select
                  value={selectedTrimester}
                  onChange={(e) => setSelectedTrimester(Number(e.target.value))}
                  className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {trimesterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Tableau des notes */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Matières</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-700 min-w-[100px]">
                        <div>Moyennes</div>
                        <div className="flex text-xs text-gray-500 mt-1">
                          <span className="flex-1">Élève</span>
                          <span className="flex-1">Classe</span>
                        </div>
                      </th>
                      {selectedTrimester === 3 && (
                        <>
                          <th className="text-center py-3 px-4 font-medium text-gray-700 min-w-[60px]">T1</th>
                          <th className="text-center py-3 px-4 font-medium text-gray-700 min-w-[60px]">T2</th>
                        </>
                      )}
                      <th className="text-left py-3 px-4 font-medium text-gray-700">App. A : Appréciations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.subjects.map((category, categoryIndex) => (
                      <React.Fragment key={categoryIndex}>
                        {/* En-tête de catégorie */}
                        <tr className="bg-blue-100">
                          <td colSpan={selectedTrimester === 3 ? 5 : 3} className="py-2 px-4">
                            <div className="flex items-center">
                              <span className="text-blue-800 font-medium text-sm">▼ {category.category}</span>
                            </div>
                          </td>
                        </tr>
                        
                        {/* Matières de la catégorie */}
                        {category.items.map((item, itemIndex) => (
                          <tr key={itemIndex} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div>
                                <div className="font-medium text-gray-800">{item.subject}</div>
                                {item.teacher && (
                                  <div className="text-sm text-gray-600">{item.teacher}</div>
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex bg-gray-600 text-white rounded">
                                <div className="flex-1 text-center py-1 text-sm font-medium">
                                  {item.studentAvg}
                                </div>
                                <div className="flex-1 text-center py-1 text-sm font-medium bg-gray-500 rounded-r">
                                  {item.classAvg}
                                </div>
                              </div>
                            </td>
                            {selectedTrimester === 3 && (
                              <>
                                <td className="py-3 px-4 text-center text-sm">{notesData[1].subjects.flatMap(cat => cat.items).find(i => i.subject === item.subject)?.studentAvg || '-'}</td>
                                <td className="py-3 px-4 text-center text-sm">{notesData[2].subjects.flatMap(cat => cat.items).find(i => i.subject === item.subject)?.studentAvg || '-'}</td>
                              </>
                            )}
                            <td className="py-3 px-4 text-sm text-gray-700">
                              {item.appreciation}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                    
                    {/* Moyenne générale */}
                    <tr className="bg-gray-100 font-semibold">
                      <td className="py-3 px-4">Moyenne générale</td>
                      <td className="py-3 px-4">
                        <div className="flex bg-gray-700 text-white rounded">
                          <div className="flex-1 text-center py-1 text-sm font-bold">
                            {currentData.generalAverage.student}
                          </div>
                          <div className="flex-1 text-center py-1 text-sm font-bold bg-gray-600 rounded-r">
                            {currentData.generalAverage.class}
                          </div>
                        </div>
                      </td>
                      {selectedTrimester === 3 && (
                        <>
                          <td className="py-3 px-4 text-center text-sm">{notesData[1].generalAverage.student}</td>
                          <td className="py-3 px-4 text-center text-sm">{notesData[2].generalAverage.student}</td>
                        </>
                      )}
                      <td className="py-3 px-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Informations complémentaires */}
            <div className="mt-6 space-y-4">
              {/* Vie scolaire */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Vie scolaire</h3>
                <p className="text-sm text-gray-600">
                  Absences : {currentData.schoolLife.absences}
                </p>
              </div>

              {/* Appréciations */}
              {currentData.globalAppreciation && (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Appréciations</h3>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Appréciation globale :</span> {currentData.globalAppreciation}
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NotesPage;