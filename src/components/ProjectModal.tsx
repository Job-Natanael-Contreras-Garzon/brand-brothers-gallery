import React, { useEffect } from 'react';
import { type Project } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Github, X, Play } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { t, language } = useLanguage();

  if (!project) return null; // Early return if no project is selected

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Content - Tamaño controlado */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-2xl overflow-hidden animate-scale-in border border-gray-700/50 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Layout */}
        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          
          {/* Left Side - Media */}
          <div className="relative w-full md:w-3/5 h-64 md:h-auto bg-gray-800">
            {/* Media Container */}
            <div className="relative w-full h-full">
              {project.video ? (
                <video
                  src={project.video}
                  className="w-full h-full object-cover"
                  controls // Asegura que los controles nativos estén habilitados
                  autoPlay
                  loop
                  muted
                  poster={project.image || ''}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover"
                />
              )}
              
              {/* Gradiente sutil para el overlay de información - AHORA CON pointer-events-none */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Info overlay solo en mobile - AHORA CON pointer-events-none */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden pointer-events-none">
                <span className="inline-block px-3 py-1 text-xs font-bold bg-purple-600 text-white rounded-md mb-2 uppercase tracking-wider">
                  {project.categoryName[language]}
                </span>
                <h2 className="text-xl font-bold text-white mb-1">
                  {project.title[language]}
                </h2>
                <p className="text-sm text-gray-300">
                  {project.subtitle[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-2/5 flex flex-col bg-gray-900">
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              
              {/* Header Info - Solo visible en desktop */}
              <div className="hidden md:block space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-purple-600 text-white rounded-md uppercase tracking-wider">
                    {project.categoryName[language]}
                  </span>
                  <span className="text-gray-400 text-sm">{project.year}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white leading-tight">
                  {project.title[language]}
                </h2>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.subtitle[language]}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full bg-white text-black px-4 py-3 rounded-lg font-bold text-sm hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 fill-current" /> {/* Cambiado a ExternalLink para más coherencia con enlaces externos */}
                    <span>{t('portfolio.modal.liveDemo')}</span>
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full bg-gray-700 text-white px-4 py-3 rounded-lg font-bold text-sm hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('portfolio.modal.viewCode')}</span>
                  </a>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                
                {/* Client */}
                <div>
                  <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
                    {t('portfolio.modal.client')}
                  </h4>
                  <p className="text-white text-sm">{project.client?.[language]}</p>
                </div>

                {/* Services/Tags */}
                <div>
                  <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                    {t('portfolio.modal.services')}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                    {t('portfolio.modal.overview')}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description[language]}
                  </p>
                </div>

                {/* Challenge */}
                {project.challenge && (
                  <div>
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                      {t('portfolio.modal.challenge')}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.challenge?.[language]}
                    </p>
                  </div>
                )}

                {/* Solution */}
                {project.solution && (
                  <div>
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                      {t('portfolio.modal.solution')}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.solution?.[language]}
                    </p>
                  </div>
                )}

                {/* Results */}
                {project.results && project.results[language]?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                      {t('portfolio.modal.results')}
                    </h4>
                    <ul className="space-y-2">
                      {project.results[language].map((result, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};