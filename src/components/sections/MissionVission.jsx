import { FaBullseye, FaEye } from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const cards = [
  {
    id: 1,
    icon: FaBullseye,
    title: "Our Mission",
    description:
      "To empower businesses with innovative digital solutions that improve efficiency, accelerate growth, and create meaningful customer experiences through modern technology.",
  },
  {
    id: 2,
    icon: FaEye,
    title: "Our Vision",
    description:
      "To become a trusted global technology partner recognized for delivering scalable, reliable, and future-ready digital solutions that inspire innovation.",
  },
];

const MissionVision = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="Mission & Vision"
          title="Guided by Purpose, Driven by Innovation"
          description="Everything we build is centered around delivering measurable value for businesses through technology, strategy, and long-term partnerships."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className="group rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;
