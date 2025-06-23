
import React from 'react';
import { Palette, Code, Megaphone, Camera, Search, BarChart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Palette,
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      features: [
        t('services.branding.features.0'),
        t('services.branding.features.1'),
        t('services.branding.features.2')
      ]
    },
    {
      icon: Code,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: [
        t('services.web.features.0'),
        t('services.web.features.1'),
        t('services.web.features.2')
      ]
    },
    {
      icon: Megaphone,
      title: t('services.marketing.title'),
      description: t('services.marketing.description'),
      features: [
        t('services.marketing.features.0'),
        t('services.marketing.features.1'),
        t('services.marketing.features.2')
      ]
    },
    {
      icon: Camera,
      title: t('services.photography.title'),
      description: t('services.photography.description'),
      features: [
        t('services.photography.features.0'),
        t('services.photography.features.1'),
        t('services.photography.features.2')
      ]
    },
    {
      icon: Search,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      features: [
        t('services.seo.features.0'),
        t('services.seo.features.1'),
        t('services.seo.features.2')
      ]
    },
    {
      icon: BarChart,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: [
        t('services.consulting.features.0'),
        t('services.consulting.features.1'),
        t('services.consulting.features.2')
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-brand-dark-light text-brand-dark dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-white dark:bg-brand-dark rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-brand-teal/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
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
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
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
            {t('services.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};
