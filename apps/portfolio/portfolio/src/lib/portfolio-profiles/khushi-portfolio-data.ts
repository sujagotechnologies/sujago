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
} from "lucide-react"

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home, color: "text-sky-600 dark:text-sky-400" },
  { id: "about", label: "About", icon: User, color: "text-emerald-600 dark:text-emerald-400" },
  { id: "skills", label: "Skills", icon: BrainCog, color: "text-amber-500 dark:text-amber-400" },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness, color: "text-indigo-500 dark:text-indigo-400" },
  { id: "projects", label: "Projects", icon: Code2, color: "text-rose-500 dark:text-rose-400" },
  { id: "certificates", label: "Certificates", icon: Award, color: "text-cyan-600 dark:text-cyan-400" },
  { id: "contact", label: "Contact", icon: Mail, color: "text-lime-600 dark:text-lime-400" },
] as const

const HERO = {
  name: "Khushi",
  role: "Product Designer",
  tagline:
    "Designing thoughtful, human-centered products with a focus on clarity and measurable outcomes.",
  blurb:
    "I bring structure to fuzzy ideas, pairing rapid experimentation with crisp design systems to ship delightful experiences.",
  location: "Bengaluru, India",
}

const ABOUT = {
  summary:
    "A multi-disciplinary designer who loves solving complex problems with simple, elegant solutions.",
  personal: [
    { label: "Name", value: "Khushi Sharma" },
    { label: "Location", value: "Bengaluru, India" },
    { label: "Experience", value: "3+ Years" },
    { label: "Email", value: "khushi@smilingvictor.com" },
    { label: "Phone", value: "+91 98765 43210" },
    { label: "Current Role", value: "Senior Product Designer" },
  ],
  highlights: [
    "End-to-end product design",
    "Design systems & UI kits",
    "User research & testing",
    "Prototyping with Figma",
    "Design for web & mobile",
    "Design handoff & documentation",
  ],
}

const EDUCATION = [
  {
    school: "National Institute of Fashion Technology",
    degree: "B.Des, Communication Design",
    period: "2018",
    location: "New Delhi",
    detail: "Graduated with honors, specialized in digital product design.",
  },
  {
    school: "Interaction Design Foundation",
    degree: "Advanced UX Courses",
    period: "2020 - 2021",
    location: "Remote",
    detail: "Completed courses on UX strategy, design systems, and usability testing.",
  },
] as const

const EXPERIENCE = [
  {
    company: "Flowstack",
    role: "Senior Product Designer",
    period: "Jan 2023 - Present",
    location: "Bengaluru",
    summary:
      "Leading the design of workflow automation tools used by ops teams across APAC.",
    bullets: [
      "Redesigned onboarding, increasing team activation by 22%.",
      "Introduced a token-based design system adopted across 4 product squads.",
      "Partnered with PMs to run quarterly research sprints and usability testing.",
    ],
  },
  {
    company: "BrightCart",
    role: "Product Designer",
    period: "Aug 2020 - Dec 2022",
    location: "Remote",
    summary:
      "Designed shopper and merchant experiences for an e-commerce enablement suite.",
    bullets: [
      "Shipped a checkout redesign that reduced drop-off by 15%.",
      "Built a reusable illustration and icon set to align marketing and product.",
      "Collaborated closely with engineering to streamline design handoff.",
    ],
  },
  {
    company: "Freelance",
    role: "UX/UI Designer",
    period: "2018 - 2020",
    location: "Remote",
    summary:
      "Partnered with early-stage founders to design MVPs and pitch prototypes.",
    bullets: [
      "Delivered 10+ end-to-end projects across health, fintech, and education.",
      "Created interactive prototypes to validate ideas before development.",
    ],
  },
] as const

