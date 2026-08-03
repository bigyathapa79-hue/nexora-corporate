









import Navbar from "../components/layout/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import Footer from "../components/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
