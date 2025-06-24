
import React, { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Users, Award, Target, Heart, Star, Coffee, Lightbulb, Shield, Palette, Zap, Rocket, Sparkles, Eye, Globe, TrendingUp } from 'lucide-react';

const About = () => {
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
  
  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigate('/');
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
  };
  const values = [
    {
      icon: Palette,
      title: language === 'es' ? 'Creatividad' : 'Creativity',
      description: language === 'es' ? 'Transformamos ideas en experiencias visuales únicas que conectan.' : 'We transform ideas into unique visual experiences that connect.',
      color: 'from-purple-600 to-indigo-600',
      neonColor: 'shadow-purple-500/50'
    },
    {
      icon: Zap,
      title: language === 'es' ? 'Innovación' : 'Innovation',
      description: language === 'es' ? 'Adoptamos las últimas tendencias y tecnologías del diseño.' : 'We adopt the latest design trends and technologies.',
      color: 'from-blue-600 to-cyan-600',
      neonColor: 'shadow-blue-500/50'
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
      color: 'from-indigo-600 to-purple-600',
      neonColor: 'shadow-indigo-500/50'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Colaboración' : 'Collaboration',
      description: language === 'es' ? 'Trabajamos como socios creativos con nuestros clientes.' : 'We work as creative partners with our clients.',
      color: 'from-teal-600 to-blue-600',
      neonColor: 'shadow-teal-500/50'
    },
    {
      icon: Award,
      title: language === 'es' ? 'Excelencia' : 'Excellence',
      description: language === 'es' ? 'Superamos expectativas en cada proyecto que entregamos.' : 'We exceed expectations in every project we deliver.',
      color: 'from-indigo-500 to-purple-500',
      neonColor: 'shadow-indigo-500/50'
    }
  ];
  const team = [
    {
      name: 'María González',
      role: language === 'es' ? 'Directora Creativa' : 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: language === 'es' ? 'Visionaria del diseño con 10+ años creando marcas icónicas.' : 'Design visionary with 10+ years creating iconic brands.',
      specialty: language === 'es' ? 'Branding Visual' : 'Visual Branding',
      gradient: 'from-purple-500 to-indigo-500',
      neonGlow: 'shadow-purple-500/30'
    },
    {
      name: 'Carlos Rodríguez',
      role: language === 'es' ? 'Director de Estrategia' : 'Strategy Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: language === 'es' ? 'Estratega digital que conecta marcas con audiencias globales.' : 'Digital strategist connecting brands with global audiences.',
      specialty: language === 'es' ? 'Marketing Digital' : 'Digital Marketing',
      gradient: 'from-blue-500 to-cyan-500',
      neonGlow: 'shadow-blue-500/30'
    },
    {
      name: 'Ana López',      role: language === 'es' ? 'Directora de Crecimiento' : 'Growth Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: language === 'es' ? 'Experta en escalar marcas y maximizar su impacto digital.' : 'Expert in scaling brands and maximizing digital impact.',
      specialty: language === 'es' ? 'Growth Hacking' : 'Growth Hacking',
      gradient: 'from-teal-500 to-blue-500',
      neonGlow: 'shadow-teal-500/30'
    }
  ];
  const achievements = [
    {
      icon: Rocket,
      number: '250+',
      label: language === 'es' ? 'Marcas Lanzadas' : 'Brands Launched',
      description: language === 'es' ? 'Proyectos exitosos' : 'Successful projects',
      neonColor: 'shadow-brand-teal/40'
    },
    {
      icon: Globe,
      number: '15+',
      label: language === 'es' ? 'Países' : 'Countries',
      description: language === 'es' ? 'Alcance global' : 'Global reach',
      neonColor: 'shadow-purple-500/40'
    },
    {
      icon: TrendingUp,
      number: '99%',
      label: language === 'es' ? 'Satisfacción' : 'Satisfaction',
      description: language === 'es' ? 'Clientes felices' : 'Happy clients',
      neonColor: 'shadow-blue-500/40'
    },
    {
      icon: Award,
      number: '50+',
      label: language === 'es' ? 'Premios' : 'Awards',
      description: language === 'es' ? 'Reconocimientos' : 'Recognitions',
      neonColor: 'shadow-indigo-500/40'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark overflow-x-hidden">
      <Navigation />
        {/* Hero Section - Con toques neón y animaciones */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-teal/5 via-blue-50/30 to-indigo-50/20 dark:from-brand-dark dark:via-brand-dark-light dark:to-brand-dark">
        {/* Elementos decorativos de fondo con neón */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-teal/20 to-purple-500/20 rounded-full blur-3xl animate-pulse shadow-2xl shadow-brand-teal/20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse shadow-2xl shadow-blue-500/20" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse shadow-2xl shadow-blue-500/10" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-teal to-purple-600 bg-clip-text text-transparent text-sm font-semibold mb-4 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700">
              <Sparkles size={16} className="text-brand-teal drop-shadow-sm shadow-brand-teal/50" />
              {language === 'es' ? 'CREATIVOS • ESTRATEGAS • VISIONARIOS' : 'CREATIVES • STRATEGISTS • VISIONARIES'}
            </div>
              <h1 className="text-6xl md:text-8xl font-bold text-brand-dark dark:text-white mb-8 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
              <span className="bg-gradient-to-r from-brand-teal via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
                {language === 'es' ? 'Somos' : 'We Are'}
              </span>
              <br />
              <span className="relative">
                {language === 'es' ? 'Branding Brothers' : 'Branding Brothers'}
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-brand-teal to-purple-600 rounded-full opacity-30 shadow-sm shadow-brand-teal/30"></div>
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
              {language === 'es' 
                ? 'Transformamos ideas en marcas extraordinarias que conquistan corazones y mercados. Cada proyecto es una obra maestra de creatividad y estrategia.'
                : 'We transform ideas into extraordinary brands that conquer hearts and markets. Every project is a masterpiece of creativity and strategy.'
              }
            </p>

            {/* Stats con efectos neón mejorados */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className={`group relative p-6 bg-white/80 dark:bg-brand-dark-light/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-on-scroll translate-y-20 opacity-0 hover:shadow-2xl ${achievement.neonColor} hover:shadow-2xl`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <achievement.icon className="text-brand-teal mb-4 mx-auto group-hover:scale-110 transition-transform drop-shadow-sm group-hover:drop-shadow-lg group-hover:shadow-brand-teal/50" size={28} />
                  <div className="text-3xl font-bold text-brand-dark dark:text-white mb-2 bg-gradient-to-r from-brand-teal to-purple-600 bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{achievement.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Valores - Con toques neón y animaciones */}
      <section className="py-20 bg-gray-50 dark:bg-brand-dark-light relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-dark dark:text-white mb-6 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700">
              <span className="bg-gradient-to-r from-brand-teal to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                {language === 'es' ? 'Nuestros' : 'Our'}
              </span>{' '}
              {language === 'es' ? 'Valores' : 'Values'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
              {language === 'es' 
                ? 'Los principios que impulsan cada decisión creativa y definen nuestra identidad como agencia.'
                : 'The principles that drive every creative decision and define our identity as an agency.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group relative p-8 bg-white dark:bg-brand-dark rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:transform hover:scale-105 animate-on-scroll translate-y-20 opacity-0 overflow-hidden hover:shadow-2xl ${value.neonColor}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Fondo gradiente animado con neón */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Decoración geométrica con brillo */}
                <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-20 transition-opacity">
                  <div className={`w-full h-full bg-gradient-to-br ${value.color} rounded-full shadow-lg`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl ${value.neonColor}`}>
                    <value.icon className="text-white drop-shadow-sm" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-4 group-hover:text-brand-teal transition-colors drop-shadow-sm">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Elemento decorativo en hover con neón */}
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-brand-teal/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${value.neonColor}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Team - Corregida la superposición y con efectos neón y animaciones */}
      <section className="py-20 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-dark dark:text-white mb-6 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700">
              {language === 'es' ? 'Mentes' : 'Creative'}{' '}
              <span className="bg-gradient-to-r from-brand-teal to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
                {language === 'es' ? 'Creativas' : 'Minds'}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
              {language === 'es' 
                ? 'El equipo de visionarios que da vida a las marcas más memorables.'
                : 'The team of visionaries who bring the most memorable brands to life.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group text-center animate-on-scroll translate-y-20 opacity-0 transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-12">
                  {/* Marco decorativo con neón */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full p-1 group-hover:scale-105 transition-transform duration-300 shadow-lg group-hover:shadow-2xl ${member.neonGlow}`}>
                    <div className="w-full h-full bg-white dark:bg-brand-dark rounded-full"></div>
                  </div>
                  
                  {/* Imagen - Corregida la superposición */}
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-56 h-56 mx-auto object-cover rounded-full relative z-10 group-hover:scale-105 transition-transform duration-300 shadow-lg"
                    />
                    
                    {/* Badge de especialidad - Reposicionado para evitar superposición */}
                    <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r ${member.gradient} text-white text-sm font-semibold rounded-full shadow-xl ${member.neonGlow} z-20`}>
                      {member.specialty}
                    </div>
                  </div>
                  
                  {/* Elementos decorativos con brillo neón */}
                  <div className="absolute top-4 right-8 w-4 h-4 bg-brand-teal rounded-full opacity-60 group-hover:animate-pulse shadow-sm shadow-brand-teal/50"></div>
                  <div className="absolute bottom-8 left-4 w-3 h-3 bg-purple-500 rounded-full opacity-40 group-hover:animate-pulse shadow-sm shadow-purple-500/50" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                <div className="space-y-4 mt-8">
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-white group-hover:text-brand-teal transition-colors drop-shadow-sm">
                    {member.name}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent drop-shadow-sm`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 max-w-xs mx-auto leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* CTA Section - Con efectos neón intensificados y animaciones */}
      <section className="relative py-20 bg-gradient-to-br from-brand-teal via-purple-600 to-indigo-600 overflow-hidden">
        {/* Elementos decorativos de fondo con neón */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse shadow-2xl shadow-white/20"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse shadow-2xl shadow-white/20" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse shadow-xl shadow-white/10" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold mb-6 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700">
            <Rocket size={16} className="drop-shadow-sm" />
            {language === 'es' ? 'EMPECEMOS ALGO INCREÍBLE' : 'LET\'S START SOMETHING AMAZING'}
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
            {language === 'es' ? '¿Listo para crear' : 'Ready to create'}{' '}
            <span className="relative">
              {language === 'es' ? 'magia' : 'magic'}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/30 rounded-full shadow-sm shadow-white/30"></div>
            </span>
            {language === 'es' ? '?' : '?'}
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed drop-shadow-sm animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            {language === 'es' 
              ? 'Transformemos tu visión en una marca que inspire, conecte y conquiste. El futuro de tu marca comienza aquí.'
              : 'Let\'s transform your vision into a brand that inspires, connects and conquers. The future of your brand starts here.'
            }
          </p>
          
          <button 
            className="group relative inline-flex items-center gap-3 bg-white text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/30 animate-on-scroll translate-y-20 opacity-0"
            onClick={() => handleNavigation('/', 'contact')}
            style={{ transitionDelay: '300ms' }}
          >
            <Sparkles className="group-hover:rotate-12 transition-transform drop-shadow-sm" size={20} />
            {language === 'es' ? 'Crear mi marca' : 'Create my brand'}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"></div>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
