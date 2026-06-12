"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { commandActions } from "@/data/profile";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const actions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return commandActions;
    }
    return commandActions.filter((action) =>
      `${action.title} ${action.description}`.toLowerCase().includes(normalized)
    );
  }, [query]);

  function runAction(action: (typeof commandActions)[number]) {
    setOpen(false);
    setQuery("");
    if (action.sectionId) {
      document.getElementById(action.sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (action.href) {
      window.open(action.href, action.href.startsWith("mailto:") ? "_self" : "_blank", "noopener,noreferrer");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-4 sm:p-5">
        <DialogHeader className="px-2 pt-2">
          <DialogTitle>Command palette</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sections, resume, contact..."
            className="pl-11"
          />
        </div>
        <div className="mt-2 grid gap-2">
          {actions.map((action) => (
            <button
              type="button"
              key={action.id}
              onClick={() => runAction(action)}
              className="rounded-2xl border border-transparent p-4 text-left transition hover:border-border hover:bg-white/8"
            >
              <div className="font-medium">{action.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{action.description}</div>
            </button>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-white/5 px-4 py-3 text-xs text-muted-foreground">
          Shortcut: <kbd className="rounded bg-white/10 px-2 py-1">Ctrl</kbd> + <kbd className="rounded bg-white/10 px-2 py-1">K</kbd>
        </div>
      </DialogContent>
    </Dialog>
  );
}
