import { useParams, Navigate } from "react-router-dom";

import Container from "../components/common/Container";
import projects from "../data/projects";
import SEO from "../components/common/SEO";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        keywords={`${project.category}, ${project.title}, Nexora`}
      />
      <section className="py-24">
        <Container>
          <img
            src={project.image}
            alt={project.title}
            className="mb-10 h-125 w-full rounded-3xl object-cover"
          />

          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-600">
            {project.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {project.description}
          </p>

          <div className="mt-16">
            <h2 className="text-3xl font-bold">The Challenge</h2>

            <p className="mt-4 leading-8 text-slate-600">{project.challenge}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold">Our Solution</h2>

            <p className="mt-4 leading-8 text-slate-600">{project.solution}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold">Technologies Used</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-4 py-2 text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold">Results</h2>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-600">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectDetails;
