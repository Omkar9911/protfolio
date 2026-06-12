"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-36 w-full resize-none rounded-2xl border border-border bg-white/7 px-4 py-3 text-sm text-foreground shadow-inner shadow-white/5 transition placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-sky-400/10",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
