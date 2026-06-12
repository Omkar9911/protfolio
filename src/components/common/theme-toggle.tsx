"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { useThemeStore } from "@/stores/theme-store";

export function ThemeToggle() {
  const mounted = useMounted();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  function handleToggle() {
    const documentWithTransition = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };

    if (documentWithTransition.startViewTransition) {
      documentWithTransition.startViewTransition(toggleTheme);
      return;
    }

    toggleTheme();
  }

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      aria-label="Toggle light and dark theme"
      onClick={handleToggle}
    >
      {mounted && theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </Button>
  );
}
