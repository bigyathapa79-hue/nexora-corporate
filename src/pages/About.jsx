import SEO from "../components/common/SEO";
import AboutHero from "../components/sections/AboutHero";
import AboutStats from "../components/sections/AboutStats";
import CoreValues from "../components/sections/CoreValues";
import CTA from "../components/sections/CTA";
import MissionVision from "../components/sections/MissionVission";
import OurStory from "../components/sections/OurStory";

const About = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Nexora is a leading technology and business consulting company delivering innovative web development, cloud, AI, and digital transformation solutions."
        keywords="Nexora, technology consulting, web development, software company, AI solutions, cloud services, digital transformation"
      />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <AboutStats />
      <CTA />
    </>
  );
};

export default About;
