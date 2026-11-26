import { useLayoutEffect, type RefObject  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useEventsPageAnimations(
  pageRef: RefObject<HTMLDivElement | null>,
) {
  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const heroLines = gsap.utils.toArray<HTMLElement>(
          "[data-events-hero-line]",
        );

        gsap.fromTo(
          heroLines,
          { yPercent: 115, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1.2,
            stagger: 0.13,
            ease: "power4.out",
            delay: 0.2,
          },
        );

        gsap.fromTo(
          "[data-events-hero-copy]",
          { y: 35, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.65,
          },
        );

        gsap.utils
          .toArray<HTMLElement>("[data-events-reveal]")
          .forEach((element) => {
            gsap.fromTo(
              element,
              { y: 45, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 86%",
                  once: true,
                },
              },
            );
          });

        const featuredImage = page.querySelector(
          "[data-events-featured-image]",
        );

        if (featuredImage) {
          gsap.fromTo(
            featuredImage,
            { scale: 0.94, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: featuredImage,
                start: "top 82%",
                once: true,
              },
            },
          );
        }

        const eventRows = gsap.utils.toArray<HTMLElement>(
          "[data-events-row]",
        );

        if (eventRows.length > 0) {
          gsap.fromTo(
            eventRows,
            { y: 35, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.75,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: eventRows[0],
                start: "top 85%",
                once: true,
              },
            },
          );
        }

        const galleryItems = gsap.utils.toArray<HTMLElement>(
          "[data-events-gallery-item]",
        );

        if (galleryItems.length > 0) {
          gsap.fromTo(
            galleryItems,
            { y: 55, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.9,
              stagger: 0.18,
              ease: "power3.out",
              scrollTrigger: {
                trigger: galleryItems[0],
                start: "top 84%",
                once: true,
              },
            },
          );
        }

        gsap.fromTo(
          "[data-events-cta]",
          { y: 55, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-events-cta]",
              start: "top 82%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          "[data-events-cta-copy]",
          { x: 35, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "[data-events-cta-copy]",
              start: "top 88%",
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
