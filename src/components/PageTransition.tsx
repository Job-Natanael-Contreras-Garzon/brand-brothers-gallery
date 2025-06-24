
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset states on location change
    setIsVisible(false);
    
    // Delay to allow exit animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Page Border Frame - Simplificado */}
      <div 
        className={`fixed inset-0 z-10 pointer-events-none transition-all duration-700 ease-in-out ${
          isVisible 
            ? 'border-8 border-brand-teal/20' 
            : 'border-12 border-brand-teal/40'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.05) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
        }}
      >
        {/* Corner decorations - Simplificados */}
        <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-to-br from-brand-teal to-purple-500 rounded-br-lg"></div>
        <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-bl-lg"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr from-pink-500 to-brand-teal rounded-tr-lg"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-brand-teal to-purple-500 rounded-tl-lg"></div>
      </div>

      {/* Content Container */}
      <div 
        className={`relative z-20 transition-all duration-700 ease-out transform ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-4 opacity-0 scale-98'
        }`}
      >
        {/* Background Gradient Animation */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-brand-teal/3 via-purple-500/3 to-pink-500/3 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Floating Elements - Simplificados */}
        <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-brand-teal/10 to-purple-500/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <div 
            className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"
            style={{ animationDuration: '3s', animationDelay: '1s' }}
          />
          <div 
            className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-brand-teal/10 rounded-full blur-lg animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '2s' }}
          />
        </div>
        
        {children}
      </div>

      {/* Page Loading Indicator */}
      <div 
        className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-purple-500 to-pink-500 z-50 transition-transform duration-700 ease-out ${
          isVisible ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
    </div>
  );
};
