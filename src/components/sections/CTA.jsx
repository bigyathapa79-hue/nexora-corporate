import { Link } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";

const CTA = () => {
  return (
    <section className="bg-blue-600 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
            Let's Work Together
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Ready to Build Something Great?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Whether you're launching a new product, modernizing an existing
            platform, or looking for a trusted technology partner, Nexora is
            here to help turn your vision into reality.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button className="rounded-lg border border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-blue-600">
                Get in Touch
              </Button>
            </Link>

            <Link to="/services">
              <button className="rounded-lg border border-white px-6 py-3 font-medium text-white transition hover:bg-white hover:text-blue-600">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
