import { useLayoutEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "../../../shared/ui/container";
import "./PublicFooter.css";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Speaking", to: "/speaking" },
  { label: "Media", to: "/media" },
  { label: "Events", to: "/events" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Insights", to: "/insights" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export function PublicFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) return;

    const context = gsap.context(() => {
      const headingLines = footer.querySelectorAll("[data-footer-line]");
      const revealItems = footer.querySelectorAll("[data-footer-reveal]");
      const orbit = footer.querySelector("[data-footer-orbit]");

      gsap.set(headingLines, {
        yPercent: 115,
        rotate: 2,
      });

      gsap.set(revealItems, {
        y: 24,
        autoAlpha: 0,
      });

      if (orbit) {
        gsap.set(orbit, {
          scale: 0.8,
          autoAlpha: 0,
        });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 75%",
          once: true,
        },
      });

      timeline.to(
        headingLines,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.15,
          stagger: 0.16,
          ease: "power4.out",
        },
        0,
      );

      if (orbit) {
        timeline.to(
          orbit,
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          0.2,
        );
      }

      timeline.to(
        revealItems,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.75,
          stagger: 0.075,
          ease: "power3.out",
        },
        0.45,
      );
    }, footer);

    return () => context.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative isolate overflow-hidden bg-brand-ink text-brand-white"
    >
      <Container size="wide">
        <div className="relative border-b border-white/15 pb-12 pt-20 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 sm:mb-16">
            <p className="text-[10px] font-medium tracking-[0.24em] text-brand-gold sm:text-xs">
              THE NEXT CHAPTER STARTS HERE
            </p>

            <p className="text-[10px] tracking-[0.16em] text-white/40 sm:text-xs">
              BASED IN AFRICA · SPEAKING GLOBALLY
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              data-footer-orbit
              className="footer-orbit pointer-events-none absolute -right-4 top-1/2 hidden aspect-square w-52 -translate-y-1/2 lg:block xl:right-8 xl:w-64"
            >
              <div className="footer-orbit__core" />

              <div className="footer-orbit__track footer-orbit__track--outer">
                <span className="footer-orbit__particle footer-orbit__particle--outer" />
              </div>

              <div className="footer-orbit__track footer-orbit__track--middle">
                <span className="footer-orbit__particle footer-orbit__particle--middle" />
              </div>

              <div className="footer-orbit__track footer-orbit__track--inner">
                <span className="footer-orbit__particle footer-orbit__particle--inner" />
              </div>
            </div>

            <h2
              aria-label="Let's build what matters."
              className="relative z-10 font-display text-[clamp(3.25rem,9.5vw,9rem)] font-semibold uppercase leading-[0.88] tracking-[-0.075em]"
            >
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-footer-line className="block">
                  LET'S BUILD
                </span>
              </span>

              <span className="block overflow-hidden pb-[0.08em]">
                <span
                  data-footer-line
                  className="block font-editorial font-normal italic tracking-[-0.065em] text-brand-gold"
                >
                  WHAT MATTERS.
                </span>
              </span>
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-8 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
            <p
              data-footer-reveal
              className="max-w-md text-sm leading-7 text-white/55 sm:text-base"
            >
              Have a bold idea, a meaningful event, or a challenge worth
              exploring? Let's start a conversation.
            </p>

            <Link
              to="/contact"
              data-button-tone="gold"
              className="site-button group inline-flex min-h-12 w-fit items-center gap-3 rounded-full px-6 text-sm font-semibold"
            >
              <span className="site-button__content">
                Start a conversation
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  data-button-arrow="up"
                />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div data-footer-reveal>
            <p className="mb-5 text-[10px] font-medium tracking-[0.22em] text-white/40">
              THE THINKING CONTINUES
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 font-display text-xl font-bold tracking-[-0.04em] text-white transition-colors duration-300 hover:text-brand-gold"
            >
              DAVID CHEKWAS<span className="text-brand-gold">.</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/45">
              Think bigger. Lead differently. Build what matters.
            </p>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[10px] font-medium tracking-[0.22em] text-white/40">
                EXPLORE
              </p>

              <ArrowDownRight
                size={16}
                aria-hidden="true"
                className="text-brand-gold/70"
              />
            </div>

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 sm:gap-x-12"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  data-footer-reveal
                  className="group inline-flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-brand-gold"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    size={12}
                    aria-hidden="true"
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 py-7 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p data-footer-reveal>
            © {new Date().getFullYear()} David Chekwas. All rights reserved.
          </p>

          <p data-footer-reveal className="tracking-wide">
            BUILT WITH PURPOSE<span className="text-brand-gold">.</span>
          </p>

          <Link
            data-footer-reveal
            to="/"
            className="w-fit transition-colors duration-300 hover:text-brand-gold"
          >
            BACK TO THE BEGINNING ↑
          </Link>
        </div>
      </Container>
    </footer>
  );
}
