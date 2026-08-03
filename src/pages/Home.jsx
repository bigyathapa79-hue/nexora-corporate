import Companies from "../components/sections/Companies";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import WhyChoose from "../components/sections/WhyChooseUs";


const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Services />

      <WhyChoose />
      <Projects />
    </>
  );
};

export default Home;
