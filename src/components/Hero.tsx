import React from 'react'; // Importa React
import { Button } from './ui/button'; // Asumo que tienes este componente de UI
import { ArrowRight, Heart, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext'; // Ruta adaptada
import ClientCarousel from './cliente-carousel';

// Nota: Para que los videos de TikTok se muestren, necesitarás añadir el siguiente script en tu archivo HTML principal.
// <script async src="https://www.tiktok.com/embed.js"></script>
// ¡Asegúrate de que este script esté activo en tu HTML!

const featuredVideos = [
  {
    // CAMBIA ESTAS URLs Y IDs POR URLs REALES DE TIKTOK Y SUS CORRESPONDIENTES IDs
    // url: 'https://www.tiktok.com/@tiktok/video/7511044217959877893', // Ejemplo: Reemplazar con la URL real del video de TikTok
    url: '/images/video3.mp4', // Ejemplo: Reemplazar con la URL real del video de TikTok
    id: 'local-video-1', // Este ID debe coincidir con el de la URL de TikTok
    likes: '1.2M',
    views: '10.5M',
    positioning: 'lg:top-[-2rem] lg:right-[-10%] rotate-[8deg]',
    size: 'w-[250px]'
  },
  {
    // url: 'https://www.tiktok.com/@tiktok/video/7510768624664202502', // Ejemplo
    url: '/images/video2.mp4', // Ejemplo
    id: 'local-video-2', // Este ID debe coincidir con el de la URL de TikTok
    likes: '890K',
    views: '8.2M',
    positioning: 'lg:top-[-2rem] lg:left-[25%] rotate-[-8deg]',
    size: 'w-[250px]'
  },
];

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full overflow-hidden flex flex-col min-h-screen dark">
      <div className="absolute inset-0 z-0">
        <video
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          data-ai-hint="drone footage city"
          // Añade un 'poster' para una imagen de vista previa
          poster="https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-7xl flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h1
              className="font-headline text-5xl font-bold tracking-tight text-cyan-400 sm:text-6xl lg:text-7xl opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              {t('home.title')}
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {t('home.slogan')}
            </p>
            <div
              className="mt-10 flex items-center justify-center lg:justify-start gap-x-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Button size="lg" className="bg-cyan-400 text-black hover:bg-cyan-500 font-semibold" asChild>
                <a href="/portfolio">
                  {t('home.viewProjects')} <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-gray-400 text-gray-200 hover:bg-gray-800 hover:border-gray-300 font-semibold" asChild>
                <a href="/contact">{t('home.letsTalk')}</a>
              </Button>
            </div>
          </div>

          {/* Right Column: Video Showcase */}
          <div className="relative h-[350px] w-full hidden lg:flex items-start justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {featuredVideos.map((video) => (
              <div key={video.id} className={`absolute group transition-transform duration-300 hover:scale-110 hover:z-20 ${video.positioning} ${video.size}`}>
                <div className="bg-black rounded-lg shadow-2xl overflow-hidden aspect-[9/16]">
                  <video
                    src={video.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-foreground/90 text-xs font-semibold flex justify-end items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Heart className="h-3 w-3 text-red-500 fill-current"/>
                    <span>{video.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3"/>
                    <span>{video.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full pb-8">
        <ClientCarousel />
      </div>
    </section>
  );
};