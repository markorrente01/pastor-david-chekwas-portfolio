import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "./container";
import { Section } from "./section";

gsap.registerPlugin(ScrollTrigger);

interface KineticStatementProps {
  eyebrow: string;
  lines: ReactNode[];
  description?: string;
}

export function KineticStatement({
  eyebrow,
  lines,
  description,
}: KineticStatementProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const heading = headingRef.current;

    if (
      !heading ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const context = gsap.context(() => {
      const animatedLines = heading.querySelectorAll<HTMLElement>(
        "[data-kinetic-line]",
      );

      gsap.fromTo(
        animatedLines,
        { yPercent: 115, rotate: 2 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.1,
          stagger: 0.16,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 72%",
            once: true,
          },
        },
      );
    }, heading);

    return () => context.revert();
  }, []);

  return (
    <Section className="overflow-hidden bg-brand-ink py-32 text-brand-white sm:py-44">
      <Container size="wide">
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-brand-gold">
          {eyebrow}
        </p>

        <h2
          ref={headingRef}
          className="mx-auto mt-12 max-w-6xl text-center text-5xl font-medium uppercase leading-[0.92] tracking-[-0.075em] sm:text-7xl lg:text-8xl"
        >
          {lines.map((line, index) => (
            <span key={index} className="block overflow-hidden pb-[0.08em]">
              <span data-kinetic-line className="inline-block">
                {line}
              </span>
            </span>
          ))}
        </h2>

        {description && (
          <p className="mx-auto mt-12 max-w-md text-center text-sm leading-8 text-white/50">
            {description}
          </p>
        )}
      </Container>
    </Section>
  );
}
