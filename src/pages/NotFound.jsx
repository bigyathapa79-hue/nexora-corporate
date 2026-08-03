import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import Button from "../components/common/Button";
import Container from "../components/common/Container";
import SEO from "../components/common/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Nexora is a leading technology and business consulting company delivering innovative web development, cloud, AI, and digital transformation solutions."
        keywords="Nexora, technology consulting, web development, software company, AI solutions, cloud services, digital transformation"
      />
      <section className="flex min-h-screen items-center bg-slate-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Page Not Found
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sorry, the page you're looking for doesn't exist or may have been
              moved.
            </p>

            <div className="mt-10">
              <Link to="/">
                <Button className="inline-flex items-center gap-2">
                  <FaArrowLeft />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
