// ============================================================
// portfolioData.js — Centralized configuration for Mahalaxmi Somisetty's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Mahalaxmi Somisetty",
  firstName: "Mahalaxmi",
  brandName: "Mahalaxmi Somisetty",
  title: "Full-Stack & Agentic AI Developer",
  location: "Hyderabad, Telangana",
  phone: "+91 94916 39131",
  emails: {
    primary: "mahalaxmi1246@gmail.com",
  },
  summary:
    "Final-year B.Tech IT student building intelligent systems — from multi-agent data analysts to RAG-powered document assistants. Strong full-stack and data engineering fundamentals paired with a focus on Generative AI and agentic pipelines.",
  // NOTE: this file must exist at /public/Mahalaxmi_Somisetty_Resume.pdf — see build notes.
  resumeUrl: "/Mahalaxmi_Somisetty_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/mahalaxmi246",
  linkedin: "https://www.linkedin.com/in/mahalaxmi-somisetty-736719319",
  leetcode: "https://leetcode.com/u/mahalaxmi_somisetty/",
};

export const heroContent = {
  greeting: "Hi, I'm Mahalaxmi",
  titleHighlight: "Full-Stack & Agentic AI Developer",
  subtitle:
    "I build systems that reason, retrieve, and self-heal — full-stack engineering specializing in agentic AI pipelines, RAG systems, and production-grade data platforms.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:mahalaxmi1246@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Mahalaxmi,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Mahalaxmi_Somisetty_Resume.pdf" },
  // Agent pipeline steps — available for a future dedicated visual on the Hero or Projects section.
  pipeline: [
    "Query Planner",
    "Code Generator",
    "Executor",
    "Error Fixer",
    "Visualizer",
    "Insight Narrator",
  ],
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mahalaxmi Somisetty</span>, a final-year B.Tech Information Technology student at VNR VJIET, Hyderabad, building intelligent, self-healing AI systems and clean, scalable full-stack applications.`,
  paragraphExtra:
    "My focus is Generative AI and agentic systems — pipelines where LLM agents plan, write code, execute it, catch their own errors, and narrate insights back to the user — paired with solid full-stack and data engineering fundamentals.",
  techStack: ["React", "Python", "Agentic AI"],
  // Resume/LeetCode highlights — surfaced under the bio.
  highlights: [
    "Ranked among the Top 75 coders in Amazon HackOn, competing against thousands of students nationwide",
    "Maintained a 9.23 CGPA throughout B.Tech (IT) while independently delivering 4+ end-to-end projects",
    "Solved 250+ coding problems on LeetCode spanning arrays, binary search, linked lists, stacks, trees, graphs, and DP",
  ],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack and AI-powered applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends, agentic AI pipelines, and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Languages",
      skills: [
        { name: "C++", level: 85 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 75 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML", level: 92 },
        { name: "CSS", level: 88 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vite", level: 85 },
        { name: "Recharts", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "FastAPI", level: 88 },
        { name: "REST APIs", level: 90 },
        { name: "Async Programming", level: 82 },
        { name: "Dependency Injection", level: 80 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL Server", level: 85 },
        { name: "SQLite", level: 85 },
        { name: "Firebase", level: 78 },
        { name: "ChromaDB", level: 82 },
        { name: "Vector Databases", level: 82 },
      ],
    },
    {
      title: "Data & ETL",
      skills: [
        { name: "ETL Pipelines", level: 85 },
        { name: "Data Warehousing", level: 82 },
        { name: "Medallion Architecture", level: 80 },
        { name: "T-SQL", level: 82 },
        { name: "Star Schema", level: 80 },
        { name: "Data Modeling", level: 82 },
      ],
    },
    {
      title: "AI / Gen AI",
      skills: [
        { name: "RAG", level: 90 },
        { name: "Agentic AI Systems", level: 90 },
        { name: "LangChain", level: 88 },
        { name: "HuggingFace", level: 82 },
        { name: "LLM Integration", level: 88 },
        { name: "Embedding Pipelines", level: 84 },
        { name: "Prompt Engineering", level: 88 },
        { name: "Groq", level: 82 },
      ],
    },
    {
      title: "Tools & Infra",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker (basics)", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "Render", level: 82 },
        { name: "VS Code", level: 92 },
        { name: "SSMS", level: 80 },
        { name: "Linux", level: 78 },
      ],
    },
    {
      title: "Concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "OOP", level: 88 },
        { name: "DBMS", level: 85 },
        { name: "Operating Systems", level: 80 },
        { name: "System Design", level: 78 },
        { name: "REST", level: 88 },
      ],
    },
  ],
};

// Soft Skills — PLACEHOLDER. Replace with your own list when ready.
export const softSkillsList = [
  { name: "Communication", icon: "💬", desc: "Clear, structured communication across technical and non-technical audiences." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, modular pieces." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks, tools, and AI stacks as projects demand." },
  { name: "Time Management", icon: "⏰", desc: "Balancing coursework with shipping multiple end-to-end projects on schedule." },
];

export const projects = [
  {
    id: "autonomous-data-analyst",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Autonomous Data Analyst",
    description:
      "An end-to-end autonomous data analyst powered by a 6-agent LangChain pipeline (Query Planner → Code Generator → Executor → Error Fixer → Visualizer → Insight Narrator). Users upload any CSV and ask questions in plain English — the system writes Pandas code, self-heals on errors, renders Recharts visualizations, and narrates insights automatically.",
    techTags: ["React.js", "FastAPI", "LangChain", "Groq", "ChromaDB", "HuggingFace"],
    highlights: [
      "6-agent LangChain pipeline with a self-healing Executor + Error Fixer loop that retries failed code autonomously",
      "Groq (llama-3.3-70b) as the LLM backbone with HuggingFace all-MiniLM-L6-v2 embeddings and ChromaDB for schema-aware column selection",
    ],
    links: {
      github: "https://github.com/mahalaxmi246/autonomous-data-analyst",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "rag-pdf-chatbot",
    number: "02",
    badge: null,
    title: "RAG + PDF Conversational AI Chatbot",
    description:
      "A production-grade full-stack AI chatbot using Retrieval-Augmented Generation that ingests PDF documents, indexes content into a vector store, and delivers grounded, cited responses — scalable to enterprise document intelligence use cases.",
    techTags: ["React.js", "FastAPI", "Vector DB", "LLM"],
    highlights: [
      "Persistent multi-turn conversation history so the model maintains context across sessions",
      "Streaming React frontend with a FastAPI backend orchestrating upload, chunking, embedding, and retrieval end-to-end",
    ],
    links: {
      github: "https://github.com/mahalaxmi246/rag-q-a-chatbot-conversational",
      demo: "https://rag-q-a-chatbot-conversational.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "latency-lens",
    number: "03",
    badge: null,
    title: "Latency Lens — API Performance Analyzer",
    description:
      "A full-stack REST API testing and analytics platform supporting GET/POST/PUT/PATCH/DELETE with a real-time dashboard and persistent request history.",
    techTags: ["React.js", "FastAPI", "SQLite"],
    highlights: [
      "10x reduction in 10-request latency (from ~10s to ~1s) via concurrent execution",
      "P95/P99 tail latency tracking with SLA threshold alerting for outlier detection",
      "React deployed on Vercel, FastAPI backend on Render",
    ],
    links: {
      github: "https://github.com/mahalaxmi246/latency_lens_api_performance_analyzer",
      demo: "https://latency-lens.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "sql-data-warehouse",
    number: "04",
    badge: null,
    title: "SQL Data Warehouse & Analytics Pipeline",
    description:
      "A Bronze → Silver → Gold medallion data warehouse with end-to-end ETL pipelines that ingest, clean, and transform multi-source data into an optimized star schema for analytical querying.",
    techTags: ["SQL Server", "T-SQL", "ETL", "Medallion Architecture"],
    highlights: [
      "20+ complex stored procedures and analytics queries covering KPIs, customer segmentation, and YoY trends",
    ],
    links: {
      github: "https://github.com/mahalaxmi246/sql-data-warehouse-project",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Generative AI with LangChain & HuggingFace",
      issuer: "Udemy (Krish Naik)",
      detail: "RAG pipelines, LLM integration, vector stores, deploying production Gen AI applications",
      icon: "🧠",
      // Place the PDF at public/certificates/langchain-huggingface.pdf
      file: "/certificates/langchain-huggingface.pdf",
    },
    {
      name: "FastAPI",
      issuer: "Udemy",
      detail: "Production-grade REST APIs, async programming, dependency injection, and database integration",
      icon: "⚡",
      // Place the PDF at public/certificates/fastapi.pdf
      file: "/certificates/fastapi.pdf",
    },
  ],
  // No "view all" link provided yet — leave empty to hide the CTA button, or add a Drive/Credly link later.
  viewAllUrl: "",
};

export const education = {
  degree: "B.Tech – Information Technology",
  institution: "VNR VJIET, Hyderabad",
  cgpa: "9.23",
  graduation: "2027",
  twelfth: "Higher Secondary – Sri Chaitanya Junior College, Hyderabad (98%)",
};

export const footerContent = {
  taglines: [
    "Full-Stack & Agentic AI Development",
    "React · FastAPI · LangChain",
    "RAG · Data Platforms · ETL",
  ],
  credential: "B.Tech IT · CGPA 9.23",
  copyright: `© ${new Date().getFullYear()} Mahalaxmi Somisetty | Built with React`,
};

export const contactContent = {
  heading: "Let's build something",
  subhead: "Open to full-stack and AI engineering roles, internships, and collaborations.",
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
// Not configured yet — Contact form falls back to a pre-filled mailto link automatically.
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
