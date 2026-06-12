"use client";

import { ArrowUpRight, Keyboard } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";

export function Footer() {
  return (
    <footer className="section-shell pb-28 pt-8">
      <div className="glass-card rounded-[2rem] p-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="text-2xl font-semibold tracking-[-0.04em]">{profile.shortName}</div>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Java backend developer focused on secure APIs, microservices, payments, and automation. Built from a resume-first source of truth.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white/6 px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
                >
                  <Icon className="size-4" />
                  {link.label}
                  {link.external ? <ArrowUpRight className="size-3" /> : null}
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-5 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {profile.name}. Designed and engineered for performance.</span>
          <span className="inline-flex items-center gap-2">
            <Keyboard className="size-4" />
            Press Ctrl+K for commands. Try the Konami code if you are curious.
          </span>
        </div>
      </div>
    </footer>
  );
}
