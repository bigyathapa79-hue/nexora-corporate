



import whyChoose from "../../data/whyChoose";
import Container from "../common/Container";
import FeatureCard from "../common/FeaturedCard";
import SectionTitle from "../common/SectionTitle";

const WhyChoose = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          badge="Why Choose Us"
          title="Trusted Technology Partner for Your Business"
          description="We combine innovation, technical expertise, and a customer-first mindset to deliver digital solutions that help businesses grow."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {whyChoose.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
