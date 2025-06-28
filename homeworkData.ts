// Données partagées pour le travail à faire
export interface HomeworkItem {
  id: string;
  subject: string;
  teacher: string;
  title: string;
  description: string;
  dueDate: string;
  type: 'devoir' | 'exercice' | 'revision' | 'projet';
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

// Base de données simulée des devoirs
export const homeworkDatabase: HomeworkItem[] = [
  {
    id: '1',
    subject: 'MATHÉMATIQUES',
    teacher: 'M. HULIN J.',
    title: 'Exercices sur les dérivées',
    description: 'Terminer les exercices 15 à 20 page 142 du manuel',
    dueDate: '2025-01-15',
    type: 'exercice',
    completed: false,
    priority: 'high'
  },
  {
    id: '2',
    subject: 'FRANÇAIS',
    teacher: 'M. DILGER J.',
    title: 'Analyse de texte',
    description: 'Analyser le poème de Baudelaire "L\'Albatros" - 2 pages minimum',
    dueDate: '2025-01-16',
    type: 'devoir',
    completed: false,
    priority: 'medium'
  },
  {
    id: '3',
    subject: 'ANGLAIS LV1',
    teacher: 'M. ESTRADA F.',
    title: 'Présentation orale',
    description: 'Préparer une présentation de 5 minutes sur "Future careers"',
    dueDate: '2025-01-17',
    type: 'projet',
    completed: false,
    priority: 'high'
  },
  {
    id: '4',
    subject: 'HISTOIRE-GÉOGRAPHIE',
    teacher: 'Mme RENÉ H.',
    title: 'Révisions contrôle',
    description: 'Réviser le chapitre sur la Première Guerre mondiale',
    dueDate: '2025-01-18',
    type: 'revision',
    completed: false,
    priority: 'medium'
  },
  {
    id: '5',
    subject: 'SC.GESTION&NUMÉRIQUE',
    teacher: 'M. NOEL K.',
    title: 'Projet base de données',
    description: 'Finaliser la base de données de gestion des stocks',
    dueDate: '2025-01-20',
    type: 'projet',
    completed: false,
    priority: 'low'
  }
];

// Fonction pour obtenir les devoirs à venir (7 prochains jours)
export const getUpcomingHomework = (): HomeworkItem[] => {
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  return homeworkDatabase
    .filter(item => {
      const dueDate = new Date(item.dueDate);
      return dueDate >= today && dueDate <= nextWeek && !item.completed;
    })
    .sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA.getTime() - dateB.getTime();
    });
};

// Fonction pour formater la date en français
export const formatDateFrench = (dateString: string): string => {
  const date = new Date(dateString);
  const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 
                  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  
  return `${dayName} ${day} ${month}`;
};

// Fonction pour obtenir la couleur selon la priorité
export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'high':
      return 'border-l-red-500 bg-red-50';
    case 'medium':
      return 'border-l-yellow-500 bg-yellow-50';
    case 'low':
      return 'border-l-green-500 bg-green-50';
    default:
      return 'border-l-gray-500 bg-gray-50';
  }
};

// Fonction pour obtenir l'icône selon le type
export const getTypeIcon = (type: string): string => {
  switch (type) {
    case 'devoir':
      return '📝';
    case 'exercice':
      return '📚';
    case 'revision':
      return '🔄';
    case 'projet':
      return '🎯';
    default:
      return '📋';
  }
};