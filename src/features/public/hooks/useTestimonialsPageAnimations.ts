import { useLayoutEffect, type RefObject  } from "react";
import { gsap, ScrollTrigger } from "../../../shared/animations/gsap";

export function useTestimonialsPageAnimations(
  pageRef: RefObject<HTMLDivElement | null>,
) {
  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero: staggered masked typography entrance.
        const heroLines = page.querySelectorAll(
          "[data-testimonial-hero-line]",
        );

        gsap.fromTo(
          heroLines,
          {
            yPercent: 120,
            rotate: 4,
          },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.25,
            stagger: 0.16,
            ease: "power4.out",
            delay: 0.12,
          },
        );

        gsap.fromTo(
          "[data-testimonial-intro]",
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            delay: 0.65,
            ease: "power3.out",
          },
        );

        // Hero orbit: slow rotation, independent of scroll.
        page
          .querySelectorAll<HTMLElement>("[data-testimonial-orbit]")
          .forEach((orbit, index) => {
            gsap.to(orbit, {
              rotation: index % 2 === 0 ? 360 : -360,
              duration: index === 0 ? 55 : 38,
              repeat: -1,
              ease: "none",
              transformOrigin: "50% 50%",
            });
          });

        // Signature horizontal pinned sequence.
        const pin = page.querySelector<HTMLElement>(
          "[data-testimonial-pin]",
        );
        const track = page.querySelector<HTMLElement>(
          "[data-testimonial-track]",
        );
        const panels = gsap.utils.toArray<HTMLElement>(
          "[data-testimonial-panel]",
          page,
        );
        const progress = page.querySelector<HTMLElement>(
          "[data-testimonial-progress]",
        );
        const counter = page.querySelector<HTMLElement>(
          "[data-testimonial-counter]",
        );

        if (pin && track && panels.length > 1) {
          const horizontalDistance = () =>
            Math.max(0, track.scrollWidth - pin.clientWidth);

          const horizontalTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: pin,
              start: "top top",
              end: () => `+=${horizontalDistance()}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (progress) {
                  gsap.set(progress, {
                    scaleX: self.progress,
                  });
                }

                if (counter) {
                  const activeIndex = Math.min(
                    panels.length - 1,
                    Math.floor(self.progress * panels.length),
                  );

                  counter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(panels.length).padStart(2, "0")}`;
                }
              },
            },
          });

          horizontalTimeline.to(track, {
            x: () => -horizontalDistance(),
            ease: "none",
          });

          panels.forEach((panel, index) => {
            const quote = panel.querySelector<HTMLElement>(
              "[data-testimonial-quote]",
            );
            const icon = panel.querySelector<HTMLElement>(
              "[data-testimonial-quote-icon]",
            );
            const attribution = panel.querySelector<HTMLElement>(
              "[data-testimonial-attribution]",
            );

            if (quote) {
              gsap.fromTo(
                quote,
                {
                  y: 70,
                  autoAlpha: 0,
                  clipPath: "inset(0 0 100% 0)",
                },
                {
                  y: 0,
                  autoAlpha: 1,
                  clipPath: "inset(0 0 0% 0)",
                  duration: 0.45,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horizontalTimeline,
                    start: "left 75%",
                    end: "left 25%",
                    toggleActions: "play reverse play reverse",
                  },
                },
              );
            }

            if (icon) {
              gsap.fromTo(
                icon,
                {
                  scale: 0.3,
                  rotation: -35,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  rotation: 0,
                  autoAlpha: 1,
                  duration: 0.65,
                  ease: "back.out(1.8)",
                  scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horizontalTimeline,
                    start: "left 80%",
                    toggleActions: "play reverse play reverse",
                  },
                },
              );
            }

            if (attribution) {
              gsap.fromTo(
                attribution,
                {
                  y: 35,
                  autoAlpha: 0,
                },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.5,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horizontalTimeline,
                    start: "left 55%",
                    toggleActions: "play reverse play reverse",
                  },
                },
              );
            }

            // Give each panel a slightly different editorial depth.
            const decoration = panel.querySelector<HTMLElement>(
              "span.absolute",
            );

            if (decoration) {
              gsap.fromTo(
                decoration,
                {
                  scale: 0.72,
                  rotation: index % 2 === 0 ? -12 : 12,
                },
                {
                  scale: 1,
                  rotation: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horizontalTimeline,
                    start: "left right",
                    end: "right left",
                    scrub: true,
                  },
                },
              );
            }
          });
        }

        // Kinetic statement: words emerge through a moving mask.
        const statement = page.querySelector<HTMLElement>(
          "[data-testimonial-statement]",
        );

        if (statement) {
          gsap.fromTo(
            statement,
            {
              y: 90,
              autoAlpha: 0,
              clipPath: "inset(0 0 100% 0)",
            },
            {
              y: 0,
              autoAlpha: 1,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.3,
              ease: "power4.out",
              scrollTrigger: {
                trigger: statement,
                start: "top 78%",
                once: true,
              },
            },
          );
        }

        // Impact rows: directional entrance and a subtle stagger.
        const impactRows = gsap.utils.toArray<HTMLElement>(
          "[data-testimonial-impact]",
          page,
        );

        if (impactRows.length) {
          gsap.fromTo(
            impactRows,
            {
              x: 65,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.85,
              stagger: 0.14,
              ease: "power3.out",
              scrollTrigger: {
                trigger: impactRows[0],
                start: "top 82%",
                once: true,
              },
            },
          );
        }

        // Editorial heading reveal.
        const impactHeading = page.querySelector<HTMLElement>(
          "[data-testimonial-heading]",
        );

        if (impactHeading) {
          gsap.fromTo(
            impactHeading,
            {
              y: 60,
              autoAlpha: 0,
              clipPath: "inset(0 0 100% 0)",
            },
            {
              y: 0,
              autoAlpha: 1,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: impactHeading,
                start: "top 82%",
                once: true,
              },
            },
          );
        }

        // Closing CTA: typography and concentric rings.
        const ctaHeading = page.querySelector<HTMLElement>(
          "[data-testimonial-cta-heading]",
        );

        if (ctaHeading) {
          gsap.fromTo(
            ctaHeading,
            {
              y: 80,
              autoAlpha: 0,
              clipPath: "inset(0 0 100% 0)",
            },
            {
              y: 0,
              autoAlpha: 1,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: ctaHeading,
                start: "top 80%",
                once: true,
              },
            },
          );
        }

        page
          .querySelectorAll<HTMLElement>("[data-testimonial-cta-ring]")
          .forEach((ring, index) => {
            gsap.fromTo(
              ring,
              {
                scale: 0.55,
                autoAlpha: 0,
                rotation: index === 0 ? -25 : 25,
              },
              {
                scale: 1,
                autoAlpha: 1,
                rotation: 0,
                duration: 1.4,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ring,
                  start: "top 90%",
                  once: true,
                },
              },
            );
          });

        ScrollTrigger.refresh();
      });

      return () => media.revert();
    }, page);

    return () => context.revert();
  }, [pageRef]);
}
