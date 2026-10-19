// All site content lives here. Anything marked PLACEHOLDER must be replaced with Hisham's real details/assets.

export const profile = {
  name: "Hisham",
  initial: "H",
  role: "UI/UX Designer",
  footerRole: "Designer",
  location: "City, Country", // PLACEHOLDER
  email: "hello@hisham.design", // PLACEHOLDER
  phone: "+91 00000 00000", // PLACEHOLDER
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
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
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
  mockups: [string, string];
  gallery: [string, string, string, string];
};

// PLACEHOLDER imagery: the four stock photos in /public/images stand in until real project shots are added.
const img = {
  code: "/images/project-1.png",
  project_2 :"/images/project-2.jpg",
  glow: "/images/project-2.jpg",
  track: "/images/project-3.jpg",
  house: "/images/project-4.jpg",
};

const placeholder = (cover: string, a: string, b: string, c: string) => ({
  cover,
  mockups: [a, b] as [string, string],
  gallery: [cover, a, b, c] as [string, string, string, string],
});

// PLACEHOLDER projects — replace names, copy, client, links and images with Hisham's real work.
// Order matters: the works grid renders them in groups of three (one wide card, then two side by side),
// and the detail page's "Next project" follows this order, wrapping back to the start.
export const projects: Project[] = [
  { slug: "gold-savings", name: "Gold Savings App", category: "Fintech", description: "G O L D  &  J E W E L L E R Y   A P P", client: "Client Name", platform: "iOS · Android", url: "#", ...placeholder(img.code, img.glow, img.track, img.house) },
  { slug: "ecommerce", name: "Ecommerce Store", category: "Ecommerce", description: "Online storefront and checkout design.", client: "Client Name", platform: "Web", url: "#", ...placeholder(img.project_2, img.code, img.house, img.track) },
  { slug: "real-estate", name: "Rental Finder", category: "Real Estate", description: "Property search and booking app design.", client: "Client Name", platform: "iOS · Android", url: "#", ...placeholder(img.house, img.track, img.code, img.glow) },
  { slug: "travel-and-tourism", name: "Travel Booking", category: "Travel and Tourism", description: "Tour discovery and booking website design.", client: "Client Name", platform: "Web", url: "#", ...placeholder(img.track, img.house, img.glow, img.code) },
  { slug: "edtech", name: "Learning Platform", category: "EdTech", description: "Course platform design for students and tutors.", client: "Client Name", platform: "Web", url: "#", ...placeholder(img.code, img.house, img.glow, img.track) },
  { slug: "bill-reminder-app", name: "Bill Reminder App", category: "Fintech", description: "Bill tracking and reminder app design.", client: "Client Name", platform: "iOS · Android", url: "#", ...placeholder(img.glow, img.track, img.code, img.house) },
  { slug: "healthcare-app", name: "Health Care", category: "Medical", description: "Patient appointment and records app design.", client: "Client Name", platform: "iOS · Android", url: "#", ...placeholder(img.house, img.code, img.track, img.glow) },
  { slug: "elearning-app", name: "E-learning App", category: "Education", description: "Mobile learning app design.", client: "Client Name", platform: "iOS · Android", url: "#", ...placeholder(img.track, img.glow, img.house, img.code) },
  { slug: "ebook-app", name: "eBook Reader", category: "EdTech", description: "Reading and library app design.", client: "Client Name", platform: "iOS · Android", url: "#", ...placeholder(img.code, img.track, img.glow, img.house) },
];
