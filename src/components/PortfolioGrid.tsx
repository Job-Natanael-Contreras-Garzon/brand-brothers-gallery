
import React from 'react';
import { ProjectCard } from './ProjectCard';
import { type Project } from '../data/portfolioData';

interface PortfolioGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects, onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onProjectClick(project)}
          delay={index * 100}
        />
      ))}
    </div>
  );
};
