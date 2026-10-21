// All site content lives here. Anything marked PLACEHOLDER must be replaced with Hisham's real details/assets.

export const profile = {
  name: "Hisham",
  initial: "H",
  role: "UI/UX Designer",
  footerRole: "Designer",
  location: "City, Country", // PLACEHOLDER
  email: "hishamtc0502@gmail.com", // PLACEHOLDER
  phone: "+91 8606017527", // PLACEHOLDER
  resume: "/hisham-resume.pdf", // PLACEHOLDER — add the PDF to /public
  portrait: "/images/portrait.jpg", // PLACEHOLDER — stock photo, replace with Hisham's portrait (square-ish crop, face near top)
  portraitSize: { width: 1200, height: 1500 },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

// PLACEHOLDER — profile root URLs; swap in Hisham's real profile links.
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/hisham_t_c?srtk=N21hdXNzeGR0NXk%3D&utm_source=qr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hisham-tc-024817238?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { label: "Behance", href: "https://www.behance.net/cb880c3c" },
] as const;

export const skills = [
  "UI Design",
  "UX Strategy",
  "Mobile Apps",
  "Web Design",
  "Design Systems",
  "Prototyping",
  "Brand Identity",
  "Motion",
];

export const intro = {
  years: "3+ years", // PLACEHOLDER — keep in sync with stats
  focus: "app & web design.",
  rest: "I create intuitive, visually engaging interfaces that balance what users need with what the business is aiming for.",
};

export const stats = [
  { value: 2, label: "YEARS OF UI/UX DESIGN EXPERIENCE" }, // PLACEHOLDER figures
  { value: 15, label: "HAPPY & SATISFIED CLIENTS" },
  { value: 17, label: " COMPLETED DESIGN PROJECTS" },
];

export const aboutPage = {
  headline: { lead: "Yes! I do design", soft: "more than you do", end: "!" },
  tagline: `I'm a designer based in ${profile.location}`,
  summary:
    "I focus on clear interactions and considered visual design that serve both the people using a product and the goals behind it — with close attention to type, motion and the small details.",
};

export const services = [
  { label: "Product Design", value: "Apps & Web" },
  { label: "Design Systems", value: "Tokens · Components" },
  { label: "Prototyping", value: "Motion · Interaction" },
  { label: "Brand & Visual", value: "Identity · Direction" },
];

export type ToolIcon = "figma" | "adobe" | "jira" | "lovable" | "framer";

export const tools: { name: string; label: string; icon: ToolIcon; description: string }[] = [
  { name: "Figma", label: "Design & Prototyping", icon: "figma", description: "Wireframes, UI design, interactive prototypes and component libraries." },
  { name: "Adobe Creative Suite", label: "Visual & Motion", icon: "adobe", description: "Photoshop, Illustrator and After Effects for visuals and motion." },
  { name: "Jira", label: "Project Management", icon: "jira", description: "Sprint planning, ticket tracking and design hand-off with engineering." },
  { name: "Lovable", label: "AI-powered Build", icon: "lovable", description: "Turning designs into working products quickly with AI assistance." },
  { name: "Framer", label: "Prototyping & Sites", icon: "framer", description: "Interactive prototypes and production-ready marketing sites." },
];

// PLACEHOLDER — Hisham's real roles, companies and dates.
export const career = [
  { role: "UI/UX Designer", period: "Jan 2025 — Present", company: "Company Name", location: "City" },
  { role: "Junior UI/UX Designer", period: "Jan 2023 — Dec 2024", company: "Company Name", location: "City" },
];
export const careerRange = { from: "2023", to: "2026" };

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  client: string;
  platform: string;
  url: string;
  cover: string;
  /** Detail shots on the project page. Add more paths here as new screens are exported. */
  subImages: string[];
};

