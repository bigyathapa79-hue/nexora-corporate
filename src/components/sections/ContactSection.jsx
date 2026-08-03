import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import Container from "../common/Container";
import Button from "../common/Button";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Office",
    value: "Kathmandu, Nepal",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+977 9800000000",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "hello@nexora.com",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    value: "Mon - Fri : 9:00 AM - 6:00 PM",
  },
];

const ContactSection = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              Contact Information
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              We'd Love to Hear From You
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Have a question or a project in mind? Reach out and let's discuss
              how Nexora can help your business grow.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <Icon />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-slate-600">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none focus:border-blue-600"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none focus:border-blue-600"
              ></textarea>

              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
