"use client";

import { Trophy } from "lucide-react";
import { AnimatedCounter } from "@/components/common/animated-counter";
import { SectionHeading } from "@/components/common/section-heading";
import { achievements } from "@/data/profile";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeading
        eyebrow="Impact"
        title="Results That Speak Louder Than Words."
        description="Every achievement reflects measurable outcomes, showcasing the real impact of my work through performance improvements, scalability, and engineering excellence."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <article key={achievement.label} data-gsap="fade-up" className="glass-card rounded-[2rem] p-6">
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-amber-300/10 text-amber-200">
              <Trophy className="size-5" />
            </div>
            <div className="text-4xl font-semibold tracking-tight text-gradient">
              <AnimatedCounter value={achievement.value} suffix={achievement.suffix} decimals={achievement.decimals} />
            </div>
            <h3 className="mt-3 text-lg font-semibold">{achievement.label}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{achievement.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
