import {
  Award,
  BrainCog,
  BriefcaseBusiness,
  Code2,
  Github,
  Instagram,
  Home,
  Linkedin,
  Mail,
  Sparkles,
  User,
} from "lucide-react";

export const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: BrainCog },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

export const HERO = {
  name: "Demo Candidate",
  role: "Full Stack Engineer",
  tagline:
    "Building polished demo experiences that show how fast, reliable products come together.",
  blurb:
    "This profile uses placeholder data so the focus stays on the work and how we can collaborate.",
  location: "Remote / Flexible",
};

export const ABOUT = {
  summary:
    "Placeholder profile crafted for demos—highlighting process, thinking, and delivery without personal details.",
  personal: [
    { label: "Name", value: "Demo Candidate" },
    { label: "Location", value: "Remote" },
    { label: "Experience", value: "5+ Years" },
    { label: "Email", value: "demo@example.com" },
    { label: "Phone", value: "+00 00000 00000" },
    { label: "Current Role", value: "Consulting Engineer" },
  ],
  highlights: [
    "Full Stack Web Development",
    "React & Next.js",
    "TypeScript & JavaScript",
    "API Design & Integration",
    "Database Design & Data Modeling",
    "UI/UX Collaboration",
  ],
};

export const EDUCATION = [
  {
    school: "Example University",
    degree: "B.Tech, Computer Science (Demo)",
    period: "2019",
    location: "Remote Campus",
    detail: "Graduated with honors; focus on scalable systems.",
  },
  {
    school: "Demo Institute of Technology",
    degree: "Professional Certification, Product Engineering",
    period: "2020",
    location: "Online",
    detail: "Capstone on building reliable web products.",
  },
  {
    school: "Continuing Education",
    degree: "Workshops & Bootcamps",
    period: "Ongoing",
    location: "Remote",
    detail: "Regularly upskilling on cloud, testing, and developer experience.",
  },
] as const;

export const EXPERIENCE = [
  {
    company: "Acme Health (Demo)",
    role: "Product Engineer",
    period: "2024 - Present",
    location: "Remote",
    summary:
      "Builds demo-ready healthcare workflows with secure data seeding, highlighting reliability and speed.",
    bullets: [
      "Prototyped claims and billing flows with Next.js and Supabase to showcase integration patterns.",
      "Created reusable UI primitives to accelerate future proof-of-concepts across verticals.",
      "Automated demo data refreshes so client walkthroughs always start from a clean, believable state.",
    ],
  },
  {
    company: "Pixel Labs (Demo)",
    role: "Full Stack Developer",
    period: "2022 - 2024",
    location: "Remote",
    summary:
      "Delivered marketing and commerce proof-of-concepts with a focus on measurable outcomes.",
    bullets: [
      "Shipped multi-tenant landing pages with A/B testing hooks for quick iteration.",
      "Integrated REST and GraphQL APIs, translating metrics into actionable dashboards.",
      "Partnered with design to align component states, loading patterns, and accessibility expectations.",
    ],
  },
  {
    company: "Bright Ventures (Demo)",
    role: "Frontend Developer",
    period: "2020 - 2022",
    location: "Remote",
    summary:
      "Built responsive UI kits and onboarding flows used across several demo environments.",
    bullets: [
      "Developed a design-system starter with theming and motion tokens for rapid prototyping.",
      "Implemented onboarding and auth journeys with protected routes and role-aware navigation.",
      "Documented patterns so handoffs to client teams stayed frictionless.",
    ],
  },
] as const;

export const SKILL_SETS = [
  {
    title: "Frontend Development",
    icon: Code2,
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Redux", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: Sparkles,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 80 },
      { name: "Supabase", level: 78 },
      { name: "JWT", level: 82 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: BrainCog,
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "Vercel", level: 87 },
      { name: "Vite", level: 82 },
      { name: "PNPM", level: 85 },
      { name: "Docker", level: 78 },
      { name: "Storybook", level: 80 },
    ],
  },
  {
    title: "Programming Languages",
    icon: BriefcaseBusiness,
    items: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Java", level: 70 },
      { name: "Python", level: 60 },
    ],
  },
] as const;

export const TECH_ICONS = [
  { icon: Code2, name: "HTML", color: "text-orange-500" },
  { icon: BrainCog, name: "CSS3", color: "text-blue-500" },
  { icon: Code2, name: "JavaScript", color: "text-yellow-500" },
  { icon: Code2, name: "TypeScript", color: "text-blue-600" },
  { icon: Code2, name: "React", color: "text-cyan-500" },
  { icon: Code2, name: "Next.js", color: "text-gray-800" },
  { icon: Code2, name: "Node.js", color: "text-green-600" },
  { icon: BrainCog, name: "Git", color: "text-orange-600" },
  { icon: Sparkles, name: "Vite", color: "text-yellow-500" },
  { icon: BrainCog, name: "Tailwind", color: "text-teal-500" },
  { icon: BrainCog, name: "JWT", color: "text-purple-500" },
] as const;

