import React, { useEffect } from 'react';
import { Palette, Code, Megaphone, Camera, Search, BarChart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
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
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

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
      detailedDescription: t('services.branding.detailedDescription') || 'Nuestro servicio de branding abarca desde la conceptualización de tu marca hasta la entrega de un manual completo, asegurando coherencia y reconocimiento en todos los puntos de contacto.',
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
      detailedDescription: t('services.web.detailedDescription') || 'Desarrollamos sitios web a medida, adaptados a tus necesidades y enfocados en la experiencia de usuario y la conversión de visitantes en clientes.',
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
      detailedDescription: t('services.marketing.detailedDescription') || 'Creamos campañas y estrategias digitales personalizadas para aumentar tu alcance, engagement y ventas, utilizando las últimas tendencias y herramientas.',
      features: [
        t('services.marketing.features.0') || 'Gestión de redes sociales',
        t('services.marketing.features.1') || 'Campañas de email marketing',
        t('services.marketing.features.2') || 'Publicidad online'
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
                className="group relative p-8 bg-white dark:bg-brand-dark rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-on-scroll translate-y-20 opacity-0"
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
                {/* Saber más button */}
                <button
                  className="opacity-0 group-hover:opacity-100 mt-6 bg-brand-teal text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-md"
                  style={{ pointerEvents: 'auto' }}
                  onClick={() => openModal(service)}
                >
                  Saber más <span className="ml-1">&rarr;</span>
                </button>
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

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-brand-dark rounded-2xl p-8 max-w-lg w-full shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-brand-teal text-2xl"
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-teal/20 rounded-2xl flex items-center justify-center mb-4">
                <selectedService.icon className="text-brand-teal" size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-2 text-center">{selectedService.title}</h2>
              <hr className="w-16 border-brand-teal mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">{selectedService.detailedDescription || selectedService.description}</p>
              <ul className="list-disc pl-4 text-left space-y-1 mb-8">
                {selectedService.features.map((feature: string, idx: number) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-400">{feature}</li>
                ))}
              </ul>
              {/* Botones de acción */}
              <div className="flex w-full gap-4 mt-2">
                <button
                  onClick={() => { closeModal(); handleNavigation('/', 'contact'); }}
                  className="flex-1 bg-brand-teal text-white py-2 rounded-lg font-semibold hover:bg-brand-teal-light transition-all duration-300 shadow"
                >
                  Contactar
                </button>
                <button
                  onClick={() => { closeModal(); navigate('/portfolio'); }}
                  className="flex-1 bg-brand-dark border border-brand-teal text-brand-teal py-2 rounded-lg font-semibold hover:bg-brand-teal hover:text-white transition-all duration-300 shadow"
                >
                  Portafolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};