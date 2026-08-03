import Container from "../common/Container";

const ContactHero = () => {
  return (
    <section className="bg-slate-900 py-28 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            Let's Build Something Amazing Together
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Whether you're starting a new project or looking for a trusted
            technology partner, we'd love to hear from you.
          </p>

          <div className="mt-8 text-slate-400">
            Home
            <span className="mx-2">/</span>
            Contact
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
