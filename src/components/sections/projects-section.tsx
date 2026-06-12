"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { projects } from "@/data/profile";
import type { Project } from "@/types/profile";
import { cn } from "@/lib/utils";

const filters = ["all", "payments", "ai", "platform"] as const;

function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="group glass-card spotlight-card animated-border flex h-full flex-col rounded-[2rem] p-[1px] text-left transition hover:-translate-y-1">
          <div className="flex h-full flex-col rounded-[calc(2rem-1px)] bg-gradient-to-br from-white/10 to-white/[0.025] p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <Badge variant={project.category === "ai" ? "purple" : project.category === "payments" ? "cyan" : "default"}>
                {project.type}
              </Badge>
              <span className="grid size-10 place-items-center rounded-full border border-border bg-white/8 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.slice(0, 6).map((tech) => (
                <span key={tech} className="rounded-full border border-border bg-white/6 px-3 py-1 text-xs text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-2">
              {project.metrics.slice(0, 3).map((metric) => (
                <div key={metric} className="rounded-2xl border border-border bg-black/10 px-4 py-3 text-sm text-sky-100">
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Badge variant="outline" className="w-fit">
            Case study
          </Badge>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.context}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-5">
          {[
            ["Challenge", project.challenge],
            ["Solution", project.solution],
            ["Result", project.result]
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-border bg-white/5 p-5">
              <h4 className="font-semibold text-sky-100">{label}</h4>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{value}</p>
            </div>
          ))}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="mb-3 font-semibold">Architecture</h4>
              <div className="grid gap-2">
                {project.architecture.map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-white/5 px-4 py-3 text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return projects.filter((project) => {
      const matchesFilter = filter === "all" || project.category === filter;
      const matchesQuery = !normalized || `${project.title} ${project.summary} ${project.stack.join(" ")}`.toLowerCase().includes(normalized);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="section-shell">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Featured projects"
          title="Case studies that translate backend work into business value."
//           description="These are private or production-oriented projects from the resume, rewritten as recruiter-friendly case studies without inventing public demos or repositories."
          className="mb-0"
        />
        <div className="w-full max-w-sm">
          <label className="sr-only" htmlFor="project-search">
            Search projects
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="project-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search stack or project..."
              className="pl-11"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <Button
            key={item}
            type="button"
            variant={filter === item ? "default" : "secondary"}
            size="sm"
            onClick={() => setFilter(item)}
            className={cn("capitalize", filter === item && "shadow-[0_0_26px_var(--glow-blue)]")}
          >
            {item}
          </Button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-5 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <motion.div key={project.title} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
