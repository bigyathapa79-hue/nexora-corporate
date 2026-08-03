import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../common/Button";
import { contactSchema } from "../../validation/contactSchema";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);

    reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <input
            {...register("name")}
            placeholder="Your Name"
            className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none transition focus:border-blue-600"
          />

          <p className="mt-1 text-sm text-red-500">{errors.name?.message}</p>
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Email Address"
            className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none transition focus:border-blue-600"
          />

          <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
        </div>

        <div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none transition focus:border-blue-600"
          />

          <p className="mt-1 text-sm text-red-500">{errors.subject?.message}</p>
        </div>

        <div>
          <textarea
            rows="5"
            {...register("message")}
            placeholder="Your Message"
            className="w-full rounded-xl border border-slate-300 px-5 py-3 outline-none transition focus:border-blue-600"
          />

          <p className="mt-1 text-sm text-red-500">{errors.message?.message}</p>
        </div>

        {submitted && (
          <div className="rounded-xl bg-green-100 p-4 text-green-700">
            ✅ Message sent successfully.
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
