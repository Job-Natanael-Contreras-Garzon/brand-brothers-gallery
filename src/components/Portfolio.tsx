
import React, { useState, useEffect } from 'react';
import { PortfolioGrid } from './PortfolioGrid';
import { FilterNav } from './FilterNav';
import { ProjectModal } from './ProjectModal';
import { portfolioData, type Project, type FilterCategory } from '../data/portfolioData';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(portfolioData);

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
    <section className="min-h-screen bg-brand-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-brand-teal">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Discover our portfolio of brand transformations. Each project represents our commitment 
            to creating memorable, impactful brand experiences.
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
