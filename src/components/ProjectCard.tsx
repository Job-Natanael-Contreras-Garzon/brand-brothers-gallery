import React from 'react';
import { type Project } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import { Play, Eye, Calendar, Tag, Heart, Share2, ArrowRight } from 'lucide-react'; // Importar íconos de lucide-react

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  delay?: number;
  viewMode: 'grid' | 'list'; // <-- Agregada la prop viewMode
  viewedProjects: Set<string>; // <-- Necesario para el indicador de visto
  likedProjects: Set<string>;   // <-- Necesario para el ícono de corazón
  handleLike: (projectId: string, e: React.MouseEvent) => void; // <-- Necesario para el botón de like
  handleShare: (project: Project, e: React.MouseEvent) => void; // <-- Necesario para el botón de compartir
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onClick, 
  delay = 0, 
  viewMode, // <-- Desestructurar viewMode
  viewedProjects, // <-- Desestructurar viewedProjects
  likedProjects,  // <-- Desestructurar likedProjects
  handleLike,     // <-- Desestructurar handleLike
  handleShare     // <-- Desestructurar handleShare
}) => {
  const { t } = useLanguage();

  return (
    <div 
      className={`group cursor-pointer animate-fade-in transition-all duration-500 ${
        viewMode === 'list' 
          ? 'flex flex-col sm:flex-row gap-6 p-6 bg-white dark:bg-brand-dark-light rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 dark:border-gray-800 hover:border-brand-teal/50 items-start' 
          : '' // En modo grid, las clases de la tarjeta ya están en el div interno
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden rounded-2xl ${
        viewMode === 'grid' 
          ? 'bg-white dark:bg-brand-dark-light border border-gray-200 dark:border-gray-800 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:border-brand-teal/50'
          : 'flex-shrink-0 w-full sm:w-64 sm:h-48 shadow-none hover:shadow-none transform-none hover:scale-100' // Clases específicas para lista
      }`}>
        
        {/* Viewed indicator (New - from previous code, if you want it) */}
        {viewedProjects.has(project.id) && (
          <div className="absolute top-4 right-4 z-10">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        )}

        {/* Image/Video Container */}
        <div className={`relative overflow-hidden ${
          viewMode === 'grid' ? 'aspect-[4/3]' : 'w-full h-full' // Image/video fills its container
        }`}>
          {project.video ? ( // Lógica para video
            <div className="relative w-full h-full">
              <video 
                src={project.video}
                className="w-full h-full object-cover rounded-2xl" // Apply rounded to video
                muted
                loop
                preload="none"
                poster={project.image}
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <Play className="text-white w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ) : (
            <> {/* Lógica para imagen */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl" // Apply rounded to image
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </>
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" /> {/* Apply rounded here too */}
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-brand-teal text-brand-dark rounded-full flex items-center space-x-1">
              <Tag size={12} /> {/* Added Tag icon */}
              <span>{project.categoryName}</span>
            </span>
          </div>

          {/* Project Info Overlay (for grid mode, less prominent in list) */}
          {viewMode === 'grid' && (
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1 bg-black/20 backdrop-blur-sm text-white rounded-full text-xs">
                <Calendar size={12} />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-black/20 backdrop-blur-sm text-white rounded-full text-xs">
                <Eye size={12} />
                <span>{project.views}</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-black/20 backdrop-blur-sm text-white rounded-full text-xs">
                <Heart size={12} className={likedProjects.has(project.id) ? 'fill-red-500 text-red-500' : ''} />
                <span>{project.likes + (likedProjects.has(project.id) ? 1 : 0)}</span>
              </div>
            </div>
          )}

          {/* Hover Actions (New - from previous code, for grid mode) */}
          {viewMode === 'grid' && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleLike(project.id, e)}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <Heart size={20} className={likedProjects.has(project.id) ? 'fill-red-500 text-red-500' : ''} />
                </button>
                <button
                  onClick={(e) => handleShare(project, e)}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Content (MODIFICADO para vista de lista) */}
        {/* Este div ya no tiene clases condicionales para grid vs list, ya que la estructura principal de la tarjeta cambia */}
        <div className={`${viewMode === 'grid' ? 'p-6' : 'flex-1 py-2 sm:py-0 pr-2'}`}> {/* flex-1 ensures it takes remaining space */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark dark:text-white mb-2 group-hover:text-brand-teal transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
                {project.subtitle}
              </p>
            </div>
            {/* Displaying year and views here for list mode for quick glance */}
            {viewMode === 'list' && (
                <div className="flex flex-col items-end text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{project.views}</span>
                    </div>
                </div>
            )}
          </div>
          
          {/* Descripción visible en vista de lista */}
          {/* Ajusta line-clamp si es necesario, basado en cuánto texto quieres mostrar */}
          <p className={`text-gray-500 dark:text-gray-400 text-sm mb-4 ${viewMode === 'grid' ? 'line-clamp-2' : 'line-clamp-3 sm:line-clamp-4'}`}>
            {project.description}
          </p>
          
          {/* Tags visible en vista de lista */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, viewMode === 'grid' ? 2 : 4).map((tag) => ( // Ajustado para mostrar más tags en lista
              <span 
                key={tag}
                className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > (viewMode === 'grid' ? 2 : 4) && (
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                +{project.tags.length - (viewMode === 'grid' ? 2 : 4)} más
              </span>
            )}
          </div>

          {/* Interactive buttons for list mode for quick actions */}
          {viewMode === 'list' && (
            <div className="flex gap-3 mt-4">
              <button
                onClick={(e) => handleLike(project.id, e)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Heart size={16} className={likedProjects.has(project.id) ? 'fill-red-500 text-red-500' : ''} />
                Me gusta ({project.likes + (likedProjects.has(project.id) ? 1 : 0)})
              </button>
              <button
                onClick={(e) => handleShare(project, e)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Share2 size={16} />
                Compartir
              </button>
            </div>
          )}

          {/* View Project Button (Removido de la posición absoluta para lista, se moverá al final) */}
          {viewMode === 'grid' && (
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center text-brand-dark shadow-lg">
                      <ArrowRight size={20} />
                  </div>
              </div>
          )}
          {viewMode === 'list' && (
              <button className="flex items-center justify-center gap-2 mt-4 px-4 py-2 bg-brand-teal text-brand-dark rounded-xl text-sm hover:bg-brand-teal/90 transition-colors w-full">
                  Ver Proyecto <ArrowRight size={16} />
              </button>
          )}
        </div>
      </div>
    </div>
  );
};