import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
  detail: string;
};

export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
  tone: "blue" | "purple" | "cyan" | "white";
};

export type Project = {
  title: string;
  type: string;
  summary: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
  metrics: string[];
  architecture: string[];
  category: "backend" | "payments" | "ai" | "platform";
  links?: {
    demo?: string;
    github?: string;
  };
};

export type BlogNote = {
  title: string;
  eyebrow: string;
  summary?: string;
  readTime?: string;
};

export type CommandAction = {
  id: string;
  title: string;
  description: string;
  sectionId?: string;
  href?: string;
};
