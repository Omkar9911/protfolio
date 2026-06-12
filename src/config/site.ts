const fallbackUrl = "https://omkar-jadhav-portfolio.vercel.app";

export const siteConfig = {
  name: "Omkar Jadhav",
  legalName: "Omkar Pandurang Jadhav",
  title: "Omkar Jadhav — Java Backend Developer",
  description:
    "Java Backend Developer from Pune specializing in Spring Boot microservices, secure REST APIs, payment systems, observability, Dockerized services, and automation workflows.",
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl,
  locale: "en_IN",
  author: "Omkar Pandurang Jadhav",
  keywords: [
    "Omkar Jadhav",
    "Java Developer Pune",
    "Spring Boot Developer",
    "Backend Developer",
    "Microservices Developer",
    "REST API Developer",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "Payment Gateway Integration"
  ],
  resumePath: "/resume/omkar-jadhav-resume.pdf"
} as const;