export const PROJECTS = [
  {
    name: "Analytics Dashboard (Demo)",
    shortDescription:
      "Interactive metrics dashboard showcasing auth, charts, and role-aware views.",
    fullDescription:
      "Interactive metrics dashboard used in demos to highlight auth flows, charts, and multi-role permissions. Includes mocked data syncs, filterable tables, and export flows to demonstrate end-to-end product thinking.",
    image: "/placeholder.svg",
    tags: ["React", "Supabase", "Charts", "RBAC"],
    githubLink: "https://github.com/example/analytics-dashboard",
    liveLink: "https://example.com/analytics-dashboard",
  },
  {
    name: "Drag & Drop Builder (Demo)",
    shortDescription:
      "Low-code block editor illustrating draggable components and saved layouts.",
    fullDescription:
      "A drag-and-drop block editor built with React and Zustand that saves layouts, handles dark mode, and prevents invalid drops. Great for showing how quickly custom internal tools can come together.",
    image: "/placeholder.svg",
    tags: ["React", "Zustand", "Tailwind CSS", "Vite", "Drag & Drop"],
    githubLink: "https://github.com/example/drag-drop-builder",
    liveLink: "https://example.com/drag-drop-builder",
  },
  {
    name: "Commerce Showcase (Demo)",
    shortDescription:
      "Feature-complete storefront with catalog, cart, and checkout journeys.",
    fullDescription:
      "Feature-complete storefront illustrating catalog filters, cart management, and checkout handoffs. Demonstrates performance-minded React patterns, server interactions, and UX states for busy interfaces.",
    image: "/placeholder.svg",
    tags: ["React", "Redux", "React Router", "API Integration"],
    githubLink: "https://github.com/example/commerce-showcase",
    liveLink: "https://example.com/commerce-showcase",
  },
  {
    name: "Task Flow (Demo)",
    shortDescription: "Task manager highlighting CRUD, filters, and empty states.",
    fullDescription:
      "Task management app demonstrating CRUD operations, optimistic updates, and thoughtful empty/loading states. Useful for showing how we balance DX with user empathy in day-to-day tools.",
    image: "/placeholder.svg",
    tags: ["React", "Vite", "Task Management", "CRUD Operations"],
    githubLink: "https://github.com/example/task-flow-demo",
    liveLink: "https://example.com/task-flow",
  },
  {
    name: "Game Hub (Demo)",
    shortDescription:
      "Lightweight set of casual games to showcase animations and shared state.",
    fullDescription:
      "A playful hub with a few casual games to highlight shared state management, animations, and reusable UI components. Great for demonstrating interaction design without heavy dependencies.",
    image: "/placeholder.svg",
    tags: ["HTML", "CSS", "JavaScript", "Interactive Games"],
    githubLink: "https://github.com/example/game-hub-demo",
    liveLink: "https://example.com/game-hub",
  },
  {
    name: "Weather Snapshot (Demo)",
    shortDescription:
      "Weather lookup with geolocation, search, and graceful loading/error states.",
    fullDescription:
      "Weather lookup tool that uses OpenWeather-style responses, geolocation, and search. Emphasizes resilient loading and error states for demos where network conditions vary.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "OpenWeather API", "Tailwind CSS", "Geolocation"],
    githubLink: "https://github.com/example/weather-snapshot",
    liveLink: "https://example.com/weather-snapshot",
  },
] as const;

export const CERTIFICATES = [
  {
    name: "Cloud Foundations (Demo)",
    path: "/placeholder.svg",
    description: "Baseline cloud architecture and deployment practices.",
    category: "Cloud",
    issuer: "Example Authority",
  },
  {
    name: "TypeScript Essentials",
    path: "/placeholder.svg",
    description: "Typed patterns for scalable frontends and APIs.",
    category: "Programming",
    issuer: "Example Authority",
  },
  {
    name: "Design Systems Workshop",
    path: "/placeholder.svg",
    description: "Built and documented reusable UI primitives.",
    category: "Design",
    issuer: "Example Authority",
  },
  {
    name: "API Security Basics",
    path: "/placeholder.svg",
    description: "Securing REST/GraphQL endpoints with auth and monitoring.",
    category: "Security",
    issuer: "Example Authority",
  },
  {
    name: "Product Discovery Bootcamp",
    path: "/placeholder.svg",
    description: "Rapid validation of product ideas with lean experiments.",
    category: "Product",
    issuer: "Example Authority",
  },
] as const;

export const CONTACT = {
  email: "demo@example.com",
  phone: "+00 00000 00000",
  location: "Remote",
  socials: [
    { label: "GitHub", href: "https://github.com/example", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/example", icon: Linkedin },
    { label: "Instagram", href: "https://www.instagram.com/example", icon: Instagram },
  ],
} as const;
