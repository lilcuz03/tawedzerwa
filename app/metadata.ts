import type { Metadata } from "next";

// ── Base Config ───────────────────────────────────────────────
const BASE_URL = "https://www.tawedzerwaconstruction.co.za";
const SITE_NAME = "Tawedzerwa Construction";
const DEFAULT_TITLE =
  "Tawedzerwa Construction | Premium Builders in Pietermaritzburg & KZN";
const DEFAULT_DESCRIPTION =
  "Professional construction, home renovations, roofing, tiling, plumbing and more across Pietermaritzburg, Durban and KwaZulu-Natal. Quality workmanship. Honest pricing. On-time delivery.";
const OG_IMAGE = "/og-image.jpg";

// ── Site-wide Metadata ────────────────────────────────────────
export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: DEFAULT_DESCRIPTION,

  keywords: [
    "construction company Pietermaritzburg",
    "builders Durban",
    "house renovations KwaZulu-Natal",
    "construction services South Africa",
    "home renovations PMB",
    "roofing contractors KZN",
    "tiling services Pietermaritzburg",
    "plumbing Durban",
    "bricklaying KwaZulu-Natal",
    "painting contractors PMB",
    "paving Pietermaritzburg",
    "building contractors KZN",
    "residential construction South Africa",
    "general maintenance KZN",
    "property improvements Pietermaritzburg",
    "window installation Durban",
    "door installation KwaZulu-Natal",
  ],

  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // ── Open Graph ──────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premium Builders in KwaZulu-Natal`,
    description:
      "House construction, renovations, roofing, tiling & more across Pietermaritzburg, Durban and greater KZN. Get your free quote today.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Premium Builders in KwaZulu-Natal`,
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X ─────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Premium Builders in KZN`,
    description:
      "Professional construction & renovation services across Pietermaritzburg, Durban and KwaZulu-Natal.",
    images: [OG_IMAGE],
  },

  // ── Robots ──────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonical ───────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Icons ───────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg" }],
  },

  // ── Manifest ────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── Verification (add keys when ready) ──────────────────────
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_KEY",
    // yandex: "YOUR_YANDEX_KEY",
    // bing: "YOUR_BING_WEBMASTER_KEY",
  },

  // ── Other ───────────────────────────────────────────────────
  category: "construction",
};

// ── Page-level Metadata Helpers ───────────────────────────────
// Use these exports on individual pages via: export const metadata = pageMetadata.about
export const pageMetadata = {
  home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    alternates: { canonical: BASE_URL },
  } satisfies Metadata,

  about: {
    title: "About Us | Tawedzerwa Construction",
    description:
      "Meet Tawedzerwa — a 26-year-old founder based in Pietermaritzburg, KZN, building quality homes and renovations across KwaZulu-Natal with skill, passion, and integrity.",
    alternates: { canonical: `${BASE_URL}/about` },
  } satisfies Metadata,

  services: {
    title: "Our Services | Construction & Renovations KZN",
    description:
      "Explore our full range of services: house construction, renovations, roofing, tiling, plumbing, painting, paving and more — serving Pietermaritzburg, Durban and KwaZulu-Natal.",
    alternates: { canonical: `${BASE_URL}/services` },
  } satisfies Metadata,

  projects: {
    title: "Recent Projects | Tawedzerwa Construction",
    description:
      "Browse our portfolio of completed builds, renovations, roofing, tiling and paving projects across KwaZulu-Natal. See the quality of our workmanship.",
    alternates: { canonical: `${BASE_URL}/projects` },
  } satisfies Metadata,

  testimonials: {
    title: "Client Testimonials | Tawedzerwa Construction",
    description:
      "Read what our clients across Pietermaritzburg, Durban and KZN say about our construction and renovation services. Real reviews. Real results.",
    alternates: { canonical: `${BASE_URL}/testimonials` },
  } satisfies Metadata,

  faq: {
    title: "FAQ | Tawedzerwa Construction",
    description:
      "Frequently asked questions about our construction and renovation services, pricing, timelines and service areas in KwaZulu-Natal.",
    alternates: { canonical: `${BASE_URL}/faq` },
  } satisfies Metadata,

  blog: {
    title: "Blog | Construction Tips & News",
    description:
      "Construction tips, renovation guides, project spotlights and industry news from the team at Tawedzerwa Construction in KwaZulu-Natal.",
    alternates: { canonical: `${BASE_URL}/blog` },
  } satisfies Metadata,

  contact: {
    title: "Contact Us | Free Quote — Tawedzerwa Construction",
    description:
      "Get in touch with Tawedzerwa Construction for a free, no-obligation quote. Serving Pietermaritzburg, Durban and greater KwaZulu-Natal.",
    alternates: { canonical: `${BASE_URL}/contact` },
  } satisfies Metadata,
} as const;

// ── Local Business JSON-LD Schema ─────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE_URL,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: BASE_URL,
  telephone: "+27XXXXXXXXX",
  email: "info@tawedzerwaconstruction.co.za",
  foundingDate: "2019",

  founder: {
    "@type": "Person",
    name: "Tawedzerwa",
    jobTitle: "Founder & Lead Builder",
    nationality: "Zimbabwean",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pietermaritzburg",
      addressRegion: "KwaZulu-Natal",
      addressCountry: "ZA",
    },
  },

  address: {
    "@type": "PostalAddress",
    addressLocality: "Pietermaritzburg",
    addressRegion: "KwaZulu-Natal",
    addressCountry: "ZA",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: -29.6006,
    longitude: 30.3794,
  },

  image: `${BASE_URL}${OG_IMAGE}`,
  logo: `${BASE_URL}/logo.png`,

  areaServed: [
    { "@type": "City", name: "Pietermaritzburg" },
    { "@type": "City", name: "Durban" },
    { "@type": "City", name: "Ballito" },
    { "@type": "City", name: "Umhlanga" },
    { "@type": "City", name: "Tongaat" },
    { "@type": "City", name: "Howick" },
    { "@type": "City", name: "Hammarsdale" },
    { "@type": "AdministrativeArea", name: "KwaZulu-Natal" },
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction & Renovation Services",
    itemListElement: [
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
    ].map((service, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: service,
        provider: { "@type": "LocalBusiness", name: SITE_NAME },
      },
    })),
  },

  priceRange: "$$",

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "47",
  },

  sameAs: [
    "https://www.facebook.com/tawedzerwaconstruction",
    "https://www.instagram.com/tawedzerwaconstruction",
    "https://wa.me/27XXXXXXXXX",
  ],
} as const;

// ── Breadcrumb Schema Helper ──────────────────────────────────
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── FAQ Schema Helper ─────────────────────────────────────────
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
