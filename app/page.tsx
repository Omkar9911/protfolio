import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { BlogSection } from "@/components/sections/blog-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MediumSection } from "@/components/sections/medium-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { StackWallSection } from "@/components/sections/stack-wall-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <StackWallSection />
      <MediumSection />
      <BlogSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
