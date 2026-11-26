import { useEffect } from "react";
import type { RefObject } from "react";
import { gsap } from "../../../shared/animations/gsap";

interface HomeHeroAnimationRefs {
  heroRef: RefObject<HTMLElement | null>;
  portraitRef: RefObject<HTMLImageElement | null>;
}

export function useHomeHeroAnimations({
  heroRef,
  portraitRef,
}: HomeHeroAnimationRefs) {
  useEffect(() => {
    const hero = heroRef.current;
    const portrait = portraitRef.current;

    if (!hero || !portrait) return;

    const context = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(".home-intro", { autoAlpha: 0, display: "none" });
        gsap.set(
          ".hero-eyebrow, .hero-title-line, .hero-copy, .hero-actions, .hero-portrait-frame",
          { clearProps: "all" },
        );
        return;
      }

      const entrance = gsap.timeline({ paused: true });

      entrance
        .fromTo(
          ".hero-eyebrow",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
        )
        .fromTo(
          ".hero-title-line",
          { yPercent: 110, rotate: 3 },
          {
            yPercent: 0,
            rotate: 0,
            duration: 1.1,
            stagger: 0.14,
          },
          "-=0.3",
        )
        .fromTo(
          ".hero-copy, .hero-actions",
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
          "-=0.45",
        )
        .fromTo(
          ".hero-portrait-frame",
          {
            clipPath: "inset(15% 15% 15% 15%)",
            scale: 1.08,
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            opacity: 1,
            duration: 1.4,
          },
          "-=1.1",
        );

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .fromTo(
          ".home-intro-kicker",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
        )
        .fromTo(
          ".home-intro-name",
          { yPercent: 110, opacity: 0, scale: 0.96 },
          { yPercent: 0, opacity: 1, scale: 1, duration: 1.1 },
          "-=0.25",
        )
        .fromTo(
          ".home-intro-tagline, .home-intro-line",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.12 },
          "-=0.35",
        )
        .to(".home-intro-content", {
          y: -35,
          opacity: 0,
          duration: 0.45,
          delay: 0.45,
        })
        .to(
          ".home-intro",
          {
            clipPath: "inset(0 0 100% 0)",
            duration: 1.05,
            ease: "power4.inOut",
          },
          "-=0.1",
        )
        .set(".home-intro", { display: "none" })
        .call(() => entrance.play());

    }, hero);

    return () => context.revert();
  }, [heroRef, portraitRef]);
}
