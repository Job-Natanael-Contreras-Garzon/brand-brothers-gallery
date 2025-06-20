
import React, { useEffect } from 'react';
import { type Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-brand-dark-light rounded-3xl animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-brand-teal/20 hover:bg-brand-teal/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-light/80 to-transparent" />
          
          {/* Project Info Overlay */}
          <div className="absolute bottom-8 left-8">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-brand-teal text-brand-dark rounded-full mb-4">
              {project.categoryName}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-xl text-gray-300">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="text-sm font-bold text-brand-teal uppercase tracking-wider mb-2">Client</h4>
              <p className="text-white">{project.client}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-teal uppercase tracking-wider mb-2">Year</h4>
              <p className="text-white">{project.year}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-teal uppercase tracking-wider mb-2">Services</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-brand-teal rounded-full mr-4 flex-shrink-0" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
