import React, { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const BlogPage = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const handleNavigation = (path: string, sectionId?: string) => {
    navigate(path);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: '10 Tendencias de Diseño para 2024',
      titleEn: '10 Design Trends for 2024',
      excerpt: 'Descubre las últimas tendencias en diseño gráfico y branding que dominarán este año.',
      excerptEn: 'Discover the latest trends in graphic design and branding that will dominate this year.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&crop=center',
      date: '15 Mar 2024',
    },
    {
      id: 2,
      title: 'Cómo Crear una Estrategia de Marca Exitosa',
      titleEn: 'How to Create a Successful Brand Strategy',
      excerpt: 'Guía completa para desarrollar una estrategia de marca que conecte con tu audiencia.',
      excerptEn: 'Complete guide to develop a brand strategy that connects with your audience.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
      date: '10 Mar 2024',
    },
    {
      id: 3,
      title: 'El Futuro del Marketing Digital',
      titleEn: 'The Future of Digital Marketing',
      excerpt: 'Análisis de las tecnologías emergentes que están transformando el panorama del marketing.',
      excerptEn: 'Analysis of emerging technologies that are transforming the marketing landscape.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
      date: '5 Mar 2024',
    },
    {
      id: 4,
      title: 'Psicología del Color en el Branding',
      titleEn: 'Color Psychology in Branding',
      excerpt: 'Cómo los colores influyen en las decisiones de compra y la percepción de marca.',
      excerptEn: 'How colors influence purchasing decisions and brand perception.',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop&crop=center',
      date: '28 Feb 2024',
    },
    {
      id: 5,
      title: 'La Importancia de la UI/UX en el Éxito del Producto',
      titleEn: 'The Importance of UI/UX in Product Success',
      excerpt: 'Un buen diseño no es solo cómo se ve, sino cómo funciona. Exploramos por qué la UI/UX es vital.',
      excerptEn: 'Good design is not just how it looks, but how it works. We explore why UI/UX is vital.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&crop=center',
      date: '20 Feb 2024',
    },
    {
      id: 6,
      title: 'Storytelling: Conectando Marcas con Corazones',
      titleEn: 'Storytelling: Connecting Brands with Hearts',
      excerpt: 'Las historias venden. Aprende a construir una narrativa de marca que inspire y fidelice a tus clientes.',
      excerptEn: 'Stories sell. Learn to build a brand narrative that inspires and retains your customers.',
      image: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=800&h=600&fit=crop&crop=center',
      date: '15 Feb 2024',
    }
  ];

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-20', 'scale-90');
          entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => elements.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gray-50 dark:bg-brand-dark-light text-brand-dark dark:text-white">
      <Navigation />

      <div className="flex flex-col md:flex-row w-full">
        <aside className="hidden md:flex md:w-5/12 lg:w-4/12 flex-col justify-center sticky top-0 h-screen px-6 lg:px-12 xl:px-20">
          <div className="w-full">
            <div className="text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-center">
              <div><h1>BL</h1></div>
              <div><h1>OG–</h1></div>
              <div><h1>NEW</h1></div>
              <div className='flex text-center items-center justify-center'>
                <h1>S</h1>
                <div className="mt-6 text-lg lg:text-xl font-light">
                  
                  
                  <div>{language === 'es' ? 'Últimas Noticias' : 'Latest News'}</div>
                  <div>{language === 'es' ? 'Y Actualizaciones' : 'and updates'}.</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-7/12 lg:w-8/12 flex flex-col items-center md:items-start py-12 md:pt-24">
          
          <div className="md:hidden text-center mb-12 px-4">
            <h1 className="text-6xl font-bold">
              {language === 'es' ? 'NUEVO' : 'NEWS'}
            </h1>
          </div>

          <div className="w-full max-w-3xl flex flex-col gap-12 px-4">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="flex flex-col sm:flex-row bg-white dark:bg-brand-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:[box-shadow:0_15px_30px_-12px_rgba(0,0,0,0.9)] transition-all duration-700 ease-in-out animate-on-scroll opacity-0 translate-y-20 -scale-150 hover:scale-[1.0125]"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-full sm:w-2/5 md:w-1/3 h-56 sm:h-auto flex-shrink-0">
                  <img
                    src={post.image}
                    alt={language === 'es' ? post.title : post.titleEn}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-full sm:w-3/5 md:w-2/3 flex flex-col justify-between p-6 lg:p-8">
                  <div>
                    <div className="text-xs text-gray-400 mb-3 uppercase tracking-widest">
                      {post.date}
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold mb-4 text-brand-dark dark:text-white leading-tight">
                      {language === 'es' ? post.title : post.titleEn}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base font-light mb-6">
                      {language === 'es' ? post.excerpt : post.excerptEn}
                    </p>
                  </div>
                  <button
                    className="self-start inline-flex items-center gap-2 bg-brand-teal text-brand-dark px-6 py-2.5 rounded-full font-semibold hover:bg-brand-teal-light transition-all duration-300 text-sm"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    {t('blog.discoverButton')}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      <section className="w-full bg-gray-100 dark:bg-brand-dark py-20 px-4">
        <div className="text-center max-w-4xl mx-auto bg-white dark:bg-brand-dark-light p-10 md:p-16 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark dark:text-white mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <button 
            onClick={() => handleNavigation('/', 'contact')}
            className="group inline-flex items-center gap-3 bg-brand-teal text-brand-dark px-8 py-3 rounded-full font-semibold hover:bg-brand-teal-light transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            {t('cta.button')}
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;