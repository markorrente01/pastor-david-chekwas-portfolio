import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type ContainerSize = "default" | "wide" | "narrow";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

const sizes: Record<ContainerSize, string> = {
  default: "max-w-7xl",
  wide: "max-w-[1440px]",
  narrow: "max-w-4xl",
};

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
