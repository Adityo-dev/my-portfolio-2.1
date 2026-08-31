export const PROJECTS = [
  {
    id: "EduNext",
    featured: true,
    category: "Full Stack",
    subcategory: "Education",
    year: "2026",
    role: "Full stack developer — architecture, frontend, API",
    title: "Fikiara — Online Learning Platform",
    description: "A full-stack learning platform where instructors publish structured courses and students track lesson-by-lesson progress.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "REST API"],
    links: { caseStudy: "/projects/EduNext", liveDemo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
    ],
    overview: "Fikiara is a course platform with three distinct roles — student, instructor and admin. Instructors build courses from modules and lessons, students enroll and work through them, and admins moderate the catalogue. It is the project where I designed the data model, the API surface and the frontend architecture end to end.",
    problem: "Small course creators were running lessons through scattered video links, spreadsheets and chat groups. There was no reliable enrollment record, no per-student progress, and no single place a learner could return to and know exactly where they left off.",
    solution: "I modelled courses as modules and lessons with an explicit progress record per student, then built a role-aware Next.js frontend on top of a typed REST API. Every screen renders from the same normalized data, so an instructor edit is immediately visible in the student view without duplicate state.",
    keyFeatures: [
      "Email and password authentication with hashed credentials and refresh sessions",
      "Role-based access for student, instructor and admin",
      "Course builder with modules, lessons and draft/publish states",
      "Per-lesson progress tracking and resume-where-you-left-off",
      "Instructor dashboard with enrollment and completion overview",
      "Protected routes and server-side authorization on every mutation",
      "Fully responsive layout from 320px upward"
    ],
    architecture: [
      { id: "01", title: "Next.js app", desc: "routing, server rendering for catalogue pages, client interactivity for the player" },
      { id: "02", title: "API layer", desc: "typed REST endpoints with request validation and role guards" },
      { id: "03", title: "Service layer", desc: "course, enrollment and progress logic kept out of route handlers" },
      { id: "04", title: "PostgreSQL", desc: "normalized schema for users, courses, modules, lessons and progress" }
    ],
    technologyMatrix: [
      { category: "FRONTEND", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "BACKEND", items: ["Node.js", "REST API", "JWT authentication", "Zod validation"] },
      { category: "DATA", items: ["PostgreSQL"] },
      { category: "TOOLING", items: ["Git", "GitHub", "Vercel"] }
    ],
    challenges: [
      {
        challenge: "Three roles needed to see the same course data with very different permissions, and my first pass duplicated fetching logic per role.",
        solution: "I moved authorization into a single guard in the API layer and shaped the response per role, so the frontend renders one component tree driven by permission flags instead of three near-identical screens."
      },
      {
        challenge: "Progress updates fired on every lesson interaction and made the player feel sluggish.",
        solution: "I batched progress writes behind a debounced mutation with optimistic UI, so the lesson list updates instantly while the request settles in the background."
      }
    ],
    results: [
      "A learner can resume any course in one click instead of hunting through links",
      "Instructors publish a structured course without touching a spreadsheet",
      "Course catalogue pages are server rendered, so they load fast and are indexable"
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
