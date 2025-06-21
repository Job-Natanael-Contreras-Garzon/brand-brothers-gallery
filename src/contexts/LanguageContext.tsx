
import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'Nosotros',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.subtitle': 'Transformamos ideas en marcas poderosas',
    'hero.title': 'Creamos marcas que impactan',
    'hero.description': 'Somos Branding Brothers, expertos en diseño de marca, desarrollo web y estrategias digitales que conectan con tu audiencia.',
    'hero.cta.portfolio': 'Ver nuestro trabajo',
    'hero.cta.showreel': 'Ver showreel',
    'hero.stats.projects': 'Proyectos completados',
    'hero.stats.clients': 'Clientes satisfechos',
    'hero.stats.experience': 'Años de experiencia',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Ofrecemos soluciones integrales de branding y marketing digital para hacer crecer tu negocio.',
    'services.cta': 'Solicita una consulta gratuita',
    
    // Portfolio
    'portfolio.title': 'Nuestro Portfolio',
    'portfolio.subtitle': 'Descubre nuestro portfolio de transformaciones de marca. Cada proyecto representa nuestro compromiso de crear experiencias de marca memorables e impactantes.',
    
    // About
    'about.title': 'Sobre Nosotros',
    'about.description1': 'Somos un equipo apasionado de creativos y estrategas digitales con más de 5 años de experiencia ayudando a empresas a construir marcas memorables.',
    'about.description2': 'En Branding Brothers, creemos que cada marca tiene una historia única que contar. Nuestro trabajo es encontrar esa historia y comunicarla de manera efectiva a través del diseño, la estrategia y la tecnología.',
    'about.values': 'Nuestros Valores',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.subtitle': 'We transform ideas into powerful brands',
    'hero.title': 'We create brands that impact',
    'hero.description': 'We are Branding Brothers, experts in brand design, web development and digital strategies that connect with your audience.',
    'hero.cta.portfolio': 'View our work',
    'hero.cta.showreel': 'Watch showreel',
    'hero.stats.projects': 'Completed projects',
    'hero.stats.clients': 'Satisfied clients',
    'hero.stats.experience': 'Years of experience',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer comprehensive branding and digital marketing solutions to grow your business.',
    'services.cta': 'Request a free consultation',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Discover our portfolio of brand transformations. Each project represents our commitment to creating memorable and impactful brand experiences.',
    
    // About
    'about.title': 'About Us',
    'about.description1': 'We are a passionate team of creatives and digital strategists with over 5 years of experience helping companies build memorable brands.',
    'about.description2': 'At Branding Brothers, we believe that every brand has a unique story to tell. Our job is to find that story and communicate it effectively through design, strategy and technology.',
    'about.values': 'Our Values',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'es';
  });

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
