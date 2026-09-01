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
    featured: false,
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
    image: "/projects/solenne/solenne-hero-cover.png",
    images: [
      "/projects/solenne/solenne-hero-cover.png",
      "/projects/solenne/solenne-partner-directory.png",
      "/projects/solenne/solenne-interactive-map.png",
      "/projects/solenne/solenne-membership-pass.png",
      "/projects/solenne/solenne-subscription-flow.png",
      "/projects/solenne/solenne-hero-landing.png"
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
    featured: false,
    category: "Full Stack",
    subcategory: "E-commerce",
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
    image: "/projects/xstore/xstore-responsive-showcase.png",
    images: [
      "/projects/xstore/xstore-responsive-showcase.png",
      "/projects/xstore/xstore-product-catalog.png",
      "/projects/xstore/xstore-product-details.png",
      "/projects/xstore/xstore-cart-drawer.png",
      "/projects/xstore/xstore-full-storefront.png"
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
    id: "dinisoft-hosting-landing",
    featured: false,
    category: "Frontend",
    subcategory: "Business",
    year: "2025",
    role: "Frontend Developer — Landing Page Architecture, Mega-Menu Navigation & UI Layouts",
    title: "Dinisoft — Modern Cloud Hosting & Web Infrastructure Landing Experience",
    description: "A high-converting, responsive web hosting and IT infrastructure storefront featuring dynamic pricing matrixes, interactive mega-navigation, domain lookup interfaces, and modern layout design.",
    tags: ["React", "Next.js 16", "TypeScript", "Tailwind CSS", "Lucide Icons", "Mega Menu"],
    links: { 
      caseStudy: "/projects/dinisoft-hosting-landing", 
      liveDemo: "https://dinisoftbd.com", 
      github: "https://github.com/Adityo-dev/dinisoftbd" 
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1280&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1280&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200"
    ],
    overview: "Dinisoft is a major web hosting and cloud infrastructure provider in Bangladesh, offering BDIX & global shared hosting, managed VPS, dedicated enterprise servers, and IT solutions. Developed a high-converting, fully responsive landing interface featuring multi-tiered hosting plan comparisons, an interactive domain search hero, and a multi-level mega-menu navigation bar.",
    problem: "Complex hosting platforms with broad service catalogs (Shared, VPS, Dedicated, BDIX, SMS, Business Email) often struggle with navigation clutter, slow mobile rendering, and overwhelming pricing tables that confuse potential customers.",
    solution: "Redesigned and built a modern, responsive frontend architecture. Engineered an intuitive multi-column mega navbar with categorized service pathways, structured multi-tier hosting pricing grids with toggleable duration/locations, and a comprehensive footer hub for technical documentation, support, and SLA policies.",
    keyFeatures: [
      "Multi-Tier Mega Navbar: Responsive dropdown navigation categorizing dozens of server services (BDIX/USA/Singapore Shared Hosting, VPS, Dedicated Servers, Business Email, and SMS).",
      "Hero Domain Search Bar: Clean and prominent domain registration / TLD search input interface designed for high-conversion onboarding.",
      "Hosting Pricing & Spec Comparison Matrix: Clear pricing grids showcasing disk allocations (SSD NVMe), bandwidth, cPanel access, and 99.9% uptime badges.",
      "Trust Badges & Feature Callouts: Visual highlight blocks emphasizing 24/7 technical support, 30-day money-back guarantee, and DDoS protection metrics.",
      "Structured Multi-Column Footer: Modular footer architecture organizing legal agreements, terms of service, payment methods, and contact channels.",
      "Mobile-First Responsive Layout: Smooth collapsible mobile drawer navigation ensuring effortless browsing across tablet and smartphone viewports."
    ],
    architecture: [
      { id: "01", title: "React / Next.js 16 Landing Engine", desc: "Fast-loading static and dynamic page components for cloud services" },
      { id: "02", title: "Mega-Menu Component", desc: "Categorized multi-column navigation menu with debounced hover handling" },
      { id: "03", title: "Pricing Grid Engine", desc: "Interactive billing cycle toggles and server specification breakdown tables" },
      { id: "04", title: "Responsive Layout Shell", desc: "Mobile drawer, accessible modals, and sticky header integration" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["React", "Next.js 16", "TypeScript", "Tailwind CSS", "Lucide Icons"] },
      { category: "RESPONSIVE & UI", items: ["Mobile Hamburger Drawer", "Mega Menu Architecture", "Accessible Dialogs"] },
      { category: "TOOLING & DEPLOYMENT", items: ["Git", "cPanel Deployment", "Cloud Hosting"] }
    ],
    challenges: [
      {
        challenge: "Organizing massive multi-level sub-navigation menus without causing layout overflow or hover flickering on various screen resolutions.",
        solution: "Structured accessible, debounced hover/focus states with strict CSS z-index hierarchies and viewport boundary checks for submenus."
      },
      {
        challenge: "Making dense technical hosting specs readable and engaging on small mobile screens.",
        solution: "Designed collapsible accordions and swipeable pricing cards with clear visual hierarchy and high-contrast call-to-action buttons."
      }
    ],
    results: [
      "95+ Mobile Usability Score: Achieved fluid navigation and zero horizontal overflow across all major mobile browsers.",
      "Enhanced User Journey: Reduced navigation clicks to primary hosting plans through structured mega-menu categorization.",
      "Sub-second Landing Render: Lightweight, optimized assets and clean CSS structure for minimal initial bundle payload."
    ]
  },
  {
    id: "xtra-vision-dynamic-platform",
    featured: false,
    category: "Full Stack",
    subcategory: "Retail",
    year: "2026",
    role: "Full Stack Frontend Engineer — Dynamic CMS Architecture, UI & REST API Integration",
    title: "Xtra-Vision — Enterprise Storefront with 80% Content-Managed Admin Dashboard",
    description: "A robust Irish entertainment and retail platform featuring a high-performance storefront and a bespoke admin dashboard allowing 80% of landing text, media, banners, and categories to be modified dynamically.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Axios", "Zod", "REST API"],
    links: { 
      caseStudy: "/projects/xtra-vision-dynamic-platform", 
      liveDemo: "https://xtra-vision.ie", 
      github: "" 
    },
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1280&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1280&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
    ],
    overview: "Xtra-Vision is a recognized retail and digital entertainment brand in Ireland. Built a fully responsive web storefront coupled with a powerful administrative management portal that gives non-technical administrators direct real-time control over 70%–80% of landing page hero banners, product promo blocks, category highlights, and editorial copy.",
    problem: "Frequent marketing updates and promotional campaign changes required developer intervention for minor text and image revisions, causing operational delays and high maintenance overhead.",
    solution: "Engineered a decoupled, dynamic frontend architecture with Next.js/React and Tailwind CSS connected to backend REST APIs. Built a granular admin dashboard where admins can update home sections, banner URLs, promo titles, and media assets on the fly with instant live storefront reflection.",
    keyFeatures: [
      "80% Dynamic Content Engine: Real-time management of hero banners, promo copy, promotional strips, and footer details from the admin panel.",
      "Admin Management Dashboard: Secure admin portal for media uploads, text updates, category curation, and promotional scheduling.",
      "Product & Rental Catalog UI: High-converting, categorized catalog showcase with responsive image galleries and availability badges.",
      "Optimized Media Delivery: CDN-cached asset pipeline delivering instantaneous image updates without degrading Core Web Vitals.",
      "Dynamic Navigation & Footer Sync: Navigation routes and footer policies update automatically based on backend configurations."
    ],
    architecture: [
      { id: "01", title: "Next.js Storefront", desc: "High performance client rendering with ISR tag revalidation for dynamic CMS edits" },
      { id: "02", title: "Admin Portal Shell", desc: "Granular administrative dashboard for hero banners, promo copy, and category management" },
      { id: "03", title: "Zod & Form Engine", desc: "Type-safe validation schemas for dynamic content mutations" },
      { id: "04", title: "Cloudinary / AWS Pipeline", desc: "CDN-cached media management pipeline with instant asset optimization" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React", "Axios"] },
      { category: "DASHBOARD & STATE", items: ["React Hook Form", "Zod Validation", "Context API", "Zustand"] },
      { category: "API & STORAGE", items: ["RESTful API Integration", "Cloudinary", "AWS S3 Pipeline"] },
      { category: "TOOLING", items: ["Vercel", "Git"] }
    ],
    challenges: [
      {
        challenge: "Ensuring that frequent admin text/image mutations reflect instantly without breaking complex CSS grid layouts or triggering slow SSR revalidation.",
        solution: "Designed resilient, fluid CSS layouts with fallback content states and on-demand ISR (Incremental Static Regeneration) tag revalidation."
      }
    ],
    results: [
      "80% Reduction in Maintenance Time: Marketing teams independently deploy promotional copy and banners without engineering support.",
      "100% Dynamic Landing Sections: Zero hardcoded strings across primary promotional sections."
    ]
  },
  {
    id: "transform-to-liberation",
    featured: false,
    category: "Full Stack",
    subcategory: "Healthcare",
    year: "2025",
    role: "Frontend & Dashboard Engineer — End-to-End UI, API Integration & Booking Flow",
    title: "Transform To Liberation — Wellness Coaching, Booking & Event Hub with Admin Portal",
    description: "A transformative wellness and life coaching platform featuring client onboarding, workshop event schedules, consultation booking, and a full-featured admin management panel.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "JWT Auth", "REST API"],
    links: { 
      caseStudy: "/projects/transform-to-liberation", 
      liveDemo: "https://www.transformtoliberation.com", 
      github: "" 
    },
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1280&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1280&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
    ],
    overview: "Transform To Liberation is an empowering personal development, wellness coaching, and workshop platform. Developed both the public-facing brand website and the private administrative dashboard, handling consultation appointments, event calendars, client testimonials, and full-stack REST API communication.",
    problem: "The client needed a serene, trustworthy brand presence combined with automated session bookings and an intuitive backend dashboard to manage client applications, live workshop rosters, and blog content without technical friction.",
    solution: "Delivered a responsive web application featuring custom booking funnels, interactive event schedules, and testimonial sliders. Built an administrative dashboard enabling effortless event creation, booking status management, and inquiry tracking via RESTful APIs.",
    keyFeatures: [
      "Interactive Booking & Consultation Flow: Multi-step inquiry and discovery session scheduling interface with form validation.",
      "Workshop & Event Schedule Manager: Dynamic calendar listing upcoming group retreats, masterclasses, and digital workshops.",
      "Full-Featured Admin Dashboard: Real-time management of workshop listings, client booking requests, and media galleries.",
      "Testimonials & Transformation Stories: High-converting video/text story modules highlighting client success milestones.",
      "Brand-Focused UI/UX: Warm, earthy aesthetics with smooth micro-interactions built with Tailwind CSS and Framer Motion."
    ],
    architecture: [
      { id: "01", title: "Next.js Web Engine", desc: "Serene client-facing portal with smooth page transitions" },
      { id: "02", title: "Booking Funnel Logic", desc: "Multi-step inquiry routing with client-side form validation" },
      { id: "03", title: "Admin Management Portal", desc: "Real-time administrative control over workshops, bookings, and inquiries" },
      { id: "04", title: "REST API Integration", desc: "JWT-authenticated API routes for calendar sync and client record updates" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "DASHBOARD & FORMS", items: ["React Hook Form", "REST API Integration", "JWT Auth"] },
      { category: "TOOLING & DEPLOYMENT", items: ["Vercel", "Git"] }
    ],
    challenges: [
      {
        challenge: "Managing appointment state and form validation across multi-step consultation booking funnels on mobile devices.",
        solution: "Implemented modular state machines and client-side Zod validation schemas for error-free multi-step form submissions."
      }
    ],
    results: [
      "Streamlined Booking Operations: Automated consultation routing and inquiry tracking from a single dashboard.",
      "98+ Mobile Accessibility: Warm, accessible typography and touch-optimized navigation across all devices."
    ]
  },
  {
    id: "knowmyslots-analytics",
    featured: false,
    category: "Frontend",
    subcategory: "Analytics",
    year: "2026",
    role: "Frontend Developer — Pixel-Perfect Figma-to-React Conversion & State Logic",
    title: "KnowMySlots — High-Fidelity Interactive Slot Analytics Platform (Figma to React)",
    description: "A pixel-perfect, highly responsive gaming and slot statistics web application converted from complex Figma designs into clean, modular React and Tailwind CSS components.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Lucide React", "Figma Conversion"],
    links: { 
      caseStudy: "/projects/knowmyslots-analytics", 
      liveDemo: "https://knowmyslots.vercel.app", 
      github: "" 
    },
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1280&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1280&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200"
    ],
    overview: "KnowMySlots is an interactive gaming and slot machine metrics platform designed to provide players with RTP (Return to Player) data, volatility ratings, game reviews, and provider breakdowns. Executed a 100% pixel-perfect conversion from detailed Figma design specifications into a modern React application.",
    problem: "The client possessed intricate, high-contrast dark-mode Figma mockups featuring detailed data tables, slot cards, and complex responsive layouts that needed precise implementation without UI distortion or performance lag.",
    solution: "Converted all UI views into clean, modular React components using Tailwind CSS and TypeScript. Built reusable slot card grids, interactive filter components, search inputs, and responsive layout structures matching the original design system down to the exact pixel.",
    keyFeatures: [
      "Pixel-Perfect Figma Conversion: 1:1 reproduction of complex dark-theme designs, typography, gradients, and custom slot card borders.",
      "Interactive Slot Directory UI: Modular card layout showcasing slot game thumbnails, volatility badges, RTP percentages, and provider tags.",
      "Client-Side Filtering & Search: Instant keyword search and provider dropdown filters for frictionless game discovery.",
      "Responsive Data Grids: Fluid responsive grid system adapting flawlessly from mobile viewports to ultra-wide desktop monitors.",
      "Clean Component Architecture: Decoupled, reusable UI primitives allowing easy future API integration."
    ],
    architecture: [
      { id: "01", title: "React SPA Architecture", desc: "Modular component layout with optimized state handlers" },
      { id: "02", title: "Tailwind Design Token System", desc: "Custom theme extensions for high-contrast dark-mode gaming aesthetics" },
      { id: "03", title: "Client-Side Search Engine", desc: "Real-time slot filtering by provider, volatility rating, and RTP percentage" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["React.js", "TypeScript", "Tailwind CSS", "Lucide React"] },
      { category: "DESIGN & SPEC", items: ["Figma Design System", "Pixel-Perfect Conversion"] },
      { category: "TOOLING & DEPLOYMENT", items: ["Vercel", "Git"] }
    ],
    challenges: [
      {
        challenge: "Translating complex dark-mode glowing border effects and dense badge layouts from Figma into responsive Tailwind utility classes.",
        solution: "Built reusable Tailwind component abstractions and custom gradient utilities that maintain performance and visual fidelity across all screen sizes."
      }
    ],
    results: [
      "100% Design Accuracy: Delivered a 1:1 pixel-perfect match to the client's Figma mockups on first review.",
      "Sub-second Client-Side Navigation: Lightweight bundle size ensuring near-instant page transitions on Vercel edge deployment."
    ]
  }
];
