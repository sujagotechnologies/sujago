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

// ------------------------- HERO -------------------------

const HERO = {
  name: "Neelima Paul",
  role: "Software Engineer (Java & Spring Boot)",
  tagline:
    "Backend-focused developer passionate about building scalable applications, secure APIs, and reliable system architectures.",
  blurb:
    "I enjoy solving real-world engineering problems using clean code, optimized logic, and modern backend frameworks.",
  location: "India",
}

// ------------------------- ABOUT -------------------------

const ABOUT = {
  summary:
    "Get to know my journey, technical interests, and the motivation behind becoming a backend-focused full-stack engineer.",
  personal: [
    { label: "Name", value: "Neelima Paul" },
    { label: "Location", value: "India" },
    { label: "Experience", value: "1+ Years" },
    { label: "Email", value: "neelimapaul385@gmail.com" },
    { label: "Phone", value: "N/A" }, // placeholder
    { label: "Current Role", value: "Software Engineer at LTIMindtree" },
  ],
  highlights: [
    "Java & Spring Boot Development",
    "REST API Design & Implementation",
    "Machine Learning & Model Deployment",
    "Angular Full-Stack Development",
    "Security (JWT, Spring Security)",
    "Python (Pandas, NumPy, ML Algorithms)",
  ],
}

// ------------------------- EDUCATION -------------------------

const EDUCATION = [
  {
    school: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
    period: "2020 - 2024",
    location: "Bhubaneswar",
    detail: "CGPA: 8.69/10",
  },
] as const

// ------------------------- EXPERIENCE -------------------------

const EXPERIENCE = [
  {
    company: "LTIMindtree",
    role: "Software Engineer",
    period: "Oct 2024 – Present",
    location: "Pune",
    summary:
      "Developing full-stack and backend features using Spring Boot, Angular, and secure API design.",
    bullets: [
      "Developed a full-stack application using Spring Boot (backend) and Angular (frontend) with 10+ RESTful APIs.",
      "Integrated Spring Security + JWT, ensuring authentication & authorization for 50+ users.",
      "Reduced unauthorized access by 99.9% through improved security architecture.",
      "Built user and admin view-based authorization flows with robust scalability.",
    ],
  },
  {
    company: "Microsoft Engage 2022",
    role: "Mentee (Remote)",
    period: "Apr 2022 – May 2022",
    location: "Remote",
    summary:
      "Worked on a recommendation system project while being mentored at Microsoft’s Engage program.",
    bullets: [
      "Developed a movie recommendation system using content-based filtering.",
      "Optimized data processing using Pandas & NumPy, reducing processing time by 15%.",
      "Improved algorithmic efficiency by 20% to enhance real-time performance.",
      "Deployed the end-to-end system on Heroku, showcasing full-stack deployment skills.",
    ],
  },
] as const

// ------------------------- SKILL SETS -------------------------

const SKILL_SETS = [
  {
    title: "Backend Development",
    icon: Sparkles,
    color: "text-emerald-500 dark:text-emerald-400",
    items: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Spring Security", level: 80 },
      { name: "JWT Authentication", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Linux", level: 70 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    color: "text-orange-500 dark:text-orange-400",
    items: [
      { name: "Angular", level: 70 },
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Machine Learning & Python",
    icon: BrainCog,
    color: "text-indigo-500 dark:text-indigo-400",
    items: [
      { name: "Python", level: 80 },
      { name: "NumPy", level: 75 },
      { name: "Pandas", level: 80 },
      { name: "OpenCV", level: 70 },
      { name: "Model Deployment", level: 65 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: BriefcaseBusiness,
    color: "text-rose-500 dark:text-rose-400",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 85 },
      { name: "AWS (Basics)", level: 60 },
      { name: "IntelliJ", level: 80 },
    ],
  },
] as const

// ------------------------- TECH ICONS -------------------------

const TECH_ICONS = [
  { icon: Code2, name: "Java", color: "text-red-600" },
  { icon: Sparkles, name: "Spring Boot", color: "text-green-600" },
  { icon: Code2, name: "Angular", color: "text-red-500" },
  { icon: BrainCog, name: "Pandas", color: "text-yellow-600" },
  { icon: BrainCog, name: "NumPy", color: "text-blue-500" },
  { icon: Sparkles, name: "OpenCV", color: "text-indigo-500" },
  { icon: Code2, name: "REST APIs", color: "text-gray-800" },
  { icon: BrainCog, name: "Git", color: "text-orange-600" },
] as const

// ------------------------- PROJECTS -------------------------

const PROJECTS = [
  {
    name: "SpaceX Falcon 9 Landing Prediction",
    shortDescription:
      "Built a machine learning model to predict Falcon 9 landings with 85% accuracy.",
    fullDescription:
      "Developed a machine learning model capable of predicting SpaceX Falcon 9 booster landings with an accuracy of up to 85%. Utilized cross-validation techniques and extensive preprocessing to improve prediction reliability.",
    image: "/placeholder.svg",
    tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Cross Validation"],
    githubLink: "https://github.com/placeholder", // placeholder
    liveLink: "#",
  },
  {
    name: "OrphanX – Face Recognition System",
    shortDescription: "A deep-learning-driven face recognition system built using OpenCV & Siamese Networks.",
    fullDescription:
      "Developed OrphanX, a high-accuracy face recognition system leveraging OpenCV, Siamese Networks, Deep Neural Networks, and Django for multi-device responsiveness. Integrated several ML models using a Voting Classifier for improved detection accuracy.",
    image: "/placeholder.svg",
    tags: ["Python", "OpenCV", "Deep Learning", "Django"],
    githubLink: "https://github.com/placeholder",
    liveLink: "#",
  },
  {
    name: "Movie Recommendation System",
    shortDescription:
      "Built a content-based movie recommender as part of Microsoft Engage.",
    fullDescription:
      "Designed and deployed a movie recommendation system using Python, Pandas, NumPy, and content-based filtering techniques. Improved data processing speed by 15% and algorithm efficiency by 20%. Deployed on Heroku.",
    image: "/placeholder.svg",
    tags: ["Python", "Pandas", "NumPy", "Recommender System"],
    githubLink: "https://github.com/placeholder",
    liveLink: "#",
  },
  {
    name: "Face Mask Detection",
    shortDescription:
      "CNN-based classifier to detect face mask presence with 98% accuracy.",
    fullDescription:
      "Built a CNN model for mask detection using a mixed dataset of memes and academic images. Achieved 98% classification accuracy through fine-tuned convolutional layers.",
    image: "/placeholder.svg",
    tags: ["Python", "CNN", "OpenCV", "Deep Learning"],
    githubLink: "https://github.com/placeholder",
    liveLink: "#",
  },
] as const

// ------------------------- CERTIFICATES -------------------------

const CERTIFICATES = [
  {
    name: "No certificates available",
    path: "/placeholder.svg",
    description: "Certificates will be added soon.",
    category: "General",
    issuer: "N/A",
  },
] as const

// ------------------------- CONTACT -------------------------

const CONTACT = {
  email: "neelimapaul385@gmail.com",
  phone: "N/A",
  location: "India",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/placeholder",
      icon: Github,
      color: "text-gray-900 dark:text-gray-100",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/placeholder",
      icon: Linkedin,
      color: "text-sky-600 dark:text-sky-400",
    },
  ],
} as const

export const neelimaPortfolioData = {
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