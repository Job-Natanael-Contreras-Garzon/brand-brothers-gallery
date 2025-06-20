
import React from 'react';
import { Palette, Code, Megaphone, Camera, Search, BarChart } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Diseño de Marca',
    description: 'Creamos identidades visuales únicas que reflejan la esencia de tu empresa.',
    features: ['Logotipos', 'Manual de marca', 'Papelería corporativa']
  },
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, responsivos y optimizados para conversión.',
    features: ['Diseño responsivo', 'E-commerce', 'CMS personalizado']
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Estrategias digitales que impulsan el crecimiento de tu negocio.',
    features: ['Redes sociales', 'Email marketing', 'Publicidad online']
  },
  {
    icon: Camera,
    title: 'Fotografía Comercial',
    description: 'Imágenes profesionales que comunican la calidad de tu marca.',
    features: ['Producto', 'Corporativa', 'Eventos']
  },
  {
    icon: Search,
    title: 'SEO & SEM',
    description: 'Mejoramos tu visibilidad online y aumentamos tu tráfico orgánico.',
    features: ['Optimización SEO', 'Google Ads', 'Analytics']
  },
  {
    icon: BarChart,
    title: 'Consultoría',
    description: 'Asesoramiento estratégico para el crecimiento de tu marca.',
    features: ['Análisis de marca', 'Estrategia digital', 'Plan de marketing']
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-dark-light text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestros <span className="text-brand-teal">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de branding y marketing digital para hacer crecer tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-brand-dark rounded-2xl border border-gray-800 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-brand-teal/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal/30 transition-colors">
                <service.icon className="text-brand-teal" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-teal transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-brand-teal rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-brand-teal text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-brand-teal-light transition-all duration-300">
            Solicita una consulta gratuita
          </button>
        </div>
      </div>
    </section>
  );
};
