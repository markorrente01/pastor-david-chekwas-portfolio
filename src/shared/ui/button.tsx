import type { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gold text-brand-ink hover:bg-brand-charcoal hover:text-brand-white",

  secondary:
    "border border-brand-ink/30 text-brand-ink hover:border-brand-gold hover:bg-brand-gold",

  text:
    "text-brand-ink hover:text-brand-muted",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-sm",
  md: "min-h-11 px-6 text-sm",
  lg: "min-h-14 px-8 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium",
        "transition-colors duration-300",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
