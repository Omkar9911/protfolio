import { siteConfig } from "@/config/site";
import { profile, projects, socialLinks } from "@/data/profile";

export function StructuredData() {
  const sameAs = socialLinks.filter((link) => link.external).map((link) => link.href);
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.shortName,
    jobTitle: profile.role,
    email: profile.email,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressCountry: "IN"
    },
    url: siteConfig.url,
    sameAs,
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Payment Gateway Integration",
      "Docker",
      "MongoDB",
      "PostgreSQL",
      "API Security"
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Java Backend Developer",
      skills: "Java, Spring Boot, Microservices, REST APIs, Docker, SQL, MongoDB"
    },
    makesOffer: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      keywords: project.stack.join(", ")
    }))
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
