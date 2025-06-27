import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Footer } from '@/components/Footer';
// Importa el ProjectModal desde su archivo dedicado. Asegúrate de que la ruta sea correcta.
import { ProjectModal } from '@/components/ProjectModal';
import { Play, Eye, Calendar, Tag, Filter, Grid, Search, X, ExternalLink, Github, Heart, Share2, ArrowRight, Star } from 'lucide-react';
import { portfolioData, type Project, type FilterCategory } from '@/data/portfolioData';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectCard = ({ project, index, viewedProjects, likedProjects, handleLike, handleShare, handleProjectClick }) => {
  const { t } = useLanguage();

  return (
    <div
      className="group cursor-pointer relative transition-all duration-700 hover:z-10 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => handleProjectClick(project)}
    >
      <div className={`relative overflow-hidden bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-border flex flex-col h-full ${
        project.featured ? 'ring-2 ring-yellow-400 shadow-yellow-100 dark:shadow-yellow-900/20' : ''
      }`}>

        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 rounded-full text-xs font-semibold shadow-lg">
              <Star size={12} className="fill-current" />
              <span>{t('portfolio.featured')}</span>
            </div>
          </div>
        )}

        <div className="relative overflow-hidden aspect-[4/3]">
          {project.video ? (
            <div className="relative w-full h-full">
              <video
                src={project.video}
                className="w-full h-full object-cover rounded-2xl"
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
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" />
            </>
          )}

          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />

          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/20 flex items-center space-x-1.5">
              <Tag size={12} />
              <span>{project.categoryName}</span>
            </span>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-2">
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
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{project.subtitle}</p>
              </div>
            </div>

            <p className="text-foreground/80 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-muted-foreground px-2 py-1">
                +{project.tags.length - 3} más
              </span>
            )}
          </div>

          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// Definimos las categorías aquí para el componente Portfolio
const categories: { id: FilterCategory; name: string; count: number }[] = [
  { id: 'all', name: 'Todos', count: portfolioData.length },
  { id: 'web', name: 'Web', count: portfolioData.filter(p => p.category === 'web').length },
  { id: 'mobile', name: 'Móvil', count: portfolioData.filter(p => p.category === 'mobile').length },
  { id: 'branding', name: 'Branding', count: portfolioData.filter(p => p.category === 'branding').length },
  { id: 'ai', name: 'IA', count: portfolioData.filter(p => p.category === 'ai').length }
];


