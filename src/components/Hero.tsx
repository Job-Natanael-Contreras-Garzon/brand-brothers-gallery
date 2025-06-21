
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen bg-brand-gray-light dark:bg-brand-dark text-brand-dark dark:text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-brand-teal font-medium text-lg">
                {t('hero.subtitle')}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                {t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-brand-teal text-brand-dark px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-brand-teal-light transition-all duration-300">
                <span>{t('hero.cta.portfolio')}</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="group border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-brand-teal hover:text-brand-dark transition-all duration-300">
                <Play size={20} />
                <span>{t('hero.cta.showreel')}</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-teal">150+</div>
                <div className="text-gray-600 dark:text-gray-400">{t('hero.stats.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-teal">50+</div>
                <div className="text-gray-600 dark:text-gray-400">{t('hero.stats.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-teal">5</div>
                <div className="text-gray-600 dark:text-gray-400">{t('hero.stats.experience')}</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand-teal/20 to-brand-teal/5 rounded-3xl backdrop-blur-sm border border-brand-teal/30"></div>
              <div className="absolute inset-4 bg-white dark:bg-brand-dark-light rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-brand-teal rounded-full mx-auto flex items-center justify-center">
                    <Play className="text-brand-dark" size={32} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Descubre nuestro proceso creativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
