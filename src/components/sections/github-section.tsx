"use client";

import { Code2, GitCommit, Languages, LockKeyhole, Star } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile, projects } from "@/data/profile";

const activityLevels = Array.from({ length: 91 }, (_, index) => {
  if (index % 11 === 0) return 0;
  return ((index * 5 + Math.floor(index / 7)) % 4) + 1;
});

const levelClass = ["bg-white/6", "bg-sky-300/20", "bg-sky-300/40", "bg-cyan-300/55", "bg-violet-300/70"];

export function GithubSection() {
  const hasGithub = Boolean(profile.github.url);

  return (
    <section id="github" className="section-shell">
      <SectionHeading
        eyebrow="Code signal"
        title="GitHub-ready activity without invented public stats."
        description="The resume did not include a GitHub URL, so this section stays honest: it highlights private project signals and becomes link-ready when the GitHub environment variables are set."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <article className="glass-card rounded-[2rem] p-6">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold">
                <Code2 className="size-5 text-sky-200" />
                Developer activity map
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">A visual rhythm map for production backend work, not a fabricated GitHub contribution graph.</p>
            </div>
            {hasGithub ? (
              <Button asChild variant="secondary" size="sm">
                <a href={profile.github.url} target="_blank" rel="noreferrer">
                  Open GitHub
                </a>
              </Button>
            ) : (
              <Badge variant="outline">GitHub URL not in resume</Badge>
            )}
          </div>
          <div className="grid grid-flow-col grid-rows-7 gap-2 overflow-x-auto pb-2" aria-label="Developer activity visualization">
            {activityLevels.map((level, index) => (
              <span
                key={index}
                className={`size-4 rounded-[5px] ${levelClass[level]}`}
                title={`Activity level ${level}`}
              />
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Primary language", "Java"],
              ["Backend focus", "Spring Boot"],
              ["Project visibility", "Private / client work"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-border bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
                <div className="mt-2 font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-5">
          <article className="glass-card rounded-[2rem] p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Star className="size-5 text-amber-200" />
              Pinned project themes
            </h3>
            <div className="grid gap-3">
              {projects.map((project) => (
                <div key={project.title} className="rounded-2xl border border-border bg-white/5 p-4">
                  <div className="font-medium">{project.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{project.stack.slice(0, 4).join(" • ")}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-[2rem] p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <GitCommit className="size-5 text-emerald-200" />
              Recent engineering themes
            </h3>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <div className="flex gap-3"><LockKeyhole className="size-4 text-sky-200" /> Payment security, JWT, RBAC, and encrypted data flows.</div>
              <div className="flex gap-3"><Languages className="size-4 text-violet-200" /> Java-first backend work with SQL/NoSQL persistence.</div>
              <div className="flex gap-3"><Code2 className="size-4 text-cyan-200" /> Add a GitHub URL to surface public repositories after deployment.</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
