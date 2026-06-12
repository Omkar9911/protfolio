"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-border bg-white/7 px-4 py-3 text-sm text-foreground shadow-inner shadow-white/5 transition placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-sky-400/10",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
