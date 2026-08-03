import { FaComments, FaClipboardList, FaCode, FaRocket } from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const steps = [
  {
    icon: FaComments,
    title: "Discovery Call",
    description:
      "We understand your business goals, challenges, and project requirements.",
  },
  {
    icon: FaClipboardList,
    title: "Planning",
    description:
      "We prepare a clear roadmap, timeline, and technology strategy.",
  },
  {
    icon: FaCode,
    title: "Development",
    description: "Our team designs, develops, and tests your digital solution.",
  },
  {
    icon: FaRocket,
    title: "Launch & Support",
    description:
      "We deploy your project and continue supporting your business growth.",
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="Our Process"
          title="How We Work"
          description="A simple and transparent process from the first conversation to project delivery."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl text-blue-600">
                  <Icon />
                </div>

                <div className="mt-4 text-sm font-bold text-blue-600">
                  Step {index + 1}
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WorkProcess;
