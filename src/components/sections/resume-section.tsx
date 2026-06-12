"use client";

import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { journey, profile } from "@/data/profile";

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Resume"
            title="A recruiter-friendly snapshot with the PDF one click away."
            description="This portfolio highlights my experience and achievements in a modern format, while my resume remains the official document for recruitment and professional reference."
            className="mb-8"
          />
          <Button asChild variant="glow" size="lg">
            <a href={profile.resumePath} download>
              Download resume PDF <Download className="size-4" />
            </a>
          </Button>
        </div>

        <article className="glass-card rounded-[2rem] p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl bg-sky-300/10 text-sky-200">
              <FileText className="size-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{profile.shortName}</h3>
              <p className="text-sm text-muted-foreground">{profile.role} • {profile.location}</p>
            </div>
          </div>
          <div className="grid gap-4">
            {journey.map((item, index) => (
              <div key={`${item.title}-${item.period}-${index}`} className="rounded-2xl border border-border bg-white/5 p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="font-semibold">{item.title}</h4>
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-sky-100">{item.organization}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
