import Container from "../common/Container";

const ServicesHero = () => {
  return (
    <section className="bg-slate-900 py-28 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Our Services
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Technology Solutions for Modern Businesses
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We help startups, enterprises, and growing businesses transform
            ideas into scalable digital products through innovative technology
            and strategic consulting.
          </p>

          <div className="mt-8 text-slate-400">
            Home
            <span className="mx-2">/</span>
            Services
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesHero;
