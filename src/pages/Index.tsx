
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div>
        <Navigation />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