const SKILL_SETS = [
  {
    title: "Design Craft",
    icon: Sparkles,
    color: "text-rose-500 dark:text-rose-400",
    items: [
      { name: "Product Thinking", level: 92 },
      { name: "Interaction Design", level: 90 },
      { name: "Visual Design", level: 88 },
      { name: "Design Systems", level: 90 },
      { name: "Prototyping", level: 86 },
    ],
  },
  {
    title: "Tools",
    icon: BrainCog,
    color: "text-indigo-500 dark:text-indigo-400",
    items: [
      { name: "Figma", level: 94 },
      { name: "FigJam", level: 90 },
      { name: "Notion", level: 85 },
      { name: "Miro", level: 82 },
      { name: "Webflow", level: 78 },
    ],
  },
  {
    title: "Collaboration",
    icon: BriefcaseBusiness,
    color: "text-emerald-500 dark:text-emerald-400",
    items: [
      { name: "Workshop Facilitation", level: 88 },
      { name: "Research Ops", level: 80 },
      { name: "Stakeholder Management", level: 84 },
      { name: "Design Handoff", level: 86 },
    ],
  },
] as const

const TECH_ICONS = [
  { icon: Sparkles, name: "Figma", color: "text-purple-500" },
  { icon: BrainCog, name: "Notion", color: "text-slate-600" },
  { icon: BrainCog, name: "Miro", color: "text-amber-500" },
  { icon: BrainCog, name: "Webflow", color: "text-indigo-500" },
  { icon: Sparkles, name: "Framer", color: "text-black" },
] as const

const PROJECTS = [
  {
    name: "Ops Command Center",
    shortDescription:
      "Designed a control center for operations teams to monitor SLAs and workflows.",
    fullDescription:
      "Created dashboards, alerting patterns, and workflow builders for ops managers. Partnered with engineering to define design tokens and data visualizations that scale across multiple teams.",
    image: "/placeholder.svg",
    tags: ["Product Design", "Design Systems", "Figma", "B2B SaaS"],
    githubLink: "",
    liveLink: "https://flowstack.example.com/",
  },
  {
    name: "Merchant Mobile",
    shortDescription: "Mobile-first selling experience for marketplace merchants.",
    fullDescription:
      "Led UX for a lightweight merchant app covering catalog, orders, and payouts. Ran usability tests with 20+ merchants to refine navigation and offline-safe patterns.",
    image: "/placeholder.svg",
    tags: ["UX Research", "Mobile Design", "Prototyping"],
    githubLink: "",
    liveLink: "https://brightcart.example.com/",
  },
  {
    name: "Wellness Coach MVP",
    shortDescription: "Prototype for a personalized wellness companion.",
    fullDescription:
      "Designed onboarding, goal-setting flows, and habit tracking. Built a clickable prototype with motion to align the founding team and pitch to early investors.",
    image: "/placeholder.svg",
    tags: ["Prototype", "Motion", "Branding"],
    githubLink: "",
    liveLink: "",
  },
] as const

const CERTIFICATES = [
  {
    name: "Design Systems Bootcamp",
    path: "/placeholder.svg",
    description: "Completed an intensive course on scalable design systems.",
    category: "Design",
    issuer: "Designership",
  },
  {
    name: "UX Research & Strategy",
    path: "/placeholder.svg",
    description: "Training focused on research planning and synthesis.",
    category: "Research",
    issuer: "Interaction Design Foundation",
  },
  {
    name: "Motion for UI",
    path: "/placeholder.svg",
    description: "Micro-interactions and motion design for web and mobile.",
    category: "Design",
    issuer: "Motion Design School",
  },
] as const

const CONTACT = {
  email: "khushi@smilingvictor.com",
  phone: "+91 98765 43210",
  location: "Bengaluru, India",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/khushi-smilingvictor",
      icon: Linkedin,
      color: "text-sky-600 dark:text-sky-400",
    },
    {
      label: "GitHub",
      href: "https://github.com/khushi-smilingvictor",
      icon: Github,
      color: "text-gray-900 dark:text-gray-100",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/khushi.designs",
      icon: Instagram,
      color: "text-pink-500 dark:text-pink-400",
    },
  ],
} as const

export const khushiPortfolioData = {
  NAV_ITEMS,
  HERO,
  ABOUT,
  EDUCATION,
  EXPERIENCE,
  SKILL_SETS,
  TECH_ICONS,
  PROJECTS,
  CERTIFICATES,
  CONTACT,
} as const
