import Container from "../common/Container";

const companies = [
  "NexTech",
  "CloudX",
  "VisionAI",
  "DataFlow",
  "NovaSoft",
  "CoreLabs",
];

const Companies = () => {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16">
      <Container>
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Trusted by Growing Businesses
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Building Digital Success Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We collaborate with ambitious businesses across industries,
            delivering innovative technology solutions that drive growth and
            long-term success.
          </p>
        </div>

        {/* Company Names */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg font-semibold text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
            >
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Companies;
