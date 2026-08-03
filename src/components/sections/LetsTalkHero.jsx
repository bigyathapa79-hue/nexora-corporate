import { motion } from "framer-motion";
import Container from "../common/Container";

const LetsTalkHero = () => {
  return (
    <section className="bg-slate-900 py-28 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
            Let's Talk
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
            Ready to Build Something Great Together?
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Whether you're launching a new product, modernizing your business,
            or exploring AI solutions, we're here to help you move forward with
            confidence.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default LetsTalkHero;
