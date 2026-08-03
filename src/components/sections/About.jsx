import { FaCheckCircle } from "react-icons/fa";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";



import aboutImage from "../../assets/images/about.jpg";
import StatCard from "../common/StatCard";
import stats from "../../data/stats";

const features = [
  "Experienced technology professionals",
  "Customer-focused development process",
  "Scalable and future-ready solutions",
];

const About = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div>
            <img
              src={aboutImage}
              alt="Nexora Team"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <SectionTitle
              align="left"
              badge="About Us"
              title="We Build Technology That Helps Businesses Grow"
              description="Nexora combines creativity, technology, and strategy to deliver modern digital solutions that solve real business challenges."
            />
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-600" />

                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <StatCard
                  key={stat.id}
                  number={stat.number}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
