import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProcessCard from "../common/ProcessCard";

import process from "../../data/process";

const Process = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="Our Process"
          title="A Clear Path from Idea to Success"
          description="We follow a structured process to ensure every project is delivered efficiently, on time, and with measurable business value."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {process.map((step) => (
            <ProcessCard key={step.id} process={step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
