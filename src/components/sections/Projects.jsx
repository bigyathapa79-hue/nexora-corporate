import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";

import projects from "../../data/projects";

const Projects = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          badge="Featured Projects"
          title="Delivering Solutions That Make an Impact"
          description="Explore a selection of projects that demonstrate our expertise in software development, cloud computing, and AI-driven solutions."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
