// src/data/portfolioData.ts
export type FilterCategory = 'all' | 'web' | 'mobile' | 'branding' | 'ai' | 'design' | 'development'; // Agrega o ajusta según tus necesidades

export interface LanguageSpecificContent {
  es: string;
  en: string;
}

export interface LanguageSpecificContentArray {
  es: string[];
  en: string[];
}

export interface Project {
  id: string;
  title: LanguageSpecificContent;
  subtitle: LanguageSpecificContent;
  description: LanguageSpecificContent;
  image: string;
  video?: string | null;
  category: FilterCategory;
  categoryName: LanguageSpecificContent;
  year: number;
  tags: string[];
  featured: boolean;
  likes: number;
  views: number;
  liveUrl?: string;
  githubUrl?: string;
  client?: LanguageSpecificContent;
  challenge?: LanguageSpecificContent;
  solution?: LanguageSpecificContent;
  results?: LanguageSpecificContentArray;
}

export const portfolioData: Project[] = [
  {
    id: '1',
    title: {
      es: 'Plataforma de E-commerce',
      en: 'E-commerce Platform',
    },
    subtitle: {
      es: 'Solución integral de comercio electrónico para B2C',
      en: 'Comprehensive e-commerce solution for B2C',
    },
    description: {
      es: 'Desarrollo de una plataforma de e-commerce robusta y escalable, con funcionalidades avanzadas como gestión de inventario, pasarelas de pago integradas y un panel de administración intuitivo.',
      en: 'Development of a robust and scalable e-commerce platform, with advanced features such as inventory management, integrated payment gateways, and an intuitive administration panel.',
    },
    image: '/images/ecommerce-platform.jpg',
    video: null,
    category: 'web',
    categoryName: {
      es: 'Desarrollo Web',
      en: 'Web Development',
    },
    year: 2024,
    tags: ['Next.js', 'Stripe', 'MongoDB', 'TailwindCSS', 'TypeScript'],
    featured: true,
    likes: 47,
    views: 1240,
    liveUrl: 'https://example.com/ecommerce-demo',
    githubUrl: 'https://github.com/your-repo/ecommerce',
    client: {
      es: 'Tienda de Moda Online',
      en: 'Online Fashion Store',
    },
    challenge: {
      es: 'Crear una experiencia de compra online fluida y segura que refleje la identidad de la marca y pueda manejar un alto volumen de tráfico y transacciones.',
      en: 'Create a smooth and secure online shopping experience that reflects the brand identity and can handle a high volume of traffic and transactions.',
    },
    solution: {
      es: 'Desarrollamos una plataforma a medida con Next.js para un rendimiento óptimo, integramos Stripe para pagos seguros y creamos un sistema de gestión de productos fácil de usar.',
      en: 'We developed a custom platform with Next.js for optimal performance, integrated Stripe for secure payments, and created an easy-to-use product management system.',
    },
    results: {
      es: [
        'Aumento del 40% en las conversiones en los primeros 3 meses.',
        'Reducción del tiempo de carga de la página en un 60%.',
        'Feedback positivo del 95% de los usuarios sobre la nueva experiencia de compra.',
      ],
      en: [
        '40% increase in conversions in the first 3 months.',
        '60% reduction in page load time.',
        '95% positive feedback from users on the new shopping experience.',
      ],
    },
  },
  {
    id: '2',
    title: {
      es: 'Aplicación Móvil de Banca',
      en: 'Mobile Banking App',
    },
    subtitle: {
      es: 'Banca en tu bolsillo: segura y accesible',
      en: 'Banking in your pocket: secure and accessible',
    },
    description: {
      es: 'Diseño y desarrollo de una aplicación móvil bancaria con UX/UI simplificada, seguridad biométrica, y funcionalidades completas para transacciones, consultas y gestión de cuentas.',
      en: 'Design and development of a mobile banking application with a simplified UX/UI, biometric security, and full functionality for transactions, inquiries, and account management.',
    },
    image: '/images/mobile-banking-app.jpg',
    video: null,
    category: 'mobile',
    categoryName: {
      es: 'Aplicaciones Móviles',
      en: 'Mobile Apps',
    },
    year: 2024,
    tags: ['React Native', 'Firebase', 'Node.js', 'OAuth2', 'TypeScript'],
    featured: false,
    likes: 32,
    views: 890,
    liveUrl: 'https://example.com/mobile-banking-demo',
    githubUrl: 'https://github.com/your-repo/mobile-banking',
  },
  {
    id: '3',
    title: {
      es: 'Rediseño de Marca Corporativa',
      en: 'Corporate Brand Redesign',
    },
    subtitle: {
      es: 'Nueva identidad visual para una startup tecnológica',
      en: 'New visual identity for a tech startup',
    },
    description: {
      es: 'Proyecto integral de branding que abarcó desde la conceptualización de un nuevo logotipo hasta la creación de una guía de estilo completa, incluyendo tipografía, paleta de colores y elementos gráficos para una startup de IA.',
      en: 'Comprehensive branding project that ranged from the conceptualization of a new logo to the creation of a complete style guide, including typography, color palette, and graphic elements for an AI startup.',
    },
    image: null,
    video: '/images/BrandingBrothers.mp4',
    category: 'branding',
    categoryName: {
      es: 'Branding',
      en: 'Branding',
    },
    year: 2023,
    tags: ['Adobe Illustrator', 'Figma', 'Brand Strategy', 'Logo Design'],
    featured: true,
    likes: 28,
    views: 650,
  },
  {
    id: '4',
    title: {
      es: 'Dashboard de Gestión SaaS',
      en: 'SaaS Management Dashboard',
    },
    subtitle: {
      es: 'Panel de control intuitivo para análisis de datos',
      en: 'Intuitive control panel for data analysis',
    },
    description: {
      es: 'Desarrollo de un dashboard interactivo para una plataforma SaaS, permitiendo a los usuarios visualizar métricas clave, gestionar suscripciones y obtener insights de datos en tiempo real.',
      en: 'Development of an interactive dashboard for a SaaS platform, allowing users to visualize key metrics, manage subscriptions, and get real-time data insights.',
    },
    image: '/images/saas-dashboard.jpg',
    video: null,
    category: 'web',
    categoryName: {
      es: 'Desarrollo Web',
      en: 'Web Development',
    },
    year: 2023,
    tags: ['Vue.js', 'Chart.js', 'Node.js', 'PostgreSQL', 'AWS'],
    featured: false,
    likes: 41,
    views: 1120,
    liveUrl: 'https://example.com/saas-dashboard-demo',
    githubUrl: 'https://github.com/your-repo/saas-dashboard',
  },
  {
    id: '5',
    title: {
      es: 'Experiencia AR de Compras',
      en: 'AR Shopping Experience',
    },
    subtitle: {
      es: 'Prueba de productos en tiempo real con Realidad Aumentada',
      en: 'Real-time product testing with Augmented Reality',
    },
    description: {
      es: 'Aplicación móvil innovadora que integra realidad aumentada para permitir a los usuarios visualizar cómo se verían los productos (ej. muebles, ropa) en su propio entorno antes de comprarlos.',
      en: 'Innovative mobile application that integrates augmented reality to allow users to visualize how products (e.g., furniture, clothing) would look in their own environment before buying them.',
    },
    image: '/images/ar-shopping.jpg',
    video: null,
    category: 'mobile',
    categoryName: {
      es: 'Aplicaciones Móviles',
      en: 'Mobile Apps',
    },
    year: 2022,
    tags: ['SwiftUI', 'ARKit', 'SceneKit', '3D Modeling'],
    featured: true,
    likes: 56,
    views: 1580,
    liveUrl: 'https://example.com/ar-shopping-demo',
    githubUrl: 'https://github.com/your-repo/ar-shopping',
  },
  {
    id: '6',
    title: {
      es: 'Plataforma de IA Conversacional',
      en: 'Conversational AI Platform',
    },
    subtitle: {
      es: 'Bot de atención al cliente impulsado por NLP',
      en: 'Customer service bot powered by NLP',
    },
    description: {
      es: 'Creación de un chatbot inteligente para automatizar la atención al cliente, utilizando procesamiento de lenguaje natural (NLP) y machine learning para comprender y responder consultas de usuarios.',
      en: 'Creation of an intelligent chatbot to automate customer service, using natural language processing (NLP) and machine learning to understand and respond to user queries.',
    },
    image: '/images/ai-chatbot.jpg',
    video: null,
    category: 'ai',
    categoryName: {
      es: 'Inteligencia Artificial',
      en: 'Artificial Intelligence',
    },
    year: 2024,
    tags: ['Python', 'TensorFlow', 'Rasa NLU', 'Dialogflow', 'React'],
    featured: false,
    likes: 73,
    views: 2100,
    liveUrl: 'https://example.com/ai-chatbot-demo',
    githubUrl: 'https://github.com/your-repo/ai-chatbot',
  }
];