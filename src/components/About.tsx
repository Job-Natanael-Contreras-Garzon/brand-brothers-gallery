
import React, { useEffect } from 'react';
import { Users, Award, Target, Heart, Sparkles, Rocket, Palette, Zap, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const About: React.FC = () => {
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
  const getValueText = (key: string, fallback: string) => {
    const translation = t(key);
    return translation && translation !== key ? translation : fallback;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  const values = [
    {
      icon: Palette,
      title: language === 'es' ? 'Creatividad' : 'Creativity',
      description: language === 'es' ? 'Transformamos ideas en experiencias visuales únicas que conectan.' : 'We transform ideas into unique visual experiences that connect.',
      color: 'from-purple-500 to-pink-500',
      neonColor: 'shadow-purple-500/50'
    },
    {
      icon: Zap,
      title: language === 'es' ? 'Innovación' : 'Innovation',
      description: language === 'es' ? 'Adoptamos las últimas tendencias y tecnologías del diseño.' : 'We adopt the latest design trends and technologies.',
      color: 'from-yellow-500 to-orange-500',
      neonColor: 'shadow-yellow-500/50'
    },
    {
      icon: Target,
      title: language === 'es' ? 'Estrategia' : 'Strategy',
      description: language === 'es' ? 'Cada decisión creativa está respaldada por una estrategia sólida.' : 'Every creative decision is backed by solid strategy.',
      color: 'from-blue-500 to-teal-500',
      neonColor: 'shadow-brand-teal/50'
    },
    {
      icon: Heart,
      title: language === 'es' ? 'Pasión' : 'Passion',
      description: language === 'es' ? 'Amamos lo que hacemos y se refleja en cada pixel.' : 'We love what we do and it shows in every pixel.',
      color: 'from-red-500 to-pink-500',
      neonColor: 'shadow-red-500/50'
    }
  ];
  return (    <section id="about" className="relative py-20 bg-white dark:bg-brand-dark overflow-hidden">
      {/* Elementos decorativos de fondo más sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-teal/10 to-gray-500/10 rounded-full blur-3xl animate-pulse shadow-xl shadow-brand-teal/10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-gray-500/10 to-brand-teal/10 rounded-full blur-3xl animate-pulse shadow-xl shadow-gray-500/10" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-brand-teal/5 to-gray-400/5 rounded-full blur-3xl animate-pulse shadow-xl shadow-brand-teal/5" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full px-6 relative z-10">
        <div className="max-w-7xl mx-auto">          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-brand-teal text-sm font-semibold mb-4 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700">
              <Sparkles size={16} className="text-brand-teal drop-shadow-sm" />
              {language === 'es' ? 'CREATIVOS • ESTRATEGAS • VISIONARIOS' : 'CREATIVES • STRATEGISTS • VISIONARIES'}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark dark:text-white mb-6 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
              {getValueText('about.title', 'Sobre Nosotros')}
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
              {getValueText('about.description1', 'Somos un equipo apasionado de creativos y estrategas digitales con más de 5 años de experiencia ayudando a empresas a construir marcas memorables.')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content & Stats */}
            <div className="space-y-8 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                {getValueText('about.description2', 'En Branding Brothers, creemos que cada marca tiene una historia única que contar. Nuestro trabajo es encontrar esa historia y comunicarla de manera efectiva a través del diseño, la estrategia y la tecnología.')}
              </p>

              {/* Stats con efectos neón */}
              <div className="grid grid-cols-2 gap-6">
                <div className="group relative p-6 bg-white/80 dark:bg-brand-dark-light/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl shadow-brand-teal/40 animate-on-scroll translate-y-20 opacity-0" style={{ transitionDelay: '400ms' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold bg-gradient-to-r from-brand-teal to-purple-600 bg-clip-text text-transparent mb-2">150+</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {getValueText('about.stats.projects', 'Proyectos exitosos')}
                    </div>
                  </div>
                </div>
                
                <div className="group relative p-6 bg-white/80 dark:bg-brand-dark-light/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl shadow-purple-500/40 animate-on-scroll translate-y-20 opacity-0" style={{ transitionDelay: '500ms' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">98%</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {getValueText('about.stats.clients', 'Clientes satisfechos')}
                    </div>
                  </div>
                </div>
                
                <div className="group relative p-6 bg-white/80 dark:bg-brand-dark-light/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl shadow-green-500/40 animate-on-scroll translate-y-20 opacity-0" style={{ transitionDelay: '600ms' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">24/7</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {getValueText('about.stats.support', 'Soporte disponible')}
                    </div>
                  </div>
                </div>
                
                <div className="group relative p-6 bg-white/80 dark:bg-brand-dark-light/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl shadow-yellow-500/40 animate-on-scroll translate-y-20 opacity-0" style={{ transitionDelay: '700ms' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">5+</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {getValueText('about.stats.experience', 'Años de experiencia')}
                    </div>
                  </div>
                </div>
              </div>              {/* Botón para ver más */}
              <div className="pt-8 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '800ms' }}>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="group relative inline-flex items-center gap-3 bg-brand-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-teal/90 transition-all duration-300 shadow-lg hover:shadow-brand-teal/25 hover:transform hover:scale-105"
                >
                  <Eye className="group-hover:rotate-12 transition-transform drop-shadow-sm" size={20} />
                  {language === 'es' ? 'Conoce más sobre nosotros' : 'Learn more about us'}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>
            </div>            {/* Values con efectos más sutiles */}
            <div className="space-y-6 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '400ms' }}>
              <h3 className="text-3xl font-bold mb-8 text-brand-dark dark:text-white">
                {getValueText('about.values', 'Nuestros Valores')}
              </h3>
              
              {values.map((value, index) => (
                <div
                  key={`value-${index}`}
                  className={`group relative p-6 bg-white dark:bg-brand-dark rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:transform hover:scale-105 animate-on-scroll translate-y-20 opacity-0 overflow-hidden hover:shadow-2xl ${value.neonColor}`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  {/* Fondo gradiente animado con neón */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Decoración geométrica con brillo */}
                  <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-20 transition-opacity">
                    <div className={`w-full h-full bg-gradient-to-br ${value.color} rounded-full shadow-lg`}></div>
                  </div>
                  
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 ${value.neonColor}`}>
                      <value.icon className="text-white drop-shadow-sm" size={28} />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold mb-2 bg-gradient-to-r ${value.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                        {value.description}
                      </p>
                    </div>
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
