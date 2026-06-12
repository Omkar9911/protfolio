"use client";

import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { collaborationSignals } from "@/data/profile";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell">
      <SectionHeading
        eyebrow="Testimonials"
        title="Collaboration signals, kept honest."
        description="No direct testimonials were present in the resume, so the section avoids fake quotes and instead presents verifiable collaboration patterns."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {collaborationSignals.map((signal) => {
          const Icon = signal.icon;
          return (
            <article key={signal.title} data-gsap="fade-up" className="glass-card rounded-[2rem] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-2xl bg-white/8 text-sky-200">
                  <Icon className="size-5" />
                </div>
                <Quote className="size-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{signal.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{signal.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
