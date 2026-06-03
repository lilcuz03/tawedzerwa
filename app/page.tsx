import type { Metadata } from "next";
import Image from "next/image";
import { localBusinessSchema } from "./metadata";
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  Star,
  MapPin,
  Shield,
  Clock,
  Award,
  Hammer,
  ChevronRight,
} from "lucide-react";
import ContactForm from "@/components/Form";

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tawedzerwa Construction | Premium Builders in Pietermaritzburg & KZN",
  description:
    "Professional construction, home renovations, roofing, tiling, plumbing and more across Pietermaritzburg, Durban and KwaZulu-Natal. Quality workmanship. Honest pricing. On-time delivery.",
  keywords: [
    "construction company Pietermaritzburg",
    "builders Durban",
    "house renovations KwaZulu-Natal",
    "construction services South Africa",
    "roofing contractors KZN",
    "tiling Pietermaritzburg",
    "plumbing Durban",
  ],
  openGraph: {
    title: "Tawedzerwa Construction | Premium Builders in KZN",
    description:
      "House construction, renovations, roofing, tiling & more across Pietermaritzburg, Durban and greater KZN.",
    url: "https://www.tawedzerwaconstruction.co.za",
    siteName: "Tawedzerwa Construction",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawedzerwa Construction | Premium Builders in KZN",
    description:
      "Professional construction & renovation services across Pietermaritzburg, Durban and KwaZulu-Natal.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.tawedzerwaconstruction.co.za",
  },
};

// ── Types ─────────────────────────────────────────────────────
interface Service {
  icon: string;
  name: string;
  description: string;
}

interface WhyCard {
  icon: React.ReactNode;
  title: string;
  body: string;
}

interface Testimonial {
  name: string;
  location: string;
  review: string;
  initials: string;
}

interface Project {
  label: string;
  title: string;
  src: string;
  span?: boolean;
}

// ── Data ──────────────────────────────────────────────────────
const SERVICES: Service[] = [
  {
    icon: "🏗️",
    name: "House Construction",
    description:
      "Full new-build residential construction from foundation to handover.",
  },
  {
    icon: "🔨",
    name: "Home Renovations",
    description:
      "Transform your existing space with expert renovation services.",
  },
  {
    icon: "🧱",
    name: "Bricklaying",
    description:
      "Precision brickwork for walls, boundaries, and structural elements.",
  },
  {
    icon: "🏠",
    name: "Roofing",
    description:
      "New roofs, repairs, and waterproofing for lasting protection.",
  },
  {
    icon: "🚿",
    name: "Plumbing",
    description: "Complete plumbing installation, maintenance, and repair.",
  },
  {
    icon: "🚪",
    name: "Door Installation",
    description: "Interior and exterior door fitting with precision and care.",
  },
  {
    icon: "🪟",
    name: "Window Installation",
    description: "Energy-efficient window fitting and frame replacements.",
  },
  {
    icon: "🔳",
    name: "Tiling",
    description: "Floor and wall tiling with immaculate finishes and grouting.",
  },
  {
    icon: "🎨",
    name: "Painting",
    description: "Interior and exterior painting — clean lines, bold results.",
  },
  {
    icon: "🛤️",
    name: "Paving",
    description: "Driveways, pathways, and outdoor surfaces built to last.",
  },
  {
    icon: "🔧",
    name: "General Maintenance",
    description: "Ongoing property upkeep and quick-response repair services.",
  },
  {
    icon: "📈",
    name: "Property Improvements",
    description: "Strategic upgrades that increase your property's value.",
  },
];

