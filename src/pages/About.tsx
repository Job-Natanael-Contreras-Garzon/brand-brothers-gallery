
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { About as AboutComponent } from '@/components/About';
import { Footer } from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutComponent />
      </div>
      <Footer />
    </div>
  );
};

export default About;
