// ============================================================
// projects.ts — Edit this file to update your projects
//
// Game-Boost is the featured project (first entry).
// Projects 01–04 are the GitHub project cards in the grid.
//
// For images, place screenshots in:
//   public/projects/game-boost/
//   public/projects/project-01/
//   etc.
// Then update the `images` array with the filenames.
// ============================================================

export interface Project {
  id: string;
  name: string;
  category: string;
  status: "Ongoing Production" | "Live" | "In Development" | "Completed" | "On Hold" | "Planned";
  shortDescription: string;
  overview: string;
  role: string;
  features: string[];
  technologies: string[];
  learned: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[]; // filenames from public/projects/<id>/
  featured: boolean;
}

export const projects: Project[] = [
  // ── FEATURED PROJECT ─────────────────────────────────────
  {
    id: "igmart",
    name: "IGMART",
    category: "Full-Stack Gaming Account & Asset Marketplace",
    status: "Ongoing Production",
    shortDescription:
      "A gaming marketplace platform in ongoing production and active development, featuring secure escrow payments, instant delivery, and multi-currency support.",
    overview:
      "IGMART (igmartstore.vercel.app) is an ongoing production gaming marketplace platform engineered for buying and selling verified gaming accounts, in-game assets, currency, and boosting services. Currently under active development with an accessible live preview, the platform focuses on solving trust and security in digital trades through escrow transaction protection, verified seller tiering, and instant delivery workflows.",
    role:
      "Sole creator and frontend developer — designing and building the entire application from UI/UX and responsive frontend architecture to game catalog browsing, search filtering, structured SEO schemas, and ongoing continuous deployment on Vercel.",
    features: [
      "Secure Escrow Payment Flow: Funds held safely until buyer inspects and approves account transfer",
      "Multi-Game Catalog: Dynamic search, filtering, and browse experience across gaming titles and account categories",
      "Instant Delivery Pipeline: Streamlined credential handoff for verified gaming accounts",
      "Multi-Currency Switcher: Real-time currency toggle between USD ($) and INR (₹)",
      "Seller Dashboard & Protection: Listing management, seller fee structures, and 24/7 dispute resolution",
      "Production SEO & Performance: OpenGraph cards, JSON-LD schemas (Organization, SearchAction), and Web Manifest",
    ],
    technologies: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Lucide Icons",
      "SEO & Structured Data",
      "Responsive UI",
    ],
    learned: [
      "Architecting peer-to-peer marketplace workflows and designing escrow state machines that build user trust",
      "Structuring complex catalogs with hierarchical filtering across accounts, items, currencies, and boosting",
      "Implementing production-grade Next.js App Router patterns with metadata optimization and fast page loading",
      "Managing live production deployment and continuous integration on Vercel",
    ],
    githubUrl: "[IGMART_GITHUB_URL]",
    liveUrl: "https://igmartstore.vercel.app",
    images: ["hero-space.png", "clash-of-clans.jpg", "pokemon-go.png", "free-fire.png"],
    featured: true,
  },

  // ── GITHUB PROJECTS ──────────────────────────────────────
  {
    id: "fluxprlabs",
    name: "FluxPR Labs",
    category: "Web Engineering & Growth Studio",
    status: "Live",
    shortDescription:
      "A high-performance digital studio platform engineered with Next.js 15, interactive 3D WebGL physics, and full-funnel conversion systems.",
    overview:
      "FluxPR Labs (fluxprlabs-online.vercel.app) is a production web application built for a modern web engineering and digital growth studio. The platform demonstrates sub-second page performance (<0.8s), an interactive 3D WebGL growth engine visualization, comprehensive service capabilities (Next.js development, Google Ads, Meta Ads, and CRO), and multi-channel client acquisition pipelines.",
    role:
      "Lead Full-Stack Developer & Designer — engineered the entire responsive Next.js 15 application, implemented interactive WebGL elements and smooth micro-animations, structured multi-tier service schemas, and integrated conversion tracking and client contact flows.",
    features: [
      "Sub-Second Performance: Next.js 15 architecture achieving Core Web Vitals 90+ and <0.8s initial loads",
      "Interactive 3D WebGL Engine: Custom interactive physics canvas demonstrating the 5-phase growth cycle",
      "Connected Growth Stack: Unified modules for BUILD (Engineering), ATTRACT (Paid Ads), and CONVERT (Retention & CRO)",
      "Interactive Services & Pricing: Comprehensive service catalog with deliverables, transparent pricing, and instant enquiry routing",
      "Direct Communication Integration: Integrated WhatsApp, calendar booking, and contact lead capture workflows",
      "Production SEO & Attribution: Schema.org ProfessionalService and Person markup with server-side attribution readiness",
    ],
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WebGL / Canvas",
      "Vercel",
      "Lucide Icons",
      "Schema.org / JSON-LD",
    ],
    learned: [
      "Engineering ultra-fast, responsive web interfaces with Next.js 15 and optimizing asset delivery for perfect performance scores",
      "Implementing WebGL interactive elements within modern React component lifecycles without sacrificing page speed",
      "Bridging the gap between software development and digital marketing systems (analytics, attribution, tracking)",
      "Deploying and managing commercial production applications on Vercel with custom domain routing",
    ],
    githubUrl: "[FLUXPRLABS_GITHUB_URL]",
    liveUrl: "https://fluxprlabs-online.vercel.app",
    images: ["ecom-case-study.jpg", "clinic-case-study.jpg", "d2c-case-study.jpg"],
    featured: false,
  },
  {
    id: "greater-doon",
    name: "Greater Doon Residency",
    category: "Real Estate & Plotted Development Platform",
    status: "Live",
    shortDescription:
      "A high-conversion real estate web platform with bilingual localization (English/Hindi), master plan exploration, and plot inquiry systems.",
    overview:
      "Greater Doon Residency (greater-doon-residency.vercel.app) is a production web platform built for a private residential plotted development in Bhagwanpur, Haridwar, Uttarakhand (by H.N. Corporate Private Limited). The platform showcases master layout plans, sector-wise plot dimensions, infrastructure amenities (30ft arterial road network, drainage, electricity, security), regional connectivity maps, and booking inquiry workflows.",
    role:
      "Frontend Developer & UI Engineer — developed the interactive web application, implemented bilingual language switching (English / Hindi), built responsive master plan and plot dimension showcases, and structured lead generation contact funnels.",
    features: [
      "Bilingual Support: Seamless dynamic toggle between English and Hindi for localized buyer demographics",
      "Interactive Master Plan: Detailed sector plotting, arterial road network (30ft roads), and green space layouts",
      "Plot Dimension & Amenity Breakdown: Clear categorization of residential plot sizes, utilities, and infrastructure",
      "Regional Connectivity Guide: Strategic location overview showing proximity to schools, industrial corridors, and transit hubs",
      "Lead & Booking Inquiries: Direct consultation and booking forms with PMAY eligibility assistance",
      "Production Performance: Fast client-side rendering with Vite, Tailwind CSS, and Vercel hosting",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Vercel",
      "Bilingual i18n",
      "Responsive UI",
    ],
    learned: [
      "Designing conversion-focused real estate landing architectures that clearly communicate spatial and infrastructural value",
      "Implementing efficient client-side internationalization (i18n) for dual-language English/Hindi user experiences",
      "Optimizing architectural renders and layout plans for fast mobile loading on slower cellular networks",
      "Structuring commercial lead capture forms to maximize visitor engagement and inquiry quality",
    ],
    githubUrl: "[GREATER_DOON_GITHUB_URL]",
    liveUrl: "https://greater-doon-residency.vercel.app",
    images: ["gate_render.png"],
    featured: false,
  },
  {
    id: "project-03",
    name: "[PROJECT NAME]",
    category: "[CATEGORY]",
    status: "Completed",
    shortDescription: "[Short description of what this project does and why you built it.]",
    overview:
      "[Full description of the project — what problem it solves, the context, and what it achieves.]",
    role: "[Describe your contribution — what you designed, built and maintained.]",
    features: [
      "[ADD FEATURE]",
      "[ADD FEATURE]",
    ],
    technologies: ["[ADD TECHNOLOGY]", "[ADD TECHNOLOGY]"],
    learned: [
      "[What did you learn from this project?]",
    ],
    githubUrl: "[PROJECT_03_GITHUB_URL]",
    liveUrl: undefined,
    images: [],
    featured: false,
  },
  {
    id: "project-04",
    name: "[PROJECT NAME]",
    category: "[CATEGORY]",
    status: "Completed",
    shortDescription: "[Short description of what this project does and why you built it.]",
    overview:
      "[Full description of the project — what problem it solves, the context, and what it achieves.]",
    role: "[Describe your contribution — what you designed, built and maintained.]",
    features: [
      "[ADD FEATURE]",
      "[ADD FEATURE]",
    ],
    technologies: ["[ADD TECHNOLOGY]", "[ADD TECHNOLOGY]"],
    learned: [
      "[What did you learn from this project?]",
    ],
    githubUrl: "[PROJECT_04_GITHUB_URL]",
    liveUrl: undefined,
    images: [],
    featured: false,
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const gameboostProject = featuredProject;
export const githubProjects = projects.filter((p) => !p.featured);

