"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { experience } from "@/data/profile";
import { cn } from "@/lib/utils";

const filters = ["All", "API", "Security", "Platform"] as const;

function matchesFilter(highlight: string, filter: (typeof filters)[number]) {
  if (filter === "All") return true;
  const value = highlight.toLowerCase();
  if (filter === "API") return value.includes("api") || value.includes("response");
  if (filter === "Security") return value.includes("security") || value.includes("jwt") || value.includes("rbac");
  return value.includes("docker") || value.includes("microservices") || value.includes("nexus") || value.includes("deployment");
}

export function ExperienceSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filteredExperience = useMemo(
    () =>
      experience.map((item) => ({
        ...item,
        highlights: item.highlights.filter((highlight) => matchesFilter(highlight, filter))
      })),
    [filter]
  );

  return (
    <section id="experience" className="section-shell">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Experience"
          title="Production ownership across APIs, services, and releases."
//           description="A resume-backed experience timeline focused on concrete platform work, measurable impact, and strong backend fundamentals."
          className="mb-0"
        />
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <Button
              key={item}
              type="button"
              variant={filter === item ? "default" : "secondary"}
              size="sm"
              onClick={() => setFilter(item)}
              className={cn(filter === item && "shadow-[0_0_28px_var(--glow-blue)]")}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6">
        {filteredExperience.map((item) => (
          <article key={item.organization} className="glass-card rounded-[2rem] p-6">
            <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
              <div>
                <div className="grid size-14 place-items-center rounded-2xl bg-sky-300/10 text-sky-200">
                  <BriefcaseBusiness className="size-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 font-medium text-sky-200">{item.organization}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.period}</p>
                {item.location ? <p className="text-sm text-muted-foreground">{item.location}</p> : null}
              </div>
              <div>
                <p className="text-base leading-8 text-muted-foreground">{item.description}</p>
                <div className="mt-6 grid gap-3">
                  <AnimatePresence mode="popLayout">
                    {item.highlights.map((highlight) => (
                      <motion.div
                        key={highlight}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex gap-3 rounded-2xl border border-border bg-white/5 p-4 text-sm leading-6 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-300" />
                        {highlight}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
