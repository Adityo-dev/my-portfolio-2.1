export const PROJECTS = [
  {
    id: "edunext-lms-platform",
    featured: true,
    category: "Full Stack",
    subcategory: "Education",
    year: "2026",
    role: "Lead Full-Stack Web Developer — System Architecture, REST API Engine & UI Design",
    title: "EduNext — Next-Gen Full-Stack LMS & Skill Assessment Platform",
    description: "A production-ready enterprise EdTech ecosystem featuring dynamic course curriculums, interactive pass-mark quizzes, verified PDF certification, and role-based access control.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST API"],
    links: { 
      caseStudy: "/projects/edunext-lms-platform", 
      liveDemo: "https://edunext-six.vercel.app", 
      github: "https://github.com/amrito/edunext-lms" 
    },
    image: "/projects/edunext/edunext-figma-landing.png",
    images: [
      "/projects/edunext/edunext-full-landing.png",
      "/projects/edunext/edunext-hero-banner.png",
      "/projects/edunext/edunext-figma-landing.png",
      "/projects/edunext/edunext-top-courses.png",
      "/projects/edunext/edunext-instructors.png",
      "/projects/edunext/edunext-testimonials.png",
      "/projects/edunext/edunext-faq-section.png",
      "/projects/edunext/edunext-navigation.png",
    ],
    overview: "EduNext is a modern, high-converting EdTech platform engineered to bridge the gap between video learning, skill evaluation, and verified credential issuance. Built with Next.js App Router, Tailwind CSS, Node/Express, and MongoDB, it provides a seamless, scalable multi-role experience for students, instructors, and platform administrators.",
    problem: "Most legacy e-learning platforms suffer from clunky course creation interfaces, sluggish data fetching on high-volume listing pages, poor mobile responsiveness, and unverified completion metrics that allow users to skip assessments.",
    solution: "Developed a clean, Brandlyft-inspired lightweight UI powered by TipTap rich text rendering, dynamic server-side category pagination, and strict backend quiz validation workflows that unlock automated PDF certificates only upon scoring above required pass marks.",
    keyFeatures: [
      "Dynamic Top-Rated Filtering: Paginated API endpoint (/courses/top-rated) with category parameters and compound MongoDB indexing for sub-100ms querying.",
      "Interactive Evaluation Engine: Module-level MCQ quizzes with customizable pass marks, instant rationales, and automatic progress calculation.",
      "TipTap Rich Text Integration: Clean course description, requirements, and outcome formatting without bloated HTML markup.",
      "Multi-Role Dashboards: Distinct permission boundaries (RBAC) for students (learning progress & certificates), instructors (course creation & analytics), and admins (approvals & audit).",
      "Automated Credentialing: Dynamic, unique-ID-backed verified PDF certificate generation upon successful curriculum and quiz completion.",
      "Optimized Media Delivery: CDN-hosted video integration and Cloudinary asset optimization across responsive viewport breakpoints."
    ],
    architecture: [
      { id: "01", title: "Next.js 16 App Router", desc: "Server-side page rendering, metadata optimization, and fluid client interactive modules" },
      { id: "02", title: "Express.js REST Engine", desc: "JWT-secured API endpoints with Bcrypt password hashing and custom RBAC middleware" },
      { id: "03", title: "MongoDB & Mongoose ODM", desc: "Compound-indexed collections for courses, user progress schemas, and quiz evaluation logs" },
      { id: "04", title: "Cloudinary & CDN Pipeline", desc: "Optimized image and document asset delivery with minimal initial payload footprint" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["Next.js 16", "TypeScript", "Tailwind CSS", "Lucide React", "TipTap Editor", "Framer Motion"] },
      { category: "BACKEND", items: ["Node.js", "Express.js", "RESTful API", "JWT Auth", "Bcrypt", "RBAC Middleware"] },
      { category: "DATA", items: ["MongoDB", "Mongoose ODM", "Cloudinary SDK"] },
      { category: "TOOLING", items: ["Vercel", "Render", "Git", "Cloudflare CDN"] }
    ],
    challenges: [
      {
        challenge: "Fetching high volumes of top-rated courses caused massive database payloads and front-end rendering bottlenecks.",
        solution: "Implemented server-side pagination with query-driven limits, category indexing, and tie-breaking sorting (rating: -1, enrolledCount: -1) to deliver lightweight, isolated payloads."
      },
      {
        challenge: "Preventing course data tampering and unauthorized video/quiz access for non-enrolled students.",
        solution: "Enforced strict route-level JWT authentication and Mongoose pre-save middleware to validate user enrollment state prior to exposing lesson references and quiz engines."
      }
    ],
    results: [
      "95+ Lighthouse Performance Score with optimized asset pipelines and Next.js Server Components",
      "100% Type Safety with end-to-end TypeScript contracts between frontend schemas and REST API response models",
      "Sub-100ms API Latency with compound MongoDB indexing under simulated high-concurrency requests"
    ]
  },
  {
    id: "solenne-luxury-membership",
    featured: true,
    category: "Frontend",
    subcategory: "SaaS",
    year: "2026",
    role: "Frontend Engineer — UI Architecture, Interactive Map & Member Experience",
    title: "Solenne — Invitation-Only Global Lifestyle & Wellness Membership Platform",
    description: "An exclusive, invitation-only digital lifestyle membership web application connecting elite members to global luxury wellness, longevity, and culinary destinations across the UAE and worldwide.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "shadcn/ui", "NestJS", "Mapbox", "Prisma"],
    links: { 
      caseStudy: "/projects/solenne-luxury-membership", 
      liveDemo: "https://solenneuae.com", 
      github: "" 
    },
    image: "/projects/solenne/solenne-hero-landing.png",
    images: [
      "/projects/solenne/solenne-hero-landing.png",
      "/projects/solenne/solenne-partner-directory.png",
      "/projects/solenne/solenne-membership-pass.png",
      "/projects/solenne/solenne-interactive-map.png",
      "/projects/solenne/solenne-subscription-flow.png",
      "/projects/solenne/solenne-pillar-discovery.png"
    ],
    overview: "Solenne is an ultra-exclusive, invitation-only lifestyle membership platform built for discerning individuals seeking preferred rates and privileges across top-tier longevity clinics, high-performance movement studios, spa retreats, and fine dining destinations (including SIRO One Za'abeel, Guerlain Spa, and Dorchester Collection). The platform provides a secure digital membership card, interactive partner directory, and tiered privilege redemption.",
    problem: "High-end lifestyle concierge platforms often rely on fragmented physical cards or cluttered booking portals that detract from a luxury brand experience. The client needed a pixel-perfect, minimalist, and ultra-fast web application that provides frictionless digital membership management, interactive geolocation partner discovery, and secure annual subscription workflows.",
    solution: "Architected and built a bespoke, high-performance frontend using Next.js, TypeScript, Tailwind CSS, and Shadcn UI. Integrated interactive geolocation maps, smooth animated micro-interactions, category/location multi-filters, and an encrypted digital member pass interface designed for instant partner-side verification.",
    keyFeatures: [
      "Interactive Partner Privilege Network: Dynamic directory featuring 60+ luxury destinations with multi-dimensional filtering by Location (DIFC, Palm Jumeirah, Downtown, etc.), Activity (Cryotherapy, Contrast Therapy, Pilates, Dining), and Gender.",
      "Interactive Venue Mapping: Smooth map exploration allowing members to visually locate curated wellness clubs and longevity spaces across Dubai and the UAE.",
      "Digital Membership Card & Pass Verification: Encrypted, non-transferable digital membership UI for real-time validation at partner venues.",
      "Founding Circle Subscription Flow: Clean, frictionless annual membership onboarding and renewal engine.",
      "Curated Pillar Architecture: Dedicated discovery feeds categorised by Movement, Radiance, Recovery, Taste, and Escape.",
      "Pixel-Perfect Luxury Aesthetic: Editorial typography, bespoke spacing, and dark/sand luxury color palettes engineered with Shadcn UI and Tailwind CSS."
    ],
    architecture: [
      { id: "01", title: "Next.js 16 App Router", desc: "Bespoke editorial UI, SSR discovery feeds, and dynamic modal overlays" },
      { id: "02", title: "NestJS Backend API", desc: "JWT-secured membership verification engine and privilege redemption logic" },
      { id: "03", title: "Mapbox Geolocation", desc: "Smooth interactive venue mapping with debounced pin clusters and custom map styles" },
      { id: "04", title: "PostgreSQL & Prisma", desc: "Relational data model for luxury partner venues, member passes, and privilege tiers" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["Next.js 16", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide React", "Framer Motion"] },
      { category: "BACKEND", items: ["NestJS", "REST API", "JWT Authentication"] },
      { category: "DATA", items: ["PostgreSQL", "Prisma ORM"] },
      { category: "TOOLING", items: ["Vercel", "Git", "Mapbox SDK", "Google Maps API"] }
    ],
    challenges: [
      {
        challenge: "Maintaining smooth 60fps rendering while filtering dozens of venue nodes and rendering map pin clusters simultaneously across mobile viewports.",
        solution: "Implemented debounced state filtering, client-side memoization (useMemo), and lazy-loaded map canvas layers to eliminate UI stutter during fast location switching."
      },
      {
        challenge: "Designing an ultra-luxury, high-converting digital card interface that looks premium and prevents unauthorized screenshot sharing at partner desks.",
        solution: "Crafted a reactive digital pass component with real-time dynamic timestamping and watermarking, integrated into a clean Shadcn modal dialog."
      }
    ],
    results: [
      "98+ Performance & Accessibility Score: Exceptional mobile responsiveness and sub-second First Contentful Paint (FCP) across all luxury landing pages.",
      "Smooth Multi-Filtering Experience: Zero-latency instantaneous category switching across 60+ partner venues and wellness categories.",
      "High-Converting Membership Onboarding: Delivered a frictionless 3-step membership checkout experience for Founding Circle members."
    ]
  },
  {
    id: "xstore-modern-ecommerce",
    featured: true,
    category: "Full Stack",
    subcategory: "Retail",
    year: "2026",
    role: "Full Stack Developer — Frontend Architecture, State Management & API Integration",
    title: "XStore — Dynamic E-Commerce Storefront with Real-Time Cart & Multi-Filter Engine",
    description: "A blazing-fast, modern e-commerce web application featuring instantaneous category filtering, reactive global cart persistence, dynamic product showcases, and a streamlined checkout flow.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "Node.js", "Express.js"],
    links: { 
      caseStudy: "/projects/xstore-modern-ecommerce", 
      liveDemo: "https://xstore-flax.vercel.app", 
      github: "" 
    },
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1280&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1280&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200",
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200"
    ],
    overview: "XStore is a contemporary, conversion-focused e-commerce storefront engineered to deliver a seamless retail shopping experience. Built using modern frontend frameworks and responsive UI design, it features dynamic product catalogs, multi-attribute filtering, persistent sliding drawer cart management, and instant search capabilities with high performance across all mobile and desktop devices.",
    problem: "Traditional e-commerce platforms often struggle with sluggish page reloads during product filtering, state desynchronization between tabs when updating shopping carts, and heavy bundle sizes that degrade mobile conversion rates.",
    solution: "Architected a lightweight, modular single-page application using Next.js/React, TypeScript, and Tailwind CSS. Implemented an optimized client-side state store (Zustand/Redux) paired with LocalStorage persistence to ensure zero-latency cart updates and immediate multi-parameter filter execution without unnecessary server roundtrips.",
    keyFeatures: [
      "Instant Multi-Filter & Search Engine: Real-time product filtering by category, price ranges, brand, and rating without page reloads.",
      "Reactive Sliding Cart Drawer: Global state-managed shopping cart with instant quantity increments, subtotal calculation, coupon support, and local persistence.",
      "Product Detail View: High-resolution image galleries, variant selection (size/color), stock status indicators, and customer review modules.",
      "Dynamic Promo & Flash Deal Carousels: Engaging visual banners and responsive swipeable product carousels for promotional campaigns.",
      "Streamlined Checkout Flow: Multi-step, frictionless checkout interface with address validation, order review, and flexible payment gateway placeholders.",
      "Fully Mobile-First Responsive Design: Adaptive touch controls, optimized tap targets, and clean spacing engineered for optimal mobile commerce UX."
    ],
    architecture: [
      { id: "01", title: "Next.js 16 Storefront Engine", desc: "High performance product page rendering and dynamic client-side filtering" },
      { id: "02", title: "Zustand & Redux Store", desc: "Global reactive cart state with cross-tab LocalStorage synchronization" },
      { id: "03", title: "Express.js REST Engine", desc: "Product catalog queries, inventory updates, and order placement API endpoints" },
      { id: "04", title: "Optimized Media Pipeline", desc: "Next.js responsive image optimization with skeleton loading fallbacks" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["Next.js 16", "TypeScript", "Tailwind CSS", "Lucide React", "Framer Motion"] },
      { category: "STATE MANAGEMENT", items: ["Zustand", "Redux Toolkit", "LocalStorage Sync"] },
      { category: "BACKEND / API", items: ["Node.js", "Express.js", "RESTful Endpoints"] },
      { category: "TOOLING", items: ["Vercel", "Git", "Cloudinary"] }
    ],
    challenges: [
      {
        challenge: "Cart state inconsistency across multiple browser tabs and page refreshes.",
        solution: "Implemented persistent client storage hydration with cross-tab event listeners to synchronize cart item counts and pricing in real time."
      },
      {
        challenge: "UI lag and layout shifts when rendering large grids of high-resolution product thumbnails.",
        solution: "Implemented Next.js image optimization with priority loading on above-the-fold banners and skeleton loading placeholders during data fetching."
      }
    ],
    results: [
      "Sub-second Interaction Response: Zero perceived latency on cart modifications and search filtering.",
      "96+ Mobile Performance Rating: Minimal layout shift and optimized critical rendering paths on mobile browsers.",
      "100% Cart Synchronization: Completely eliminated cart data drops across page transitions and browser reloads."
    ]
  },
  {
    id: "nexus",
    featured: false,
    category: "Dashboard",
    subcategory: "Analytics",
    year: "2024",
    role: "Frontend Engineer",
    title: "Nexus Admin — Analytics & Role-Based Dashboard",
    description: "An admin dashboard with data tables, charts, permissions and audit-friendly activity views, built as a reusable foundation.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    links: { caseStudy: "/projects/nexus", liveDemo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2000"
    ],
    overview: "Nexus Admin provides enterprise teams with real-time analytics, user permission controls, and detailed activity logging in a clean interface.",
    problem: "Operational teams lacked unified visibility into user actions, requiring manual log analysis and multi-tool switching.",
    solution: "Designed a modular dashboard architecture using Recharts and Tailwind CSS with real-time data table filtering.",
    keyFeatures: [
      "Role-based permission management dashboard",
      "Interactive data charts and filtering options",
      "Exportable CSV/PDF audit reports"
    ],
    architecture: [
      { id: "01", title: "React frontend", desc: "Component driven analytics interface" },
      { id: "02", title: "Recharts Engine", desc: "High performance client-side charts" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["React", "TypeScript", "Tailwind CSS", "Recharts"] },
      { category: "TOOLING", items: ["Vite", "Git", "Vercel"] }
    ],
    challenges: [
      {
        challenge: "Large data tables caused re-render bottlenecks on client interactions.",
        solution: "Implemented virtualization and memoized cell renderers for smooth 60fps scrolling."
      }
    ],
    results: [
      "Reduced audit reporting time by 75%",
      "Single dashboard for all admin control requirements"
    ]
  },
  {
    id: "kravu",
    featured: false,
    category: "E-commerce",
    subcategory: "Retail",
    year: "2024",
    role: "Full Stack Developer",
    title: "Kravu Store — Modern E-commerce Experience",
    description: "A storefront covering catalogue browsing, cart, checkout and order history with a clean, conversion-focused product flow.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    links: { caseStudy: "/projects/kravu", liveDemo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000"
    ],
    overview: "Kravu Store is a modern e-commerce storefront designed for fast product discovery and seamless checkout experience.",
    problem: "High checkout drop-off rates due to slow page loads and complex form steps.",
    solution: "Built a Next.js App Router store with instant optimistic updates and streamlined one-page checkout.",
    keyFeatures: [
      "Instant search and category filters",
      "Cart drawer with persistent session storage",
      "Stripe payment gateway integration"
    ],
    architecture: [
      { id: "01", title: "Next.js App", desc: "Server rendered product catalogue" },
      { id: "02", title: "Stripe API", desc: "Secure payment processing" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "BACKEND", items: ["Node.js", "Stripe SDK"] }
    ],
    challenges: [
      {
        challenge: "Managing stock sync between storefront and backend inventory.",
        solution: "Used webhooks to instantly sync inventory state on order completion."
      }
    ],
    results: [
      "Sub-second page load times across catalog pages",
      "Conversion rate increased by 22%"
    ]
  },
  {
    id: "practi",
    featured: false,
    category: "Full Stack",
    subcategory: "SaaS",
    year: "2024",
    role: "Backend Engineer",
    title: "Practi — Practitioner Booking SaaS",
    description: "A scheduling application where practitioners manage availability and clients book confirmed slots without back-and-forth messaging.",
    tags: ["Next.js", "TypeScript", "Node.js"],
    links: { caseStudy: "/projects/practi", liveDemo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
    ],
    overview: "Practi automates appointment booking for independent consultants and practitioners.",
    problem: "Manual scheduling resulted in double bookings and wasted time communicating availability.",
    solution: "Developed an automated calendar slot generator with timezone detection and instant email confirmations.",
    keyFeatures: [
      "Customizable availability windows",
      "Timezone auto-detection",
      "Automated calendar sync & reminders"
    ],
    architecture: [
      { id: "01", title: "Booking Engine", desc: "Conflict-free slot calculation logic" }
    ],
    technologyMatrix: [
      { category: "STACK", items: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"] }
    ],
    challenges: [
      {
        challenge: "Handling concurrent booking requests for the same time slot.",
        solution: "Implemented database row locking during checkout creation."
      }
    ],
    results: [
      "Zero double-booking incidents reported",
      "Saved practitioners ~5 hours per week"
    ]
  },
  {
    id: "aura",
    featured: false,
    category: "Business",
    subcategory: "Marketing",
    year: "2024",
    role: "Frontend Developer",
    title: "Aura Interiors — Studio Business Website",
    description: "A fast, editorial marketing site for a design studio, built for lead capture and strong search visibility.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: { caseStudy: "/projects/aura", liveDemo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000"
    ],
    overview: "Aura Interiors showcases interior architecture portfolios through smooth visual motion and high-contrast typography.",
    problem: "Generic template sites failed to convey the premium, editorial feel of the design agency.",
    solution: "Crafted a custom Next.js website with subtle Framer Motion scroll animations and SEO metadata.",
    keyFeatures: [
      "Fluid portfolio gallery with filter options",
      "SEO optimized landing pages",
      "Contact form with automated lead routing"
    ],
    architecture: [
      { id: "01", title: "Editorial Engine", desc: "Optimized image and motion rendering" }
    ],
    technologyMatrix: [
      { category: "STACK", items: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] }
    ],
    challenges: [
      {
        challenge: "High-resolution photography slowed down mobile initial paint.",
        solution: "Used responsive image srcsets and blur-up placeholders."
      }
    ],
    results: [
      "Achieved 98 Performance score on Google Lighthouse",
      "30% increase in inbound client inquiries"
    ]
  },
  {
    id: "apilab",
    featured: false,
    category: "Frontend",
    subcategory: "Tools",
    year: "2024",
    role: "Full Stack Developer",
    title: "API Lab — Request & Response Playground",
    description: "An experimental in-browser client for exploring REST endpoints, inspecting responses and saving request collections.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    links: { caseStudy: "/projects/apilab", liveDemo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2000"
    ],
    overview: "API Lab allows developers to quickly compose, send, and inspect HTTP requests directly in the browser.",
    problem: "Switching to desktop API clients broke developer workflow during rapid UI prototype testing.",
    solution: "Built a fast web-based API testing tool with JSON syntax highlighting and local storage history.",
    keyFeatures: [
      "Custom header and body payload editor",
      "Response time and status code inspector",
      "Collection save and export capabilities"
    ],
    architecture: [
      { id: "01", title: "Client Fetch Engine", desc: "CORS-aware API requester" }
    ],
    technologyMatrix: [
      { category: "STACK", items: ["React", "TypeScript", "Tailwind CSS"] }
    ],
    challenges: [
      {
        challenge: "Rendering massive JSON responses without UI freeze.",
        solution: "Implemented lazy tree view rendering for large JSON payloads."
      }
    ],
    results: [
      "Instant response inspection with zero setup",
      "Used daily for API prototyping"
    ]
  },
];
