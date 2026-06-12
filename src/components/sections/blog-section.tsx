"use client";

import { BookOpen, Clock } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Badge } from "@/components/ui/badge";
import { blogNotes } from "@/data/profile";

export function BlogSection() {
  return (
    <section id="blog" className="section-shell">
      <SectionHeading
        eyebrow="Engineering notes"
        title="Developer thoughts that show product and architecture taste."
        description="A collection of technical ideas and engineering insights inspired by real-world backend development, system design, and software architecture."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {blogNotes.map((note) => (
          <article key={note.title} data-gsap="fade-up" className="glass-card spotlight-card rounded-[2rem] p-6">
            <Badge variant="outline" className="mb-5">
              {note.eyebrow}
            </Badge>
            <BookOpen className="mb-5 size-7 text-sky-200" />
            <h3 className="text-xl font-semibold leading-tight">{note.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{note.summary}</p>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="size-4" />
              {note.readTime}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