const WHY_CARDS: WhyCard[] = [
  {
    icon: (
      <Award
        size={22}
        className="text-[#C4A248]"
      />
    ),
    title: "Quality Workmanship",
    body: "Every job is treated like our own home. We use quality materials, skilled labour, and attention to detail that shows in the final result.",
  },
  {
    icon: (
      <Shield
        size={22}
        className="text-[#C4A248]"
      />
    ),
    title: "Affordable Pricing",
    body: "Premium construction doesn't have to break the bank. Transparent, competitive quotes with no hidden surprises.",
  },
  {
    icon: (
      <CheckCircle2
        size={22}
        className="text-[#C4A248]"
      />
    ),
    title: "Reliable Service",
    body: "We show up when we say we will, communicate clearly, and follow through on every commitment made to our clients.",
  },
  {
    icon: (
      <Clock
        size={22}
        className="text-[#C4A248]"
      />
    ),
    title: "On-Time Delivery",
    body: "We set realistic timelines and stick to them. Your project moves forward without unnecessary delays or excuses.",
  },
  {
    icon: (
      <Hammer
        size={22}
        className="text-[#C4A248]"
      />
    ),
    title: "Skilled Team",
    body: "Our crew are experienced tradespeople who take pride in their work — from the first brick to the final coat of paint.",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sipho Dlamini",
    location: "Pietermaritzburg, KZN",
    initials: "SD",
    review:
      "Tawedzerwa and his team renovated our entire kitchen and living area. The quality is exceptional — clean finishes, on time, and within budget. Highly recommend.",
  },
  {
    name: "Nomvula Khumalo",
    location: "Durban, KZN",
    initials: "NK",
    review:
      "We had our entire roof replaced and new tiling done throughout the house. Professional team, great communication, and the result speaks for itself.",
  },
  {
    name: "Thabo Nkosi",
    location: "New Hanover, KZN",
    initials: "TN",
    review:
      "I was nervous hiring a young contractor but Tawedzerwa exceeded every expectation. The new build was completed ahead of schedule and the quality is top class.",
  },
];

