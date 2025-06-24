import React from 'react';
import { Navigation } from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen w-screen bg-gray-50 dark:bg-brand-dark-light text-brand-dark dark:text-white ">
      <Navigation />

      <div className="flex flex-col md:flex-row w-screen min-h-screen">
        {/* Sticky & Centered Aside */}
        <aside
          className="
            flex flex-row md:flex-col items-center
            min-h-[180px] md:min-h-0
            w-full md:w-auto
            md:min-w-[340px] md:max-w-[420px] flex-shrink-0
            bg-gray-50 dark:bg-brand-dark-light
            sticky top-0 z-20
            py-6 md:py-0
          "
          style={{ height: 'auto' }}
        >
          {language === 'es' ? (
            <div className="flex flex-row md:flex-col items-center justify-center w-full gap-2 md:gap-0">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-[2.6rem] xs:text-[3.2rem] sm:text-[4rem] md:text-[5.2rem] leading-[0.95] font-bold tracking-tight">NU</h1>
                <h1 className="text-[2.6rem] xs:text-[3.2rem] sm:text-[4rem] md:text-[5.2rem] leading-[0.95] font-bold tracking-tight">EVO</h1>
                <h1 className="text-[2.6rem] xs:text-[3.2rem] sm:text-[4rem] md:text-[5.2rem] leading-[0.95] font-bold tracking-tight">BLOG</h1>
              </div>
            </div>
          ) : (
            <div className="flex flex-row md:flex-col items-center justify-center w-full gap-2 md:gap-0">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-[2.6rem] xs:text-[3.2rem] sm:text-[4rem] md:text-[5.2rem] leading-[0.95] font-bold tracking-tight">BL</h1>
                <h1 className="text-[2.6rem] xs:text-[3.2rem] sm:text-[4rem] md:text-[5.2rem] leading-[0.95] font-bold tracking-tight">OG–</h1>
                <h1 className="text-[2.6rem] xs:text-[3.2rem] sm:text-[4rem] md:text-[5.2rem] leading-[0.95] font-bold tracking-tight">NEW</h1>
                <h1 className="text-[2.6rem] xs:text-[3.2rem] sm:text-[4rem] md:text-[5.2rem] leading-[0.95] font-bold tracking-tight">S</h1>
              </div>
            </div>
          )}
        </aside>

        {/* Blog Cards */}
        <section className="flex-1 flex flex-col gap-10 xs:gap-12 sm:gap-14 md:gap-16 px-2 xs:px-4 sm:px-6 md:px-12 py-6 md:py-12 bg-gray-50 dark:bg-brand-dark-light min-h-screen">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-row bg-white dark:bg-brand-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-[180px] xs:min-h-[220px] sm:min-h-[260px] md:min-h-[420px]"
            >
              {/* Imagen */}
              <div className="w-1/3 md:w-[340px] h-[120px] xs:h-[150px] sm:h-[180px] md:h-auto flex-shrink-0">
                <img
                  src={post.image}
                  alt={language === 'es' ? post.title : post.titleEn}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Info */}
              <div className="flex-1 flex flex-col justify-between px-4 xs:px-6 sm:px-8 md:px-8 py-4 xs:py-6 sm:py-8 md:py-10 h-full">
                {/* Contenedor superior: fecha, título, botón */}
                <div>
                  <div className="text-xs xs:text-sm sm:text-base text-gray-400 mb-2 xs:mb-3 sm:mb-4 uppercase tracking-widest">
                    {post.date}
                  </div>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6 sm:mb-8 text-brand-dark dark:text-white leading-tight">
                    {language === 'es' ? post.title : post.titleEn}
                  </h2>
                  <button
                    className="inline-flex items-center gap-2 bg-brand-teal text-brand-dark px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full font-semibold hover:bg-brand-teal-light transition-all duration-300"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    {language === 'es' ? 'Descubre' : 'Discover'}
                    <ArrowRight size={22} />
                  </button>
                </div>
                {/* Contenedor inferior: detalle/resumen */}
                <div className="mt-4 xs:mt-6 sm:mt-8 md:mt-10">
                  <p className="text-gray-600 dark:text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl font-light">
                    {language === 'es' ? post.excerpt : post.excerptEn}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default BlogPage;