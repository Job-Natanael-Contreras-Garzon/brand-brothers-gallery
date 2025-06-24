
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset states on location change
    setIsLeaving(false);
    setIsVisible(false);
    
    // Delay to allow exit animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Page Border Frame */}
      <div 
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-700 ease-in-out ${
          isVisible 
            ? 'border-[12px] border-gradient-to-br from-brand-teal/30 via-purple-500/30 to-pink-500/30' 
            : 'border-[24px] border-brand-teal/60'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
          backdropFilter: 'blur(1px)'
        }}
      >
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-brand-teal to-purple-500 rounded-br-lg"></div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-bl-lg"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-pink-500 to-brand-teal rounded-tr-lg"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-brand-teal to-purple-500 rounded-tl-lg"></div>
      </div>

      {/* Content Container */}
      <div 
        className={`relative z-10 transition-all duration-700 ease-out transform ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-98'
        }`}
        style={{
          filter: isVisible ? 'blur(0px)' : 'blur(2px)'
        }}
      >
        {/* Background Gradient Animation */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-brand-teal/5 via-purple-500/5 to-pink-500/5 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Floating Elements */}
        <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-teal/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <div 
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"
            style={{ animationDuration: '3s', animationDelay: '1s' }}
          />
          <div 
            className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-brand-teal/20 rounded-full blur-lg animate-pulse"
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
