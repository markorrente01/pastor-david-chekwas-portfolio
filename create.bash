
#!/usr/bin/env bash

set -euo pipefail

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

if [[ ! -f package.json || ! -d src ]]; then
  echo "Error: Run this script inside the project root."
  exit 1
fi

mkdir -p \
  src/styles \
  src/shared/ui \
  src/shared/utils \
  src/shared/animations \
  docs

# --------------------------------------------------
# Global stylesheet
# --------------------------------------------------

cat > src/index.css <<'CSS'
@import "./styles/index.css";
CSS

cat > src/styles/index.css <<'CSS'
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&display=swap");

@import "tailwindcss";

@theme {
  --color-brand-ink: #111111;
  --color-brand-ivory: #F5F2EB;
  --color-brand-white: #FFFFFF;
  --color-brand-gold: #D6A84B;
  --color-brand-muted: #77736C;
  --color-brand-charcoal: #282828;

  --font-display: "Space Grotesk", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --font-editorial: "Instrument Serif", serif;
}

:root {
  font-family: var(--font-body);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--color-brand-ink);
  background: var(--color-brand-ivory);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

#root {
  min-height: 100vh;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

img,
svg,
video,
canvas {
  display: block;
  max-width: 100%;
}

::selection {
  color: var(--color-brand-ink);
  background: var(--color-brand-gold);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
CSS

# --------------------------------------------------
# Class name utility
# --------------------------------------------------

cat > src/shared/utils/cn.ts <<'TS'
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
TS

# --------------------------------------------------
# Container
# --------------------------------------------------

cat > src/shared/ui/container.tsx <<'TSX'
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
TSX

# --------------------------------------------------
# Section
# --------------------------------------------------

cat > src/shared/ui/section.tsx <<'TSX'
import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

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
TSX

# --------------------------------------------------
# Button
# --------------------------------------------------

cat > src/shared/ui/button.tsx <<'TSX'
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
TSX

# --------------------------------------------------
# Shared UI exports
# --------------------------------------------------

cat > src/shared/ui/index.ts <<'TS'
export { Button } from "./button";
export { Container } from "./container";
export { Section } from "./section";
TS

# --------------------------------------------------
# GSAP foundation
# --------------------------------------------------

cat > src/shared/animations/gsap.ts <<'TS'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
TS

# --------------------------------------------------
# Button test
# --------------------------------------------------

cat > src/shared/ui/button.test.tsx <<'TSX'
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Bring David to your stage</Button>);

    expect(
      screen.getByRole("button", {
        name: "Bring David to your stage",
      }),
    ).toBeInTheDocument();
  });

  it("supports the disabled state", () => {
    render(<Button disabled>Submit</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
TSX

# --------------------------------------------------
# Design system documentation
# --------------------------------------------------

cat > docs/design-system.md <<'MD'
# David Chekwas — Design System

## Brand colours

| Token | Value | Purpose |
|---|---|---|
| brand-ink | #111111 | Primary dark surface and text |
| brand-ivory | #F5F2EB | Main warm background |
| brand-white | #FFFFFF | White surfaces |
| brand-gold | #D6A84B | Accent and emphasis |
| brand-muted | #77736C | Secondary text |
| brand-charcoal | #282828 | Dark secondary surface |

## Typography

- Space Grotesk: display typography and headlines.
- DM Sans: body text and interface.
- Instrument Serif: editorial contrast.

## Responsive breakpoints

Use Tailwind CSS v4 defaults:

- sm: 40rem
- md: 48rem
- lg: 64rem
- xl: 80rem
- 2xl: 96rem

Build mobile-first and increase layout complexity at larger breakpoints.

## Shared UI

- Container: consistent responsive horizontal spacing and content width.
- Section: semantic section wrapper.
- Button: reusable button with primary, secondary and text variants.
- cn: combines conditional classes and resolves Tailwind conflicts.

## Motion responsibilities

- GSAP + ScrollTrigger: pinned scenes and complex scroll choreography.
- Motion for React: component transitions and interface interactions.
- CSS: lightweight transitions and visual effects.
- SVG: masks and path-based effects.

Do not let GSAP and Motion control the same element.

Respect reduced-motion preferences and provide touch-friendly alternatives.
MD

echo "Design system foundation created."
echo "Run: npm run test:run && npm run build && npm run lint"