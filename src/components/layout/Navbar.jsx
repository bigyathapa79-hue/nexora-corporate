import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import Container from "../common/Container";
import Button from "../common/Button";

const navLinks = ["Home", "About", "Services", "Projects", "Blog", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-slate-900">
            <span className="text-blue-600">Nex</span>ora
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-medium text-slate-600 transition hover:text-blue-600"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button>Let's Talk</Button>
          </div>

          {/* Mobile Button */}
          <button
            className="text-3xl text-slate-800 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-slate-200 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-medium text-slate-600 hover:text-blue-600"
                >
                  {link}
                </a>
              ))}

              <Button>Let's Talk</Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
