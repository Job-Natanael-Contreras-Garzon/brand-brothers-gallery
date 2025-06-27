
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
    'services.branding.title': 'Branding & Marketing',
    'services.branding.description': 'Creamos identidades visuales únicas que reflejan la esencia de tu empresa.',
    'services.branding.detailedDescription': 'Nuestro servicio de branding abarca desde la conceptualización de tu marca hasta la entrega de un manual completo, asegurando coherencia y reconocimiento en todos los puntos de contacto.',
    'services.branding.features.0': 'Logotipos únicos',
    'services.branding.features.1': 'Manual de marca completo',
    'services.branding.features.2': 'Papelería corporativa',
    'services.web.title': 'Desarrollo de Software',
    'services.web.description': 'Sitios web modernos, responsivos y optimizados para conversión.',
    'services.web.detailedDescription': 'Nuestro servicio de desarrollo web abarca desde la conceptualización de tu sitio web hasta la entrega de un sistema completo, asegurando coherencia y reconocimiento en todos los puntos de contacto.',
    'services.web.features.0': 'Diseño responsivo',
    'services.web.features.1': 'Tienda online (E-commerce)',
    'services.web.features.2': 'Sistema de gestión personalizado',
    'services.marketing.title': 'Consultoría Empresarial',
    'services.marketing.description': 'Estrategias digitales que impulsan el crecimiento de tu negocio.',
    'services.marketing.detailedDescription': 'Nuestro servicio de consultoría empresarial abarca desde la gestión de redes sociales hasta la creación de campañas de email marketing y publicidad online, asegurando que tu negocio crezca de manera efectiva.',
    'services.marketing.features.0': 'Gestión de redes sociales',
    'services.marketing.features.1': 'Campañas de email marketing',
    'services.marketing.features.2': 'Publicidad online',

    'services.photography.title': 'Fotografía Profesional',
    'services.seo.title': 'Optimización SEO',
        // CTA
    'cta.title': '¿Interesado en trabajar con nosotros?',
    'cta.subtitle': 'Comience una conversacion ahora',
    'cta.button': 'Contáctanos',

    // Portfolio
    'portfolio.featured': 'Favorito',
    'portfolio.title': 'Nuestro Portfolio',
    'portfolio.description': 'Explora nuestra colección completa de proyectos. Cada trabajo representa nuestra dedicación a crear experiencias digitales excepcionales que transforman marcas y conectan con audiencias.',
    'portfolio.stats.projects': 'Proyectos',
    'portfolio.stats.viewed': 'Visualizados',
    'portfolio.stats.categories': 'Categorías',
    'portfolio.stats.satisfaction': 'Satisfacción',
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

    // Portfolio Page
    'portfolio.page.title': 'Proyectos',
    'portfolio.page.searchPlaceholder': 'Buscar proyectos...',
    'portfolio.page.filter.all': 'Todos',
    'portfolio.page.sort.newest': 'Más recientes',
    'portfolio.page.sort.popular': 'Más populares',
    'portfolio.page.sort.liked': 'Más gustados',
    'portfolio.page.sort.oldest': 'Más antiguos',
    'portfolio.page.view.grid': 'Ver como cuadrícula',
    'portfolio.page.view.list': 'Ver como lista',

    // Project Categories
    'portfolio.category.web': 'Desarrollo Web',
    'portfolio.category.mobile': 'Apps Móviles',
    'portfolio.category.branding': 'Branding',
    'portfolio.category.ai': 'IA',
    'portfolio.category.design': 'Diseño',
    'portfolio.category.development': 'Desarrollo',

    // Project 1: E-commerce Platform
    'portfolio.project_1.title': 'Plataforma de E-commerce',
    'portfolio.project_1.subtitle': 'Solución integral de comercio electrónico para B2C',
    'portfolio.project_1.description': 'Desarrollo de una plataforma de e-commerce robusta y escalable, con funcionalidades avanzadas como gestión de inventario, pasarelas de pago integradas y un panel de administración intuitivo.',
    'portfolio.project_1.challenge': 'El desafío era crear una experiencia de compra online fluida y segura que pudiera manejar un alto volumen de tráfico y transacciones, integrando múltiples sistemas de pago y logística.',
    'portfolio.project_1.solution': 'Diseñamos una arquitectura de microservicios y utilizamos Next.js para el frontend para garantizar tiempos de carga rápidos. Implementamos Stripe para los pagos y desarrollamos un panel de administración personalizado con React.',
    'portfolio.project_1.results': 'Aumento del 300% en las ventas en el primer trimestre. La tasa de conversión mejoró en un 50% y el tiempo de carga de la página se redujo en un 70%.',

    // Project 2: Mobile Banking App
    'portfolio.project_2.title': 'Aplicación Móvil de Banca',
    'portfolio.project_2.subtitle': 'Banca en tu bolsillo: segura y accesible',
    'portfolio.project_2.description': 'Diseño y desarrollo de una aplicación móvil bancaria con UX/UI simplificada, seguridad biométrica, y funcionalidades completas para transacciones, consultas y gestión de cuentas.',
    'portfolio.project_2.challenge': 'Garantizar la máxima seguridad de los datos financieros y cumplir con las regulaciones bancarias, al tiempo que se ofrece una interfaz de usuario intuitiva y fácil de usar para un público no técnico.',
    'portfolio.project_2.solution': 'Utilizamos React Native para un desarrollo multiplataforma. Implementamos cifrado de extremo a extremo, autenticación de dos factores y biometría. La interfaz se diseñó siguiendo los principios de diseño atómico.',
    'portfolio.project_2.results': 'Adopción del 80% de los clientes del banco en los primeros seis meses. Calificación de 4.8 estrellas en las tiendas de aplicaciones. Reducción del 40% en las llamadas al centro de atención al cliente.',

    // Project 3: Corporate Brand Redesign
    'portfolio.project_3.title': 'Rediseño de Marca Corporativa',
    'portfolio.project_3.subtitle': 'Nueva identidad visual para una startup tecnológica',
    'portfolio.project_3.description': 'Proyecto integral de branding que abarcó desde la conceptualización de un nuevo logotipo hasta la creación de una guía de estilo completa, incluyendo tipografía, paleta de colores y elementos gráficos para una startup de IA.',
    'portfolio.project_3.challenge': 'Diferenciar a la startup en un mercado de IA saturado y comunicar sus valores de innovación y confianza a través de una identidad visual fuerte y coherente.',
    'portfolio.project_3.solution': 'Realizamos un taller de estrategia de marca para definir el posicionamiento. El nuevo logotipo se inspira en las redes neuronales y la paleta de colores transmite profesionalismo y futuro.',
    'portfolio.project_3.results': 'Aumento del 150% en el reconocimiento de la marca. La nueva identidad ayudó a asegurar una ronda de financiación Serie A de 5 millones de dólares.',

    // Project 4: SaaS Management Dashboard
    'portfolio.project_4.title': 'Dashboard de Gestión SaaS',
    'portfolio.project_4.subtitle': 'Panel de control intuitivo para análisis de datos',
    'portfolio.project_4.description': 'Desarrollo de un dashboard interactivo para una plataforma SaaS, permitiendo a los usuarios visualizar métricas clave, gestionar suscripciones y obtener insights de datos en tiempo real.',
    'portfolio.project_4.challenge': 'Presentar grandes volúmenes de datos complejos de una manera que fuera fácil de entender y procesable para los usuarios, independientemente de su nivel de conocimientos técnicos.',
    'portfolio.project_4.solution': 'Creamos un sistema de widgets personalizables con Vue.js y D3.js para las visualizaciones. La API de backend se optimizó para consultas de datos rápidas.',
    'portfolio.project_4.results': 'Reducción del 75% en el tiempo que los usuarios tardan en encontrar la información que necesitan. Aumento del 20% en la retención de clientes.',

    // Project 5: AR Shopping Experience
    'portfolio.project_5.title': 'Experiencia AR de Compras',
    'portfolio.project_5.subtitle': 'Prueba de productos en tiempo real con Realidad Aumentada',
    'portfolio.project_5.description': 'Aplicación móvil innovadora que integra realidad aumentada para permitir a los usuarios visualizar cómo se verían los productos (ej. muebles, ropa) en su propio entorno antes de comprarlos.',
    'portfolio.project_5.challenge': 'Lograr una representación 3D realista de los productos y un seguimiento del entorno estable en una amplia gama de dispositivos móviles con diferentes capacidades de hardware.',
    'portfolio.project_5.solution': 'Utilizamos ARKit para iOS y ARCore para Android para maximizar la compatibilidad. Los modelos 3D se optimizaron para un rendimiento en tiempo real sin sacrificar la calidad visual.',
    'portfolio.project_5.results': 'Aumento del 40% en la confianza de compra y una reducción del 25% en las devoluciones de productos. La función fue destacada por Apple en la App Store.',

    // Project 6: Conversational AI Platform
    'portfolio.project_6.title': 'Plataforma de IA Conversacional',
    'portfolio.project_6.subtitle': 'Bot de atención al cliente impulsado por NLP',
    'portfolio.project_6.description': 'Creación de un chatbot inteligente para automatizar la atención al cliente, utilizando procesamiento de lenguaje natural (NLP) y machine learning para comprender y responder consultas de usuarios.',
    'portfolio.project_6.challenge': 'Entrenar al modelo de NLP para que entendiera una amplia variedad de intenciones de los usuarios y el lenguaje coloquial, manteniendo al mismo tiempo un alto grado de precisión en las respuestas.',
    'portfolio.project_6.solution': 'Utilizamos Rasa NLU para el procesamiento del lenguaje y desarrollamos un sistema de \'fallback\' a un agente humano sin interrupciones. El bot se integró con la base de conocimientos de la empresa.',
    'portfolio.project_6.results': 'Automatización del 85% de las consultas de atención al cliente. El índice de satisfacción del cliente (CSAT) para las interacciones con el bot fue del 92%.',
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
    'services.branding.title': 'Branding & Marketing',
    'services.branding.description': 'We create unique visual identities that reflect the essence of your company.',
    'services.branding.detailedDescription': 'Nuestro servicio de branding abarca desde la conceptualización de tu marca hasta la entrega de un manual completo, asegurando coherencia y reconocimiento en todos los puntos de contacto.',
    'services.branding.features.0': 'Unique logos',
    'services.branding.features.1': 'Complete brand manual',
    'services.branding.features.2': 'Corporate stationery',
    'services.web.title': 'Software Development',
    'services.web.description': 'Modern, responsive websites optimized for conversion.',
    'services.web.detailedDescription': 'Our web development service ranges from the conceptualization of your website to the delivery of a complete system, ensuring consistency and recognition across all points of contact.',
    'services.web.features.0': 'Responsive design',
    'services.web.features.1': 'E-commerce platform',
    'services.web.features.2': 'Custom CMS',
    'services.marketing.title': 'Business Consulting',
    'services.marketing.description': 'Digital strategies that drive your business growth.',
    'services.marketing.detailedDescription': 'Our business consulting services range from social media management to creating email marketing campaigns and online advertising, ensuring your business grows effectively..',
    'services.marketing.features.0': 'Social media management',
    'services.marketing.features.1': 'Email marketing campaigns',
    'services.marketing.features.2': 'Online advertising',
    
    // CTA
    'cta.title': 'Interested in working with us?',
    'cta.subtitle': 'Start a conversation now',
    'cta.button': 'Contact us',


    'services.seo.title': 'SEO Optimization',
    'services.photography.title': 'Professional Photography',

    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Discover our portfolio of brand transformations. Each project represents our commitment to creating memorable and impactful brand experiences.',
    'portfolio.viewProject': 'View project',
    'portfolio.description': 'Explore our complete collection of projects. Each work represents our dedication to creating exceptional digital experiences that transform brands and connect with audiences.',
    'portfolio.stats.projects': 'Projects',
    'portfolio.stats.viewed': 'Viewed',
    'portfolio.stats.categories': 'Categories',
    'portfolio.stats.satisfaction': 'Satisfaction',
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

    // Portfolio Page

    'portfolio.featured': 'Favorite',
    'portfolio.page.title': 'Projects',
    'portfolio.page.searchPlaceholder': 'Search projects...',
    'portfolio.page.filter.all': 'All',
    'portfolio.page.sort.newest': 'Newest',
    'portfolio.page.sort.popular': 'Popular',
    'portfolio.page.sort.liked': 'Liked',
    'portfolio.page.sort.oldest': 'Oldest',
    'portfolio.page.view.grid': 'Grid view',
    'portfolio.page.view.list': 'List view',

    // Project Categories
    'portfolio.category.web': 'Web Development',
    'portfolio.category.mobile': 'Mobile Apps',
    'portfolio.category.branding': 'Branding',
    'portfolio.category.ai': 'AI',
    'portfolio.category.design': 'Design',
    'portfolio.category.development': 'Development',

    // Project 1: E-commerce Platform
    'portfolio.project_1.title': 'E-commerce Platform',
    'portfolio.project_1.subtitle': 'Comprehensive e-commerce solution for B2C',
    'portfolio.project_1.description': 'Development of a robust and scalable e-commerce platform, with advanced features such as inventory management, integrated payment gateways, and an intuitive administration panel.',
    'portfolio.project_1.challenge': 'The challenge was to create a fluid and secure online shopping experience that could handle a high volume of traffic and transactions, integrating multiple payment and logistics systems.',
    'portfolio.project_1.solution': 'We designed a microservices architecture and used Next.js for the frontend to ensure fast loading times. We implemented Stripe for payments and developed a custom administration panel with React.',
    'portfolio.project_1.results': '300% increase in sales in the first quarter. Conversion rate improved by 50% and page load time was reduced by 70%.',

    // Project 2: Mobile Banking App
    'portfolio.project_2.title': 'Mobile Banking App',
    'portfolio.project_2.subtitle': 'Banking in your pocket: secure and accessible',
    'portfolio.project_2.description': 'Design and development of a mobile banking application with a simplified UX/UI, biometric security, and complete functionalities for transactions, inquiries, and account management.',
    'portfolio.project_2.challenge': 'To ensure maximum security of financial data and comply with banking regulations, while offering an intuitive and easy-to-use user interface for a non-technical audience.',
    'portfolio.project_2.solution': 'We used React Native for cross-platform development. We implemented end-to-end encryption, two-factor authentication, and biometrics. The interface was designed following atomic design principles.',
    'portfolio.project_2.results': '80% adoption by the bank\'s customers in the first six months. 4.8-star rating in the app stores. 40% reduction in calls to the customer service center.',

    // Project 3: Corporate Brand Redesign
    'portfolio.project_3.title': 'Corporate Brand Redesign',
    'portfolio.project_3.subtitle': 'New visual identity for a tech startup',
    'portfolio.project_3.description': 'Comprehensive branding project that ranged from the conceptualization of a new logo to the creation of a complete style guide, including typography, color palette, and graphic elements for an AI startup.',
    'portfolio.project_3.challenge': 'To differentiate the startup in a saturated AI market and communicate its values of innovation and trust through a strong and coherent visual identity.',
    'portfolio.project_3.solution': 'We conducted a brand strategy workshop to define the positioning. The new logo is inspired by neural networks and the color palette conveys professionalism and future.',
    'portfolio.project_3.results': '150% increase in brand recognition. The new identity helped secure a $5 million Series A funding round.',

    // Project 4: SaaS Management Dashboard
    'portfolio.project_4.title': 'SaaS Management Dashboard',
    'portfolio.project_4.subtitle': 'Intuitive control panel for data analysis',
    'portfolio.project_4.description': 'Development of an interactive dashboard for a SaaS platform, allowing users to visualize key metrics, manage subscriptions, and obtain real-time data insights.',
    'portfolio.project_4.challenge': 'To present large volumes of complex data in a way that was easy to understand and actionable for users, regardless of their technical expertise.',
    'portfolio.project_4.solution': 'We created a system of customizable widgets with Vue.js and D3.js for visualizations. The backend API was optimized for fast data queries.',
    'portfolio.project_4.results': '75% reduction in the time it takes for users to find the information they need. 20% increase in customer retention.',

    // Project 5: AR Shopping Experience
    'portfolio.project_5.title': 'AR Shopping Experience',
    'portfolio.project_5.subtitle': 'Try products in real-time with Augmented Reality',
    'portfolio.project_5.description': 'Innovative mobile application that integrates augmented reality to allow users to visualize how products (e.g., furniture, clothing) would look in their own environment before buying them.',
    'portfolio.project_5.challenge': 'To achieve a realistic 3D representation of the products and stable environment tracking on a wide range of mobile devices with different hardware capabilities.',
    'portfolio.project_5.solution': 'We used ARKit for iOS and ARCore for Android to maximize compatibility. The 3D models were optimized for real-time performance without sacrificing visual quality.',
    'portfolio.project_5.results': '40% increase in purchase confidence and a 25% reduction in product returns. The feature was highlighted by Apple in the App Store.',

    // Project 6: Conversational AI Platform
    'portfolio.project_6.title': 'Conversational AI Platform',
    'portfolio.project_6.subtitle': 'Customer service bot powered by NLP',
    'portfolio.project_6.description': 'Creation of an intelligent chatbot to automate customer service, using natural language processing (NLP) and machine learning to understand and respond to user queries.',
    'portfolio.project_6.challenge': 'To train the NLP model to understand a wide variety of user intentions and colloquial language, while maintaining a high degree of accuracy in the responses.',
    'portfolio.project_6.solution': 'We used Rasa NLU for language processing and developed a seamless fallback system to a human agent. The bot was integrated with the company\'s knowledge base.',
    'portfolio.project_6.results': 'Automation of 85% of customer service inquiries. The customer satisfaction score (CSAT) for bot interactions was 92%.',
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
