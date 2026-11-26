import { useEffect, useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useInsightsPageAnimations(
  rootRef: RefObject<HTMLDivElement | null>,
  activeCategory: string,
) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const heroLines = root.querySelectorAll("[data-insight-hero-line]");
      const heroMeta = root.querySelector("[data-insight-hero-meta]");

      gsap.fromTo(
        heroLines,
        { yPercent: 115, rotateX: -18, opacity: 0 },
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.25,
          stagger: 0.16,
          ease: "power4.out",
          delay: 0.12,
        },
      );

      if (heroMeta) {
        gsap.fromTo(
          heroMeta,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.65,
            ease: "power3.out",
          },
        );
      }

      const featureImage = root.querySelector("[data-insight-feature-image]");
      if (featureImage) {
        gsap.fromTo(
          featureImage,
          { clipPath: "inset(12% 8% 12% 8%)", scale: 1.12 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featureImage,
              start: "top 82%",
            },
          },
        );
      }

      const featureCopy = root.querySelector("[data-insight-feature-copy]");
      if (featureCopy) {
        gsap.fromTo(
          featureCopy.children,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
            scrollTrigger: {
              trigger: featureCopy,
              start: "top 78%",
            },
          },
        );
      }

      const marginNote = root.querySelector("[data-insight-margin-note]");
      if (marginNote) {
        gsap.fromTo(
          marginNote,
          { y: 90, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: marginNote,
              start: "top 78%",
            },
          },
        );
      }

      const closingLink = root.querySelector("[data-insight-closing-link]");
      if (closingLink) {
        gsap.fromTo(
          closingLink,
          { x: 45, opacity: 0, rotate: 4 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.9,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: closingLink,
              start: "top 88%",
            },
          },
        );
      }
    });

    return () => media.revert();
  }, [rootRef]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const cards = root.querySelectorAll("[data-insight-card]");

      gsap.fromTo(
        cards,
        {
          y: 75,
          opacity: 0,
          rotateY: 7,
          transformPerspective: 1000,
        },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        },
      );
    });

    return () => media.revert();
  }, [rootRef, activeCategory]);
}
