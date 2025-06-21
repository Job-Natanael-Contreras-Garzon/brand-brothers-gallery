
import React, { useState, useEffect } from 'react';
import { PortfolioGrid } from './PortfolioGrid';
import { FilterNav } from './FilterNav';
import { ProjectModal } from './ProjectModal';
import { portfolioData, type Project, type FilterCategory } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(portfolioData);
  const { t } = useLanguage();

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(portfolioData.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-brand-dark text-white dark:bg-brand-dark dark:text-white bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto animate-fade-in">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filter Navigation */}
        <FilterNav 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />

        {/* Portfolio Grid */}
        <PortfolioGrid 
          projects={filteredProjects}
          onProjectClick={handleProjectClick}
        />

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
};
