import Container from "../common/Container";

const ProjectsHero = () => {
  return (
    <section className="bg-slate-900 py-28 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Our Projects
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Delivering Digital Solutions That Make an Impact
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Explore a selection of projects that demonstrate our expertise in
            web development, cloud computing, AI integration, and business
            transformation.
          </p>

          <div className="mt-8 text-slate-400">
            Home
            <span className="mx-2">/</span>
            Projects
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsHero;
