import {
  Award,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarClock,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow
} from "lucide-react";
import type { BlogNote, Project, SkillGroup, SocialLink, Stat, TimelineItem } from "@/types/profile";

export const profile = {
  name: "Omkar Pandurang Jadhav",
  shortName: "Omkar Jadhav",
  role: "Java Backend Developer",
  headline: "Building secure microservices, payment platforms, and automation systems with product-minded engineering.",
  summary:
    "Java Backend Developer with 2.3 years of experience designing scalable Spring Boot applications, REST APIs, microservices, and SQL/NoSQL data layers. Strong in debugging, Agile delivery, API testing, Dockerized services, security, and production problem solving.",
  location: "Pune, India",
  email: "omkarj.9900@gmail.com",
  phone: "+91 9503955674",
  experienceYears: "2.3",
  availability: "Available for Java Backend and Full Stack opportunities",
  resumePath: "/resume/omkar-jadhav-resume.pdf",
  linkedin: "https://www.linkedin.com/in/omkar-jadhav09/",
  github: {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Omkar9911",
    url: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/Omkar9911"
  },
  medium: "https://medium.com/@omkarj.9900",
  leetcode: "https://leetcode.com/u/omkarj9900/",
  rotatingTitles: [
    "Spring Boot Microservices Engineer",
    "REST API & Payments Specialist",
    "Security-Minded Backend Developer",
    "Automation & Observability Builder",
    "Product-Focused Java Engineer"
  ]
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: BriefcaseBusiness,
    external: true
  },
  {
    label: "GitHub",
    href: profile.github.url,
    icon: Code2,
    external: true
  },
  {
    label: "LeetCode",
    href: profile.leetcode,
    icon: Laptop,
    external: true
  },
  {
    label: "Medium",
    href: profile.medium,
    icon: BookOpen,
    external: true
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail
  }
];

export const heroStats: Stat[] = [
  {
    label: "Experience",
    value: 2.3,
    suffix: " yrs",
    decimals: 1,
    detail: "building Java backend systems"
  },
  {
    label: "Response",
    value: 40,
    suffix: "%",
    detail: "reported response-time improvement"
  },
  {
    label: "Deployments",
    value: 35,
    suffix: "%",
    detail: "reported reduction in deployment time"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Engineering",
    description: "Production-focused Java services, API design, and domain logic.",
    skills: ["Java 8", "Java 11", "Java 17", "Spring Boot", "Spring MVC", "REST APIs", "Microservices", "Feign Client"],
    tone: "blue"
  },
  {
    title: "Data & Persistence",
    description: "Relational and document databases with secure data handling.",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQL", "NoSQL", "Encryption", "Data Modeling", "Repository Patterns"],
    tone: "cyan"
  },
  {
    title: "Security & Quality",
    description: "Secure access flows, API verification, and resilient release habits.",
    skills: ["Spring Security", "JWT", "RBAC", "JUnit", "Swagger", "Postman", "Debugging", "Problem Solving"],
    tone: "purple"
  },
  {
    title: "DevOps & Platform",
    description: "Containerized services, artifact management, and observability.",
    skills: ["Docker", "Maven", "Git", "GitHub", "Nexus", "Zipkin", "Jaeger", "OpenTelemetry"],
    tone: "blue"
  },
  {
    title: "Frontend Foundations",
    description: "UI fundamentals used to collaborate across web product teams.",
    skills: ["HTML5", "CSS3", "Bootstrap", "Responsive UI", "Accessibility Basics", "API Integration"],
    tone: "white"
  },
  {
    title: "Growth Radar",
    description: "Clearly labeled expansion areas aligned with full-stack and cloud roles.",
    skills: ["React", "Node.js", "AWS", "JMeter", "Selenium", "Cloud Architecture", "CI/CD", "Performance Testing"],
    tone: "cyan"
  }
];

export const experience: TimelineItem[] = [
  {
    title: "Java Developer",
    organization: "1GEN",
    period: "Nov 2023 – Mar 2026",
    location: "Pune, India",
    description:
      "Owned backend services across web, Android, and iOS platforms with a focus on Spring Boot APIs, microservices, security, and production reliability.",
    highlights: [
      "Designed, architected, and deployed scalable REST APIs using Spring Boot and Java 17.",
      "Improved system response time by 40% through API testing, debugging, Swagger validation, and Postman workflows.",
      "Supported migration from monolithic architecture to Dockerized microservices, improving scalability by 60% and reducing deployment time by 35%.",
      "Implemented Spring Security, JWT, and RBAC authentication/authorization patterns for enterprise-grade access control.",
      "Configured Nexus for centralized artifact management and participated in Agile ceremonies with cross-functional teams."
    ]
  }
];

