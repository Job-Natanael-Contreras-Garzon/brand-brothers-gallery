
import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, User, ArrowRight, Search, Filter, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Tendencias de Diseño para 2024',
    titleEn: '10 Design Trends for 2024',
    excerpt: 'Descubre las últimas tendencias en diseño gráfico y branding que dominarán este año. Desde colores vibrantes hasta tipografías experimentales.',
    excerptEn: 'Discover the latest trends in graphic design and branding that will dominate this year. From vibrant colors to experimental typography.',
    content: 'El mundo del diseño está en constante evolución, y 2024 promete ser un año revolucionario...',
    contentEn: 'The design world is constantly evolving, and 2024 promises to be a revolutionary year...',
    author: 'María González',
    date: '15 Mar 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center',
    category: 'Diseño',
    categoryEn: 'Design',
    featured: true
  },
  {
    id: 2,
    title: 'Cómo Crear una Estrategia de Marca Exitosa',
    titleEn: 'How to Create a Successful Brand Strategy',
    excerpt: 'Guía completa para desarrollar una estrategia de marca que conecte con tu audiencia y genere resultados medibles.',
    excerptEn: 'Complete guide to develop a brand strategy that connects with your audience and generates measurable results.',
    content: 'Una estrategia de marca sólida es la base de cualquier negocio exitoso...',
    contentEn: 'A solid brand strategy is the foundation of any successful business...',
    author: 'Carlos Rodríguez',
    date: '10 Mar 2024',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
    category: 'Estrategia',
    categoryEn: 'Strategy',
    featured: false
  },
  {
    id: 3,
    title: 'El Futuro del Marketing Digital',
    titleEn: 'The Future of Digital Marketing',
    excerpt: 'Análisis profundo de las tecnologías emergentes que están transformando el panorama del marketing digital.',
    excerptEn: 'In-depth analysis of emerging technologies that are transforming the digital marketing landscape.',
    content: 'El marketing digital está experimentando una transformación radical...',
    contentEn: 'Digital marketing is undergoing a radical transformation...',
    author: 'Ana López',
    date: '5 Mar 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
    category: 'Marketing',
    categoryEn: 'Marketing',
    featured: true
  },
  // Add more blog posts...
  {
    id: 4,
    title: 'Psicología del Color en el Branding',
    titleEn: 'Color Psychology in Branding',
    excerpt: 'Cómo los colores influyen en las decisiones de compra y la percepción de marca.',
    excerptEn: 'How colors influence purchasing decisions and brand perception.',
    author: 'Diego Martín',
    date: '28 Feb 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop&crop=center',
    category: 'Diseño',
    categoryEn: 'Design',
    featured: false
  }
];

const categories = ['Todos', 'Diseño', 'Estrategia', 'Marketing', 'Tendencias'];
const categoriesEn = ['All', 'Design', 'Strategy', 'Marketing', 'Trends'];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const { t, language } = useLanguage();

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'Todos' && selectedCategory !== 'All') {
      filtered = filtered.filter(post => 
        language === 'es' ? post.category === selectedCategory : post.categoryEn === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        (language === 'es' ? post.title : post.titleEn).toLowerCase().includes(searchTerm.toLowerCase()) ||
        (language === 'es' ? post.excerpt : post.excerptEn).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, language]);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-teal/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-dark dark:text-white mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Insights, tendencias y consejos expertos sobre branding, diseño y marketing digital. 
              Mantente al día con las últimas innovaciones de la industria.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={language === 'es' ? 'Buscar artículos...' : 'Search articles...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-brand-dark-light border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:border-brand-teal text-brand-dark dark:text-white"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 bg-white dark:bg-brand-dark-light border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:border-brand-teal text-brand-dark dark:text-white"
              >
                {(language === 'es' ? categories : categoriesEn).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-gray-50 dark:bg-brand-dark-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <span className="text-brand-teal font-semibold text-sm uppercase tracking-wider">
                {language === 'es' ? 'Artículo Destacado' : 'Featured Article'}
              </span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={language === 'es' ? featuredPost.title : featuredPost.titleEn}
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-brand-teal text-brand-dark rounded-full">
                    {language === 'es' ? featuredPost.category : featuredPost.categoryEn}
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-4">
                  {language === 'es' ? featuredPost.title : featuredPost.titleEn}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {language === 'es' ? featuredPost.excerpt : featuredPost.excerptEn}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <button className="group flex items-center space-x-2 bg-brand-teal text-brand-dark px-6 py-3 rounded-full font-semibold hover:bg-brand-teal-light transition-all duration-300">
                  <span>{t('blog.readMore')}</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-brand-dark-light rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={language === 'es' ? post.title : post.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-brand-teal text-brand-dark rounded-full">
                      {language === 'es' ? post.category : post.categoryEn}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-teal transition-colors text-brand-dark dark:text-white">
                    {language === 'es' ? post.title : post.titleEn}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {language === 'es' ? post.excerpt : post.excerptEn}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <button className="group/btn flex items-center space-x-2 text-brand-teal hover:text-brand-teal-light transition-colors">
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {language === 'es' ? 'No se encontraron artículos.' : 'No articles found.'}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
