import {
  ArrowDownRight,
  ArrowUpRight,
  Lightbulb,
  Mic2,
  Radio,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../../shared/ui/container";
import { Section } from "../../../../shared/ui/section";

const topics = [
  {
    number: "01",
    title: "Leadership in a changing world",
    description:
      "Rethinking how people lead, make decisions and create room for others to thrive.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "02",
    title: "The future of business",
    description:
      "Exploring the shifts, opportunities and ideas redefining how organisations grow.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Purpose, people and possibility",
    description:
      "Turning ambition into meaningful action through people, culture and shared purpose.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=85",
  },
];

const sampleEvents = [
  { date: "JUN 18", type: "LEADERSHIP SUMMIT", title: "Leading Beyond the Expected", image: "https://app.agilitywriter.ai/img/2023/08/28/p81622-Importance-of-Audio-Enhancement-for-Public-Speaking-Events-2123ab1846-906621213.jpg" },
  { date: "JUL 09", type: "BUSINESS FORUM", title: "The Next Chapter of Growth", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=85" },
  { date: "SEP 22", type: "IDEAS CONFERENCE", title: "Building What Comes Next", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85" },
];

const sampleInsights = [
  {
    category: "LEADERSHIP",
    title: "The courage to think differently",
    read: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=85",
  },
  {
    category: "BUSINESS",
    title: "Progress begins with better questions",
    read: "4 MIN READ",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85",
  },
  {
    category: "PERSPECTIVE",
    title: "What does meaningful impact look like?",
    read: "6 MIN READ",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=85",
  },
];

export function CredibilityStrip() {
  return (
    <Section className="bg-brand-gold py-7">
      <Container size="wide">
        <div data-reveal-group className="grid grid-cols-2 gap-7 sm:grid-cols-4">
          {[
            ["01", "Ideas worth sharing"],
            ["02", "Leadership in action"],
            ["03", "A global perspective"],
            ["04", "Impact with purpose"],
          ].map(([number, label]) => (
            <div key={number} data-reveal-item className="flex items-center gap-3">
              <span className="font-editorial text-2xl italic text-brand-ink/55">{number}</span>
              <span className="text-xs font-semibold tracking-wide text-brand-ink">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function AboutPreview() {
  return (
    <Section id="about" className="bg-brand-ivory py-24 sm:py-32">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-brand-muted">
              <span className="h-px w-8 bg-brand-gold" />
              A LITTLE ABOUT DAVID
            </p>
            <p className="font-editorial text-5xl italic leading-[1.05] text-brand-ink sm:text-6xl">
              The future belongs to those who imagine it differently.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-2xl text-lg leading-8 text-brand-ink/70">
              David Chekwas is presented here as an entrepreneur, strategist
              and speaker interested in the intersection of leadership,
              business and human potential. His work centres on challenging
              familiar thinking and opening up new possibilities.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex w-fit items-center gap-3 border-b border-brand-ink/30 pb-3 text-sm font-semibold transition-colors hover:border-brand-gold hover:text-brand-muted"
            >
              Discover the story <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function SpeakingTopics() {
  return (
    <Section className="bg-[#EAE6DD] py-24 sm:py-32">
      <Container size="wide">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-brand-muted">
              IDEAS THAT START CONVERSATIONS
            </p>
            <h2 data-reveal-text className="max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              Conversations that <span className="font-editorial font-normal italic">move us forward.</span>
            </h2>
          </div>
          <Link to="/speaking" className="inline-flex items-center gap-2 text-sm font-semibold">
            Explore speaking <ArrowUpRight size={16} />
          </Link>
        </div>

        <div data-reveal-group className="grid gap-5 border-t border-brand-ink/20 pt-7 md:grid-cols-3">
          {topics.map((topic, index) => (
            <article
              key={topic.number}
              data-reveal-item
              className={`group relative isolate min-h-[430px] overflow-hidden bg-brand-ink text-white ${
                index === 1 ? "md:mt-14" : ""
              }`}
            >
              <img
                src={topic.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/35 to-brand-ink/5" />
              <div className="absolute inset-0 border border-white/10" />
              <div className="absolute left-6 top-6 flex size-11 items-center justify-center rounded-full border border-white/40 font-editorial text-lg italic">
                {topic.number}
              </div>
              <ArrowUpRight className="absolute right-6 top-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                <p className="mb-4 text-[9px] tracking-[0.22em] text-brand-gold">
                  SPEAKING TOPIC
                </p>
                <h3 className="max-w-sm font-display text-3xl font-medium leading-tight sm:text-4xl">
                  {topic.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
                  {topic.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function MediaShowcase() {
  return (
    <Section className="overflow-hidden bg-brand-ink py-24 text-white sm:py-32">
      <Container size="wide">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-brand-gold">
              ON STAGE & IN CONVERSATION
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              Ideas in <span className="font-editorial font-normal italic text-brand-gold">motion.</span>
            </h2>
          </div>
          <Link to="/media" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-brand-gold">
            View media <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-[1.35fr_.8fr]">
          <div className="group relative flex min-h-[340px] items-end overflow-hidden bg-[#34312C] p-8 sm:min-h-[470px] sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(214,168,75,.28),transparent_40%)] transition-transform duration-700 group-hover:scale-110" />
            <div className="relative">
              <span className="mb-4 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-brand-gold">
                <Radio size={14} /> FEATURED REEL · DEMO
              </span>
              <h3 className="max-w-xl font-editorial text-5xl italic leading-[.98] sm:text-7xl">
                A different way to see what&apos;s possible.
              </h3>
              <p className="mt-6 text-xs tracking-wide text-white/45">VIDEO PREVIEW PLACEHOLDER</p>
            </div>
            <div className="absolute right-8 top-8 flex size-14 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:bg-brand-gold group-hover:text-brand-ink">
              <ArrowUpRight size={22} />
            </div>
          </div>

          <div className="flex min-h-[340px] flex-col justify-between bg-brand-charcoal p-8 sm:p-10">
            <Mic2 className="text-brand-gold" size={30} />
            <div>
              <p className="mb-3 text-[10px] tracking-[0.2em] text-brand-gold">THE CONVERSATION</p>
              <h3 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
                Every stage is an opportunity to shift perspective.
              </h3>
              <Link to="/media" className="mt-8 inline-flex items-center gap-2 text-sm text-white/65 hover:text-brand-gold">
                Explore appearances <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function TestimonialsPreview() {
  return (
    <Section className="bg-brand-ivory py-24 sm:py-32">
      <Container size="narrow">
        <div className="text-center">
          <Users className="mx-auto mb-6 text-brand-gold" size={30} />
          <p className="mb-6 text-[10px] font-semibold tracking-[0.25em] text-brand-muted">
            THE VALUE OF A NEW PERSPECTIVE
          </p>
          <blockquote data-reveal-text className="font-editorial text-4xl italic leading-tight sm:text-6xl">
            “The most powerful conversations don&apos;t just give you answers.
            They change the questions you ask.”
          </blockquote>
          <p className="mt-8 text-[10px] tracking-[0.2em] text-brand-muted">
            ILLUSTRATIVE QUOTE · NOT A REAL TESTIMONIAL
          </p>
          <Link to="/testimonials" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
            More perspectives <ArrowUpRight size={16} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export function EventsPreview() {
  return (
    <Section className="bg-[#EAE6DD] py-24 sm:py-28">
      <Container size="wide">
        <div className="mb-12 flex items-end justify-between gap-5">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-brand-muted">WHERE IDEAS MEET PEOPLE</p>
            <h2 data-reveal-text className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Upcoming moments.</h2>
          </div>
          <Link to="/events" className="hidden items-center gap-2 text-sm font-semibold sm:inline-flex">
            All events <ArrowUpRight size={16} />
          </Link>
        </div>

        <div data-reveal-group className="border-t border-brand-ink/20">
          {sampleEvents.map((event) => (
            <article
              key={event.title}
              data-reveal-item
              className="group grid gap-5 border-b border-brand-ink/20 py-7 sm:grid-cols-[90px_190px_1fr_30px] sm:items-center"
            >
              <span className="font-editorial text-2xl italic">{event.date}</span>
              <div className="relative h-36 overflow-hidden bg-brand-charcoal sm:h-28">
                <img
                  src={event.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute bottom-2 left-2 bg-brand-ink/80 px-2 py-1 text-[8px] tracking-[0.16em] text-white">
                  EVENT PREVIEW
                </span>
              </div>
              <div>
                <span className="text-[9px] font-semibold tracking-[0.18em] text-brand-muted">{event.type}</span>
                <h3 className="mt-2 font-display text-2xl font-medium sm:text-3xl">{event.title}</h3>
              </div>
              <ArrowUpRight size={20} className="text-brand-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </article>
          ))}
        </div>
        <p className="mt-5 text-[10px] tracking-wide text-brand-muted">SAMPLE EVENT LISTINGS · DATES AND TITLES ARE PLACEHOLDERS</p>
      </Container>
    </Section>
  );
}

export function InsightsPreview() {
  return (
    <Section className="bg-brand-ivory py-24 sm:py-32">
      <Container size="wide">
        <div className="mb-12 flex items-end justify-between gap-5">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-brand-muted">NOTES, IDEAS & PERSPECTIVES</p>
            <h2 data-reveal-text className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">A mind in motion.</h2>
          </div>
          <Link to="/insights" className="hidden items-center gap-2 text-sm font-semibold sm:inline-flex">
            All insights <ArrowUpRight size={16} />
          </Link>
        </div>

        <div data-reveal-group className="grid gap-5 md:grid-cols-3">
          {sampleInsights.map((insight, index) => (
            <Link
              to="/insights"
              key={insight.title}
              data-reveal-item
              className="group flex min-h-[270px] flex-col justify-between border-t border-brand-ink/25 py-6 transition-colors hover:border-brand-gold"
            >
              <div className={`relative mb-7 overflow-hidden bg-brand-charcoal ${
                index === 1 ? "h-64 md:h-80" : "h-48 md:h-60"
              }`}>
                <img
                  src={insight.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-ink/35 to-transparent" />
                <span className="absolute bottom-3 left-3 border border-white/40 px-2 py-1 text-[8px] tracking-[0.16em] text-white">
                  EDITORIAL PREVIEW
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-brand-muted">{insight.category}</span>
                <span className="font-editorial text-xl italic text-brand-muted">0{index + 1}</span>
              </div>
              <div>
                <h3 className="max-w-sm font-display text-2xl font-medium leading-tight tracking-tight group-hover:text-brand-muted sm:text-3xl">
                  {insight.title}
                </h3>
                <div className="mt-7 flex items-center justify-between text-[10px] tracking-[0.15em] text-brand-muted">
                  <span>{insight.read}</span>
                  <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-[10px] tracking-wide text-brand-muted">SAMPLE ARTICLE TITLES</p>
      </Container>
    </Section>
  );
}

export function BookingCTA() {
  return (
    <Section className="relative overflow-hidden bg-brand-gold py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-20 -top-36 size-[480px] rounded-full border border-brand-ink/15" />
      <div className="pointer-events-none absolute -right-5 -top-20 size-[350px] rounded-full border border-brand-ink/15" />
      <Container size="wide" className="relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-6 text-[10px] font-semibold tracking-[0.25em] text-brand-ink/60">START A CONVERSATION</p>
            <h2 data-reveal-text className="max-w-4xl font-display text-5xl font-semibold leading-[.98] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Make room for a <span className="font-editorial font-normal italic">bigger idea.</span>
            </h2>
          </div>
          <Link
            to="/contact"
            data-button-tone="dark"
            className="site-button booking-cta-button inline-flex min-h-14 w-fit items-center gap-4 rounded-full px-7 text-sm font-semibold"
          >
            <span className="site-button__content">
              Book David <ArrowUpRight size={18} aria-hidden="true" data-button-arrow="up" />
            </span>
          </Link>
        </div>
        <div className="mt-16 flex items-center gap-3 border-t border-brand-ink/20 pt-5 text-xs text-brand-ink/60">
          <Lightbulb size={16} /> Good conversations can change what happens next.
          <ArrowDownRight className="ml-auto" size={18} />
        </div>
      </Container>
    </Section>
  );
}
