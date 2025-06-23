
import React, { useEffect } from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

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

  const getValueText = (key: string, fallback: string) => {
    const translation = t(key);
    return translation && translation !== key ? translation : fallback;
  };

  const values = [
    {
      icon: Target,
      title: language === 'es' ? 'Enfoque' : 'Focus',
      description: language === 'es' ? 'Nos centramos en resultados medibles y objetivos claros.' : 'We focus on measurable results and clear objectives.'
    },
    {
      icon: Heart,
      title: language === 'es' ? 'Pasión' : 'Passion',
      description: language === 'es' ? 'Amamos lo que hacemos y se refleja en cada proyecto.' : 'We love what we do and it shows in every project.'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Colaboración' : 'Collaboration',
      description: language === 'es' ? 'Trabajamos como un equipo con nuestros clientes.' : 'We work as a team with our clients.'
    },
    {
      icon: Award,
      title: language === 'es' ? 'Excelencia' : 'Excellence',
      description: language === 'es' ? 'Buscamos la perfección en cada detalle.' : 'We seek perfection in every detail.'
    }
  ];

  return (
    <section id="about" className="w-full py-20 bg-white dark:bg-brand-dark text-brand-dark dark:text-white">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  {getValueText('about.title', 'Sobre Nosotros')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  {getValueText('about.description1', 'Somos un equipo apasionado de creativos y estrategas digitales con más de 5 años de experiencia ayudando a empresas a construir marcas memorables.')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {getValueText('about.description2', 'En Branding Brothers, creemos que cada marca tiene una historia única que contar. Nuestro trabajo es encontrar esa historia y comunicarla de manera efectiva a través del diseño, la estrategia y la tecnología.')}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
                  <div className="text-3xl font-bold text-brand-teal mb-2">150+</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {getValueText('about.stats.projects', 'Proyectos exitosos')}
                  </div>
                </div>
                <div className="animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
                  <div className="text-3xl font-bold text-brand-teal mb-2">98%</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {getValueText('about.stats.clients', 'Clientes satisfechos')}
                  </div>
                </div>
                <div className="animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '400ms' }}>
                  <div className="text-3xl font-bold text-brand-teal mb-2">24/7</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {getValueText('about.stats.support', 'Soporte disponible')}
                  </div>
                </div>
                <div className="animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '500ms' }}>
                  <div className="text-3xl font-bold text-brand-teal mb-2">5+</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {getValueText('about.stats.experience', 'Años de experiencia')}
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold mb-8">
                {getValueText('about.values', 'Nuestros Valores')}
              </h3>
              
              {values.map((value, index) => (
                <div
                  key={`value-${index}`}
                  className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-brand-dark-light rounded-xl border border-gray-200 dark:border-gray-800 hover:border-brand-teal/50 transition-all duration-300 animate-on-scroll translate-y-20 opacity-0"
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-brand-teal" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-teal mb-2">{value.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
