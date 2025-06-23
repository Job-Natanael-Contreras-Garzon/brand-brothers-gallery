
import React from 'react';
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
