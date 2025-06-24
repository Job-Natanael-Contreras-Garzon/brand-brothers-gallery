
import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    'home.title': 'Lleva tu Marca al Siguiente Nivel',
    'home.slogan': 'Donde las ideas brillantes se encuentran con una ejecución audaz. Somos los arquitectos del futuro digital de tu marca.',
    'home.viewProjects': 'Ver Proyectos',
    'home.letsTalk': 'Hablemos',

    // Navigation
    'nav.home': 'Inicio',
    'nav.company': 'Empresa',
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
    'services.branding.title': 'Diseño de Marca',
    'services.branding.description': 'Creamos identidades visuales únicas que reflejan la esencia de tu empresa.',
    'services.branding.features.0': 'Logotipos únicos',
    'services.branding.features.1': 'Manual de marca completo',
    'services.branding.features.2': 'Papelería corporativa',
    'services.web.title': 'Desarrollo Web',
    'services.web.description': 'Sitios web modernos, responsivos y optimizados para conversión.',
    'services.web.features.0': 'Diseño responsivo',
    'services.web.features.1': 'Tienda online (E-commerce)',
    'services.web.features.2': 'Sistema de gestión personalizado',
    'services.marketing.title': 'Marketing Digital',
    'services.marketing.description': 'Estrategias digitales que impulsan el crecimiento de tu negocio.',
    'services.marketing.features.0': 'Gestión de redes sociales',
    'services.marketing.features.1': 'Campañas de email marketing',
    'services.marketing.features.2': 'Publicidad online',
    'services.photography.title': 'Fotografía Comercial',
    'services.photography.description': 'Imágenes profesionales que comunican la calidad de tu marca.',
    'services.photography.features.0': 'Fotografía de producto',
    'services.photography.features.1': 'Fotografía corporativa',
    'services.photography.features.2': 'Cobertura de eventos',
    'services.seo.title': 'SEO & SEM',
    'services.seo.description': 'Mejoramos tu visibilidad online y aumentamos tu tráfico orgánico.',
    'services.seo.features.0': 'Optimización para buscadores',
    'services.seo.features.1': 'Campañas en Google Ads',
    'services.seo.features.2': 'Análisis y reportes',
    'services.consulting.title': 'Consultoría',
    'services.consulting.description': 'Asesoramiento estratégico para el crecimiento de tu marca.',
    'services.consulting.features.0': 'Análisis profundo de marca',
    'services.consulting.features.1': 'Estrategia digital personalizada',
    'services.consulting.features.2': 'Plan de marketing integral',
    
    // Portfolio
    'portfolio.title': 'Nuestro Portfolio',
    'portfolio.subtitle': 'Descubre nuestro portfolio de transformaciones de marca. Cada proyecto representa nuestro compromiso de crear experiencias de marca memorables e impactantes.',
    'portfolio.viewProject': 'Ver proyecto',
    'portfolio.modal.client': 'Cliente',
    'portfolio.modal.year': 'Año',
    'portfolio.modal.services': 'Servicios',
    'portfolio.modal.overview': 'Descripción del Proyecto',
    'portfolio.modal.challenge': 'El Desafío',
    'portfolio.modal.solution': 'Nuestra Solución',
    'portfolio.modal.results': 'Resultados',
    
    // About
    'about.title': 'Sobre Nosotros',
    'about.description1': 'Somos un equipo apasionado de creativos y estrategas digitales con más de 5 años de experiencia ayudando a empresas a construir marcas memorables.',
    'about.description2': 'En Branding Brothers, creemos que cada marca tiene una historia única que contar. Nuestro trabajo es encontrar esa historia y comunicarla de manera efectiva a través del diseño, la estrategia y la tecnología.',
    'about.values': 'Nuestros Valores',
    'about.stats.projects': 'Proyectos exitosos',
    'about.stats.clients': 'Clientes satisfechos',
    'about.stats.support': 'Soporte disponible',
    'about.stats.experience': 'Años de experiencia',
    
    // Blog
    'blog.title': 'Nuestro Blog',
    'blog.subtitle': 'Mantente al día con las últimas tendencias, consejos y insights del mundo del branding y marketing digital.',
    'blog.readMore': 'Leer más',
    'blog.viewAll': 'Ver todos los artículos',
    'blog.author': 'Autor',
    'blog.date': 'Fecha',
    
    // Contact
    'contact.title': 'Hablemos de tu Proyecto',
    'contact.subtitle': '¿Tienes un proyecto en mente? Estamos aquí para ayudarte a convertir tus ideas en realidad.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.namePlaceholder': 'Tu nombre',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.companyPlaceholder': 'Nombre de tu empresa',
    'contact.form.messagePlaceholder': 'Cuéntanos sobre tu proyecto...',
    'contact.info.title': 'Información de Contacto',
    'contact.info.description': 'Estamos ubicados en el corazón de la ciudad, listos para colaborar contigo en tu próximo proyecto.',
    'contact.hours.title': 'Horarios de Atención',
    'contact.hours.weekdays': 'Lunes - Viernes',
    'contact.hours.saturday': 'Sábados',
    'contact.hours.sunday': 'Domingos',
    'contact.hours.closed': 'Cerrado',
    
    // Footer
    'footer.description': 'Transformamos ideas en marcas poderosas. Expertos en diseño, desarrollo y estrategias digitales.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.contact': 'Contacto',
    'footer.workWithUs': 'Trabajar con nosotros',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    'footer.cookies': 'Cookies',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'home.title': 'Elevate Your Brand to the Next Level',
    'home.slogan': "Where brilliant ideas meet bold execution. We are the architects of your brand's digital future.",
    'home.viewProjects': 'View Projects',
    'home.letsTalk': "Let's Talk",
    // Navigation
    'nav.home': 'Home',
    'nav.company': 'Company',
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
    'services.branding.title': 'Brand Design',
    'services.branding.description': 'We create unique visual identities that reflect the essence of your company.',
    'services.branding.features.0': 'Unique logos',
    'services.branding.features.1': 'Complete brand manual',
    'services.branding.features.2': 'Corporate stationery',
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern, responsive websites optimized for conversion.',
    'services.web.features.0': 'Responsive design',
    'services.web.features.1': 'E-commerce platform',
    'services.web.features.2': 'Custom CMS',
    'services.marketing.title': 'Digital Marketing',
    'services.marketing.description': 'Digital strategies that drive your business growth.',
    'services.marketing.features.0': 'Social media management',
    'services.marketing.features.1': 'Email marketing campaigns',
    'services.marketing.features.2': 'Online advertising',
    'services.photography.title': 'Commercial Photography',
    'services.photography.description': 'Professional images that communicate your brand quality.',
    'services.photography.features.0': 'Product photography',
    'services.photography.features.1': 'Corporate photography',
    'services.photography.features.2': 'Event coverage',
    'services.seo.title': 'SEO & SEM',
    'services.seo.description': 'We improve your online visibility and increase your organic traffic.',
    'services.seo.features.0': 'Search engine optimization',
    'services.seo.features.1': 'Google Ads campaigns',
    'services.seo.features.2': 'Analytics and reports',
    'services.consulting.title': 'Consulting',
    'services.consulting.description': 'Strategic advice for your brand growth.',
    'services.consulting.features.0': 'Deep brand analysis',
    'services.consulting.features.1': 'Custom digital strategy',
    'services.consulting.features.2': 'Comprehensive marketing plan',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Discover our portfolio of brand transformations. Each project represents our commitment to creating memorable and impactful brand experiences.',
    'portfolio.viewProject': 'View project',
    'portfolio.modal.client': 'Client',
    'portfolio.modal.year': 'Year',
    'portfolio.modal.services': 'Services',
    'portfolio.modal.overview': 'Project Overview',
    'portfolio.modal.challenge': 'The Challenge',
    'portfolio.modal.solution': 'Our Solution',
    'portfolio.modal.results': 'Results',
    
    // About
    'about.title': 'About Us',
    'about.description1': 'We are a passionate team of creatives and digital strategists with over 5 years of experience helping companies build memorable brands.',
    'about.description2': 'At Branding Brothers, we believe that every brand has a unique story to tell. Our job is to find that story and communicate it effectively through design, strategy and technology.',
    'about.values': 'Our Values',
    'about.stats.projects': 'Successful projects',
    'about.stats.clients': 'Satisfied clients',
    'about.stats.support': 'Support available',
    'about.stats.experience': 'Years of experience',
    
    // Blog
    'blog.title': 'Our Blog',
    'blog.subtitle': 'Stay up to date with the latest trends, tips and insights from the world of branding and digital marketing.',
    'blog.readMore': 'Read more',
    'blog.viewAll': 'View all articles',
    'blog.author': 'Author',
    'blog.date': 'Date',
    
    // Contact
    'contact.title': "Let's Talk About Your Project",
    'contact.subtitle': 'Do you have a project in mind? We are here to help you turn your ideas into reality.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.companyPlaceholder': 'Your company name',
    'contact.form.messagePlaceholder': 'Tell us about your project...',
    'contact.info.title': 'Contact Information',
    'contact.info.description': 'We are located in the heart of the city, ready to collaborate with you on your next project.',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekdays': 'Monday - Friday',
    'contact.hours.saturday': 'Saturdays',
    'contact.hours.sunday': 'Sundays',
    'contact.hours.closed': 'Closed',
    
    // Footer
    'footer.description': 'We transform ideas into powerful brands. Experts in design, development and digital strategies.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.workWithUs': 'Work with us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookies',
    'footer.rights': 'All rights reserved.',
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
