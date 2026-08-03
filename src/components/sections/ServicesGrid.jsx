import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";

import services from "../../data/services";

const ServicesGrid = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          badge="Our Expertise"
          title="Comprehensive Technology Services"
          description="We provide end-to-end digital solutions designed to help businesses innovate, scale, and stay competitive."
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

export default ServicesGrid;
