import { useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Quote,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../shared/ui/container";
import { Section } from "../../../shared/ui/section";
import { useTestimonialsPageAnimations } from "../hooks/useTestimonialsPageAnimations";

const testimonials = [
  {
    number: "01",
    category: "LEADERSHIP",
    quote:
      "The most valuable thing David gave our team wasn't an answer. It was a completely different way to approach the questions.",
    name: "Amara Okafor",
    role: "Chief Executive Officer",
    organisation: "Northstar Group",
    location: "Lagos, Nigeria",
    tone: "light",
  },
  {
    number: "02",
    category: "BUSINESS STRATEGY",
    quote:
      "He challenged assumptions we had carried for years. The conversation changed how we think about growth, people and possibility.",
    name: "Daniel Mensah",
    role: "Founder & Managing Director",
    organisation: "The Meridian Collective",
    location: "Accra, Ghana",
    tone: "gold",
  },
  {
    number: "03",
    category: "EVENTS & SPEAKING",
    quote:
      "A rare speaker who doesn't simply leave an audience inspired. He leaves them with something to question, reconsider and act on.",
    name: "Nneka Williams",
    role: "Conference Director",
    organisation: "Future Forward Forum",
    location: "Nairobi, Kenya",
    tone: "light",
  },
];

const impactAreas = [
  {
    number: "01",
    title: "New perspectives",
    description:
      "Creating space to question familiar thinking and see opportunities from a different angle.",
  },
  {
    number: "02",
    title: "Better conversations",
    description:
      "Moving beyond surface-level discussion towards ideas that challenge and connect people.",
  },
  {
    number: "03",
    title: "Meaningful action",
    description:
      "Turning fresh thinking into more intentional decisions, leadership and progress.",
  },
];

export function TestimonialsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useTestimonialsPageAnimations(pageRef);

  return (
    <div ref={pageRef}>
      {/* Cinematic introduction */}
      <Section className="relative isolate overflow-hidden bg-brand-ink pb-24 pt-32 text-white sm:pb-32 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 size-[580px] rounded-full border border-brand-gold/10"
          data-testimonial-orbit
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-32 size-[340px] rounded-full border border-brand-gold/15"
          data-testimonial-orbit
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(214,168,75,0.12),transparent_34%)]" />

        <Container size="wide">
          <div className="relative">
            <div className="mb-16 flex flex-wrap items-center justify-between gap-5">
              <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-brand-gold sm:text-xs">
                <span className="h-px w-9 bg-brand-gold" />
                VOICES · PERSPECTIVES · IMPACT
              </p>
              <span className="border border-white/15 px-3 py-2 text-[9px] tracking-[0.16em] text-white/45">
                FICTIONAL DEMONSTRATION CONTENT
              </span>
            </div>

            <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_.65fr]">
              <div>
                <h1 className="font-display text-[clamp(4rem,11vw,10.5rem)] font-semibold leading-[0.83] tracking-[-0.09em]">
                  <span className="block overflow-hidden pb-[0.08em]">
                    <span
                      data-testimonial-hero-line
                      className="inline-block"
                    >
                      The impact
                    </span>
                  </span>
                  <span className="block overflow-hidden pb-[0.08em]">
                    <span
                      data-testimonial-hero-line
                      className="inline-block font-editorial font-normal italic tracking-[-0.055em] text-brand-gold"
                    >
                      of a new
                    </span>
                  </span>
                  <span className="block overflow-hidden pb-[0.08em]">
                    <span
                      data-testimonial-hero-line
                      className="inline-block"
                    >
                      perspective.
                    </span>
                  </span>
                </h1>
              </div>

              <div className="max-w-sm pb-2 lg:justify-self-end">
                <p
                  data-testimonial-intro
                  className="text-base leading-8 text-white/60 sm:text-lg"
                >
                  Sometimes the most important thing you can change is the way
                  you see things. These are stories about the power of
                  challenging what comes next.
                </p>

                <a
                  href="#voices"
                  className="mt-10 inline-flex items-center gap-4 border-b border-brand-gold/50 pb-4 text-[10px] font-semibold tracking-[0.2em] text-brand-gold transition-colors hover:text-white"
                >
                  HEAR THE VOICES
                  <ArrowDownRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-24 flex items-center justify-between border-t border-white/15 pt-6 sm:mt-32">
              <span className="text-[9px] tracking-[0.18em] text-white/40">
                A COLLECTION OF PERSPECTIVES
              </span>
              <span className="font-editorial text-2xl italic text-brand-gold">
                01 — 03
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Signature pinned horizontal testimonial experience */}
      <Section
        id="voices"
        className="relative overflow-hidden bg-brand-ivory py-20 sm:py-28"
      >
        <Container size="wide">
          <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-brand-muted">
                <span className="h-px w-8 bg-brand-gold" />
                THE VOICES
              </p>
              <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.07em] text-brand-ink sm:text-6xl">
                Not just what was said.
                <span className="block font-editorial font-normal italic text-brand-gold">
                  What stayed with them.
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-brand-muted">
              Three perspectives. Three different rooms. One shared belief in
              the value of thinking differently.
            </p>
          </div>
        </Container>

        <div
          data-testimonial-pin
          className="relative overflow-hidden"
        >
          <div
            data-testimonial-track
            className="flex w-full"
          >
            {testimonials.map((item) => (
              <article
                key={item.number}
                data-testimonial-panel
                className={`relative flex min-h-[590px] w-full shrink-0 flex-col justify-between overflow-hidden px-6 py-10 sm:min-h-[650px] sm:px-12 sm:py-14 lg:min-h-[690px] lg:px-20 ${
                  item.tone === "gold"
                    ? "bg-brand-gold text-brand-ink"
                    : "bg-brand-charcoal text-white"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-28 -top-28 size-[420px] rounded-full border ${
                    item.tone === "gold"
                      ? "border-brand-ink/10"
                      : "border-white/10"
                  }`}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-10 -top-10 size-[250px] rounded-full border ${
                    item.tone === "gold"
                      ? "border-brand-ink/10"
                      : "border-white/10"
                  }`}
                />

                <div className="relative flex items-center justify-between gap-5">
                  <span
                    className={`text-[9px] font-semibold tracking-[0.2em] ${
                      item.tone === "gold"
                        ? "text-brand-ink/65"
                        : "text-brand-gold"
                    }`}
                  >
                    {item.category}
                  </span>
                  <span
                    className={`font-editorial text-2xl italic ${
                      item.tone === "gold"
                        ? "text-brand-ink/45"
                        : "text-white/35"
                    }`}
                  >
                    {item.number} / 03
                  </span>
                </div>

                <div className="relative mx-auto w-full max-w-[1120px] py-12">
                  <Quote
                    data-testimonial-quote-icon
                    size={54}
                    strokeWidth={1}
                    className={`mb-8 ${
                      item.tone === "gold"
                        ? "text-brand-ink/45"
                        : "text-brand-gold"
                    }`}
                    aria-hidden="true"
                  />

                  <blockquote
                    data-testimonial-quote
                    className="font-display text-[clamp(2rem,5.5vw,5.7rem)] font-medium leading-[1.04] tracking-[-0.065em]"
                  >
                    “{item.quote}”
                  </blockquote>
                </div>

                <div
                  data-testimonial-attribution
                  className={`relative flex flex-col justify-between gap-7 border-t pt-7 sm:flex-row sm:items-end ${
                    item.tone === "gold"
                      ? "border-brand-ink/20"
                      : "border-white/20"
                  }`}
                >
                  <div>
                    <p
                      className={`font-display text-xl font-semibold tracking-[-0.04em] sm:text-2xl ${
                        item.tone === "gold"
                          ? "text-brand-ink"
                          : "text-white"
                      }`}
                    >
                      {item.name}
                    </p>
                    <p
                      className={`mt-2 text-xs ${
                        item.tone === "gold"
                          ? "text-brand-ink/65"
                          : "text-white/55"
                      }`}
                    >
                      {item.role} · {item.organisation}
                    </p>
                  </div>

                  <div
                    className={`flex items-center gap-3 text-[9px] font-semibold tracking-[0.16em] ${
                      item.tone === "gold"
                        ? "text-brand-ink/55"
                        : "text-white/45"
                    }`}
                  >
                    <span className="h-px w-7 bg-current" />
                    {item.location.toUpperCase()}
                  </div>
                </div>

                <span className="absolute bottom-28 right-8 font-editorial text-[clamp(8rem,18vw,17rem)] italic leading-none opacity-[0.045] sm:bottom-24 sm:right-16">
                  {item.number}
                </span>
              </article>
            ))}
          </div>
        </div>

        <Container size="wide">
          <div className="mt-8 flex items-center justify-between gap-6">
            <span className="text-[9px] font-semibold tracking-[0.18em] text-brand-muted">
              SCROLL TO MOVE THROUGH THE STORIES
            </span>
            <div className="flex flex-1 items-center gap-3 sm:max-w-xs">
              <div className="h-px flex-1 overflow-hidden bg-brand-ink/15">
                <div
                  data-testimonial-progress
                  className="h-full origin-left scale-x-0 bg-brand-gold"
                />
              </div>
              <span
                data-testimonial-counter
                className="min-w-10 text-right font-editorial text-xl italic text-brand-ink"
              >
                01 / 03
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Impact statement */}
      <Section className="relative overflow-hidden bg-brand-ink py-28 text-white sm:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-gold/10" />

        <Container size="wide">
          <div className="relative mx-auto max-w-6xl text-center">
            <p className="mb-12 flex items-center justify-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-brand-gold">
              <Sparkles size={14} aria-hidden="true" />
              THE THOUGHT BEHIND THE WORK
            </p>

            <h2
              data-testimonial-statement
              className="font-display text-[clamp(2.7rem,8vw,8rem)] font-semibold leading-[0.98] tracking-[-0.075em]"
            >
              The best conversations don't end when the room empties.
              <span className="block font-editorial font-normal italic text-brand-gold">
                They change what happens next.
              </span>
            </h2>

            <div className="mx-auto mt-14 h-px w-20 bg-brand-gold/60" />
            <p className="mx-auto mt-7 max-w-lg text-sm leading-8 text-white/45">
              A different perspective can be the beginning of a different
              decision. And a different decision can change everything.
            </p>
          </div>
        </Container>
      </Section>

      {/* Three dimensions of impact */}
      <Section className="bg-white py-24 sm:py-32">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-brand-muted">
                <span className="h-px w-8 bg-brand-gold" />
                BEYOND THE MOMENT
              </p>
              <h2
                data-testimonial-heading
                className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.065em] text-brand-ink sm:text-6xl"
              >
                What a new perspective can set in motion.
              </h2>
              <p className="mt-7 max-w-sm text-sm leading-8 text-brand-muted">
                The value of a conversation is often measured by what people
                carry into the decisions that follow.
              </p>
            </div>

            <div className="border-t border-brand-ink/15">
              {impactAreas.map((item) => (
                <article
                  key={item.number}
                  data-testimonial-impact
                  className="group grid gap-5 border-b border-brand-ink/15 py-8 sm:grid-cols-[70px_1fr_auto] sm:items-start sm:py-10"
                >
                  <span className="pt-2 font-editorial text-xl italic text-brand-gold">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.05em] text-brand-ink transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-brand-muted">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-brand-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Closing invitation */}
      <Section className="relative isolate overflow-hidden bg-brand-gold py-24 sm:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/2 size-[540px] -translate-y-1/2 rounded-full border border-brand-ink/15"
          data-testimonial-cta-ring
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 size-[300px] -translate-y-1/2 rounded-full border border-brand-ink/15"
          data-testimonial-cta-ring
        />

        <Container size="wide">
          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-7 text-[10px] font-semibold tracking-[0.22em] text-brand-ink/65">
                YOUR NEXT CONVERSATION
              </p>
              <h2
                data-testimonial-cta-heading
                className="font-display text-[clamp(3.2rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-brand-ink"
              >
                Let's create
                <span className="block font-editorial font-normal italic">
                  a moment that moves people.
                </span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="site-button inline-flex min-h-14 w-fit shrink-0 items-center gap-4 rounded-full px-7 text-sm font-semibold"
            >
              Start a conversation
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
