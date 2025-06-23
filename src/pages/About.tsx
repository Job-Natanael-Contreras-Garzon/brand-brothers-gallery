
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Award, Target, Heart, Star, Coffee, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: language === 'es' ? 'Enfoque' : 'Focus',
      description: language === 'es' ? 'Nos centramos en resultados medibles y objetivos claros para cada proyecto.' : 'We focus on measurable results and clear objectives for each project.'
    },
    {
      icon: Heart,
      title: language === 'es' ? 'Pasión' : 'Passion',
      description: language === 'es' ? 'Amamos lo que hacemos y se refleja en cada detalle de nuestro trabajo.' : 'We love what we do and it shows in every detail of our work.'
    },
    {
      icon: Users,
      title: language === 'es' ? 'Colaboración' : 'Collaboration',
      description: language === 'es' ? 'Trabajamos como un equipo integrado con nuestros clientes.' : 'We work as an integrated team with our clients.'
    },
    {
      icon: Award,
      title: language === 'es' ? 'Excelencia' : 'Excellence',
      description: language === 'es' ? 'Buscamos la perfección en cada detalle y superamos expectativas.' : 'We seek perfection in every detail and exceed expectations.'
    },
    {
      icon: Lightbulb,
      title: language === 'es' ? 'Innovación' : 'Innovation',
      description: language === 'es' ? 'Adoptamos las últimas tecnologías y tendencias del mercado.' : 'We adopt the latest technologies and market trends.'
    },
    {
      icon: Shield,
      title: language === 'es' ? 'Confianza' : 'Trust',
      description: language === 'es' ? 'Construimos relaciones duraderas basadas en la transparencia.' : 'We build lasting relationships based on transparency.'
    }
  ];

  const team = [
    {
      name: 'María González',
      role: language === 'es' ? 'Directora Creativa' : 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face',
      bio: language === 'es' ? 'Experta en branding con más de 8 años de experiencia.' : 'Branding expert with over 8 years of experience.'
    },
    {
      name: 'Carlos Rodríguez',
      role: language === 'es' ? 'Director de Estrategia' : 'Strategy Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: language === 'es' ? 'Especialista en estrategias digitales y marketing de contenidos.' : 'Specialist in digital strategies and content marketing.'
    },
    {
      name: 'Ana López',
      role: language === 'es' ? 'Directora de Marketing' : 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: language === 'es' ? 'Líder en marketing digital y análisis de mercado.' : 'Leader in digital marketing and market analysis.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-teal/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-brand-dark dark:text-white mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {t('about.description1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {t('about.description2')}
              </p>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-brand-teal mb-2">200+</div>
                  <div className="text-gray-500 dark:text-gray-400">{t('about.stats.projects')}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-brand-teal mb-2">99%</div>
                  <div className="text-gray-500 dark:text-gray-400">{t('about.stats.clients')}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-brand-teal mb-2">24/7</div>
                  <div className="text-gray-500 dark:text-gray-400">{t('about.stats.support')}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-brand-teal mb-2">8+</div>
                  <div className="text-gray-500 dark:text-gray-400">{t('about.stats.experience')}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center"
                alt="Team working"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-brand-teal/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-brand-dark-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-6">
              {t('about.values')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Los principios que guían nuestro trabajo y definen nuestra cultura empresarial.'
                : 'The principles that guide our work and define our company culture.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-8 bg-white dark:bg-brand-dark rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-brand-teal/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal/30 transition-colors">
                  <value.icon className="text-brand-teal" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-4 group-hover:text-brand-teal transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-6">
              {language === 'es' ? 'Nuestro Equipo' : 'Our Team'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Conoce a los creativos y estrategas que hacen posible cada proyecto.'
                : 'Meet the creatives and strategists who make every project possible.'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto object-cover rounded-full border-4 border-gray-200 dark:border-gray-700 group-hover:border-brand-teal transition-colors duration-300"
                  />
                  <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-2 group-hover:text-brand-teal transition-colors">
                  {member.name}
                </h3>
                <p className="text-brand-teal font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-teal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            {language === 'es' ? '¿Listo para trabajar juntos?' : 'Ready to work together?'}
          </h2>
          <p className="text-xl text-brand-dark/80 mb-8">
            {language === 'es' 
              ? 'Transformemos tu idea en una marca poderosa que conecte con tu audiencia.'
              : 'Let\'s transform your idea into a powerful brand that connects with your audience.'
            }
          </p>
          <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            {language === 'es' ? 'Comencemos un proyecto' : 'Start a project'}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
