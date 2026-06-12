"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Terminal } from "lucide-react";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { SectionHeading } from "@/components/common/section-heading";
import { engineeringPrinciples, journey, profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="A backend engineer with a product radar."
        description="Hey there! 👋 I'm Omkar Jadhav, a backend engineer passionate about transforming ideas into scalable and reliable software solutions. With expertise in Java, Spring Boot, REST APIs, Microservices, and database management, I enjoy designing systems that are secure, maintainable, and built for performance. I thrive on solving complex technical challenges, optimizing application efficiency, and continuously expanding my knowledge in cloud technologies, distributed systems, and modern software architecture to build products that make a meaningful impact."
      />

      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-card spotlight-card rounded-[2rem] p-6"
        >
          <motion.p variants={fadeUp} className="text-lg leading-8 text-muted-foreground">
            {profile.summary}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 rounded-[1.5rem] border border-border bg-slate-950/70 p-5 terminal-shadow">
            <div className="mb-4 flex items-center gap-2 text-sm text-cyan-200">
              <Terminal className="size-4" />
              omkar.profile
            </div>
            <pre className="whitespace-pre-wrap text-sm leading-7 text-sky-100">
              {`const engineer = {
  strengths: ["Spring Boot", "REST APIs", "microservices"],
  defaults: ["secure", "observable", "tested"],
  mission: "ship backend systems that feel reliable to users"
};`}
            </pre>
          </motion.div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {engineeringPrinciples.map((principle) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                data-gsap="fade-up"
                className="glass-card spotlight-card rounded-[2rem] p-6"
              >
                <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-sky-300/10 text-sky-200">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{principle.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-4">
        {journey.map((item, index) => (
          <div key={`${item.title}-${item.period}`} data-gsap="fade-up" className="glass-card rounded-[2rem] p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-white/8 text-sky-200">{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.organization}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
              <div className="rounded-full border border-border bg-white/6 px-4 py-2 text-sm text-muted-foreground">{item.period}</div>
            </div>
            <div className="mt-4 grid gap-2">
              {item.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
