import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useContactPageAnimations(
  pageRef: RefObject<HTMLDivElement | null>,
) {
  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const heroLines = gsap.utils.toArray<HTMLElement>(
          "[data-contact-hero-line]",
        );

        const heroTimeline = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        heroTimeline
          .fromTo(
            "[data-contact-index]",
            {
              autoAlpha: 0,
              y: 20,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
            },
          )
          .fromTo(
            heroLines,
            {
              yPercent: 115,
              rotate: 2,
              autoAlpha: 0,
            },
            {
              yPercent: 0,
              rotate: 0,
              autoAlpha: 1,
              duration: 1.15,
              stagger: 0.13,
            },
            "-=0.35",
          )
          .fromTo(
            "[data-contact-hero-copy]",
            {
              x: 35,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.9,
            },
            "-=0.55",
          );

        gsap.to("[data-contact-orbit]", {
          rotation: 360,
          duration: 32,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });

        const pathways = gsap.utils.toArray<HTMLElement>(
          "[data-contact-pathway]",
        );

        pathways.forEach((pathway, index) => {
          gsap.fromTo(
            pathway,
            {
              x: index % 2 === 0 ? -45 : 45,
              autoAlpha: 0,
              clipPath: "inset(0 0 0 100%)",
            },
            {
              x: 0,
              autoAlpha: 1,
              clipPath: "inset(0 0 0 0%)",
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: pathway,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        const formPanel = page.querySelector(
          "[data-contact-form-panel]",
        );

        if (formPanel) {
          gsap.fromTo(
            formPanel,
            {
              clipPath: "inset(0 0 100% 0)",
              y: 45,
            },
            {
              clipPath: "inset(0 0 0% 0)",
              y: 0,
              duration: 1.3,
              ease: "power4.out",
              scrollTrigger: {
                trigger: formPanel,
                start: "top 78%",
                once: true,
              },
            },
          );
        }

        gsap.fromTo(
          "[data-contact-form-intro]",
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-contact-form-intro]",
              start: "top 85%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          "[data-contact-footer]",
          {
            y: 45,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-contact-footer]",
              start: "top 85%",
              once: true,
            },
          },
        );
      }, page);

      return () => context.revert();
    });

    return () => media.revert();
  }, [pageRef]);
}
