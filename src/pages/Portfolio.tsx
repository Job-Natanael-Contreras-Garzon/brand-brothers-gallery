
import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { FilterNav } from '@/components/FilterNav';
import { portfolioData, type Project, type FilterCategory } from '@/data/portfolioData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Play, Eye, Calendar, Tag } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(portfolioData);
  const [viewedProjects, setViewedProjects] = useState<Set<string>>(new Set()); // Changed to Set<string>
  const { t } = useLanguage();

  // Load viewed projects from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('viewedProjects');
    if (saved) {
      setViewedProjects(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save viewed projects to localStorage
  useEffect(() => {
    localStorage.setItem('viewedProjects', JSON.stringify([...viewedProjects]));
  }, [viewedProjects]);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(portfolioData.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setViewedProjects(prev => new Set([...prev, project.id])); // Now project.id is string, matches Set<string>
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-brand-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-teal/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark dark:text-white mb-6">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Explora nuestra colección completa de proyectos. Cada trabajo representa nuestra dedicación 
              a crear experiencias digitales excepcionales que transforman marcas y conectan con audiencias.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">{portfolioData.length}</div>
                <div className="text-gray-600 dark:text-gray-300">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">{viewedProjects.size}</div>
                <div className="text-gray-600 dark:text-gray-300">Visualizados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">12</div>
                <div className="text-gray-600 dark:text-gray-300">Categorías</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-300">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Navigation */}
          <FilterNav 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />

          {/* Enhanced Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer animate-fade-in relative"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-brand-dark-light border border-gray-200 dark:border-gray-800 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:border-brand-teal/50">
                  {/* Viewed indicator */}
                  {viewedProjects.has(project.id) && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-3 h-3 bg-brand-teal rounded-full animate-pulse"></div>
                    </div>
                  )}

                  {/* Image/Video Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {project.video ? (
                      <div className="relative w-full h-full">
                        <video 
                          src={project.video}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => e.currentTarget.pause()}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                          <Play className="text-white w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      </>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-brand-teal text-brand-dark rounded-full flex items-center space-x-1">
                        <Tag size={12} />
                        <span>{project.categoryName}</span>
                      </span>
                    </div>

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 text-white/80 text-xs mb-2">
                        <Calendar size={12} />
                        <span>{project.year}</span>
                        <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        <Eye size={12} />
                        <span>{viewedProjects.has(project.id) ? 'Visto' : 'Nuevo'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-dark dark:text-white mb-2 group-hover:text-brand-teal transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Enhanced Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                          +{project.tags.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Enhanced View Project Button */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-14 h-14 bg-brand-teal rounded-full flex items-center justify-center text-brand-dark shadow-lg hover:shadow-xl transition-shadow">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProjects.length > 9 && (
            <div className="text-center mt-16">
              <button className="bg-brand-teal text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-teal-light transition-all duration-300 shadow-lg hover:shadow-xl">
                Cargar más proyectos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
        />
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;
