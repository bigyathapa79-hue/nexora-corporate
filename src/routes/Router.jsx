









import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";


import ScrollToTop from "../components/common/ScrollToTop";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ProjectDetails from "../pages/ProjectDetails";
import Projects from "../pages/Projects";
import Services from "../pages/Services";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;