export const journey: TimelineItem[] = [
  ...experience,
  {
    title: "Master of Computer Applications",
    organization: "Bharati Vidyapeeth",
    period: "2022 – 2024",
    location: "Pune, India",
    description: "Built a strong computer science foundation with a CGPA of 8.82 / 10.0.",
    highlights: ["Focused on software engineering fundamentals, data structures, databases, and application development."]
  },
  {
    title: "Java Full Stack Developer Certification",
    organization: "Symbiosis Skill and Professional University, supported by Capgemini",
    period: "Jan 2023 – Jun 2023",
    description: "Completed a Java full-stack training program before moving into professional backend development.",
    highlights: ["Strengthened Java, web fundamentals, backend development, and industry delivery practices."]
  }
];

export const projects: Project[] = [
  {
    title: "Fintech Microfinance Platform",
    type: "Microfinance Fintech Platform",
    summary:
      "A secure backend platform for microfinance workflows with payment gateway integrations, microservices, encrypted data handling, and observability.",
    context:
      "Built for financial workflows where transaction reliability, data security, traceability, and API correctness are business-critical.",
    challenge:
      "Payment systems need consistent API contracts, safe failure handling, strong data protection, and reliable visibility across distributed services.",
    solution:
      "Integrated PayPal, Razorpay, and PhonePe APIs; implemented MongoDB encryption/decryption protocols; built Dockerized Spring Boot microservices; and added distributed tracing with Zipkin, Jaeger, and OpenTelemetry.",
    result:
      "Improved platform confidence through secure transaction flows, observability, and JUnit-backed reliability for production backend services.",
    stack: ["Java 17", "Spring Boot", "Microservices", "Docker", "MongoDB", "JUnit", "Razorpay", "PayPal", "PhonePe", "OpenTelemetry"],
    metrics: ["Multiple payment gateways", "Dockerized services", "Distributed tracing", "JUnit reliability checks"],
    architecture: ["API Gateway-ready service boundaries", "Payment provider integration layer", "Encrypted persistence", "Tracing-first observability"],
    category: "payments"
  },
  {
    title: "AI-Powered SaaS Automation Platform",
    type: "AI-SaaS platform",
    summary:
      "Subscription, coupon, PDF, social automation, chatbot, and campaign automation features for an AI-enabled SaaS product.",
    context:
      "Built inside a SaaS environment where payments, retention, marketing automation, and support efficiency directly influence product growth.",
    challenge:
      "The platform needed reliable subscription flows, fewer payment issues, faster campaign operations, and automation that reduced repetitive work.",
    solution:
      "Developed subscription payment APIs, coupon workflow logic, password-protected PDF generation, social media API integrations, n8n email automation, chatbot capabilities, and churn-prediction workflows.",
    result:
      "Reported improvements included 60% higher campaign efficiency, 80% automated customer query handling, 50% lower support workload, and 70% faster response time.",
    stack: ["Java", "Spring Boot", "REST APIs", "n8n", "PDF Generation", "JWT", "Social APIs", "Automation", "MongoDB"],
    metrics: ["60% campaign efficiency gain", "80% automated query handling", "50% workload reduction", "70% response-time improvement"],
    architecture: ["Subscription service", "Coupon workflow engine", "Automation orchestration", "Secure document generation"],
    category: "ai"
  },
  {
    title: "Enterprise Microservices Modernization",
    type: "Backend architecture initiative",
    summary:
      "A migration initiative that moved monolithic capabilities toward Dockerized microservices with improved deployment and scaling behavior.",
    context:
      "Platform teams needed more modular services, more predictable deployments, and a path toward independent scaling.",
    challenge:
      "Monolithic delivery slowed releases and made service ownership, fault isolation, and deployment predictability harder as the platform grew.",
    solution:
      "Helped introduce Spring Boot service boundaries, Docker packaging, Feign Client communication, Nexus artifact management, and production-focused API testing practices.",
    result:
      "Resume-backed outcomes include 60% improved scalability, 35% reduced deployment time, lower API latency, and stronger service reliability patterns.",
    stack: ["Spring Boot", "Java 17", "Docker", "Feign Client", "Nexus", "Swagger", "Postman", "Microservices"],
    metrics: ["60% scalability improvement", "35% deployment-time reduction", "Lower interservice latency", "Centralized dependency management"],
    architecture: ["Service decomposition", "Interservice communication", "Central artifact repository", "Containerized deployments"],
    category: "platform"
  }
];

export const certifications = [
  {
    title: "Java Full Stack Developer",
    issuer: "Symbiosis Skill and Professional University",
    partner: "Supported by Capgemini",
    period: "Jan 2023 – Jun 2023",
    icon: Award
  },
  {
    title: "Master of Computer Applications",
    issuer: "Bharati Vidyapeeth, Pune",
    partner: "Postgraduate degree in computer applications",
    period: "2022 – 2024",
    icon: GraduationCap
  }
];

