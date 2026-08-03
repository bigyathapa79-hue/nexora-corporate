import Container from "../common/Container";

const AboutHero = () => {
  return (
    <section className="bg-slate-900 py-28 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About Us
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
            Building Digital Excellence
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Nexora is a technology consulting company helping businesses
            transform ideas into innovative digital solutions through software,
            cloud, and AI technologies.
          </p>

          <div className="mt-8 text-slate-400">
            Home
            <span className="mx-2">/</span>
            About
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
