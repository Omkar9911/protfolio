"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/animations/motion";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/profile";
import { useSpotlight } from "@/hooks/use-spotlight";
import { cn } from "@/lib/utils";

const toneClass = {
  blue: "from-sky-400/32 via-blue-500/12 to-indigo-500/10 text-sky-100",
  purple: "from-fuchsia-400/30 via-violet-500/14 to-rose-400/10 text-violet-100",
  cyan: "from-emerald-300/26 via-cyan-400/16 to-sky-400/10 text-cyan-100",
  white: "from-amber-200/20 via-white/12 to-cyan-200/10 text-foreground"
};

export function SkillsSection() {
  const spotlight = useSpotlight();

  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A practical stack for secure backend platforms."
        description="The skill system separates resume-backed strengths from growth areas, keeping the presentation ambitious without overstating experience."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.article
            key={group.title}
            variants={fadeUp}
            {...spotlight}
            className="glass-card spotlight-card animated-border rounded-[2rem] p-[1px]"
          >
            <div className={cn("h-full rounded-[calc(2rem-1px)] bg-gradient-to-br p-6 shadow-inner shadow-white/5", toneClass[group.tone])}>
              <div className="mb-5 flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-white/10">
                  <Code2 className="size-5" />
                </span>
                <Badge variant="outline">{group.skills.length} skills</Badge>
              </div>
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-foreground/80 backdrop-blur transition hover:border-white/25 hover:bg-white/14">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
