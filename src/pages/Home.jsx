import SEO from "../components/common/SEO";
import Companies from "../components/sections/Companies";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import WhyChoose from "../components/sections/WhyChooseUs";


const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Nexora is a leading technology and business consulting company delivering innovative web development, cloud, AI, and digital transformation solutions."
        keywords="Nexora, technology consulting, web development, software company, AI solutions, cloud services, digital transformation"
      />
      <Hero />
      <Companies />
      <Services />

      <WhyChoose />
      <Projects />
    </>
  );
};

export default Home;
