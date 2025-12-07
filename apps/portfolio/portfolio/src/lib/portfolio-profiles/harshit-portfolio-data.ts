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
  { id: "home", label: "Home", icon: Home, color: "text-sky-600 dark:text-sky-400" },
  { id: "about", label: "About", icon: User, color: "text-emerald-600 dark:text-emerald-400" },
  { id: "skills", label: "Skills", icon: BrainCog, color: "text-amber-500 dark:text-amber-400" },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness, color: "text-indigo-500 dark:text-indigo-400" },
  { id: "projects", label: "Projects", icon: Code2, color: "text-rose-500 dark:text-rose-400" },
  { id: "certificates", label: "Certificates", icon: Award, color: "text-cyan-600 dark:text-cyan-400" },
  { id: "contact", label: "Contact", icon: Mail, color: "text-lime-600 dark:text-lime-400" },
] as const;

export const HERO = {
  name: "Harshit",
  role: "Mobile App Developer",
  tagline:
    "I build high-performance mobile applications using React Native, modern APIs, and scalable backend technologies.",
  blurb:
    "Focused on creating smooth mobile experiences, clean code architecture, and fast app iterations using React Native and cloud-powered backends.",
  location: "Hyderabad, India",
};

export const ABOUT = {
  summary:
    "A passionate Mobile App Developer specializing in React Native, Firebase, and Supabase. I create seamless, cross-platform mobile applications with modern UI and solid backend integrations.",
  personal: [
    { label: "Name", value: "Harshit" },
    { label: "Location", value: "Hyderabad, India" },
    { label: "Experience", value: "1+ Years" },
    { label: "Email", value: "goyal151002@gmail.com" },
    { label: "Phone", value: "+91 94134 95328" },
    { label: "Current Role", value: "Associate Product Engineer" },
  ],
  highlights: [
    "React Native Mobile App Development",
    "Expo, React Navigation, and Hooks Architecture",
    "Supabase Auth & Database Integration",
    "Firebase Authentication, Firestore & FCM",
    "ElysiaJS Backend API Development",
    "UI/UX Implementation & Responsive Design",
  ],
};

export const EDUCATION = [
  {
    school: "A.S.M. Public School, Sri Ganganagar",
    degree: "Secondary (X), CBSE",
    period: "2018",
    location: "Sri Ganganagar",
    detail: "Percentage: 86.20%",
  },
  {
    school: "Nosegay Public School, Sri Ganganagar",
    degree: "Senior Secondary (XII), CBSE",
    period: "2020",
    location: "Sri Ganganagar",
    detail: "Percentage: 83.20%",
  },
  {
    school: "Kalinga Institute of Industrial Technology, Bhubaneshwar",
    degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
    period: "2024",
    location: "Bhubaneshwar",
    detail: "CGPA: 8.98/10",
  },
] as const;

export const EXPERIENCE = [
  {
    company: "Neuraoak Technologies Private Limited",
    role: "Product Associate Engineer",
    period: "Mar 2025 - Present",
    location: "Hyderabad",
    summary:
      "Developing cross-platform mobile features using React Native, Supabase, and ElysiaJS to enhance user workflows and real-time data experiences.",
    bullets: [
      "Built mobile app features using React Native + Supabase with real-time sync.",
      "Implemented ElysiaJS backend services increasing API performance by 35%.",
      "Integrated Supabase Auth, storage, and row-level security policies.",
      "Improved UI responsiveness and animations boosting user engagement.",
    ],
  },
  {
    company: "HighRadius Technologies Private Ltd.",
    role: "Software Development Intern",
    period: "Jul 2023 - Nov 2023",
    location: "Bhubaneswar",
    summary:
      "Worked on backend and API development using Java and SQL, supporting scalable application integrations.",
    bullets: [
      "Implemented REST APIs for multiple integrations, improving app communication.",
      "Optimized backend logic improving response time by 30%.",
      "Collaborated with the team to understand user flows and backend requirements.",
    ],
  },
  {
    company: "HighRadius Technologies Private Ltd.",
    role: "Tech Summer Intern",
    period: "May 2023 - Jul 2023",
    location: "Bhubaneswar",
    summary:
      "Delivered a full-stack project prototype while gaining experience in product development workflow.",
    bullets: [
      "Built a prototype with complete front-to-back integration.",
      "Practiced UX research, logic building, and structured development.",
    ],
  },
  {
    company: "DESIRE FOUNDATION",
    role: "Public Relations (PR) Intern",
    period: "Sep 2022 - Aug 2023",
    location: "Bhubaneswar",
    summary:
      "Coordinated educational activities and community engagement initiatives.",
    bullets: [
      "Organized campaigns reaching 50+ children in underprivileged areas.",
      "Distributed supplies to support education for disadvantaged groups.",
      "Enhanced internal coordination by working with cross-functional teams.",
    ],
  },
] as const;

