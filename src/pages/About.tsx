
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Users, Award, Target, Heart, Star, Coffee, Lightbulb, Shield, Palette, Zap, Rocket, Sparkles, Eye, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
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
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: language === 'es' ? 'Innovación' : 'Innovation',
      description: language === 'es' ? 'Adoptamos las últimas tendencias y tecnologías del diseño.' : 'We adopt the latest design trends and technologies.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: language === 'es' ? 'Estrategia' : 'Strategy',
      description: language === 'es' ? 'Cada decisión creativa está respaldada por una estrategia sólida.' : 'Every creative decision is backed by solid strategy.',
      color: 'from-blue-500 to-teal-500'
    },
    {
      icon: Heart,
      title: language === 'es' ? 'Pasión' : 'Passion',
      description: language === 'es' ? 'Amamos lo que hacemos y se refleja en cada pixel.' : 'We love what we do and it shows in every pixel.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Colaboración' : 'Collaboration',
      description: language === 'es' ? 'Trabajamos como socios creativos con nuestros clientes.' : 'We work as creative partners with our clients.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: language === 'es' ? 'Excelencia' : 'Excellence',
      description: language === 'es' ? 'Superamos expectativas en cada proyecto que entregamos.' : 'We exceed expectations in every project we deliver.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const team = [
    {
      name: 'María González',
      role: language === 'es' ? 'Directora Creativa' : 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face',
      bio: language === 'es' ? 'Visionaria del diseño con 10+ años creando marcas icónicas.' : 'Design visionary with 10+ years creating iconic brands.',
      specialty: language === 'es' ? 'Branding Visual' : 'Visual Branding',
      gradient: 'from-pink-500 to-violet-500'
    },
    {
      name: 'Carlos Rodríguez',
      role: language === 'es' ? 'Director de Estrategia' : 'Strategy Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: language === 'es' ? 'Estratega digital que conecta marcas con audiencias globales.' : 'Digital strategist connecting brands with global audiences.',
      specialty: language === 'es' ? 'Marketing Digital' : 'Digital Marketing',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Ana López',
      role: language === 'es' ? 'Directora de Crecimiento' : 'Growth Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: language === 'es' ? 'Experta en escalar marcas y maximizar su impacto digital.' : 'Expert in scaling brands and maximizing digital impact.',
      specialty: language === 'es' ? 'Growth Hacking' : 'Growth Hacking',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const achievements = [
    {
      icon: Rocket,
      number: '250+',
      label: language === 'es' ? 'Marcas Lanzadas' : 'Brands Launched',
      description: language === 'es' ? 'Proyectos exitosos' : 'Successful projects'
    },
    {
      icon: Globe,
      number: '15+',
      label: language === 'es' ? 'Países' : 'Countries',
      description: language === 'es' ? 'Alcance global' : 'Global reach'
    },
    {
      icon: TrendingUp,
      number: '99%',
      label: language === 'es' ? 'Satisfacción' : 'Satisfaction',
      description: language === 'es' ? 'Clientes felices' : 'Happy clients'
    },
    {
      icon: Award,
      number: '50+',
      label: language === 'es' ? 'Premios' : 'Awards',
      description: language === 'es' ? 'Reconocimientos' : 'Recognitions'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section - Más dinámico y visual */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-teal/5 via-purple-50/30 to-pink-50/20 dark:from-brand-dark dark:via-brand-dark-light dark:to-brand-dark">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-teal/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-teal to-purple-600 bg-clip-text text-transparent text-sm font-semibold mb-4 animate-fade-in">
              <Sparkles size={16} className="text-brand-teal" />
              {language === 'es' ? 'CREATIVOS • ESTRATEGAS • VISIONARIOS' : 'CREATIVES • STRATEGISTS • VISIONARIES'}
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-brand-dark dark:text-white mb-8 animate-fade-in">
              <span className="bg-gradient-to-r from-brand-teal via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {language === 'es' ? 'Somos' : 'We Are'}
              </span>
              <br />
              <span className="relative">
                {language === 'es' ? 'Branding Brothers' : 'Branding Brothers'}
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-brand-teal to-purple-600 rounded-full opacity-30"></div>
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              {language === 'es' 
                ? 'Transformamos ideas en marcas extraordinarias que conquistan corazones y mercados. Cada proyecto es una obra maestra de creatividad y estrategia.'
                : 'We transform ideas into extraordinary brands that conquer hearts and markets. Every project is a masterpiece of creativity and strategy.'
              }
            </p>

            {/* Stats mejoradas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.label}
                  className="group relative p-6 bg-white/80 dark:bg-brand-dark-light/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <achievement.icon className="text-brand-teal mb-4 mx-auto group-hover:scale-110 transition-transform" size={28} />
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

      {/* Sección Valores - Rediseñada con más impacto visual */}
      <section className="py-20 bg-gray-50 dark:bg-brand-dark-light relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-dark dark:text-white mb-6">
              <span className="bg-gradient-to-r from-brand-teal to-purple-600 bg-clip-text text-transparent">
                {language === 'es' ? 'Nuestros' : 'Our'}
              </span>{' '}
              {language === 'es' ? 'Valores' : 'Values'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                className="group relative p-8 bg-white dark:bg-brand-dark rounded-3xl border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:transform hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Fondo gradiente animado */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Decoración geométrica */}
                <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className={`w-full h-full bg-gradient-to-br ${value.color} rounded-full`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-4 group-hover:text-brand-teal transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Elemento decorativo en hover */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-brand-teal/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Team - Completamente rediseñada */}
      <section className="py-20 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-brand-dark dark:text-white mb-6">
              {language === 'es' ? 'Mentes' : 'Creative'}{' '}
              <span className="bg-gradient-to-r from-brand-teal to-purple-600 bg-clip-text text-transparent">
                {language === 'es' ? 'Creativas' : 'Minds'}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-8">
                  {/* Marco decorativo */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full p-1 group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white dark:bg-brand-dark rounded-full"></div>
                  </div>
                  
                  {/* Imagen */}
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-56 h-56 mx-auto object-cover rounded-full relative z-10 group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Badge de especialidad */}
                    <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r ${member.gradient} text-white text-sm font-semibold rounded-full shadow-lg`}>
                      {member.specialty}
                    </div>
                  </div>
                  
                  {/* Elementos decorativos */}
                  <div className="absolute top-4 right-8 w-4 h-4 bg-brand-teal rounded-full opacity-60 group-hover:animate-pulse"></div>
                  <div className="absolute bottom-8 left-4 w-3 h-3 bg-purple-500 rounded-full opacity-40 group-hover:animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-white group-hover:text-brand-teal transition-colors">
                    {member.name}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
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
      </section>

      {/* CTA Section - Más impactante */}
      <section className="relative py-20 bg-gradient-to-br from-brand-teal via-purple-600 to-pink-600 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold mb-6">
            <Rocket size={16} />
            {language === 'es' ? 'EMPECEMOS ALGO INCREÍBLE' : 'LET\'S START SOMETHING AMAZING'}
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {language === 'es' ? '¿Listo para crear' : 'Ready to create'}{' '}
            <span className="relative">
              {language === 'es' ? 'magia' : 'magic'}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/30 rounded-full"></div>
            </span>
            {language === 'es' ? '?' : '?'}
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            {language === 'es' 
              ? 'Transformemos tu visión en una marca que inspire, conecte y conquiste. El futuro de tu marca comienza aquí.'
              : 'Let\'s transform your vision into a brand that inspires, connects and conquers. The future of your brand starts here.'
            }
          </p>
          
          <button 
            className="group relative inline-flex items-center gap-3 bg-white text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:transform hover:scale-105"
            onClick={() => handleNavigation('/', 'contact')}
          >
            <Sparkles className="group-hover:rotate-12 transition-transform" size={20} />
            {language === 'es' ? 'Crear mi marca' : 'Create my brand'}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
