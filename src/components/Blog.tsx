
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Tendencias de Diseño para 2024',
    excerpt: 'Descubre las últimas tendencias en diseño gráfico y branding que dominarán este año.',
    author: 'María González',
    date: '15 Mar 2024',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center',
    category: 'Diseño'
  },
  {
    id: 2,
    title: 'Cómo Crear una Estrategia de Marca Exitosa',
    excerpt: 'Guía completa para desarrollar una estrategia de marca que conecte con tu audiencia.',
    author: 'Carlos Rodríguez',
    date: '10 Mar 2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
    category: 'Estrategia'
  },
  {
    id: 3,
    title: 'El Futuro del Marketing Digital',
    excerpt: 'Análisis de las tecnologías emergentes que están transformando el marketing.',
    author: 'Ana López',
    date: '5 Mar 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
    category: 'Marketing'
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-brand-dark-light dark:bg-brand-dark-light text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestro <span className="text-brand-teal">Blog</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mantente al día con las últimas tendencias, consejos y insights del mundo del branding y marketing digital.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-brand-dark dark:bg-brand-dark rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-brand-teal text-brand-dark rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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
                  <span>Leer más</span>
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-full font-semibold hover:bg-brand-teal hover:text-brand-dark transition-all duration-300">
            Ver todos los artículos
          </button>
        </div>
      </div>
    </section>
  );
};
