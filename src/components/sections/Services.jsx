import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";

import services from "../../data/services";

const Services = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          badge="Our Services"
          title="Technology Solutions That Drive Business Growth"
          description="From custom software development to AI-powered automation, we provide innovative digital solutions that help businesses scale with confidence."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
