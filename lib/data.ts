// All site content lives here. Anything marked PLACEHOLDER must be replaced with Hisham's real details/assets.

export const profile = {
  name: "Hisham",
  initial: "H",
  role: "UI/UX Designer",
  footerRole: "Designer",
  location: "Calicut, Kerala", // PLACEHOLDER
  email: "hishamtc0502@gmail.com", // PLACEHOLDER
  phone: "+91 8606017527", // PLACEHOLDER
  resume: "/hisham-resume.pdf", // PLACEHOLDER — add the PDF to /public
  portrait: "/images/portrait.png",
  portraitSize: { width: 799, height: 1065 },
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
    "I excel in creating seamless interactions and engaging designs that effectively meet both user needs and business objectives - with an obsession for type, motion, and quiet deta.",
};

export const services = [
  { label: "Product Design", value: "Apps & Web" },
  { label: "Design Systems", value: "Tokens · Components" },
  { label: "Prototyping", value: "Motion · Interaction" },
  { label: "Brand & Visual", value: "Identity · Direction" },
];

export type ToolIcon =
  | "figma"
  | "adobexd"
  | "strella"
  | "uizard"
  | "illustrator"
  | "photoshop"
  | "wireframe"
  | "miro"
  | "framer"
  | "lovable"
  | "adobe";

export const tools: { name: string; label: string; icon: ToolIcon; description: string }[] = [
  { name: "Figma", label: "Design & Prototyping", icon: "figma", description: "Wireframes, UI design, interactive prototypes and component libraries." },
  { name: "Adobe XD", label: "UI/UX & Prototyping", icon: "adobexd", description: "Interactive user flows, screen transitions and rapid UI mockups." },
  { name: "Strella.Ai", label: "AI User Research", icon: "strella", description: "AI-moderated user research interviews, qualitative insights and research analysis." },
  { name: "Uizard", label: "AI UI Prototyping", icon: "uizard", description: "AI-powered rapid wireframing, prompt-to-design concepts and quick mockups." },
  { name: "Adobe Illustrator", label: "Vector & Brand", icon: "illustrator", description: "Logos, icons, custom vector illustrations and scalable brand graphics." },
  { name: "Adobe Photoshop", label: "Image & Visual", icon: "photoshop", description: "Photo editing, digital manipulation, composites and marketing visuals." },
  { name: "Wireframe CC", label: "Rapid Wireframing", icon: "wireframe", description: "Minimalist low-fidelity wireframing and distraction-free structural UI ideation." },
  { name: "Miro", label: "Workshops & Mapping", icon: "miro", description: "User flows, journey maps, mind maps and collaborative team workshops." },
  { name: "Framer", label: "Website Design & Interactive Experiences", icon: "framer", description: "Interactive prototypes, animations and production-ready marketing sites." },
  { name: "Lovable", label: "AI App Generation", icon: "lovable", description: "Prompt-driven rapid web app prototyping and full-stack concept validation." },
];

export const career = [
  {
    role: "UI/UX Designer",
    period: "May 2025 — Present",
    company: "Gritstone Technologies",
    location: "Calicut (Cyberpark)",
    highlights: [
      "Conducted competitive analysis and market research to identify target audience segments, map user journeys, and address user needs and pain points.",
      "Designed intuitive web architecture aligned with business goals, user experience principles, and current design trends, with clear stakeholder communication.",
      "Delivered user-centric solutions that improve engagement and usability.",
      "Iteratively refined designs from user feedback, design critiques, and usability testing to improve the experience and meet business objectives.",
      "Created responsive UI designs and improved task flows to boost usability and efficiency.",
    ],
  },
  {
    role: "UI/UX Designer",
    period: "March 2024 — April 2025",
    company: "Trogon Media",
    location: "Calicut (Cyberpark)",
    highlights: [
      "Designed intuitive, user-friendly interfaces for web and mobile applications.",
      "Conducted user research, wireframing, prototyping, and usability testing to shape design solutions.",
      "Collaborated with developers and product managers to align designs with business goals and technical constraints.",
      "Created responsive and accessible designs in Figma, Adobe XD, and Sketch.",
      "Improved user engagement by analyzing feedback and iterating on designs.",
      "Kept design elements consistent by following brand guidelines and design systems.",
      "Delivered projects on time while maintaining quality in fast-paced environments.",
    ],
  },
  {
    role: "Graphic Designer",
    period: "February 2022 — March 2023",
    company: "Outthinking",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Designed logos, brochures, posters, social media graphics, and marketing collateral.",
      "Collaborated with cross-functional teams to align design concepts with branding guidelines and marketing objectives.",
      "Managed multiple projects at once, meeting tight deadlines while keeping deliverable quality high.",
      "Conducted market research and competitor analysis to develop competitive design solutions.",
      "Revised designs from client feedback to support client satisfaction and project success.",
      "Used Adobe Creative Suite (Photoshop, Illustrator, InDesign) to produce visual content.",
      "Contributed to branding guidelines and kept design elements consistent across projects.",
    ],
  },
];
export const careerRange = { from: "2022", to: "Present" };

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
    client: "Codescap",
    platform: "iOS · Android",
    url: "https://www.behance.net/gallery/257164857/Oromi-Gold-Savings-App",
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
    client: "Growthfather.agency",
    platform: "Web",
    url: "https://www.behance.net/gallery/247975697/Smart-Nutrition-Health-Tracking-App",
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
    client: "Fortis",
    platform: "iOS · Android",
    url: "https://www.behance.net/gallery/257257269/Project-Management-SaaS-Dashboard-UIUX-Case-Study",
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
    client: "Trogon",
    platform: "Web · Responsive Design",
    url: "https://www.behance.net/gallery/188755873/Healhub-Medical-Website-Design",
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
    client: "Trogon",
    platform: "Web · Responsive Design",
    url: "https://www.behance.net/gallery/191047347/Hotel-Booking-Website-Landing-Page",
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
    client: "Trogon",
    platform: "Web · Responsive Design",
    url: "https://www.behance.net/gallery/190180387/Reflect-Plant-Website-Design",
    cover: "/images/project-6.png",
    subImages: [
      "/images/project-6/plant-4.webp",
      "/images/project-6/plant-6.webp",
      "/images/project-6/plant-3.webp",
      "/images/project-6/plant-5.webp",
      "/images/project-6/plant-2.webp",
      "/images/project-6/plant-1.webp",
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
    client: "Glidix Technolagy",
    platform: "Web · Responsive Design",
    url: "https://www.behance.net/gallery/247939913/Document-Management-System-Web-App",
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
    category: "Smart RFID Inventory & Asset Tracking App",
    description:
      "A modern product configuration and management platform designed to streamline product setup, user onboarding, workflow management, and system administration through an intuitive and organized interface.",
    client: "Halhaya",
    platform: "Mobile App · Responsive Design",
    url: "https://www.behance.net/gallery/247917867/Smart-RFID-Inventory-Asset-Tracking-App",
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