export const projects: Project[] = [
  {
    slug: "gold-savings",
    name: "Gold Savings App",
    category: "Fintech",
    description: "G O L D  &  J E W E L L E R Y   A P P",
    client: "Client Name",
    platform: "iOS · Android",
    url: "#",
    cover: "/images/project-1.png",
    subImages: [
      "/images/project-1/pro-1-1.webp",
      "/images/project-1/pro1-2.webp",
      "/images/project-1/pro-1-3.webp",
      "/images/project-1/pro-1-4.webp",
      "/images/project-1/pro-1-5.webp",
      "/images/project-1/pro-1-6.webp",
    ],
  },
  {
    slug: "health-tracking",
    name: "Health Tracking App",
    category: "Health",
    description: "H E A L T H  •  N U T R I T I O N  • W E L L N E S S",
    client: "Client Name",
    platform: "Web",
    url: "#",
    cover: "/images/project-2.png",
    subImages: [
      "/images/project-2/nutrition-1.webp",
      "/images/project-2/nutrition-2.webp",
      "/images/project-2/nutrition-3.webp",
      "/images/project-2/nutrition-4.webp",
      "/images/project-2/nutrition-5.webp",
      "/images/project-2/nutrition-6.webp",
    ],
  },
  {
    slug: "project-management",
    name: "Project Management",
    category: "Project Management",
    description: "P R O J E C T S  •  T A S K S  •  T E A M  C O L L A B O R A T I O N",
    client: "Client Name",
    platform: "iOS · Android",
    url: "#",
    cover: "/images/project-3.png",
    subImages: [
      "/images/project-3/product-1.webp",
      "/images/project-3/product-2.webp",
      "/images/project-3/product-3.webp",
      "/images/project-3/product-4.webp",
      "/images/project-3/product-5.webp",
      "/images/project-3/product-6.webp",
    ],
  },
  {
    slug: "healthcare-landing",
    name: "Healthcare Landing Page",
    category: "Healthcare",
    description: "M E D I C A L  •  D O C T O R S  •  H E A L T H C A R E",
    client: "Healthcare / Hospital",
    platform: "Web · Responsive Design",
    url: "#",
    cover: "/images/project-4.png",
    subImages: [
      "/images/project-4/hospital-1.webp",
      "/images/project-4/hospital-2.webp",
      "/images/project-4/hospital-3.webp",
      "/images/project-4/hospital-4.webp",
      "/images/project-4/hospital-5.webp",
      "/images/project-4/hospital-6.webp",
    ],
  },
  {
    slug: "luxury-hotel-booking",
    name: "Luxury Hotel Booking Website",
    category: "Hospitality & Travel",
    description: "L U X U R Y  •  S T A Y S  •  H O S P I T A L I T Y",
    client: "Hotel Booking Platform",
    platform: "Web · Responsive Design",
    url: "#",
    cover: "/images/project-5.png",
    subImages: [
      "/images/project-5/hotel-1.webp",
      "/images/project-5/hotel-2.webp",
      "/images/project-5/hotel-3.webp",
      "/images/project-5/hotel-4.webp",
      "/images/project-5/hotel-5.webp",
      "/images/project-5/hotel-6.webp",
    ],
  },
  {
    slug: "plant-ecommerce",
    name: "Plant E-Commerce Website",
    category: "E-commerce · Gardening",
    description: "P L A N T S  •  C A R E  •  G R E E N E R Y",
    client: "Plant Shopping Store",
    platform: "Web · Responsive Design",
    url: "#",
    cover: "/images/project-6.png",
    subImages: [
      "/images/project-6/plant-1.webp",
      "/images/project-6/plant-2.webp",
      "/images/project-6/plant-3.webp",
      "/images/project-6/plant-4.webp",
      "/images/project-6/plant-5.webp",
      "/images/project-6/plant-6.webp",
    ],
  },
  {
    slug: "glidix",
    name: "GLIDIX – Technology Solutions Website",
    category: "Technology · SaaS",
    description: "T E C H N O L O G Y  •  S O L U T I O N S  •  G R O W T H",
    client: "Glidix Technologies",
    platform: "Web · Responsive Design",
    url: "#",
    cover: "/images/project-7.png",
    subImages: [
      "/images/project-7/glidix-1.webp",
      "/images/project-7/glidix-2.webp",
      "/images/project-7/glidix-3.webp",
      "/images/project-7/glidix-4.webp",
      "/images/project-7/glidix-5.webp",
      "/images/project-7/glidix-6.webp",
    ],
  },
  {
    slug: "document-management-system",
    name: "Document Management Dashboard",
    category: "SaaS · Document Management",
    description:
      "A modern document management platform designed to streamline document storage, team collaboration, task approvals, and reporting through an organized and user-friendly interface.",
    client: "Document Management System",
    platform: "Web · Responsive Design",
    url: "#",
    cover: "/images/project-8.png",
    subImages: [
      "/images/project-8/dms-1.webp",
      "/images/project-8/dms-2.webp",
      "/images/project-8/dms-3.webp",
      "/images/project-8/dms-4.webp",
      "/images/project-8/dms-5.webp",
      "/images/project-8/dms-6.webp",
    ],
  },
  {
    slug: "product-configuration-system",
    name: "Alhaya Mobile app",
    category: "SaaS · Product Management",
    description:
      "A modern product configuration and management platform designed to streamline product setup, user onboarding, workflow management, and system administration through an intuitive and organized interface.",
    client: "Product Configuration Management System",
    platform: "Mobile App · Responsive Design",
    url: "#",
    cover: "/images/project-9.png",
    subImages: [
      "/images/project-9/pcs-1.webp",
      "/images/project-9/pcs-2.webp",
      "/images/project-9/pcs-3.webp",
      "/images/project-9/pcs-4.webp",
      "/images/project-9/pcs-5.webp",
    ],
  },
];
