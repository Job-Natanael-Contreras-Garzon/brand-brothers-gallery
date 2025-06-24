
import React from 'react';
import { Button } from './ui/button'; // Asumo que tienes este componente de UI
import { ArrowRight, Heart, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext'; // Ruta adaptada
import ClientCarousel from './cliente-carousel';

// Nota: Para que los videos de TikTok se muestren, necesitarás añadir el siguiente script en tu archivo HTML principal.
// <script async src="https://www.tiktok.com/embed.js"></script>

const featuredVideos = [
  {
    url: 'https://www.tiktok.com/@brandingbrothers.bo/video/7511044217959877893',
    id: '7511044217959877893',
    likes: '1.2M',
    views: '10.5M',
    positioning: 'lg:top-[2rem] lg:right-[25%] rotate-[8deg]',
    size: 'w-[150px]'
  },
  {
    url: 'https://www.tiktok.com/@brandingbrothers.bo/video/7510768624664202502',
    id: '7510768624664202502',
    likes: '890K',
    views: '8.2M',
    positioning: 'lg:top-[0] lg:left-[25%] rotate-[-8deg]',
    size: 'w-[150px]'
  },
  {
    url: 'https://www.tiktok.com/@brandingbrothers.bo/video/7511762277725424902',
    id: '7511762277725424902',
    likes: '2.5M',
    views: '22.1M',
    positioning: 'lg:top-[5rem] lg:left-1/2 -translate-x-1/2 rotate-[-2deg] z-10',
    size: 'w-[150px]'
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
                   <blockquote
                      className="tiktok-embed w-full h-full"
                      cite={video.url}
                      data-video-id={video.id}
                      style={{
                        maxWidth: '100%',
                        width: '100%',
                        minHeight: '100%',
                        height: '100%',
                      }}
                    >
                      <section className="p-2 bg-black text-foreground text-xs">
                        <a target="_blank" rel="noopener noreferrer" href={video.url}>@{video.url.split('/')[3]} on TikTok</a>
                      </section>
                   </blockquote>
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
