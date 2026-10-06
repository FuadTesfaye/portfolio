export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  category: "SYSTEMS" | "AI" | "PLATFORMS";
  categoryGroup: "AI & Autonomous" | "Systems & Cloud" | "Platforms & Web";
  year: string;
  badge?: string;
  summary: string;
  description: string;
  bullets?: string[];
  tech: string[];
  launchUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  organization: string;
  location: string;
  workType: string;
  role: string;
  period: string;
  duration: string;
  bullets: string[];
  techTags: string[];
}

export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  bullets: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Fuad Tesfaye",
    arabicName: "فُؤَيْد",
    title: "Full-Stack AI Engineer — Backend & Cloud Systems",
    nowStatus:
      "Founding Engineer, Zion · Full-Stack, INSA · Winner, Vercel v0 Global Hackathon",
    location: "Addis Ababa, Ethiopia",
    timeZone: "Africa/Addis_Ababa (UTC+3)",
    email: "fuadtesfaye24@gmail.com",
    phone: "+251 92 411 3086",
    status: "OPEN TO REMOTE",
    githubUrl: "https://github.com/FuadTesfaye",
    linkedinUrl: "https://www.linkedin.com/in/fuad-tesfaye/",
    twitterUrl: "https://x.com/FuadTesfaye",
    avatarUrl: "https://avatars.githubusercontent.com/u/155218084?v=4",
  },

  navLinks: [
    { label: "Activity", href: "#activity" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
  ],

  externalLinks: [
    { label: "GitHub ↗", href: "https://github.com/FuadTesfaye" },
    { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/fuad-tesfaye/" },
    { label: "X ↗", href: "https://x.com/FuadTesfaye" },
    { label: "Email ↗", href: "mailto:fuadtesfaye24@gmail.com" },
  ],

  about: {
    lead: "Full-stack and backend engineer with 3+ years designing production-grade, distributed, and AI-native systems across microservices, event-driven architectures, and high-concurrency environments.",
    paragraphs: [
      "Built mission-critical systems for national programs (fleet management, procurement) handling thousands of transactions.",
      "Winner of the Vercel v0 Global Hackathon (AlgoWars) out of 8,000+ submissions worldwide.",
      "Deeply skilled in Next.js, Node.js/Express, Spring Boot, C#/.NET, Python, and multi-agent AI orchestration.",
      "Experienced leading engineering teams, driving technical strategy, and delivering end-to-end solutions from architecture to cloud deployment.",
    ],
    metadata: [
      { label: "Location", value: "Addis Ababa, Ethiopia" },
      { label: "Time Zone", value: "Africa/Addis_Ababa (UTC+3)" },
      { label: "Email", value: "fuadtesfaye24@gmail.com", href: "mailto:fuadtesfaye24@gmail.com" },
      { label: "Phone", value: "+251 92 411 3086", href: "tel:+251924113086" },
    ],
  },

  skillsCategories: [
    {
      title: "Frontend",
      subtitle: "Frameworks, UI/UX, animation",
      skills: [
        "React",
        "Next.js",
        "Vite",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "GSAP",
        "Three.js",
      ],
    },
    {
      title: "Backend",
      subtitle: "APIs, services, databases",
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "Laravel",
        "ASP.NET Core",
        "Spring Boot",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Microservices",
        "RESTful API Design",
      ],
    },
    {
      title: "Tools & Cloud",
      subtitle: "Build, deploy, collaborate",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Google Cloud",
        "Vercel",
        "VS Code",
        "Cursor",
      ],
    },
    {
      title: "AI Integration",
      subtitle: "LLMs, prompts, automation",
      skills: [
        "OpenAI API",
        "Groq",
        "Hugging Face",
        "OpenRouter",
        "LLM Integration",
        "Prompt Engineering",
        "Automation",
      ],
    },
  ] as SkillCategory[],

  experienceList: [
    {
      organization: "Zion Software Agency",
      location: "Addis Ababa, Ethiopia",
      workType: "Hybrid",
      role: "Founding Engineer",
      period: "01.2026—Present",
      duration: "10m",
      bullets: [
        "Lead technical strategy, system architecture, and client scoping across enterprise engagements.",
        "Spearheaded the technical architecture proposal for Teklehaimanot General Hospital’s next-generation Health Information Management System (HIMS/EHR), designing FHIR-aligned data schemas, role-based access control (RBAC), and HL7 integration pathways.",
        "Mentoring and technically guiding a cohort of 30 software interns, conducting code reviews, architecture workshops, and pair-programming sessions across PERN-stack (Postgres, Express, React, Node) finance systems and the agency's Zion ERP flagship product.",
      ],
      techTags: [
        "Technical Strategy",
        "System Architecture",
        "HIMS/EHR (FHIR/HL7)",
        "Zion ERP",
        "PERN Stack",
        "PostgreSQL",
        "Express.js",
        "React",
        "Node.js",
        "Engineering Mentorship",
      ],
    },
    {
      organization: "INSA (Information Network Security Administration)",
      location: "Addis Ababa, Ethiopia",
      workType: "On-site",
      role: "Full-Stack Developer (Fleet-Management & Procurement)",
      period: "06.2025—Present",
      duration: "1y 5m",
      bullets: [
        "Engineered core backend services for a nationwide fleet-management platform using Spring Boot and microservices architecture, integrating Kafka for real-time telemetry streaming and PostgreSQL for persistence.",
        "Built high-performance, accessible frontend dashboards with Next.js (App Router), TypeScript, and Tailwind CSS, reducing operator triage time across high-density vehicle tracking views.",
        "Architected and developed a mission-critical procurement system for national agency workflows using C# / .NET microservices, RabbitMQ for asynchronous event propagation, and PostgreSQL, ensuring ACID compliance across multi-party approval chains.",
        "Designed clean RESTful and event-driven APIs connecting Next.js clients to distributed .NET and Spring Boot services, enforcing strict data contracts and sub-100ms response targets.",
      ],
      techTags: [
        "Spring Boot",
        "C# / .NET",
        "Microservices",
        "Apache Kafka",
        "RabbitMQ",
        "PostgreSQL",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Event-Driven Architecture",
      ],
    },
    {
      organization: "Fusion IT Consultancy",
      location: "Addis Ababa, Ethiopia",
      workType: "Hybrid",
      role: "Full-Stack Developer",
      period: "08.2025—05.2026",
      duration: "10m",
      bullets: [
        "Developed highly scalable web applications with Express.js and modern frontend frameworks.",
        "Engineered CRM systems and role-based access control (RBAC) with clean relational query optimization.",
        "Collaborated in hybrid environments to deliver production-ready, maintainable code with Tailwind CSS.",
      ],
      techTags: [
        "Express.js",
        "React",
        "Node.js",
        "TypeScript",
        "CRM Systems",
        "Relational Queries",
        "Authentication & RBAC",
        "Tailwind CSS",
      ],
    },
  ] as ExperienceItem[],

  educationList: [
    {
      institution: "Ethiopian Public Service University",
      period: "2022—2026 (Expected)",
      degree: "Software Engineering Coursework · Software Engineering",
      bullets: [
        "Rigorous coursework emphasizing distributed systems, algorithm design, data structures, and enterprise architecture.",
        "Hands-on practical engineering translating theoretical computer science into production web platforms.",
      ],
      tags: [
        "Software Engineering",
        "Distributed Systems",
        "Algorithms",
        "Data Structures",
        "Application Architecture",
        "Clean Architecture",
      ],
    },
    {
      institution: "INSA (Information Network Security Administration)",
      period: "07.2025—09.2025",
      degree: "National Ethio Cyber Talent Summer Camp · Cybersecurity & Coding",
      bullets: [
        "Completed a competitive summer program focused on cybersecurity, penetration testing, and secure application development.",
        "Refined hands-on skills with defensive architectures, network protocols, and security audits.",
      ],
      tags: [
        "Cybersecurity",
        "Networking Protocols",
        "Security Audits",
        "Penetration Testing",
        "Defensive Architecture",
      ],
    },
  ] as EducationItem[],

  projectCategories: [
    { label: "All Works", count: 20 },
    { label: "AI & Autonomous", count: 9 },
    { label: "Systems & Cloud", count: 6 },
    { label: "Platforms & Web", count: 5 },
  ],

  projects: [
    {
      id: "algowars",
      number: "01",
      title: "AlgoWars: Neon Syntax",
      category: "SYSTEMS",
      categoryGroup: "Systems & Cloud",
      year: "2026",
      badge: "Vercel Hackathon Winner",
      summary:
        "Global Vercel v0 Hackathon Winner (8,000+ submissions) — server-authoritative deterministic coding strategy with Google Gemini AI tactics",
      description:
        "Winner of the global Vercel v0 Hackathon among 8,000+ developer submissions worldwide.",
      bullets: [
        "Built a real-time multiplayer tactical coding strategy game where players author autonomous algorithms to command units across a dynamic neon grid.",
        "Engineered a server-authoritative deterministic simulation engine with zero-latency client prediction, ensuring cheat-proof competitive play.",
        "Integrated Google Gemini via the Vercel AI SDK to generate dynamic game scenarios, analyze player tactics, and power an adaptive AI adversary.",
      ],
      tech: [
        "Vercel AI SDK",
        "Google Gemini",
        "Server-Authoritative",
        "TypeScript",
        "Deterministic Simulation",
        "Game Engine",
      ],
      launchUrl: "https://github.com/FuadTesfaye",
      githubUrl: "https://github.com/FuadTesfaye",
      featured: true,
    },
    {
      id: "gitbridge",
      number: "02",
      title: "GitBridge",
      category: "SYSTEMS",
      categoryGroup: "Systems & Cloud",
      year: "2026",
      badge: "Open Source CLI (npm)",
      summary:
        "Zero-wrapper Git context manager with 225 passing tests, OS keyring + AES-256-GCM, and automated author identity mapping",
      description:
        "A zero-wrapper Git context manager that automatically maps repositories to author identities, provider accounts, authentication credentials, and SSH configurations.",
      bullets: [
        "Engineered with 225 unit and integration tests passing; 100% offline-first with zero telemetry.",
        "Secure credential protection combining native OS keyring storage with AES-256-GCM encrypted fallbacks.",
        "Intelligent features including decision-tree transparency (gb explain), proactive suggestions, typo auto-correction, and built-in security audits (gb sec).",
      ],
      tech: [
        "TypeScript 5.8",
        "CLI",
        "AES-256-GCM",
        "OS Keyring",
        "Git Internals",
        "SSH Management",
        "npm Package",
      ],
      launchUrl: "https://www.npmjs.com/package/gitbridge",
      githubUrl: "https://github.com/FuadTesfaye/gitbridge",
      featured: true,
    },
    {
      id: "ilmflow-state",
      number: "03",
      title: "IlmFlow State",
      category: "PLATFORMS",
      categoryGroup: "Platforms & Web",
      year: "2026",
      badge: "Enterprise Event OS",
      summary:
        "Enterprise Islamic Event OS with multi-day registration, proctored test engine with anti-cheat telemetry, and 100-pt rubric grading",
      description:
        "Enterprise-grade, data-driven Islamic Event and Competition Operating System engineered for summits, Quran championships, and secretariat administration.",
      bullets: [
        "Modular architecture with dynamic event CMS, multi-day registration forms, pricing math, and waitlist queues.",
        "Competition engine featuring proctored exams with authoritative timers, anti-cheat telemetry, negative marking, and 100-point rubric evaluation.",
        "Live gate check-in with dynamic SVG QR lanyards and real-time gate throughput velocity tracking.",
      ],
      tech: [
        "Next.js 16.3",
        "Turbopack",
        "TypeScript",
        "Drizzle ORM",
        "Bun",
        "PostgreSQL",
        "Tailwind CSS v4",
      ],
      launchUrl: "https://github.com/FuadTesfaye/ilmflow-state",
      githubUrl: "https://github.com/FuadTesfaye/ilmflow-state",
      featured: true,
    },
    {
      id: "continuity",
      number: "04",
      title: "Continuity",
      category: "AI",
      categoryGroup: "AI & Autonomous",
      year: "2026",
      summary: "AI agent orchestrator maintaining stateful memory and autonomous task pipelines across distributed sessions.",
      description: "Autonomous memory and continuity agent platform.",
      tech: ["Python", "FastAPI", "OpenAI", "LangChain", "Redis"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "aria",
      number: "05",
      title: "ARIA — Resort Intelligence Layer",
      category: "AI",
      categoryGroup: "AI & Autonomous",
      year: "2025",
      summary: "Autonomous multi-agent intelligence layer orchestrating luxury hospitality logistics and guest concierge automation.",
      description: "Resort intelligence and operations platform.",
      tech: ["Next.js", "Python", "Groq", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "muwasa",
      number: "06",
      title: "Muwāsā (مُوَاسَاة)",
      category: "AI",
      categoryGroup: "AI & Autonomous",
      year: "2026",
      summary: "Empathetic emotional support AI platform grounded in contextual understanding and ethical reasoning.",
      description: "Culturally-aware AI wellness and guidance application.",
      tech: ["TypeScript", "Next.js", "OpenRouter", "Drizzle ORM"],
      githubUrl: "https://github.com/FuadTesfaye/Muwasa",
      featured: false,
    },
    {
      id: "aiqa",
      number: "07",
      title: "AIQA — Autonomous QA Runtime",
      category: "AI",
      categoryGroup: "AI & Autonomous",
      year: "2026",
      summary: "Self-healing test generation runtime that continuously explores web applications and authors robust E2E test suites.",
      description: "Autonomous software testing and verification engine.",
      tech: ["Playwright", "TypeScript", "Node.js", "Claude API"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "omni-mcp",
      number: "08",
      title: "Omni-MCP",
      category: "AI",
      categoryGroup: "AI & Autonomous",
      year: "2026",
      summary: "Model Context Protocol server connecting developer tools, local file trees, and cloud telemetry directly to LLM runtimes.",
      description: "Unified Model Context Protocol ecosystem.",
      tech: ["Model Context Protocol", "TypeScript", "Node.js", "CLI"],
      githubUrl: "https://github.com/FuadTesfaye/omni-mcp",
      featured: false,
    },
    {
      id: "insa-fleet",
      number: "09",
      title: "INSA Fleet-Management Platform",
      category: "SYSTEMS",
      categoryGroup: "Systems & Cloud",
      year: "2025",
      summary: "Nationwide enterprise fleet tracking and telemetry dispatch platform built for high-throughput public sector transit.",
      description: "Nationwide telemetry and fleet dispatch system.",
      tech: ["Spring Boot", "Kafka", "PostgreSQL", "Next.js", "Microservices"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "insa-procurement",
      number: "10",
      title: "INSA Procurement Management System",
      category: "SYSTEMS",
      categoryGroup: "Systems & Cloud",
      year: "2026",
      summary: "Enterprise microservices platform securing multi-party government procurement workflows with strict ACID verification.",
      description: "National procurement and bidding management platform.",
      tech: ["ASP.NET Core", "RabbitMQ", "PostgreSQL", "Next.js"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "keyshare",
      number: "11",
      title: "Keyshare",
      category: "SYSTEMS",
      categoryGroup: "Systems & Cloud",
      year: "2025",
      summary: "Zero-knowledge CLI for exchanging sensitive tokens and credentials with one-time decryption keys.",
      description: "Cryptographic secrets sharing CLI.",
      tech: ["Node.js", "CLI", "AES-256", "Crypto"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "dagmawi-dispatch",
      number: "12",
      title: "The Dagmawi Dispatch",
      category: "AI",
      categoryGroup: "AI & Autonomous",
      year: "2026",
      summary: "Automated historical analysis and editorial synthesizer producing deep geopolitical digests using agent swarms.",
      description: "AI-driven historical research dispatch.",
      tech: ["Next.js", "Python", "OpenAI", "Supabase"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "web2app",
      number: "13",
      title: "web2app",
      category: "SYSTEMS",
      categoryGroup: "Systems & Cloud",
      year: "2026",
      summary: "Automated packaging CLI converting progressive web applications into native desktop binaries with offline cache fallbacks.",
      description: "Web application desktop packaging framework.",
      tech: ["Rust", "Tauri", "TypeScript", "Vite"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "biomatch",
      number: "14",
      title: "BioMatch",
      category: "AI",
      categoryGroup: "AI & Autonomous",
      year: "2025",
      summary: "AI-driven talent and role alignment engine analyzing developer commit graphs and technical architecture samples.",
      description: "Engineering profile synthesis platform.",
      tech: ["Python", "FastAPI", "Vector Embeddings", "PostgreSQL"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "safehire",
      number: "15",
      title: "SafeHire Ethiopia",
      category: "PLATFORMS",
      categoryGroup: "Platforms & Web",
      year: "2025",
      summary: "Verified employment marketplace featuring cryptographic credential verification and tamper-evident background records.",
      description: "National employment trust platform.",
      tech: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "developer-portfolio",
      number: "16",
      title: "Modern Developer Portfolio",
      category: "PLATFORMS",
      categoryGroup: "Platforms & Web",
      year: "2024",
      summary: "High-performance portfolio with interactive GSAP animations, particle effects, and 3D scenes focused on UI/UX craft.",
      description: "Interactive portfolio with rich visual craft.",
      tech: ["React", "GSAP", "Three.js", "Tailwind CSS"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "ahl-al-shir",
      number: "17",
      title: "Ahl Al-Shir (أهل الشعر)",
      category: "PLATFORMS",
      categoryGroup: "Platforms & Web",
      year: "2026",
      summary: "Digital archive preserving classical Arabic literature and poetic meters with typographic ligature rendering.",
      description: "Literary heritage digital repository.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Amiri Typeface"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "agentavis",
      number: "18",
      title: "AgentAvis Insights",
      category: "AI",
      categoryGroup: "AI & Autonomous",
      year: "2025",
      summary: "Autonomous enterprise intelligence engine transforming fragmented customer feedback into structured action items.",
      description: "Feedback synthesis and clustering engine.",
      tech: ["Python", "LLM Pipelines", "Redis", "Next.js"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "compute",
      number: "19",
      title: "COMPUTE",
      category: "AI",
      categoryGroup: "AI & Autonomous",
      year: "2025",
      summary: "Distributed compute broker scheduling spot AI inference across decentralized serverless worker nodes.",
      description: "Decentralized machine learning inference dispatcher.",
      tech: ["Go", "Docker", "WebSockets", "TypeScript"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
    {
      id: "sovereign-os",
      number: "20",
      title: "Sovereign OS",
      category: "PLATFORMS",
      categoryGroup: "Platforms & Web",
      year: "2025",
      summary: "Browser-based desktop workstation environment providing sandbox window management and virtual shell access.",
      description: "Web-based operating system UI shell.",
      tech: ["Next.js", "React Windowing", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/FuadTesfaye",
      featured: false,
    },
  ] as ProjectDetail[],
};
