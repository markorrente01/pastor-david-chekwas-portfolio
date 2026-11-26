import { useRef } from "react";
import {
  ArrowUpRight,
  Compass,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../shared/ui/container";
import { Section } from "../../../shared/ui/section";
import { useAboutPageAnimations } from "../hooks/useAboutPageAnimations";

const principles = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Think differently",
    description:
      "Challenge familiar assumptions, ask better questions and remain open to possibilities beyond the obvious.",
  },
  {
    number: "02",
    icon: Users,
    title: "Put people first",
    description:
      "Meaningful progress starts with people. Ideas matter most when they create opportunities and make a difference.",
  },
  {
    number: "03",
    icon: Target,
    title: "Build with intention",
    description:
      "Turn ambition into deliberate action, with a clear sense of direction and a focus on lasting impact.",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Entrepreneurship",
    description:
      "Exploring opportunities, building ideas and creating value through business.",
  },
  {
    number: "02",
    title: "Leadership",
    description:
      "Encouraging a more thoughtful approach to influence, responsibility and decision-making.",
  },
  {
    number: "03",
    title: "Human potential",
    description:
      "Inspiring people to see possibilities, develop their capacity and take meaningful action.",
  },
];

export function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useAboutPageAnimations(pageRef);

  return (
    <div ref={pageRef}>
      <Section className="overflow-hidden bg-brand-ivory pb-20 pt-16 sm:pb-28 sm:pt-24">
        <Container size="wide">
          <div className="mb-12 flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-brand-muted sm:mb-16">
            <span className="h-px w-8 bg-brand-gold" />
            THE PERSON BEHIND THE IDEAS
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Entrepreneur · Strategist · Speaker
              </p>

              <h1 className="max-w-3xl font-display text-[clamp(3.3rem,7vw,6.7rem)] font-semibold leading-[0.98] tracking-[-0.075em] text-brand-ink">
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-about-hero-line className="inline-block">
                    A wider view.
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-about-hero-line className="inline-block font-editorial font-normal italic tracking-[-0.045em] text-brand-gold">
                    A better future.
                  </span>
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-brand-muted sm:text-lg sm:leading-9">
                David Chekwas is an entrepreneur, strategist and speaker
                interested in the ideas, leadership and opportunities shaping
                tomorrow. His perspective centres on challenging familiar
                thinking and helping people turn possibility into progress.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/speaking"
                  className="site-button inline-flex min-h-12 items-center gap-3 rounded-full px-6 text-sm font-semibold"
                >
                  Explore speaking
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>

                <Link
                  to="/contact"
                  data-button-tone="outline"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full border border-brand-ink/20 px-6 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-gold hover:bg-brand-gold/10"
                >
                  Start a conversation
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -right-4 -top-4 z-10 hidden size-24 border border-brand-gold sm:block" />
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1100&q=85"
                  alt="Temporary portrait placeholder for the About page"
                  className="h-full w-full object-cover grayscale-[25%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-brand-ink/10" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-gold">
                    THE BIGGER PICTURE
                  </span>
                  <p className="mt-3 max-w-sm font-editorial text-3xl italic leading-tight text-white sm:text-4xl">
                    Think beyond what is. Build what could be.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-right text-[9px] tracking-[0.18em] text-brand-muted">
                TEMPORARY PORTRAIT — REPLACE WITH APPROVED IMAGE
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-ink py-24 text-brand-white sm:py-32">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-brand-gold">
                <span className="h-px w-8 bg-brand-gold" />
                A POINT OF VIEW
              </p>
              <h2
                data-about-heading
                className="max-w-md font-display text-4xl font-medium leading-tight tracking-[-0.055em] sm:text-5xl"
              >
                Progress begins with a different way of seeing.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p
                data-about-quote
                className="font-editorial text-3xl italic leading-snug text-brand-ivory sm:text-4xl lg:text-5xl"
              >
                “The future belongs to those who imagine it differently.”
              </p>
              <p className="mt-8 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                The questions we ask influence the possibilities we recognise.
                A willingness to think beyond established patterns can open
                new conversations about business, leadership and what people
                can achieve.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-24 sm:py-32">
        <Container size="wide">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold tracking-[0.22em] text-brand-muted">
                THE GUIDING PRINCIPLES
              </p>
              <h2
                data-about-heading
                className="max-w-xl font-display text-4xl font-semibold tracking-[-0.06em] text-brand-ink sm:text-5xl"
              >
                What shapes the work.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-brand-muted">
              A few ideas that provide direction for the conversations,
              perspectives and work explored across this platform.
            </p>
          </div>

          <div className="grid border-t border-brand-ink/10 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  data-about-card
                  className="border-b border-brand-ink/10 py-9 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-widest text-brand-gold">
                      {item.number}
                    </span>
                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      className="text-brand-muted"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-12 font-display text-2xl font-semibold tracking-tight text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-brand-muted">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-ivory py-24 sm:py-32">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-brand-muted">
                <Compass size={15} className="text-brand-gold" />
                AREAS OF INTEREST
              </p>
              <h2
                data-about-heading
                className="max-w-md font-display text-4xl font-semibold leading-tight tracking-[-0.06em] text-brand-ink sm:text-5xl"
              >
                Ideas worth exploring.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-brand-muted">
                The themes that connect the conversations around opportunity,
                progress and the future.
              </p>
            </div>

            <div className="border-t border-brand-ink/15">
              {focusAreas.map((item) => (
                <article
                  key={item.number}
                  data-about-row
                  className="grid gap-3 border-b border-brand-ink/15 py-7 sm:grid-cols-[3rem_1fr_1fr] sm:items-center sm:gap-6 sm:py-9"
                >
                  <span className="text-xs tracking-widest text-brand-gold">
                    {item.number}
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="max-w-sm text-sm leading-7 text-brand-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-ink py-20 text-brand-white sm:py-28">
        <Container size="wide">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-[10px] font-semibold tracking-[0.22em] text-brand-gold">
                CONTINUE THE CONVERSATION
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-6xl">
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-about-closing-line className="inline-block">
                    Good ideas deserve
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-about-closing-line className="inline-block font-editorial font-normal italic text-brand-gold">
                    to go further.
                  </span>
                </span>
              </h2>
            </div>
            <Link
              to="/contact"
              className="site-button inline-flex min-h-14 w-fit shrink-0 items-center gap-4 rounded-full px-7 text-sm font-semibold"
            >
              Get in touch
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
