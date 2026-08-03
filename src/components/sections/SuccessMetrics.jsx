import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import MetricCard from "../common/MetricCard";

const metrics = [
  {
    id: 1,
    number: "250+",
    title: "Projects Completed",
  },
  {
    id: 2,
    number: "98%",
    title: "Client Satisfaction",
  },
  {
    id: 3,
    number: "50+",
    title: "Businesses Served",
  },
  {
    id: 4,
    number: "8+",
    title: "Years of Experience",
  },
];

const SuccessMetrics = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          badge="Our Results"
          title="Delivering Measurable Success"
          description="Every project is focused on creating business value through innovation, reliability, and long-term partnerships."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.id}
              number={metric.number}
              title={metric.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SuccessMetrics;
