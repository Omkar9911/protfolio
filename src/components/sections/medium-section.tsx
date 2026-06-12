"use client";

import { ArrowUpRight, BookOpen, PenLine, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mediumArticles, profile } from "@/data/profile";

const icons = [BookOpen, PenLine, Sparkles];

export function MediumSection() {
  return (
    <section id="articles" className="section-shell">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Medium articles"
          title="Software engineering writing with a practical backend lens."
          description="Explore my Medium profile, where I share insights on backend development, system design, and modern software engineering practices."
          className="mb-0"
        />
        <Button asChild variant="glow" size="lg">
          <a href={profile.medium} target="_blank" rel="noreferrer">
            Open Medium <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {mediumArticles.map((article, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article key={article.title} data-gsap="fade-up" className="glass-card spotlight-card rounded-[2rem] p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-300/20 to-sky-300/10 text-emerald-100">
                  <Icon className="size-5" />
                </div>
                <Badge variant="cyan">{article.tag}</Badge>
              </div>
              <h3 className="text-xl font-semibold leading-tight">{article.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{article.summary}</p>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:gap-3"
              >
                Read on Medium <ArrowUpRight className="size-4" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
