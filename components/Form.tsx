"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  "House Construction",
  "Home Renovations",
  "Bricklaying",
  "Roofing",
  "Plumbing",
  "Door Installation",
  "Window Installation",
  "Tiling",
  "Painting",
  "Paving",
  "General Maintenance",
  "Property Improvements",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      aria-label="Request a free quote"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-[0.78rem] font-semibold uppercase tracking-[0.07em] text-[#0d1117]"
          >
            Full Name <span className="text-[#C4A248]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            autoComplete="name"
            className="px-4 py-3 bg-[#faf7f2] border border-[#e5e7eb] focus:border-[#C4A248] focus:bg-white rounded-lg text-[0.93rem] text-[#0d1117] placeholder:text-[#9ca3af] outline-none transition-colors duration-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-[0.78rem] font-semibold uppercase tracking-[0.07em] text-[#0d1117]"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+27 XXX XXX XXXX"
            autoComplete="tel"
            className="px-4 py-3 bg-[#faf7f2] border border-[#e5e7eb] focus:border-[#C4A248] focus:bg-white rounded-lg text-[0.93rem] text-[#0d1117] placeholder:text-[#9ca3af] outline-none transition-colors duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-[0.78rem] font-semibold uppercase tracking-[0.07em] text-[#0d1117]"
        >
          Email Address <span className="text-[#C4A248]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
          className="px-4 py-3 bg-[#faf7f2] border border-[#e5e7eb] focus:border-[#C4A248] focus:bg-white rounded-lg text-[0.93rem] text-[#0d1117] placeholder:text-[#9ca3af] outline-none transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="service"
          className="text-[0.78rem] font-semibold uppercase tracking-[0.07em] text-[#0d1117]"
        >
          Service Required
        </label>
        <select
          id="service"
          name="service"
          className="px-4 py-3 bg-[#faf7f2] border border-[#e5e7eb] focus:border-[#C4A248] focus:bg-white rounded-lg text-[0.93rem] text-[#0d1117] outline-none transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option
              key={s}
              value={s}
            >
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-[0.78rem] font-semibold uppercase tracking-[0.07em] text-[#0d1117]"
        >
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project — location, size, timeline, budget..."
          className="px-4 py-3 bg-[#faf7f2] border border-[#e5e7eb] focus:border-[#C4A248] focus:bg-white rounded-lg text-[0.93rem] text-[#0d1117] placeholder:text-[#9ca3af] outline-none transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        className={`
          w-full flex items-center justify-center gap-2
          font-bold text-sm tracking-wide uppercase
          py-4 rounded-[8px] mt-1
          transition-all duration-300 hover:-translate-y-px active:translate-y-0 group
          ${
            submitted
              ? "bg-green-600 text-white cursor-default"
              : "bg-[#0d1117] hover:bg-[#C4A248] text-white hover:text-[#0d1117] hover:shadow-[0_8px_24px_rgba(196,162,72,0.3)]"
          }
        `}
      >
        {submitted ? (
          "✓ Message Sent!"
        ) : (
          <>
            Send Message
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </>
        )}
      </button>
    </form>
  );
}
