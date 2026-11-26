
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../../shared/ui/container";

export function AboutTransition() {
  return (
    <section
      id="about"
      className="home-about-panel relative min-h-[650px] overflow-hidden bg-brand-ivory py-24 text-brand-ink"
    >
      <Container
        size="wide"
        className="about-transition-content flex min-h-[500px] flex-col justify-center"
      >
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-brand-muted">
              <span className="h-px w-8 bg-brand-gold" />
              A LITTLE ABOUT DAVID
            </p>

            <p className="font-editorial text-5xl italic leading-[1.05] sm:text-7xl">
              The future belongs to those who imagine it differently.
            </p>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-2xl text-lg leading-8 text-brand-ink/70">
              David Chekwas is presented here as an entrepreneur,
              strategist and speaker interested in the intersection
              of leadership, business and human potential. His work
              centres on challenging familiar thinking and opening
              up new possibilities.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center gap-3 border-b border-brand-ink/30 pb-3 text-sm font-semibold transition-colors hover:border-brand-gold hover:text-brand-muted"
            >
              Discover the story
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-brand-ink/15 pt-5 text-[10px] tracking-[0.2em] text-brand-muted">
          <span>02 — THE PERSON BEHIND THE IDEAS</span>
          <span>DAVID CHEKWAS</span>
        </div>
      </Container>

      <div className="pointer-events-none absolute -right-24 -top-24 size-[400px] rounded-full border border-brand-gold/20" />
      <div className="pointer-events-none absolute -right-10 -top-10 size-[270px] rounded-full border border-brand-gold/20" />
    </section>
  );
}
