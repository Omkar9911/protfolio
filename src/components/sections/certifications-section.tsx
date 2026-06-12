"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/data/profile";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Formal learning with a backend career arc."
        description="Academic achievements and professional training have built a strong foundation."
        align="center"
      />
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((certification, index) => {
          const Icon = certification.icon;
          return (
            <motion.article
              key={certification.title}
              data-gsap="fade-up"
              whileHover={{ y: -6 }}
              className="glass-card spotlight-card rounded-[2rem] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid size-14 place-items-center rounded-2xl bg-violet-300/10 text-violet-100">
                  <Icon className="size-6" />
                </div>
                <Badge variant={index === 0 ? "purple" : "cyan"}>{certification.period}</Badge>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{certification.title}</h3>
              <p className="mt-3 text-muted-foreground">{certification.issuer}</p>
              <p className="mt-2 text-sm text-sky-100">{certification.partner}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
