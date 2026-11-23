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
