
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Portfolio as PortfolioComponent } from '@/components/Portfolio';
import { Footer } from '@/components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <PortfolioComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
