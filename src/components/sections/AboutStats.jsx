import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import StatCard from "../common/StatCard";

const stats = [
  {
    id: 1,
    number: "250+",
    label: "Projects Completed",
  },
  {
    id: 2,
    number: "50+",
    label: "Happy Clients",
  },
  {
    id: 3,
    number: "12+",
    label: "Expert Team Members",
  },
  {
    id: 4,
    number: "8+",
    label: "Years of Experience",
  },
];

const AboutStats = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="Our Impact"
          title="Delivering Results That Matter"
          description="Our journey is defined by successful projects, satisfied clients, and a commitment to continuous innovation."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} number={stat.number} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutStats;
