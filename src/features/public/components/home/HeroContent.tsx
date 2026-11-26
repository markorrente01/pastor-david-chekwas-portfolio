import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroContent() {
  return (
    <div className="relative z-20">
      <p className="hero-eyebrow mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.28em] text-brand-gold sm:text-xs lg:mb-5">
        <span className="h-px w-9 bg-brand-gold" />
        ENTREPRENEUR · STRATEGIST · SPEAKER
      </p>

      <h1 className="font-display text-[clamp(3.6rem,8.5vw,8.4rem)] font-semibold leading-[.88] tracking-[-0.075em] lg:text-[clamp(3.2rem,5.8vw,6rem)]">
        <span className="block overflow-hidden pb-2">
          <span className="hero-title-line block">Ideas that</span>
        </span>

        <span className="block overflow-hidden pb-2">
          <span className="hero-title-line block font-editorial font-normal italic tracking-[-0.055em] text-brand-gold">
            move people.
          </span>
        </span>

        <span className="block overflow-hidden pb-2">
          <span className="hero-title-line block">Impact that</span>
        </span>

        <span className="block overflow-hidden pb-2">
          <span className="hero-title-line block">moves the world.</span>
        </span>
      </h1>

      <div className="hero-copy mt-5 max-w-lg border-l border-brand-gold/60 pl-5 lg:mt-6">
        <p className="text-sm leading-6 text-white/65 sm:text-base">
          Exploring the ideas, leadership and opportunities shaping
          tomorrow — and helping people turn possibility into progress.
        </p>
      </div>

      <div className="hero-actions mt-6 flex flex-wrap items-center gap-3 lg:mt-7">
        <Link
          to="/contact"
          data-button-tone="gold"
          className="site-button inline-flex min-h-12 items-center gap-3 whitespace-nowrap rounded-full px-6 text-sm font-semibold"
        >
          <span className="site-button__content">
            Invite David to speak
            <ArrowUpRight size={17} aria-hidden="true" data-button-arrow="up" />
          </span>
        </Link>

        <a
          href="#about"
          data-button-tone="outline"
          className="site-button inline-flex min-h-12 items-center gap-3 whitespace-nowrap rounded-full border px-5 text-sm font-medium"
        >
          <span className="site-button__content">
            Explore his story
            <ArrowDown size={16} aria-hidden="true" data-button-arrow="down" />
          </span>
        </a>
      </div>
    </div>
  );
}
