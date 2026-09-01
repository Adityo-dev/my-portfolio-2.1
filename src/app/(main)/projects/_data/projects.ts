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
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST API"],
    links: { 
      caseStudy: "/projects/edunext-lms-platform", 
      liveDemo: "https://edunext-six.vercel.app", 
      github: "https://github.com/amrito/edunext-lms" 
    },
    image: "/projects/edunext/figma-to-nextjs-pixel-accurate-landing-page.png",
    images: [
      "/projects/edunext/full.png",
      "/projects/edunext/hero.png",
      "/projects/edunext/figma-to-nextjs-pixel-accurate-landing-page.png",
      "/projects/edunext/361ce697-ff65-4e0c-a01c-75f82d5063f4.png",
      "/projects/edunext/428aba94-e1ac-44b5-9502-a4c8d56b7532.png",
      "/projects/edunext/73594bf3-c388-4d29-9eab-67f3fa7e38df.png",
      "/projects/edunext/d18a0929-a17d-4ce0-a402-45199fe02eb6.png",
      "/projects/edunext/d5fc6885-e776-4131-afbb-cd934b1e661b.png",
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
      { id: "01", title: "Next.js 15 App Router", desc: "Server-side page rendering, metadata optimization, and fluid client interactive modules" },
      { id: "02", title: "Express.js REST Engine", desc: "JWT-secured API endpoints with Bcrypt password hashing and custom RBAC middleware" },
      { id: "03", title: "MongoDB & Mongoose ODM", desc: "Compound-indexed collections for courses, user progress schemas, and quiz evaluation logs" },
      { id: "04", title: "Cloudinary & CDN Pipeline", desc: "Optimized image and document asset delivery with minimal initial payload footprint" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["Next.js 15", "TypeScript", "Tailwind CSS", "Lucide React", "TipTap Editor", "Framer Motion"] },
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
