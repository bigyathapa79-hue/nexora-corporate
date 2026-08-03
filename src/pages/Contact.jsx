import SEO from "../components/common/SEO";
import ContactHero from "../components/sections/ContactHero";
import ContactSection from "../components/sections/ContactSection";
import CTA from "../components/sections/CTA";


const Contact = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Nexora is a leading technology and business consulting company delivering innovative web development, cloud, AI, and digital transformation solutions."
        keywords="Nexora, technology consulting, web development, software company, AI solutions, cloud services, digital transformation"
      />
      <ContactHero />
      <ContactSection />
      <CTA />
    </>
  );
};

export default Contact;
