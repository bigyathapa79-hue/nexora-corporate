import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import Container from "../common/Container";
import Button from "../common/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition-all duration-300
     ${isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
     after:origin-left after:scale-x-0 after:bg-blue-600
     after:transition-transform after:duration-300
     hover:after:scale-x-100`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-3xl font-bold tracking-tight">
            <span className="text-blue-600">Nex</span>
            <span className="text-slate-900">ora</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={navLinkClasses}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button>Let's Talk</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
          >
            {isOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-96 py-5" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-2 border-t border-slate-200 pt-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mt-4">
              <Button className="w-full">Let's Talk</Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
