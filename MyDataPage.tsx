import React, { useState } from 'react';
import { User, Shield, Phone, Mail, Eye, EyeOff, Menu, X } from 'lucide-react';

const MyDataPage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const sidebarItems = [
    {
      category: 'Compte',
      items: [
        { id: 'profile', label: 'Mon profil', icon: User },
        { id: 'security', label: 'Sécurisation du compte', icon: Shield }
      ]
    }
  ];

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Les nouveaux mots de passe ne correspondent pas');
      return;
    }
    
    if (passwordForm.newPassword.length < 8) {
      alert('Le nouveau mot de passe doit contenir au moins 8 caractères');
      return;
    }
    
    // Simulation de la mise à jour du mot de passe
    console.log('Mise à jour du mot de passe...');
    alert('Mot de passe mis à jour avec succès !');
    
    // Réinitialiser le formulaire
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileSidebarOpen(false);
  };

  const renderProfileContent = () => (
    <div className="space-y-6 sm:space-y-8">
      {/* En-tête avec informations liées au compte */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
        <h3 className="text-blue-800 font-semibold mb-2 text-sm sm:text-base">
          Les informations liées à mon compte
        </h3>
        <p className="text-blue-700 text-xs sm:text-sm">
          Ces informations sont synchronisées avec votre compte académique et ne peuvent pas être modifiées ici.
        </p>
      </div>

      {/* Section Coordonnées */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Coordonnées</h3>
        
        <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
          {/* Photo de profil */}
          <div className="flex-shrink-0 self-center sm:self-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-200">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face" 
                alt="Photo de profil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Informations de contact */}
          <div className="flex-1 space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Téléphone</div>
                <div className="font-medium text-sm sm:text-base">+ 33 7 58 57 01 53</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <div>
                <div className="text-xs sm:text-sm text-gray-600">Email</div>
                <div className="font-medium text-blue-600 text-sm sm:text-base break-all">glodeangiorgiana101@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Numéro INE */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Numéro INE</h3>
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <div className="font-mono text-base sm:text-lg font-semibold text-gray-800">
            180730194BC
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Identifiant National Élève - Ce numéro vous suit tout au long de votre scolarité
          </p>
        </div>
      </div>

      {/* Informations supplémentaires */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Établissement</h4>
          <p className="text-xs sm:text-sm text-gray-600">LYCEE LOUISE MICHEL</p>
          <p className="text-xs sm:text-sm text-gray-600">LYCEE POLYVALENT REGIONAL</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Classe</h4>
          <p className="text-xs sm:text-sm text-gray-600">1 STMG2</p>
          <p className="text-xs sm:text-sm text-gray-600">Première Sciences et Technologies du Management et de la Gestion</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Année scolaire</h4>
          <p className="text-xs sm:text-sm text-gray-600">2024-2025</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Statut</h4>
          <p className="text-xs sm:text-sm text-gray-600">Élève</p>
        </div>
      </div>
    </div>
  );

  const renderSecurityContent = () => (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Sécurisation du compte</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          Gérez les paramètres de sécurité de votre compte pour protéger vos données personnelles.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* Changement de mot de passe */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
          <h4 className="font-semibold text-gray-800 mb-4 text-sm sm:text-base">Changer le mot de passe</h4>
          <p className="text-xs sm:text-sm text-gray-600 mb-4">
            Dernière modification : il y a 3 mois
          </p>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-3 sm:space-y-4">
            {/* Mot de passe actuel */}
            <div>
              <label htmlFor="currentPassword" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Mot de passe actuel
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  id="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center touch-manipulation"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Nouveau mot de passe */}
            <div>
              <label htmlFor="newPassword" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Nouveau mot de passe
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id="newPassword"
                  value={passwordForm.newPassword}
                  onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center touch-manipulation"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Le mot de passe doit contenir au moins 8 caractères
              </p>
            </div>

            {/* Confirmation du nouveau mot de passe */}
            <div>
              <label htmlFor="confirmPassword" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Confirmer le nouveau mot de passe
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center touch-manipulation"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base touch-manipulation"
              >
                Mettre à jour le mot de passe
              </button>
              <button
                type="button"
                onClick={() => setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors text-sm sm:text-base touch-manipulation"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>

        {/* Sessions actives */}
        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Sessions actives</h4>
          <p className="text-xs sm:text-sm text-gray-600 mb-3">
            Gérez les appareils connectés à votre compte
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-xs sm:text-sm">Navigateur actuel</div>
                <div className="text-xs text-gray-500">Chrome sur Windows - Maintenant</div>
              </div>
              <span className="text-green-600 text-xs font-medium">Actuel</span>
            </div>
            <div className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-xs sm:text-sm">Session mobile</div>
                <div className="text-xs text-gray-500">Safari sur iPhone - Il y a 2 heures</div>
              </div>
              <button className="text-red-600 text-xs font-medium hover:text-red-800 touch-manipulation">
                Déconnecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileContent();
      case 'security':
        return renderSecurityContent();
      default:
        return renderProfileContent();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar Desktop */}
        <div className="hidden sm:block w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-4">
            {sidebarItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {category.category}
                </h3>
                <div className="space-y-1">
                  {category.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          activeSection === item.id
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Sidebar Toggle */}
        <div className="sm:hidden fixed top-20 left-3 z-50">
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg touch-manipulation"
          >
            {isMobileSidebarOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {isMobileSidebarOpen && (
          <div className="sm:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMobileSidebarOpen(false)}>
            <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4" onClick={(e) => e.stopPropagation()}>
              <div className="mt-16">
                {sidebarItems.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      {category.category}
                    </h3>
                    <div className="space-y-1">
                      {category.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleSectionChange(item.id)}
                            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors touch-manipulation ${
                              activeSection === item.id
                                ? 'bg-blue-100 text-blue-700'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 p-3 sm:p-6">
          <div className="max-w-4xl">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDataPage;