import ServicesHero from "../components/sections/ServicesHero";
import ServicesGrid from "../components/sections/ServicesGrid";
import Process from "../components/sections/Process";
import Technologies from "../components/sections/Technologies";
import CTA from "../components/sections/CTA";
import SEO from "../components/common/SEO";


const Services = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Nexora is a leading technology and business consulting company delivering innovative web development, cloud, AI, and digital transformation solutions."
        keywords="Nexora, technology consulting, web development, software company, AI solutions, cloud services, digital transformation"
      />
      <ServicesHero />
      <ServicesGrid />
      <Process />
      <Technologies />
      <CTA />
    </>
  );
};

export default Services;
