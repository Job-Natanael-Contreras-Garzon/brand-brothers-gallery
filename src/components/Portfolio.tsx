
import React from 'react';
import { ArrowRight, Play, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Show only featured projects (first 6)
  const featuredProjects = portfolioData.slice(0, 6);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-brand-dark text-brand-dark dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in mb-8">
            Una selección de nuestros proyectos más destacados. Cada trabajo representa nuestro compromiso 
            con la excelencia y la innovación.
          </p>
          
          {/* Stats Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-teal mb-2">{portfolioData.length}+</div>
              <div className="text-gray-600 dark:text-gray-300">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-teal mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-teal mb-2">8</div>
              <div className="text-gray-600 dark:text-gray-300">Categorías</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-teal mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">Satisfacción</div>
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-brand-dark-light border border-gray-200 dark:border-gray-800 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:border-brand-teal/50">
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

                  {/* Preview Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="text-white w-4 h-4" />
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
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Full Portfolio */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/portfolio')}
            className="group inline-flex items-center space-x-3 bg-brand-teal text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-teal-light transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Ver Portfolio Completo</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Descubre más de {portfolioData.length} proyectos en nuestra galería completa
          </p>
        </div>
      </div>
    </section>
  );
};
