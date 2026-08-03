import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Container from "../common/Container";

const companyLinks = ["About", "Projects", "Contact"];

const serviceLinks = ["Web Development", "Cloud Solutions", "AI Solutions"];



const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        {/* Top */}
        <div className="grid gap-12 border-b border-slate-800 py-16 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="text-3xl font-bold text-white">
              <span className="text-blue-500">Nex</span>ora
            </a>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Nexora helps businesses embrace digital transformation through
              innovative software, cloud solutions, and modern technology
              consulting.
            </p>

            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Company</h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-blue-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Services</h3>

            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-blue-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Contact</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Kathmandu, Nepal</li>
              <li>+977 9800000000</li>
              <li>hello@nexora.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Nexora. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-500">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
