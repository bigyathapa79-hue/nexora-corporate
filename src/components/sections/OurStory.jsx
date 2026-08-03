import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const OurStory = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          align="left"
          badge="Our Story"
          title="Driven by Innovation, Focused on Business Growth"
          description="Nexora was founded with a simple vision—to help businesses embrace technology with confidence and build digital solutions that create long-term value."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left Content */}
          <div className="space-y-6 lg:col-span-3">
            <p className="text-lg leading-8 text-slate-600">
              We believe technology should be practical, scalable, and aligned
              with business goals. Every project begins with understanding our
              clients, their challenges, and the outcomes they want to achieve.
            </p>

            <p className="text-lg leading-8 text-slate-600">
              Our expertise spans web development, cloud solutions, AI
              integration, and digital transformation. By combining technical
              excellence with strategic thinking, we build solutions that help
              organizations improve efficiency, enhance customer experiences,
              and accelerate growth.
            </p>

            <p className="text-lg leading-8 text-slate-600">
              At Nexora, we don't just deliver software—we build long-term
              partnerships based on trust, collaboration, and measurable
              results.
            </p>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Our Purpose
              </span>

              <h3 className="mt-4 text-3xl font-bold">
                Building Digital Excellence
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                Our mission is to empower businesses with innovative technology
                solutions that simplify operations, improve productivity, and
                create sustainable growth in an ever-evolving digital world.
              </p>

              <div className="mt-8 border-t border-blue-400 pt-6">
                <p className="text-4xl font-bold">250+</p>
                <p className="mt-1 text-blue-100">
                  Successful projects delivered across multiple industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;
