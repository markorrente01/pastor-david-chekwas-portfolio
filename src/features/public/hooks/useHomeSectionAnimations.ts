import { useEffect } from "react";
import type { RefObject } from "react";
import { gsap, ScrollTrigger } from "../../../shared/animations/gsap";

export function useHomeSectionAnimations(
  pageRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (matchContext) => {
          const { motion, reduced } = matchContext.conditions as {
            motion: boolean;
            reduced: boolean;
          };

          if (reduced) {
            gsap.set("[data-reveal], [data-reveal-text]", {
              clearProps: "all",
            });
            return;
          }

          if (!motion) return;

          page.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
            gsap.fromTo(
              item,
              { y: 48, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.85,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          });

          page
            .querySelectorAll<HTMLElement>("[data-reveal-text]")
            .forEach((heading) => {
              gsap.fromTo(
                heading,
                { y: 55, opacity: 0, rotateX: 8 },
                {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  duration: 1,
                  ease: "power3.out",
                  transformOrigin: "50% 100%",
                  scrollTrigger: {
                    trigger: heading,
                    start: "top 86%",
                    once: true,
                  },
                },
              );
            });

          page
            .querySelectorAll<HTMLElement>("[data-reveal-group]")
            .forEach((group) => {
              const children = group.querySelectorAll<HTMLElement>(
                "[data-reveal-item]",
              );

              if (!children.length) return;

              gsap.fromTo(
                children,
                { y: 38, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.75,
                  stagger: 0.13,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: group,
                    start: "top 84%",
                    once: true,
                  },
                },
              );
            });

          const gallerySection = page.querySelector<HTMLElement>(
            "[data-gallery-section]",
          );
          const galleryTrack = page.querySelector<HTMLElement>(
            "[data-gallery-track]",
          );

          if (gallerySection && galleryTrack) {
            media.add("(min-width: 1024px)", () => {
              const getDistance = () =>
                Math.max(
                  0,
                  galleryTrack.scrollWidth - window.innerWidth + 80,
                );

              gsap.to(galleryTrack, {
                x: () => -getDistance(),
                ease: "none",
                scrollTrigger: {
                  trigger: gallerySection,
                  start: "top top",
                  end: () => `+=${Math.max(900, getDistance())}`,
                  scrub: 1,
                  pin: true,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
              });
            });
          }

          ScrollTrigger.refresh();
        },
      );

      return () => media.revert();
    }, page);

    return () => context.revert();
  }, [pageRef]);
}
