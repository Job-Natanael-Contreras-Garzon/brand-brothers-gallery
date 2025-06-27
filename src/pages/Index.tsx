import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Link } from "@/components/Link"; // Assuming Link component is defined in this file

const Index = () => {
  return (<div>
      <Navigation />
      <Hero />
      <Services 
        services={[
          {
            title: 'Service 1',
            details: [
              'details.softwareDevelopment.details.cms',
            ],
            portfolioCategory: 'web',
          },
          {
            title: 'Service 2',
            details: [
              'details.softwareDevelopment.details.cms',
            ],
            portfolioCategory: 'movil',
          },
          // Add other services here...
        ]}
      />
      <Portfolio />
      <About />
      <Blog />
      <Contact />
      <Footer />
      </div>
  );
};

export default Index;
