"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Areas", href: "#areas" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);

      // Active section highlight
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${
            scrolled
              ? "bg-[#0d1117]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(196,162,72,0.15)] py-0"
              : "bg-[#0d1117]/80 backdrop-blur-md py-1"
          }
        `}
      >
        <nav
          className="max-w-7xl mx-auto px-5 lg:px-10 h-[70px] flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Tawedzerwa Construction — home"
          >
            {/* Icon mark */}
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
                  stroke="#0d1117"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M8 5L11 7V11H5V7L8 5Z"
                  fill="#0d1117"
                />
              </svg>
            </span>

            {/* Wordmark */}
            <span className="font-['Playfair_Display'] text-[1.15rem] font-bold text-white tracking-tight leading-none">
              Tawedzerwa<span className="text-[#C4A248]">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul
            className="hidden lg:flex items-center gap-1"
            role="list"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={label}>
                  <a
                    href={href}
                    className={`
                      relative px-4 py-2 rounded-md text-[0.84rem] font-medium tracking-wide uppercase
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-[#C4A248]"
                          : "text-white/65 hover:text-white"
                      }
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                    {/* Active underline */}
                    <span
                      className={`
                        absolute bottom-0 left-4 right-4 h-px rounded-full
                        bg-[#C4A248] transition-all duration-300
                        ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+27618838917"
              className="text-[0.82rem] text-white/50 hover:text-white transition-colors duration-200 font-medium hidden xl:block"
            >
              +27 618 838 917
            </a>
            <a
              href="#contact"
              className="
                group flex items-center gap-1.5
                bg-[#C4A248] hover:bg-[#d4b05a]
                text-[#0d1117] font-semibold
                text-[0.84rem] tracking-wide uppercase
                px-5 py-2.5 rounded-[7px]
                transition-all duration-200
                hover:shadow-[0_6px_20px_rgba(196,162,72,0.35)]
                hover:-translate-y-px
                active:translate-y-0
              "
            >
              Free Quote
              <ChevronRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md text-white hover:bg-white/8 transition-colors duration-200"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* ── Mobile Drawer Backdrop ── */}
      <div
        className={`
          fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer ── */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed top-0 right-0 bottom-0 z-[70]
          w-[300px] max-w-[90vw]
          bg-[#0d1117] border-l border-[#C4A248]/15
          flex flex-col
          transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/6">
          <span className="font-['Playfair_Display'] text-[1.05rem] font-bold text-white">
            Tawedzerwa<span className="text-[#C4A248]">.</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-md text-white/50 hover:text-white hover:bg-white/8 transition-colors duration-200"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer links */}
        <nav
          className="flex-1 px-4 py-6 overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <ul
            className="flex flex-col gap-1"
            role="list"
          >
            {NAV_LINKS.map(({ label, href }, i) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={handleNavClick}
                    className={`
                      flex items-center justify-between
                      px-4 py-3.5 rounded-[8px]
                      text-[0.95rem] font-medium
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-[#C4A248]/12 text-[#C4A248]"
                          : "text-white/65 hover:text-white hover:bg-white/5"
                      }
                    `}
                    style={{ animationDelay: `${i * 40}ms` }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                    <ChevronRight
                      size={15}
                      className="opacity-40"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-4 pb-8 pt-4 border-t border-white/6 flex flex-col gap-3">
          <a
            href="#contact"
            onClick={handleNavClick}
            className="
              w-full text-center
              bg-[#C4A248] hover:bg-[#d4b05a]
              text-[#0d1117] font-bold
              text-[0.9rem] tracking-wide uppercase
              px-5 py-3.5 rounded-[8px]
              transition-all duration-200
              hover:shadow-[0_6px_20px_rgba(196,162,72,0.3)]
            "
          >
            Get a Free Quote
          </a>
          <a
            href="https://wa.me/27618838917"
            onClick={handleNavClick}
            className="
              w-full text-center
              bg-[#25d366]/10 hover:bg-[#25d366]/20
              text-[#25d366] font-semibold
              text-[0.88rem]
              px-5 py-3 rounded-[8px]
              border border-[#25d366]/20
              transition-all duration-200
            "
          >
            💬 WhatsApp Us
          </a>
        </div>
      </aside>
    </>
  );
}
