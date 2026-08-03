import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ValueCard from "../common/ValueCard";

import values from "../../data/values";

const CoreValues = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          badge="Core Values"
          title="The Principles That Shape Our Work"
          description="Our values define how we work, collaborate, and deliver meaningful digital solutions for every client."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreValues;
