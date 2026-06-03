"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { label: "House Construction", href: "#services" },
      { label: "Home Renovations", href: "#services" },
      { label: "Roofing", href: "#services" },
      { label: "Tiling & Paving", href: "#services" },
      { label: "Plumbing", href: "#services" },
      { label: "Painting", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Projects", href: "#projects" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Service Areas", href: "#areas" },
      { label: "Get a Quote", href: "#contact" },
    ],
  },
];

const SERVICE_AREAS = [
  "Pietermaritzburg",
  "Durban",
  "Ballito",
  "Umhlanga",
  "Tongaat",
  "Howick",
  "Hammarsdale",
  "Greater KZN",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0e15] text-white/55 border-t border-[#C4A248]/12">
      {/* ── Top CTA Banner ── */}
      <div className="border-b border-white/6">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C4A248] mb-1">
              Ready to build?
            </p>
            <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white leading-tight">
              Let&apos;s bring your vision to life.
            </h2>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/27618838917"
              className="
                flex items-center gap-2
                bg-[#25d366]/10 hover:bg-[#25d366]/20
                border border-[#25d366]/25
                text-[#25d366] font-semibold
                text-sm px-5 py-3 rounded-[8px]
                transition-all duration-200
              "
            >
              <span>💬</span> WhatsApp
            </a>
            <a
              href="#contact"
              className="
                flex items-center gap-1.5
                bg-[#C4A248] hover:bg-[#d4b05a]
                text-[#0a0e15] font-bold
                text-sm tracking-wide uppercase
                px-5 py-3 rounded-[8px]
                transition-all duration-200
                hover:shadow-[0_6px_20px_rgba(196,162,72,0.3)]
                hover:-translate-y-px
              "
            >
              Free Quote →
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group w-fit"
              aria-label="Tawedzerwa Construction"
            >
              <span className="w-8 h-8 rounded-[6px] bg-[#C4A248] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-6">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 1L15 5.5V10.5L8 15L1 10.5V5.5L8 1Z"
                    stroke="#0a0e15"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M8 5L11 7V11H5V7L8 5Z"
                    fill="#0a0e15"
                  />
                </svg>
              </span>
              <span className="font-['Playfair_Display'] text-[1.1rem] font-bold text-white tracking-tight leading-none">
                Tawedzerwa<span className="text-[#C4A248]">.</span>
              </span>
            </Link>

            <p className="text-[0.88rem] leading-[1.75] max-w-[260px]">
              Premium construction and renovation services across KwaZulu-Natal.
              Quality workmanship, honest pricing, results that last.
            </p>

            {/* Contact snippets */}
            <ul
              className="flex flex-col gap-3"
              role="list"
            >
              <li>
                <a
                  href="tel:+277618838917"
                  className="flex items-center gap-2.5 text-[0.85rem] hover:text-[#C4A248] transition-colors duration-200 group"
                >
                  <span className="w-7 h-7 rounded-md bg-white/5 group-hover:bg-[#C4A248]/12 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <Phone
                      size={13}
                      className="text-[#C4A248]"
                    />
                  </span>
                  +27 61 883 8917
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tawedzerwaconstruction.co.za"
                  className="flex items-center gap-2.5 text-[0.85rem] hover:text-[#C4A248] transition-colors duration-200 group"
                >
                  <span className="w-7 h-7 rounded-md bg-white/5 group-hover:bg-[#C4A248]/12 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <Mail
                      size={13}
                      className="text-[#C4A248]"
                    />
                  </span>
                  info@tawedzerwaconstruction.co.za
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-[0.85rem]">
                  <span className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin
                      size={13}
                      className="text-[#C4A248]"
                    />
                  </span>
                  Pietermaritzburg, KwaZulu-Natal
                </span>
              </li>
            </ul>
          </div>

          {/* Nav columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-['Playfair_Display'] text-[0.95rem] font-semibold text-white mb-4 tracking-tight">
                {col.heading}
              </h3>
              <ul
                className="flex flex-col gap-2.5"
                role="list"
              >
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[0.85rem] hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-2.5 transition-all duration-200 text-[#C4A248] text-xs">
                        ›
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Service areas */}
          <div>
            <h3 className="font-['Playfair_Display'] text-[0.95rem] font-semibold text-white mb-4 tracking-tight">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="
                    inline-flex items-center gap-1.5
                    text-[0.76rem] font-medium
                    bg-white/4 hover:bg-[#C4A248]/12 hover:text-[#C4A248]
                    border border-white/8 hover:border-[#C4A248]/25
                    px-2.5 py-1 rounded-full
                    transition-all duration-200 cursor-default
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4A248] flex-shrink-0" />
                  {area}
                </span>
              ))}
            </div>

            {/* Social / registration */}
            <div className="mt-6 pt-6 border-t border-white/6">
              <p className="text-[0.76rem] leading-[1.7] text-white/30">
                Serving residential and commercial clients across KwaZulu-Natal
                since 2019. Fully insured. Quality guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.78rem]">
          <span>
            © {currentYear} Tawedzerwa Construction. All rights reserved.
          </span>
          <span className="flex items-center gap-1 text-white/30">
            Built with <Link href={"https://tafadzwa.site/" } className="text-amber-300">Tafadzwa</Link> in
            KwaZulu-Natal, South Africa
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms
            </a>
            <a
              href="https://wa.me/27618838917"
              className="flex items-center gap-1 text-[#25d366] hover:text-[#4ae082] transition-colors duration-200"
            >
              WhatsApp <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
