import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useInsightsArticleAnimations(
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const title = root.querySelector("h1");
      const description = root.querySelector(".lg\\:grid-cols-\\[1fr\\_\\.45fr\\] p");
      const cover = root.querySelector("[data-article-cover]");
      const intro = root.querySelector("[data-article-intro]");
      const quote = root.querySelector("[data-article-quote]");
      const closing = root.querySelector("[data-article-closing]");
      const progress = root.querySelector("[data-article-progress]");

      if (title) {
        gsap.fromTo(
          title,
          { yPercent: 55, opacity: 0, rotateX: -12 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.15,
          },
        );
      }

      if (description) {
        gsap.fromTo(
          description,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.55,
            ease: "power3.out",
          },
        );
      }

      if (cover) {
        gsap.fromTo(
          cover,
          { clipPath: "inset(12% 7% 12% 7%)", scale: 1.08 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cover,
              start: "top 90%",
            },
          },
        );

        gsap.to(cover.querySelector("img"), {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: cover,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (intro) {
        gsap.fromTo(
          intro,
          { y: 75, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: intro,
              start: "top 82%",
            },
          },
        );
      }

      const chapters = root.querySelectorAll("[data-article-chapter]");
      chapters.forEach((chapter) => {
        const heading = chapter.querySelector("h2");
        const paragraphs = chapter.querySelectorAll("p");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: chapter,
            start: "top 78%",
          },
        });

        timeline.fromTo(
          chapter.querySelector(".h-px"),
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.7, ease: "power2.out" },
        );

        if (heading) {
          timeline.fromTo(
            heading,
            { y: 45, opacity: 0, clipPath: "inset(0 0 100% 0)" },
            {
              y: 0,
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.25",
          );
        }

        timeline.fromTo(
          paragraphs,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.16,
            ease: "power2.out",
          },
          "-=0.35",
        );
      });

      if (quote) {
        gsap.fromTo(
          quote,
          { y: 90, opacity: 0, scale: 0.92, rotateX: 8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quote,
              start: "top 78%",
            },
          },
        );
      }

      if (closing) {
        gsap.fromTo(
          closing,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: closing,
              start: "top 82%",
            },
          },
        );
      }

      if (progress) {
        ScrollTrigger.create({
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            gsap.set(progress, { scaleX: self.progress });
          },
        });
      }

      gsap.fromTo(
        root.querySelectorAll("[data-article-related]"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.16,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.querySelector("[data-article-related]")?.parentElement,
            start: "top 82%",
          },
        },
      );
    });

    return () => media.revert();
  }, [rootRef]);
}
