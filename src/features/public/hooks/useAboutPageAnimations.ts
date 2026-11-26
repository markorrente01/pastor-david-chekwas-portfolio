import { useEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "../../../shared/animations/gsap";

export function useAboutPageAnimations(
  pageRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const heroLines = page.querySelectorAll(
            "[data-about-hero-line]",
          );

          gsap.fromTo(
            heroLines,
            { yPercent: 115, rotate: 3 },
            {
              yPercent: 0,
              rotate: 0,
              duration: 1.15,
              stagger: 0.16,
              ease: "power4.out",
              delay: 0.12,
            },
          );

          page
            .querySelectorAll<HTMLElement>("[data-about-heading]")
            .forEach((heading) => {
              gsap.fromTo(
                heading,
                {
                  y: 48,
                  opacity: 0,
                  clipPath: "inset(0 0 100% 0)",
                },
                {
                  y: 0,
                  opacity: 1,
                  clipPath: "inset(0 0 0% 0)",
                  duration: 1,
                  ease: "power4.out",
                  scrollTrigger: {
                    trigger: heading,
                    start: "top 82%",
                    once: true,
                  },
                },
              );
            });

          const quote = page.querySelector<HTMLElement>(
            "[data-about-quote]",
          );

          if (quote) {
            gsap.fromTo(
              quote,
              { y: 65, opacity: 0, clipPath: "inset(0 0 100% 0)" },
              {
                y: 0,
                opacity: 1,
                clipPath: "inset(0 0 0% 0)",
                duration: 1.15,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: quote,
                  start: "top 82%",
                  once: true,
                },
              },
            );
          }

          const cards = page.querySelectorAll("[data-about-card]");

          if (cards.length) {
            gsap.fromTo(
              cards,
              { y: 55, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.85,
                stagger: 0.16,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: cards[0].parentElement,
                  start: "top 82%",
                  once: true,
                },
              },
            );
          }

          const rows = page.querySelectorAll("[data-about-row]");

          if (rows.length) {
            gsap.fromTo(
              rows,
              { x: 55, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.14,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: rows[0].parentElement,
                  start: "top 82%",
                  once: true,
                },
              },
            );
          }

          const closingLines = page.querySelectorAll(
            "[data-about-closing-line]",
          );

          if (closingLines.length) {
            gsap.fromTo(
              closingLines,
              { yPercent: 110, rotate: 2, opacity: 0 },
              {
                yPercent: 0,
                rotate: 0,
                opacity: 1,
                duration: 1.05,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: closingLines[0].closest("section"),
                  start: "top 78%",
                  once: true,
                },
              },
            );
          }

          ScrollTrigger.refresh();
        },
      );

      return () => media.revert();
    }, page);

    return () => context.revert();
  }, [pageRef]);
}
