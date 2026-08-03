import Companies from "../components/sections/Companies";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import WhyChoose from "../components/sections/WhyChooseUs";
import About from "./About";
import Hero from "../components/sections/Hero";


const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Services />
      <About />
      <WhyChoose />
      <Projects />
    </>
  );
};

export default Home;
