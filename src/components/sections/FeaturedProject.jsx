import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";

import projects from "../../data/projects";

const FeaturedProjects = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          badge="Featured Work"
          title="Real Solutions for Real Businesses"
          description="Every project is designed with a focus on business value, user experience, and long-term scalability."
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

export default FeaturedProjects;
