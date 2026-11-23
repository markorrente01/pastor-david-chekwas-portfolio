
import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type SectionProps = HTMLAttributes<HTMLElement>;

export function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative w-full", className)}
      {...props}
    >
      {children}
    </section>
  );
}