const PROJECTS: Project[] = [
  {
    label: "New Build",
    title: "3-Bedroom Family Home — PMB",
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80",
    span: true,
  },
  {
    label: "Renovation",
    title: "Kitchen Remodel",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    label: "Roofing",
    title: "Full Roof Replacement",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    label: "Tiling",
    title: "Bathroom Tiling — Durban",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
  {
    label: "Paving",
    title: "Driveway Paving — Northdale",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
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

// ── Component ─────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main className="overflow-x-hidden">
        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section
          id="hero"
          aria-label="Hero"
          className="relative min-h-screen flex items-center bg-[#0d1117] overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85"
              alt="Construction site in KwaZulu-Natal"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-radial-[ellipse_at_80%_40%] from-[#C4A248]/10 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-20 sm:pt-32 sm:pb-24">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#C4A248]/12 border border-[#C4A248]/30 text-[#C4A248] text-xs font-semibold tracking-[0.14em] uppercase px-4 py-2 rounded-full mb-6 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4A248] animate-pulse" />
                Pietermaritzburg · KwaZulu-Natal
              </div>

              {/* Headline */}
              <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] font-black text-white leading-[1.1] tracking-tight mb-5 sm:mb-6">
                Building <span className="text-[#C4A248]">Dreams</span>,<br />
                One Brick
                <br className="hidden sm:block" /> at a Time.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-white/65 font-light leading-relaxed mb-8 sm:mb-10 max-w-lg">
                Premium construction and renovation services across
                KwaZulu-Natal. Quality workmanship, honest pricing, and results
                that stand the test of time.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C4A248] hover:bg-[#d4b05a] text-[#0d1117] font-bold text-sm tracking-wide uppercase px-7 py-4 rounded-[8px] transition-all duration-200 hover:shadow-[0_8px_28px_rgba(196,162,72,0.4)] hover:-translate-y-px active:translate-y-0 group"
                >
                  Get a Free Quote
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="https://wa.me/27618838917"
                  className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/25 text-white font-semibold text-sm px-7 py-4 rounded-[8px] transition-all duration-200"
                >
                  <MessageCircle
                    size={16}
                    className="text-[#25d366]"
                  />
                  WhatsApp Us
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/45">
                {[
                  "150+ Projects Completed",
                  "98% Client Satisfaction",
                  "5+ Years Experience",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-[#C4A248] flex-shrink-0"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating stats — bottom right */}
            <div className="absolute bottom-10 right-5 sm:right-8 lg:right-10 hidden md:flex gap-6 lg:gap-8">
              {[
                { number: "150+", label: "Projects Done" },
                { number: "98%", label: "Happy Clients" },
                { number: "5+", label: "Years Active" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center"
                >
                  <span className="font-['Playfair_Display'] block text-[2rem] lg:text-[2.2rem] font-bold text-[#C4A248] leading-none">
                    {stat.number}
                  </span>
                  <span className="block text-[0.72rem] text-white/45 uppercase tracking-[0.1em] mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ABOUT
        ════════════════════════════════════════ */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image side */}
              <div className="relative order-2 lg:order-1">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80"
                    alt="Tawedzerwa, founder of Tawedzerwa Construction, on a building site in KZN"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/60 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-6 bg-[#C4A248] text-[#0d1117] px-5 py-4 rounded-xl shadow-[0_12px_40px_rgba(196,162,72,0.35)] z-10">
                  <span className="font-['Playfair_Display'] block text-3xl font-black leading-none">
                    26
                  </span>
                  <span className="block text-[0.72rem] font-bold uppercase tracking-wide mt-0.5">
                    Year Old Founder
                  </span>
                </div>

                {/* Experience chip */}
                <div className="absolute top-5 -left-3 sm:-left-6 bg-[#0d1117] border border-white/10 text-white px-4 py-3 rounded-xl z-10 shadow-xl">
                  <span className="font-['Playfair_Display'] block text-xl font-bold text-[#C4A248] leading-none">
                    5+
                  </span>
                  <span className="block text-[0.72rem] text-white/55 uppercase tracking-wide mt-0.5">
                    Yrs Experience
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="order-1 lg:order-2">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C4A248] mb-3">
                  Our Story
                </p>
                <h2
                  id="about-heading"
                  className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0d1117] leading-tight mb-6"
                >
                  Built on Passion,
                  <br />
                  <span className="text-[#C4A248]">Driven by Purpose</span>
                </h2>

                <div className="space-y-4 text-[#4b5563] leading-[1.8] text-[0.97rem]">
                  <p>
                    My name is Tawedzerwa. Born in Zimbabwe with a dream bigger
                    than borders, I moved to KwaZulu-Natal with one goal: to
                    build something real — both literally and figuratively.
                  </p>
                  <p>
                    What started as hands-on work on local homes grew into a
                    trusted construction brand serving families and businesses
                    across Pietermaritzburg, Durban, and the greater KZN region.
                  </p>
                  <p>
                    At just 26, I lead a skilled team that takes pride in clean
                    finishes, honest timelines, and work that speaks for itself.
                    We don&apos;t just build structures — we create spaces
                    people are proud to call home.
                  </p>
                </div>

                {/* Values grid */}
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {[
                    {
                      icon: "🏆",
                      title: "Quality First",
                      sub: "No shortcuts, ever",
                    },
                    {
                      icon: "🤝",
                      title: "Client-Focused",
                      sub: "Your vision, our craft",
                    },
                    {
                      icon: "⏱️",
                      title: "On Time",
                      sub: "Deadlines respected",
                    },
                    {
                      icon: "💰",
                      title: "Fair Pricing",
                      sub: "Premium work, honest rates",
                    },
                  ].map((v) => (
                    <div
                      key={v.title}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#faf7f2] border border-transparent hover:border-[#C4A248]/20 transition-colors duration-200"
                    >
                      <span className="w-8 h-8 rounded-md bg-[#C4A248]/12 flex items-center justify-center text-base flex-shrink-0">
                        {v.icon}
                      </span>
                      <div>
                        <p className="text-[0.85rem] font-semibold text-[#0d1117]">
                          {v.title}
                        </p>
                        <p className="text-[0.77rem] text-[#9ca3af]">{v.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-8 bg-[#0d1117] hover:bg-[#1c2431] text-white font-semibold text-sm px-6 py-3.5 rounded-[8px] transition-all duration-200 group"
                >
                  Start Your Project
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SERVICES
        ════════════════════════════════════════ */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="bg-[#0d1117] py-20 sm:py-24 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            {/* Header */}
            <div className="max-w-2xl mb-12 sm:mb-14">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C4A248] mb-3">
                What We Do
              </p>
              <h2
                id="services-heading"
                className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white leading-tight mb-4"
              >
                Our <span className="text-[#C4A248]">Services</span>
              </h2>
              <p className="text-white/50 text-[0.97rem] leading-relaxed">
                From the ground up to the finishing touches — we handle every
                aspect of your build or renovation.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {SERVICES.map((service) => (
                <article
                  key={service.name}
                  className="group relative bg-white/[0.03] hover:bg-[#C4A248]/6 border border-white/7 hover:border-[#C4A248]/25 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default"
                >
                  {/* Bottom accent line */}
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#C4A248] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <span
                    className="text-2xl block mb-3"
                    role="img"
                    aria-label={service.name}
                  >
                    {service.icon}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-[1rem] font-semibold text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-[0.82rem] text-white/40 leading-relaxed">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            WHY CHOOSE US
        ════════════════════════════════════════ */}
        <section
          id="why"
          aria-labelledby="why-heading"
          className="bg-[#f2ede6] py-20 sm:py-24 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            {/* Header */}
            <div className="max-w-2xl mb-12 sm:mb-14">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C4A248] mb-3">
                Why We&apos;re Different
              </p>
              <h2
                id="why-heading"
                className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#0d1117] leading-tight mb-4"
              >
                Why Clients Choose <span className="text-[#C4A248]">Us</span>
              </h2>
              <p className="text-[#6b7280] text-[0.97rem] leading-relaxed">
                Five principles that guide every project we take on — without
                exception.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {WHY_CARDS.map((card, i) => (
                <article
                  key={card.title}
                  className="bg-white rounded-xl p-6 sm:p-7 border border-transparent hover:border-[#C4A248]/25 hover:shadow-[0_16px_40px_rgba(196,162,72,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C4A248]/10 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <span className="font-['Playfair_Display'] text-4xl font-black text-[#C4A248]/15 leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-[1.1rem] font-bold text-[#0d1117] mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-[0.88rem] text-[#6b7280] leading-[1.75]">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PROJECTS
        ════════════════════════════════════════ */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C4A248] mb-3">
                  Our Work
                </p>
                <h2
                  id="projects-heading"
                  className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#0d1117] leading-tight"
                >
                  Recent <span className="text-[#C4A248]">Projects</span>
                </h2>
              </div>
              <p className="text-[#6b7280] text-[0.92rem] max-w-sm leading-relaxed">
                A snapshot of builds and renovations we&apos;re proud to have
                delivered across KZN.
              </p>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className={`group relative overflow-hidden rounded-xl ${
                    project.span
                      ? "sm:col-span-2 aspect-[16/9]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.src}
                    alt={`${project.title} — Tawedzerwa Construction`}
                    fill
                    sizes={
                      project.span
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/85 via-[#0d1117]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#C4A248] block mb-1">
                      {project.label}
                    </span>
                    <span className="font-['Playfair_Display'] text-base font-semibold text-white">
                      {project.title}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIALS
        ════════════════════════════════════════ */}
        <section
          id="testimonials"
          aria-labelledby="testimonials-heading"
          className="bg-[#0d1117] py-20 sm:py-24 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            {/* Header */}
            <div className="max-w-xl mb-12 sm:mb-14">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C4A248] mb-3">
                What Clients Say
              </p>
              <h2
                id="testimonials-heading"
                className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white leading-tight"
              >
                Real <span className="text-[#C4A248]">Reviews</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {TESTIMONIALS.map((t) => (
                <article
                  key={t.name}
                  className="bg-white/[0.03] hover:bg-[#C4A248]/5 border border-white/7 hover:border-[#C4A248]/20 rounded-xl p-6 sm:p-7 transition-all duration-300"
                >
                  {/* Stars */}
                  <div
                    className="flex gap-0.5 mb-4"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-[#C4A248] fill-[#C4A248]"
                      />
                    ))}
                  </div>

                  <blockquote>
                    <p className="text-white/65 text-[0.92rem] leading-[1.8] italic mb-6">
                      &ldquo;{t.review}&rdquo;
                    </p>
                  </blockquote>

                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4A248] to-[#e8b45a] flex items-center justify-center text-[#0d1117] font-bold text-sm flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <cite className="not-italic font-semibold text-white text-[0.9rem] block">
                        {t.name}
                      </cite>
                      <span className="text-white/35 text-[0.78rem] flex items-center gap-1">
                        <MapPin size={10} /> {t.location}
                      </span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SERVICE AREAS
        ════════════════════════════════════════ */}
        <section
          id="areas"
          aria-labelledby="areas-heading"
          className="bg-[#faf7f2] py-20 sm:py-24 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text */}
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C4A248] mb-3">
                  Where We Work
                </p>
                <h2
                  id="areas-heading"
                  className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#0d1117] leading-tight mb-5"
                >
                  Serving All of{" "}
                  <span className="text-[#C4A248]">KwaZulu-Natal</span>
                </h2>
                <p className="text-[#6b7280] text-[0.97rem] leading-relaxed mb-8 max-w-md">
                  Based in Pietermaritzburg, we travel across KZN for
                  residential and commercial projects. No job is too far when
                  quality is on the line.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#0d1117] hover:bg-[#1c2431] text-white font-semibold text-sm px-6 py-3.5 rounded-[8px] transition-all duration-200 group"
                >
                  Check Your Area
                  <ChevronRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              {/* Area chips */}
              <div className="bg-white border border-[#C4A248]/12 rounded-2xl p-5 sm:p-6 flex flex-col gap-2.5">
                {SERVICE_AREAS.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#C4A248]/8 hover:translate-x-1.5 transition-all duration-200 cursor-default group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#C4A248] flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                    <span className="text-[0.95rem] font-medium text-[#0d1117]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONTACT
        ════════════════════════════════════════ */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-white py-20 sm:py-24 lg:py-28"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            {/* Header */}
            <div className="max-w-xl mb-12 sm:mb-14">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#C4A248] mb-3">
                Let&apos;s Build Together
              </p>
              <h2
                id="contact-heading"
                className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#0d1117] leading-tight"
              >
                Get a <span className="text-[#C4A248]">Free Quote</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
              {/* Info side */}
              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0d1117] mb-2">
                  Talk to Tawedzerwa
                </h3>
                <p className="text-[#6b7280] text-[0.92rem] leading-relaxed mb-7">
                  Ready to start your project? Reach out directly — we&apos;ll
                  discuss your needs and provide a free, no-obligation quote.
                </p>

                <ul
                  className="flex flex-col gap-4"
                  role="list"
                >
                  {[
                    {
                      icon: (
                        <Phone
                          size={14}
                          className="text-[#C4A248]"
                        />
                      ),
                      label: "Phone",
                      value: "+27 XXX XXX XXXX",
                      href: "tel:+27618838917",
                    },
                    {
                      icon: (
                        <MessageCircle
                          size={14}
                          className="text-[#C4A248]"
                        />
                      ),
                      label: "Email",
                      value: "info@tawedzerwaconstruction.co.za",
                      href: "mailto:info@tawedzerwaconstruction.co.za",
                    },
                    {
                      icon: (
                        <MapPin
                          size={14}
                          className="text-[#C4A248]"
                        />
                      ),
                      label: "Based In",
                      value: "Pietermaritzburg, KwaZulu-Natal",
                      href: undefined,
                    },
                  ].map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-3.5"
                    >
                      <span className="w-9 h-9 rounded-lg bg-[#C4A248]/10 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-[#9ca3af] mb-0.5">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[0.92rem] font-semibold text-[#0d1117] hover:text-[#C4A248] transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-[0.92rem] font-semibold text-[#0d1117]">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/27618838917"
                  className="inline-flex items-center gap-2 mt-7 bg-[#25d366] hover:bg-[#1ebe5d] text-white font-semibold text-sm px-5 py-3.5 rounded-[8px] transition-all duration-200 hover:shadow-[0_6px_20px_rgba(37,211,102,0.3)] hover:-translate-y-px"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Form side */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
