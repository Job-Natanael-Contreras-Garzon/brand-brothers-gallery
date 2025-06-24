// src/data/portfolioData.ts
export type FilterCategory = 'all' | 'web' | 'mobile' | 'branding' | 'ai' | 'design' | 'development'; // Agrega o ajusta según tus necesidades

export interface Project {
  id: string;
  title: string;
  subtitle: string; // Nuevo
  description: string;
  image: string;
  video?: string | null;
  category: FilterCategory;
  categoryName: string;
  year: number;
  tags: string[];
  featured: boolean; // Nuevo
  likes: number; // Nuevo
  views: number; // Nuevo
  liveUrl?: string; // Opcional, para el botón "Ver Live Demo"
  githubUrl?: string; // Opcional, para el botón "Ver Código"
  client?: string;
  challenge?: string;
  solution?: string;
  results?: string;
}

export const portfolioData: Project[] = [
  {
    id: '1',
    title: 'Plataforma de E-commerce',
    subtitle: 'Solución integral de comercio electrónico para B2C',
    description: 'Desarrollo de una plataforma de e-commerce robusta y escalable, con funcionalidades avanzadas como gestión de inventario, pasarelas de pago integradas y un panel de administración intuitivo.',
    image: '/images/ecommerce-platform.jpg', // Asegúrate de que las rutas de tus imágenes sean correctas
    video: null,
    category: 'web',
    categoryName: 'Desarrollo Web',
    year: 2024,
    tags: ['Next.js', 'Stripe', 'MongoDB', 'TailwindCSS', 'TypeScript'],
    featured: true,
    likes: 47,
    views: 1240,
    liveUrl: 'https://example.com/ecommerce-demo',
    githubUrl: 'https://github.com/your-repo/ecommerce'
  },
  {
    id: '2',
    title: 'Aplicación Móvil de Banca',
    subtitle: 'Banca en tu bolsillo: segura y accesible',
    description: 'Diseño y desarrollo de una aplicación móvil bancaria con UX/UI simplificada, seguridad biométrica, y funcionalidades completas para transacciones, consultas y gestión de cuentas.',
    image: '/images/mobile-banking-app.jpg',
    video: null,
    category: 'mobile',
    categoryName: 'Aplicaciones Móviles',
    year: 2024,
    tags: ['React Native', 'Firebase', 'Node.js', 'OAuth2', 'TypeScript'],
    featured: false,
    likes: 32,
    views: 890,
    liveUrl: 'https://example.com/mobile-banking-demo',
    githubUrl: 'https://github.com/your-repo/mobile-banking'
  },
  {
    id: '3',
    title: 'Rediseño de Marca Corporativa',
    subtitle: 'Nueva identidad visual para una startup tecnológica',
    description: 'Proyecto integral de branding que abarcó desde la conceptualización de un nuevo logotipo hasta la creación de una guía de estilo completa, incluyendo tipografía, paleta de colores y elementos gráficos para una startup de IA.',
    image: null ,
    video: '/images/BrandingBrothers.mp4',
    category: 'branding',
    categoryName: 'Branding',
    year: 2023,
    tags: ['Adobe Illustrator', 'Figma', 'Brand Strategy', 'Logo Design'],
    featured: true,
    likes: 28,
    views: 650
  },
  {
    id: '4',
    title: 'Dashboard de Gestión SaaS',
    subtitle: 'Panel de control intuitivo para análisis de datos',
    description: 'Desarrollo de un dashboard interactivo para una plataforma SaaS, permitiendo a los usuarios visualizar métricas clave, gestionar suscripciones y obtener insights de datos en tiempo real.',
    image: '/images/saas-dashboard.jpg',
    video: null,
    category: 'web',
    categoryName: 'Desarrollo Web',
    year: 2023,
    tags: ['Vue.js', 'Chart.js', 'Node.js', 'PostgreSQL', 'AWS'],
    featured: false,
    likes: 41,
    views: 1120,
    liveUrl: 'https://example.com/saas-dashboard-demo',
    githubUrl: 'https://github.com/your-repo/saas-dashboard'
  },
  {
    id: '5',
    title: 'Experiencia AR de Compras',
    subtitle: 'Prueba de productos en tiempo real con Realidad Aumentada',
    description: 'Aplicación móvil innovadora que integra realidad aumentada para permitir a los usuarios visualizar cómo se verían los productos (ej. muebles, ropa) en su propio entorno antes de comprarlos.',
    image: '/images/ar-shopping.jpg',
    video: null,
    category: 'mobile',
    categoryName: 'Aplicaciones Móviles',
    year: 2022,
    tags: ['SwiftUI', 'ARKit', 'SceneKit', '3D Modeling'],
    featured: true,
    likes: 56,
    views: 1580,
    liveUrl: 'https://example.com/ar-shopping-demo',
    githubUrl: 'https://github.com/your-repo/ar-shopping'
  },
  {
    id: '6',
    title: 'Plataforma de IA Conversacional',
    subtitle: 'Bot de atención al cliente impulsado por NLP',
    description: 'Creación de un chatbot inteligente para automatizar la atención al cliente, utilizando procesamiento de lenguaje natural (NLP) y machine learning para comprender y responder consultas de usuarios.',
    image: '/images/ai-chatbot.jpg',
    video: null,
    category: 'ai',
    categoryName: 'Inteligencia Artificial',
    year: 2024,
    tags: ['Python', 'TensorFlow', 'Rasa NLU', 'Dialogflow', 'React'],
    featured: false,
    likes: 73,
    views: 2100,
    liveUrl: 'https://example.com/ai-chatbot-demo',
    githubUrl: 'https://github.com/your-repo/ai-chatbot'
  }
];