
import React from 'react';
import { type Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, delay = 0 }) => {
  return (
    <div 
      className="group cursor-pointer animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-dark-light transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-brand-teal text-brand-dark rounded-full">
              {project.categoryName}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-brand-teal transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-4">
            {project.subtitle}
          </p>
          <p className="text-gray-400 text-sm line-clamp-2">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag}
                className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* View Project Button */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center text-brand-dark">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
