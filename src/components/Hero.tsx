import React, { useEffect, useRef } from 'react'; // Importa useEffect y useRef
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
    url: 'https://www.tiktok.com/@tiktok/video/7511044217959877893', // Ejemplo: Reemplazar con la URL real del video de TikTok
    id: '7511044217959877893', // Este ID debe coincidir con el de la URL de TikTok
    likes: '1.2M',
    views: '10.5M',
    positioning: 'lg:top-[-2rem] lg:right-[-10%] rotate-[8deg]',
    size: 'w-[250px]'
  },
  {
    url: 'https://www.tiktok.com/@tiktok/video/7510768624664202502', // Ejemplo
    id: '7510768624664202502', // Este ID debe coincidir con el de la URL de TikTok
    likes: '890K',
    views: '8.2M',
    positioning: 'lg:top-[-2rem] lg:left-[25%] rotate-[-8deg]',
    size: 'w-[250px]'
  },
];

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // Para los videos locales (si los hubieras usado)

  // useEffect para re-renderizar embeds de TikTok si la lista cambia (no es estrictamente necesario aquí si la lista es fija)
  // o para observar los elementos y cargarlos si aparecen en el viewport.
  // Sin embargo, el script de TikTok suele escanear el DOM automáticamente.
  // Si sigues teniendo problemas, es posible que necesites un `useEffect` para llamar manualmente a TikTok para re-escanear.
  useEffect(() => {
    // Esto es un hack si TikTok no re-escanea automáticamente después de montar los componentes
    // Es mejor verificar la documentación oficial de TikTok para embeds en React.
    // Una solución común es que, después de que los elementos sean inyectados en el DOM,
    // se le indique al script de TikTok que los procese.
    // Si la función `window.tiktok.analytics.track` o similar existe, podrías llamarla.
    // O simplemente, asegurarse de que el script cargue *después* de que el HTML esté listo.

    // Si estás en un entorno de desarrollo (Next.js, Vite), y ves que el script de TikTok no se ejecuta
    // cuando el componente se monta, podrías intentar una recarga forzada de los embeds:
    if (window.tiktok && typeof (window as any).tiktok.EmbedElement === 'function') {
      // Esta es una suposición de cómo TikTok podría exponer una forma de re-escanear.
      // Podrías necesitar buscar en la consola del navegador si hay errores o si tiktok-embed.js expone una API.
      // Alternativamente, puedes forzar una pequeña demora para que el DOM se asiente antes de que el script de TikTok lo escanee.
      setTimeout(() => {
        // Esto es un "hack" y puede no ser la solución ideal.
        // La mejor práctica es que el script de TikTok se ejecute después de que todo el DOM esté listo.
        // Si usas un CMS o constructor de páginas, ellos suelen manejar esto.
        // Si no funciona, considera la Opción 2 (videos locales) o un componente React de terceros para TikTok embeds.
      }, 500);
    }
  }, []);


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
                    {/* El blockquote de TikTok debe ser la URL del video de TikTok */}
                   <blockquote
                     className="tiktok-embed w-full h-full"
                     cite={video.url} // Asegúrate que esta sea la URL completa del video de TikTok
                     data-video-id={video.id} // Asegúrate que este sea el ID correcto del video de TikTok
                     style={{
                       maxWidth: '100%',
                       width: '100%',
                       minHeight: '100%',
                       height: '100%',
                     }}
                   >
                     {/* Este contenido dentro del blockquote es para SEO y fallback, no para el reproductor en sí */}
                     <section className="p-2 bg-black text-white text-xs"> {/* Cambiado a text-white para que se vea */}
                       <a target="_blank" rel="noopener noreferrer" href={video.url}>Ver en TikTok</a> {/* Cambiado el texto */}
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