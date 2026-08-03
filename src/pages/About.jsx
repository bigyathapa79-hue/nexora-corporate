import AboutHero from "../components/sections/AboutHero";
import AboutStats from "../components/sections/AboutStats";
import CoreValues from "../components/sections/CoreValues";
import CTA from "../components/sections/CTA";
import MissionVision from "../components/sections/MissionVission";
import OurStory from "../components/sections/OurStory";

const About = () => {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision/>
      <CoreValues/>
      <AboutStats/>
      <CTA/>
    </>
  );
};

export default About;
