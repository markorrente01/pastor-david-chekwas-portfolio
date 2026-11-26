import { useEffect } from "react";
import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useResourcesPageAnimations(
  rootRef: RefObject<HTMLDivElement | null>,
  activeCategory: string,
) {
  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (mediaQuery.matches) return;

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .fromTo(
          ".resources-hero-meta",
          {
            y: 18,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
          },
        )
        .fromTo(
          ".resources-hero-line",
          {
            yPercent: 115,
            rotate: 2,
          },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.25,
            stagger: 0.16,
          },
          "-=0.35",
        )
        .fromTo(
          ".resources-hero-description",
          {
            y: 28,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=0.45",
        )
        .fromTo(
          ".resources-hero-link",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.55",
        );

      gsap.fromTo(
        ".resources-intro-label",
        {
          x: -35,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".resources-intro-label",
            start: "top 82%",
          },
        },
      );

      gsap.fromTo(
        ".resources-intro-copy",
        {
          y: 65,
          opacity: 0,
          clipPath: "inset(0 0 18% 0)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".resources-intro-copy",
            start: "top 82%",
          },
        },
      );

      gsap.fromTo(
        ".resources-featured",
        {
          y: 90,
          opacity: 0,
          scale: 0.96,
          clipPath: "inset(10% 5% 10% 5%)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".resources-featured",
            start: "top 82%",
          },
        },
      );

      gsap.fromTo(
        ".resources-archive-heading",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".resources-archive-heading",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".resources-archive-count",
        {
          x: 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".resources-archive-count",
            start: "top 88%",
          },
        },
      );

      gsap.fromTo(
        ".resources-filter-row button",
        {
          y: 16,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".resources-filter-row",
            start: "top 90%",
          },
        },
      );

      const entries = root.querySelectorAll(".resources-entry");

      if (entries.length) {
        gsap.fromTo(
          entries,
          {
            y: 42,
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
          },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.85,
            stagger: 0.11,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".resources-list",
              start: "top 82%",
            },
          },
        );
      }

      gsap.fromTo(
        ".resources-statement-label",
        {
          x: -40,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".resources-statement-label",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".resources-statement",
        {
          y: 80,
          opacity: 0,
          clipPath: "inset(0 0 20% 0)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.25,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".resources-statement",
            start: "top 82%",
          },
        },
      );
    }, root);

    return () => context.revert();
  }, [rootRef, activeCategory]);
}