// -------------------------------------------------------------------------------- //
// COMPONENTE Portfolio (Principal)
// -------------------------------------------------------------------------------- //
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(portfolioData);
  const [viewedProjects, setViewedProjects] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'liked'>('newest');
  const [likedProjects, setLikedProjects] = useState<Set<string>>(new Set());
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();

  // **NUEVO ESTADO PARA EL MODO DE VISTA (Si lo vas a usar, déjalo, si no, puedes quitarlo)**
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'); // Estado para 'grid' o 'list'

  // Effect to handle filter from URL
  useEffect(() => {
    const filterFromUrl = searchParams.get('filter') as FilterCategory;
    if (filterFromUrl && categories.some(c => c.id === filterFromUrl)) {
      setActiveFilter(filterFromUrl);
      // Scroll to the project grid with an offset for the sticky header
      setTimeout(() => {
        const gridElement = document.getElementById('project-grid');
        const controlsElement = document.getElementById('portfolio-controls');

        if (gridElement && controlsElement) {
          const controlsHeight = controlsElement.offsetHeight;
          // Extra space so the content isn't glued to the bar
          const extraPadding = 20; 
          const topPos = gridElement.getBoundingClientRect().top + window.scrollY - controlsHeight - extraPadding;
          
          window.scrollTo({
            top: topPos,
            behavior: 'smooth'
          });
        } else if (gridElement) {
          // Fallback if controls are not found
          gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [searchParams, categories]);

  useEffect(() => {
    const savedViewed = localStorage.getItem('viewedProjects');
    if (savedViewed) {
      setViewedProjects(new Set(JSON.parse(savedViewed)));
    }
    const savedLiked = localStorage.getItem('likedProjects');
    if (savedLiked) {
      setLikedProjects(new Set(JSON.parse(savedLiked)));
    }
  }, []);

  // Save viewed and liked projects to localStorage
  useEffect(() => {
    localStorage.setItem('viewedProjects', JSON.stringify([...viewedProjects]));
  }, [viewedProjects]);

  useEffect(() => {
    localStorage.setItem('likedProjects', JSON.stringify([...likedProjects]));
  }, [likedProjects]);

  // Filter and sort projects logic
  useEffect(() => {
    let currentFiltered = portfolioData;

    // Category filter
    if (activeFilter !== 'all') {
      currentFiltered = currentFiltered.filter(project => project.category === activeFilter);
    }

    // Search filter
    if (searchQuery) {
      currentFiltered = currentFiltered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        currentFiltered.sort((a, b) => b.year - a.year);
        break;
      case 'popular':
        currentFiltered.sort((a, b) => b.views - a.views);
        break;
      case 'liked':
        currentFiltered.sort((a, b) => {
          const aLiked = likedProjects.has(a.id) ? a.likes + 1 : a.likes;
          const bLiked = likedProjects.has(b.id) ? b.likes + 1 : b.likes;
          return bLiked - aLiked;
        });
        break;
      default:
        break;
    }

    setFilteredProjects(currentFiltered);
  }, [activeFilter, searchQuery, sortBy, likedProjects]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setViewedProjects(prev => new Set([...prev, project.id]));
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleLike = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedProjects(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(projectId)) {
        newLiked.delete(projectId);
      } else {
        newLiked.add(projectId);
      }
      return newLiked;
    });
  };

  const handleShare = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(window.location.href + `?project=${project.id}`)
        .then(() => alert('Enlace del proyecto copiado al portapapeles!'))
        .catch((error) => console.error('Error copying to clipboard:', error));
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Si tienes un componente de navegación (Navbar) aquí, asegúrate de que tenga un z-index alto.
          Ejemplo: <Navigation className="sticky top-0 z-50" />
      */}
      {/* <Navigation /> Aquí va tu componente de navegación si lo tienes */}

      {/* Hero Section - Modificada para video de fondo */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-black"> {/* Añadido bg-black para evitar flashes blancos */}
        {/* Video de Fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline /* Importante para autoplay en iOS */
          className="absolute inset-0 w-full h-full object-cover opacity-30" /* Ajusta la opacidad */
          poster="/images/portfolio-hero-poster.jpg" /* Una imagen de poster es buena práctica */
        >
          {/* Reemplaza con la ruta a tu video */}
          <source src="/images/BrandingBrothers.mp4" type="video/mp4" />
          {/* Puedes añadir más fuentes para compatibilidad con navegadores */}
          Tu navegador no soporta la etiqueta de video.
        </video>

        {/* Overlay oscuro para mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-black/60" /> {/* Ajusta la opacidad aquí si es necesario */}

        {/* Contenido de la Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white"> {/* Texto blanco para contraste */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl max-w-4xl mx-auto mb-8 text-gray-300">
              Explora nuestra colección completa de proyectos. Cada trabajo representa nuestra dedicación
              a crear experiencias digitales excepcionales que transforman marcas y conectan con audiencias.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">{portfolioData.length}</div> {/* Usando text-brand-teal */}
                <div className="text-gray-300">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">{viewedProjects.size}</div>
                <div className="text-gray-300">Visualizados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">{categories.length - 1}</div> {/* -1 para no contar 'Todos' */}
                <div className="text-gray-300">Categorías</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-teal mb-2">98%</div>
                <div className="text-gray-300">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section - Corregido para la superposición */}
      {/* IMPORTANTE: Ajusta 'top-[Xpx]' según la altura de tu Navbar.
          Si tu Navbar tiene, por ejemplo, 64px de alto, usa top-[64px].
          Si tu Navbar es fijo y NO tiene un z-index más alto que z-40, necesitarás
          darle a tu Navbar un z-index de z-50 o z-[whatever-number-is-higher].
      */}
      <section id="portfolio-controls" className="py-4 bg-card/50 backdrop-blur-sm sticky top-[64px] z-40 border-b border-border"> {/* top-[64px] es un ejemplo */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Buscar proyectos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort and View Mode */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'popular' | 'liked')}
                className="px-4 py-2 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="newest">Más recientes</option>
                <option value="popular">Más populares</option>
                <option value="liked">Más gustados</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Project Grid */}
      <section id="project-grid" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">No se encontraron proyectos</h3>
              <p className="text-muted-foreground">Intenta con otros términos de búsqueda o filtros diferentes.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  viewedProjects={viewedProjects}
                  likedProjects={likedProjects}
                  handleLike={handleLike}
                  handleShare={handleShare}
                  handleProjectClick={handleProjectClick}
                />
              ))}
            </div>
          )}

          {/* Este botón puede ser funcional si implementas un estado `projectsToShow` y un botón para aumentarlo */}
          {filteredProjects.length > 9 && ( // Ejemplo: si tienes más de 9 proyectos, muestra el botón
            <div className="text-center mt-16">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Cargar más proyectos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal - AQUI ES DONDE SE USA EL MODAL IMPORTADO */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject} // Pasa isOpen según el estado de selectedProject
          onClose={handleCloseModal}
        />
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => searchInputRef.current?.focus()}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 z-30"
      >
        <Search size={24} />
      </button>

      <Footer />
    </div>
  );
};

export default Portfolio;