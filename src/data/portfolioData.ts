export interface ProjectItem {
  year: string;
  title: string;
  description: string;
  tech: string;
  linkText: string;
  linkHref: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  bullets?: string[];
  location?: string;
  tech?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: string;
}

export interface OfferingItem {
  title: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "Fuad Tesfaye",
    title: "Software Engineer.",
    roleFull: "Full-Stack Software Engineer",
    location: "Addis Ababa, Ethiopia",
    status: "Open to opportunities",
    githubUrl: "https://github.com/FuadTesfaye",
    linkedinUrl: "https://linkedin.com/in/fuadtesfaye",
    email: "fuadtesfaye24@gmail.com",
    tagline:
      "Welcome! I'm Fuad — a full-stack software engineer building modern web products, from polished interactive frontends to scalable backend systems.",
    introBio:
      "I use MERN, Next.js and clean, enterprise-grade architecture to build full-scale web applications. Based in Addis Ababa, Ethiopia, and open to opportunities.",
    aboutLead:
      "Full-stack, MERN, Next.js and clean architecture. Over 3 years of building software that is meant to last.",
    aboutParagraphs: [
      "I'm a dedicated full-stack software engineer with over 3 years of experience in the MERN stack, Next.js and enterprise-grade backend architecture. My range runs from UI/UX precision and front-end polish with GSAP and Three.js to scalable backend systems in Node.js and ASP.NET Core.",
      "I have completed 10+ projects with a 100% client satisfaction rate.",
    ],
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  externalLinks: [
    { label: "GitHub", href: "https://github.com/FuadTesfaye" },
    { label: "LinkedIn", href: "https://linkedin.com/in/fuadtesfaye" },
  ],

  skillsLead:
    "Structured for maintainability, scalability and long-term growth, following Clean Architecture.",

  skillsCategories: [
    {
      title: "Frontend",
      subtitle: "Frameworks, UI/UX, animation",
      skills:
        "React, Next.js, Vite, TypeScript, JavaScript, Tailwind CSS, GSAP, Three.js",
    },
    {
      title: "Backend",
      subtitle: "APIs, services, databases",
      skills:
        "Node.js, Python, Express.js, Laravel, ASP.NET Core, Spring Boot, PostgreSQL, MongoDB, Redis, Microservices, RESTful API design",
    },
    {
      title: "Tools & cloud",
      subtitle: "Build, deploy, collaborate",
      skills:
        "Git, GitHub, Docker, AWS, Google Cloud, Vercel, VS Code, Cursor",
    },
    {
      title: "AI integration",
      subtitle: "LLMs, prompts, automation",
      skills:
        "OpenAI API, Groq, Hugging Face, OpenRouter, LLM integration, prompt engineering, automation",
    },
  ] as SkillCategory[],

  offeringsLead: "Here is how I can help your team or your product.",

  offerings: [
    {
      title: "Full-stack development",
      description:
        "Scalable applications built from the ground up with MERN, ASP.NET Core and Next.js, with clean architecture and maintainable structure.",
    },
    {
      title: "UI/UX implementation",
      description:
        "Pixel-perfect, responsive interfaces using Tailwind, GSAP and modern component APIs.",
    },
    {
      title: "Backend engineering",
      description:
        "Fast, secure services and microservices optimized for performance and long-term scalability.",
    },
    {
      title: "AI integration",
      description:
        "LLM integration, prompt engineering and automation with OpenAI API, Groq, Hugging Face and OpenRouter.",
    },
    {
      title: "DevOps & deployment",
      description:
        "Containerized workflows and reliable deployments with Docker, Vercel and Google Cloud.",
    },
  ] as OfferingItem[],

  projectsLead:
    "End-to-end delivery with an enterprise mindset: full software lifecycles, dynamic interaction and enterprise integration.",

  keyProjects: [
    {
      year: "2026",
      title: "Procurement Management System",
      description:
        "Enterprise microservices platform for securing and automating large-scale procurement workflows.",
      tech: "ASP.NET Core, Next.js, RabbitMQ, PostgreSQL",
      linkText: "Repo on GitHub",
      linkHref: "https://github.com/FuadTesfaye",
    },
    {
      year: "2025",
      title: "Keyshare",
      description:
        "A fully secure CLI for sharing internal secrets using short-lived, one-time generation codes.",
      tech: "Node.js, CLI, AES-256",
      linkText: "Package on npm",
      linkHref: "https://www.npmjs.com/",
    },
    {
      year: "2024",
      title: "Modern Developer Portfolio",
      description:
        "A high-performance portfolio with interactive GSAP animations, particle effects and rich 3D elements, focused on premium UI/UX.",
      tech: "React, GSAP, Three.js, Tailwind CSS",
      linkText: "Repo on GitHub",
      linkHref: "https://github.com/FuadTesfaye",
    },
  ] as ProjectItem[],

  moreProjectsSummary:
    "2026: AI Intelligence Platform, Autonomous QA Runtime, Multi-Platform Packaging CLI, Tactical Coding Protocol, AI-Powered Platform. 2025: AI Healthcare Platform, AI Analytics Dashboard, AI Agents Platform, Arabic Literary Platform, Premium Web Platform, Employment Platform, Operating System UI.",

  experienceLead:
    "Work, education and growth, from MERN developer to Chief Technology Officer.",

  experienceList: [
    {
      period: "Jan 2026 – now",
      role: "Chief Technology Officer",
      organization: "Zion Software Agency",
      bullets: [
        "Leading technical strategy and overseeing the software development lifecycle for high-impact projects.",
        "Managing engineering teams and architectural decisions for scalable, enterprise-grade solutions.",
        "Driving innovation and technical excellence across the agency's product portfolio.",
      ],
    },
    {
      period: "Aug 2025 – now",
      role: "Full-Stack Developer",
      organization: "Fusion IT Consultancy",
      bullets: [
        "Developing highly scalable web applications with Express.js and modern frontend frameworks.",
        "Focused on responsive UI implementations and clean component API design.",
        "Collaborating in hybrid environments to deliver production-ready code.",
      ],
    },
    {
      period: "Nov 2023 – Sep 2025",
      role: "MERN Stack Developer",
      organization: "Sky-hub Technology Solutions",
      bullets: [
        "Built and maintained diverse client projects on the MERN stack.",
        "Optimized database queries, application performance and MongoDB interactions.",
        "Delivered clean component architecture and progressive enhancement strategies.",
      ],
    },
    {
      period: "2022 – now",
      role: "Software Engineering student",
      organization: "Ethiopian Public Service University",
      bullets: [
        "Building foundational engineering knowledge for real-world software development.",
        "Structured coursework on web systems, algorithms and application architecture.",
      ],
      location: "Addis Ababa, Ethiopia",
    },
    {
      period: "Summer 2025",
      role: "National Ethio Cyber Talent Summer Camp",
      organization: "INSA",
      bullets: [
        "Completed a competitive summer program focused on cybersecurity and coding.",
        "Refined hands-on skills with security tools, networking protocols and modern digital technologies.",
      ],
      location: "Information Network Security Administration, Addis Ababa",
    },
  ] as ExperienceItem[],

  contactLead:
    "Whether you have a question or an idea you want to build, I'm always open to collaborating.",
};
