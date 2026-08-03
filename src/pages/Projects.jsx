import SEO from "../components/common/SEO";
import CTA from "../components/sections/CTA";
import FeaturedProjects from "../components/sections/FeaturedProject";
import ProjectCategories from "../components/sections/ProjectCategories";
import ProjectsHero from "../components/sections/ProjectHero";
import SuccessMetrics from "../components/sections/SuccessMetrics";

const Projects = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Nexora is a leading technology and business consulting company delivering innovative web development, cloud, AI, and digital transformation solutions."
        keywords="Nexora, technology consulting, web development, software company, AI solutions, cloud services, digital transformation"
      />
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectCategories />
      <SuccessMetrics />
      <CTA />
    </>
  );
};

export default Projects;
