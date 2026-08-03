import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

import Container from "../common/Container";
import Button from "../common/Button";
import heroImage from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Digital Business Solutions
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              Helping Businesses Build
              <span className="text-blue-600"> Digital Excellence.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Nexora empowers businesses through innovative software, cloud
              solutions, AI integration, and strategic digital transformation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button>Get Started</Button>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-medium transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
              >
                Our Services
                <FaArrowRight />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                <span className="text-slate-600">250+ Projects</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                <span className="text-slate-600">50+ Clients</span>
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                <span className="text-slate-600">8+ Years</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={heroImage}
              alt="Nexora team collaborating on digital solutions"
              className="w-full rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
