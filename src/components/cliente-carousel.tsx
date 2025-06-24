import React from 'react';
import { cn } from '../lib/utils';

const clientLogos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png', alt: 'Google' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1920px-Microsoft_logo.svg.png', alt: 'Microsoft' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png', alt: 'Amazon' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png', alt: 'Netflix' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1920px-Spotify_icon.svg.png', alt: 'Spotify' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1200px-Meta-Logo.png', alt: 'Meta' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png', alt: 'Tesla' },
  { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Nvidia_logo.svg/1920px-Nvidia_logo.svg.png', alt: 'Nvidia' },
];

const ClientCarousel = () => {
  const duplicatedLogos = [...clientLogos, ...clientLogos]; // Duplicamos para el efecto de bucle infinito

  return (
    <div className="w-full">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div
          className="flex w-max animate-scroll"
          style={{ '--animation-duration': '40s' } as React.CSSProperties}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-20 flex items-center justify-center mx-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;