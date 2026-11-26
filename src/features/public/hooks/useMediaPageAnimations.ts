import { useEffect, useLayoutEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "../../../shared/animations/gsap";

export function useMediaPageAnimations(
  pageRef: RefObject<HTMLDivElement | null>,
  activeFilter: string,
) {
  // Initial page choreography
  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero typography
        const heroLines = page.querySelectorAll("[data-media-hero-line]");

        gsap.fromTo(
          heroLines,
          { yPercent: 115, rotate: 3 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.2,
            stagger: 0.17,
            ease: "power4.out",
            delay: 0.12,
          },
        );

        // Editorial section headings
        page
          .querySelectorAll<HTMLElement>("[data-media-heading]")
          .forEach((heading) => {
            gsap.fromTo(
              heading,
              {
                y: 55,
                opacity: 0,
                clipPath: "inset(0 0 100% 0)",
              },
              {
                y: 0,
                opacity: 1,
                clipPath: "inset(0 0 0% 0)",
                duration: 1.05,
                ease: "power4.out",
                scrollTrigger: {
                  trigger: heading,
                  start: "top 82%",
                  once: true,
                },
              },
            );
          });

        // Featured image reveal
        const featuredImage = page.querySelector<HTMLElement>(
          "[data-media-featured-image]",
        );

        if (featuredImage) {
          gsap.fromTo(
            featuredImage,
            { clipPath: "inset(0 0 0 100%)" },
            {
              clipPath: "inset(0 0 0 0%)",
              duration: 1.3,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: featuredImage,
                start: "top 78%",
                once: true,
              },
            },
          );
        }

        ScrollTrigger.refresh();
      });

      return () => media.revert();
    }, page);

    return () => context.revert();
  }, [pageRef]);

  // Animate cards whenever the category changes
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const cards = page.querySelectorAll<HTMLElement>(
      ".media-gallery-track article",
    );

    if (!cards.length) return;

    const animation = gsap.fromTo(
      cards,
      {
        y: 42,
        autoAlpha: 0,
        scale: 0.97,
      },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.09,
        ease: "power3.out",
        clearProps: "transform,opacity,visibility",
      },
    );

    return () => {
      animation.kill();
      gsap.killTweensOf(cards);
    };
  }, [pageRef, activeFilter]);
}
