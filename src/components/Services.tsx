
import React, { useEffect } from 'react';
import { Palette, Code, Megaphone, Camera, Search, BarChart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

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

  const services = [
    {
      icon: Palette,
      title: t('services.branding.title') || 'Diseño de Marca',
      description: t('services.branding.description') || 'Creamos identidades visuales únicas que reflejan la esencia de tu empresa.',
      features: [
        t('services.branding.features.0') || 'Logotipos únicos',
        t('services.branding.features.1') || 'Manual de marca completo',
        t('services.branding.features.2') || 'Papelería corporativa'
      ]
    },
    {
      icon: Code,
      title: t('services.web.title') || 'Desarrollo Web',
      description: t('services.web.description') || 'Sitios web modernos, responsivos y optimizados para conversión.',
      features: [
        t('services.web.features.0') || 'Diseño responsivo',
        t('services.web.features.1') || 'Tienda online (E-commerce)',
        t('services.web.features.2') || 'Sistema de gestión personalizado'
      ]
    },
    {
      icon: Megaphone,
      title: t('services.marketing.title') || 'Marketing Digital',
      description: t('services.marketing.description') || 'Estrategias digitales que impulsan el crecimiento de tu negocio.',
      features: [
        t('services.marketing.features.0') || 'Gestión de redes sociales',
        t('services.marketing.features.1') || 'Campañas de email marketing',
        t('services.marketing.features.2') || 'Publicidad online'
      ]
    },
    {
      icon: Camera,
      title: t('services.photography.title') || 'Fotografía Comercial',
      description: t('services.photography.description') || 'Imágenes profesionales que comunican la calidad de tu marca.',
      features: [
        t('services.photography.features.0') || 'Fotografía de producto',
        t('services.photography.features.1') || 'Fotografía corporativa',
        t('services.photography.features.2') || 'Cobertura de eventos'
      ]
    },
    {
      icon: Search,
      title: t('services.seo.title') || 'SEO & SEM',
      description: t('services.seo.description') || 'Mejoramos tu visibilidad online y aumentamos tu tráfico orgánico.',
      features: [
        t('services.seo.features.0') || 'Optimización para buscadores',
        t('services.seo.features.1') || 'Campañas en Google Ads',
        t('services.seo.features.2') || 'Análisis y reportes'
      ]
    },
    {
      icon: BarChart,
      title: t('services.consulting.title') || 'Consultoría',
      description: t('services.consulting.description') || 'Asesoramiento estratégico para el crecimiento de tu marca.',
      features: [
        t('services.consulting.features.0') || 'Análisis profundo de marca',
        t('services.consulting.features.1') || 'Estrategia digital personalizada',
        t('services.consulting.features.2') || 'Plan de marketing integral'
      ]
    }
  ];

  return (
    <section id="services" className="w-full py-20 bg-gray-50 dark:bg-brand-dark-light text-brand-dark dark:text-white">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t('services.title') || 'Nuestros Servicios'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('services.subtitle') || 'Ofrecemos soluciones integrales de branding y marketing digital para hacer crecer tu negocio.'}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={`service-${index}`}
                className="group p-8 bg-white dark:bg-brand-dark rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-on-scroll translate-y-20 opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-brand-teal/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal/30 transition-colors">
                  <service.icon className="text-brand-teal" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-teal transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={`feature-${index}-${featureIndex}`} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-brand-teal rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '800ms' }}>
            <button className="bg-brand-teal text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-teal-light transition-all duration-300">
              {t('services.cta') || 'Solicita una consulta gratuita'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
