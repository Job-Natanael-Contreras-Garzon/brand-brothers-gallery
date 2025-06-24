
import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';


const blogPosts = [
  {
    id: 1,
    title: '10 Tendencias de Diseño para 2024',
    titleEn: '10 Design Trends for 2024',
    excerpt: 'Descubre las últimas tendencias en diseño gráfico y branding que dominarán este año.',
    excerptEn: 'Discover the latest trends in graphic design and branding that will dominate this year.',
    author: 'María González', 
    date: '15 Mar 2024',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center',
    category: 'Diseño',
    categoryEn: 'Design'
  },
  {
    id: 2,
    title: 'Cómo Crear una Estrategia de Marca Exitosa',
    titleEn: 'How to Create a Successful Brand Strategy',
    excerpt: 'Guía completa para desarrollar una estrategia de marca que conecte con tu audiencia.',
    excerptEn: 'Complete guide to develop a brand strategy that connects with your audience.',
    author: 'Carlos Rodríguez',
    date: '10 Mar 2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
    category: 'Estrategia',
    categoryEn: 'Strategy'
  },
  {
    id: 3,
    title: 'El Futuro del Marketing Digital',
    titleEn: 'The Future of Digital Marketing',
    excerpt: 'Análisis de las tecnologías emergentes que están transformando el marketing.',
    excerptEn: 'Analysis of emerging technologies that are transforming marketing.',
    author: 'Ana López',
    date: '5 Mar 2024', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
    category: 'Marketing',
    categoryEn: 'Marketing'
  }
];

export const Blog: React.FC = () => {
  const { t, language } = useLanguage();

  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('translate-y-20', 'opacity-0');
          } else {
            entry.target.classList.remove('animate-slide-up');
            entry.target.classList.add('translate-y-20', 'opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" className="w-full py-20 bg-gray-50 dark:bg-brand-dark-light text-brand-dark dark:text-white">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t('blog.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post, index) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-brand-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-on-scroll translate-y-20 opacity-0 text-brand-dark dark:text-white"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Image */}
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

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-teal transition-colors">
                    {language === 'es' ? post.title : post.titleEn}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {language === 'es' ? post.excerpt : post.excerptEn}
                  </p>

                  {/* Meta */}
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
                  </div>

                  {/* Read More */}
                  <button className="group/btn flex items-center space-x-2 text-brand-teal hover:text-brand-teal-light transition-colors">
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '500ms' }}>
            <button
            onClick={() => navigate('/blog')}
            className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-full font-semibold hover:bg-brand-teal hover:text-white dark:hover:text-brand-dark transition-all duration-300">
              {t('blog.viewAll')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
