import CTA from "../components/sections/CTA";
import FeaturedProjects from "../components/sections/FeaturedProject";
import ProjectCategories from "../components/sections/ProjectCategories";
import ProjectsHero from "../components/sections/ProjectHero";
import SuccessMetrics from "../components/sections/SuccessMetrics";

const Projects = () => {
  return (
    <>
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectCategories />
      <SuccessMetrics />
      <CTA />
    </>
  );
};

export default Projects;
