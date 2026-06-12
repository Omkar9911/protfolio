import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Home,
  Mail,
  Sparkles,
  UserRound
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Notes", href: "#blog", icon: Sparkles },
  { label: "Contact", href: "#contact", icon: Mail }
] as const;