export const SKILL_SETS = [
  {
    title: "Mobile Development",
    icon: Code2,
    color: "text-sky-500 dark:text-sky-400",
    items: [
      { name: "React Native", level: 92 },
      { name: "Expo", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "React Navigation", level: 88 },
      { name: "Context API / Zustand", level: 85 },
      { name: "Animations (Reanimated)", level: 75 },
      { name: "Responsive UI", level: 90 },
    ],
  },
  {
    title: "Backend & Cloud",
    icon: Sparkles,
    color: "text-purple-500 dark:text-purple-400",
    items: [
      { name: "Supabase (Auth, DB, Storage)", level: 90 },
      { name: "Firebase Auth", level: 82 },
      { name: "Firestore", level: 78 },
      { name: "FCM (Push Notifications)", level: 75 },
      { name: "ElysiaJS", level: 70 },
      { name: "REST API Integration", level: 88 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: BrainCog,
    color: "text-amber-500 dark:text-amber-400",
    items: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 88 },
      { name: "Vercel", level: 85 },
      { name: "NPM", level: 92 },
      { name: "PNPM", level: 85 },
      { name: "Postman", level: 85 },
    ],
  },
  {
    title: "Programming Languages",
    icon: BriefcaseBusiness,
    color: "text-rose-500 dark:text-rose-400",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 60 },
      { name: "Python", level: 40 },
    ],
  },
] as const;

export const TECH_ICONS = [
  { icon: Code2, name: "React Native", color: "text-blue-600" },
  { icon: BrainCog, name: "Expo", color: "text-black" },
  { icon: Code2, name: "Supabase", color: "text-green-600" },
  { icon: Code2, name: "Firebase", color: "text-yellow-500" },
  { icon: Code2, name: "ElysiaJS", color: "text-purple-500" },
  { icon: BrainCog, name: "TypeScript", color: "text-blue-500" },
  { icon: BrainCog, name: "React Navigation", color: "text-indigo-500" },
] as const;

export const PROJECTS = [
  {
    name: "SwiftTasks – Mobile Task Manager",
    shortDescription:
      "A React Native task manager with offline support, smooth UI, and Supabase backend.",
    fullDescription:
      "SwiftTasks is a cross-platform task manager built using React Native, Expo, and Supabase. Supports task creation, reminders, priority sorting, and real-time sync. Fully powered by Supabase Auth and Database with offline-first UI experience.",
    image: "/placeholder.svg",
    tags: ["React Native", "Supabase", "TypeScript", "Expo"],
    githubLink: "https://github.com/example/swifttasks",
    liveLink: "https://swifttasks.app",
  },
  {
    name: "ChatWave – Real-time Chat App",
    shortDescription:
      "A real-time chat app using React Native, Firebase Auth, and Firestore.",
    fullDescription:
      "ChatWave features one-to-one messaging, media upload, push notifications (FCM), and read receipts. Built with React Native, Firebase, and custom UI screens for a smooth chat experience.",
    image: "/placeholder.svg",
    tags: ["React Native", "Firebase", "FCM", "Expo"],
    githubLink: "https://github.com/example/chatwave",
    liveLink: "https://chatwave.app",
  },
  {
    name: "FitPulse – Fitness Tracking App",
    shortDescription:
      "Built a fitness tracker with graphs, daily insights, and cloud sync.",
    fullDescription:
      "FitPulse tracks steps, calories, and workout logs. Includes analytics charts, local caching, and optional Supabase sync for cross-device data.",
    image: "/placeholder.svg",
    tags: ["React Native", "Charts", "Supabase", "Expo"],
    githubLink: "https://github.com/example/fitpulse",
    liveLink: "https://fitpulse.app",
  },
] as const;

export const CERTIFICATES = [
  {
    name: "React Native Development",
    path: "/placeholder.svg",
    description: "Completed React Native development course",
    category: "Mobile",
    issuer: "Udemy",
  },
  {
    name: "Supabase Essentials",
    path: "/placeholder.svg",
    description: "Certified in Supabase auth, database, and APIs",
    category: "Backend",
    issuer: "Supabase",
  },
  {
    name: "Firebase for Developers",
    path: "/placeholder.svg",
    description: "Completed Firebase training",
    category: "Cloud",
    issuer: "Google",
  },
  {
    name: "JavaScript & TypeScript Mastery",
    path: "/placeholder.svg",
    description: "Strong foundation in JavaScript and TypeScript",
    category: "Programming",
    issuer: "Internshala",
  },
] as const;

export const CONTACT = {
  email: "goyal151002@gmail.com",
  phone: "+91 94134 95328",
  location: "Hyderabad, India",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/goyal1510",
      icon: Github,
      color: "text-gray-900 dark:text-gray-100",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jayant-29714220b/",
      icon: Linkedin,
      color: "text-sky-600 dark:text-sky-400",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/goyal_1510/",
      icon: Instagram,
      color: "text-pink-500 dark:text-pink-400",
    },
  ],
} as const;

export const harshitPortfolioData = {
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
} as const;