export const achievements: Stat[] = [
  { label: "Scalability", value: 60, suffix: "%", detail: "Reported improvement after microservices migration" },
  { label: "Deployment Speed", value: 35, suffix: "%", detail: "Reported reduction through containerized delivery" },
  { label: "Campaign Efficiency", value: 60, suffix: "%", detail: "Reported lift through n8n email automation" },
  { label: "Support Automation", value: 80, suffix: "%", detail: "Customer queries handled by chatbot workflows" }
];

const defaultTechWall = [
  "Java",
  "Spring Boot",
  "Spring MVC",
  "Microservices",
  "REST APIs",
  "JWT",
  "RBAC",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Maven",
  "JUnit",
  "Swagger",
  "Postman",
  "Git",
  "GitHub",
  "Nexus",
  "Zipkin",
  "Jaeger",
  "OpenTelemetry",
  "n8n",
  "HTML5",
  "CSS3",
  "Bootstrap"
];

export const techWall = (process.env.NEXT_PUBLIC_TECH_STACK || "")
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

if (techWall.length === 0) {
  techWall.push(...defaultTechWall);
}

export const engineeringPrinciples = [
  {
    title: "Security before spectacle",
    description: "Prefer explicit auth boundaries, JWT/RBAC discipline, and careful data handling before adding complexity.",
    icon: ShieldCheck
  },
  {
    title: "APIs as product surfaces",
    description: "Design REST APIs with predictable contracts, testability, clear errors, and strong developer experience.",
    icon: Network
  },
  {
    title: "Observe what matters",
    description: "Use tracing, logs, and API validation to make distributed behavior easier to debug and improve.",
    icon: Workflow
  },
  {
    title: "Ship with learning loops",
    description: "Work in Agile rhythms, inspect outcomes, and keep improving reliability, performance, and user value.",
    icon: BrainCircuit
  }
];

export const blogNotes: BlogNote[] = [
  {
    eyebrow: "Backend Notes",
    title: "Designing payment APIs that fail safely",
    summary: "Thoughts on idempotency, provider boundaries, validation, and clean error contracts for payment workflows.",
//     readTime: "4 min concept"
  },
  {
    eyebrow: "Architecture",
    title: "What changes when a monolith becomes services",
    summary: "A practical view of service ownership, tracing, dependency management, and deployment confidence.",
//     readTime: "5 min concept"
  },
  {
    eyebrow: "Automation",
    title: "Where AI automation helps product teams",
    summary: "Campaign workflows, chatbots, and retention signals are most useful when they remove repetitive work responsibly.",
//     readTime: "3 min concept"
  }
];

export const mediumArticles = [
  {
    title: "Software engineering notes on Medium",
    summary: "A growing collection of practical thoughts on backend development, system design, clean engineering habits, and software career learning.",
    href: profile.medium,
    tag: "Medium profile"
  },
  {
    title: "Backend architecture reflections",
    summary: "Articles and notes around production APIs, distributed systems, microservices tradeoffs, and reliable Java engineering.",
    href: profile.medium,
    tag: "Engineering"
  },
  {
    title: "Learning in public",
    summary: "A simple place to follow Omkar's software engineering writing as new posts are published.",
    href: profile.medium,
    tag: "Writing"
  }
];

export const collaborationSignals = [
  {
    title: "Cross-functional delivery",
    description: "Worked with web, Android, iOS, and product stakeholders across Agile ceremonies and release workflows.",
    icon: BriefcaseBusiness
  },
  {
    title: "Production problem solving",
    description: "Resolved critical payment and platform issues with a focus on debugging, reliability, and customer impact.",
    icon: BadgeCheck
  },
  {
    title: "References on request",
    description: "No testimonials were included in the resume, so this portfolio avoids invented quotes and keeps the section honest.",
    icon: Sparkles
  }
];

export const commandActions = [
  { id: "hero", title: "Go to Hero", description: "Return to the animated introduction.", sectionId: "hero" },
  { id: "projects", title: "View Projects", description: "Explore case-study cards and architecture details.", sectionId: "projects" },
  { id: "skills", title: "Open Skills", description: "See backend, security, data, DevOps, and growth areas.", sectionId: "skills" },
  { id: "articles", title: "Read Medium", description: "Open software engineering articles on Medium.", href: profile.medium },
  { id: "contact", title: "Contact Omkar", description: "Jump to the glass contact form.", sectionId: "contact" },
  { id: "resume", title: "Download Resume", description: "Open the resume PDF in a new tab.", href: profile.resumePath },
  { id: "email", title: "Send Email", description: profile.email, href: `mailto:${profile.email}` }
];

export const profileIcons = {
  location: MapPin,
  availability: CalendarClock,
  code: Code2,
  database: Database,
  terminal: Terminal,
  rocket: Rocket,
  book: BookOpen,
  external: ExternalLink
};
