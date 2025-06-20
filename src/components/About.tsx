
import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Enfoque',
    description: 'Nos centramos en resultados medibles y objetivos claros.'
  },
  {
    icon: Heart,
    title: 'Pasión',
    description: 'Amamos lo que hacemos y se refleja en cada proyecto.'
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Trabajamos como un equipo con nuestros clientes.'
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Buscamos la perfección en cada detalle.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Sobre <span className="text-brand-teal">Nosotros</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Somos un equipo apasionado de creativos y estrategas digitales con más de 5 años de experiencia ayudando a empresas a construir marcas memorables.
              </p>
              <p className="text-gray-300 mb-8">
                En Branding Brothers, creemos que cada marca tiene una historia única que contar. Nuestro trabajo es encontrar esa historia y comunicarla de manera efectiva a través del diseño, la estrategia y la tecnología.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-brand-teal mb-2">150+</div>
                <div className="text-gray-400">Proyectos exitosos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-teal mb-2">98%</div>
                <div className="text-gray-400">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-teal mb-2">24/7</div>
                <div className="text-gray-400">Soporte disponible</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-teal mb-2">5+</div>
                <div className="text-gray-400">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-8">Nuestros Valores</h3>
            
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex items-start space-x-4 p-6 bg-brand-dark-light rounded-xl border border-gray-800 hover:border-brand-teal/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="text-brand-teal" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-teal mb-2">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
