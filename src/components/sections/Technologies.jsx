import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TechCard from "../common/TechCard";

import technologies from "../../data/technologies";

const Technologies = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          badge="Technologies"
          title="Modern Tools We Work With"
          description="We leverage industry-leading technologies to build scalable, secure, and high-performing digital solutions."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {technologies.map((tech) => (
            <TechCard key={tech.category} tech={tech} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
