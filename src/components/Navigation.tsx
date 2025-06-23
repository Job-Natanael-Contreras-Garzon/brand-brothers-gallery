
import React, { useState } from 'react';
import { Menu, X, Globe, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigate('/');
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
    setIsCompanyOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-sm border-b border-gray-200/20 dark:border-brand-teal/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-2xl font-bold text-brand-teal hover:text-brand-teal-light transition-colors"
            >
              Branding Brothers
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/')}
              className={`text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300 ${
                location.pathname === '/' ? 'text-brand-teal' : ''
              }`}
            >
              {t('nav.home')}
            </button>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300"
              >
                <span>{t('nav.company')}</span>
                <ChevronDown size={16} className={`transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCompanyOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 min-w-[150px]">
                  <button
                    onClick={() => handleNavigation('/about')}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-brand-teal hover:bg-gray-50 dark:hover:bg-brand-dark-light transition-colors"
                  >
                    {t('nav.about')}
                  </button>
                  <button
                    onClick={() => handleNavigation('/blog')}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-brand-teal hover:bg-gray-50 dark:hover:bg-brand-dark-light transition-colors"
                  >
                    {t('nav.blog')}
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('/', 'services')}
              className="text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300"
            >
              {t('nav.services')}
            </button>

            <button
              onClick={() => handleNavigation('/', 'contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300"
            >
              {t('nav.contact')}
            </button>

            <button
              onClick={() => handleNavigation('/portfolio')}
              className={`text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300 ${
                location.pathname === '/portfolio' ? 'text-brand-teal' : ''
              }`}
            >
              {t('nav.portfolio')}
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors"
            >
              <Globe size={18} />
              <span className="text-sm">{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-brand-teal"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/20 dark:border-brand-teal/20">
            <button
              onClick={() => handleNavigation('/')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => handleNavigation('/blog')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300"
            >
              {t('nav.blog')}
            </button>
            <button
              onClick={() => handleNavigation('/', 'services')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => handleNavigation('/', 'contact')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300"
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={() => handleNavigation('/portfolio')}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-brand-teal transition-colors duration-300"
            >
              {t('nav.portfolio')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
