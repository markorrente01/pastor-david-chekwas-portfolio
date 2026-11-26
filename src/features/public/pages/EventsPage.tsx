import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { Container } from "../../../shared/ui/container";
import { useEventsPageAnimations } from "../hooks/useEventsPageAnimations";

const upcomingEvents = [
  {
    number: "01",
    date: "18 FEB 2027",
    type: "KEYNOTE · SAMPLE EVENT",
    title: "The Future of African Enterprise",
    location: "Lagos, Nigeria",
    description:
      "A conversation about building ambitious businesses, developing stronger leaders, and creating opportunities that last.",
  },
  {
    number: "02",
    date: "12 MAR 2027",
    type: "LEADERSHIP SUMMIT · SAMPLE EVENT",
    title: "Leadership Beyond the Playbook",
    location: "Nairobi, Kenya",
    description:
      "Questioning familiar leadership models and exploring what it takes to lead through change.",
  },
  {
    number: "03",
    date: "08 APR 2027",
    type: "VIRTUAL SESSION · SAMPLE EVENT",
    title: "Building What Matters",
    location: "Online",
    description:
      "A practical discussion about purpose, strategic thinking, and building businesses with meaningful impact.",
  },
];

const pastMoments = [
  {
    title: "Ideas into action",
    category: "KEYNOTE · CONCEPT IMAGE",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1100&q=85",
    alt: "Speaker addressing an audience at a conference",
    className: "md:col-span-7",
  },
  {
    title: "A room full of questions",
    category: "LEADERSHIP · CONCEPT IMAGE",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=85",
    alt: "Audience attending a conference",
    className: "md:col-span-5 md:mt-28",
  },
  {
    title: "Conversations that matter",
    category: "PANEL · CONCEPT IMAGE",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=85",
    alt: "Panel discussion at a business event",
    className: "md:col-span-6",
  },
];

export function EventsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEventsPageAnimations(pageRef);

  return (
    <main ref={pageRef} className="overflow-hidden bg-[#F5F2EB] text-[#111111]">
      <section className="relative bg-[#111111] pb-24 pt-36 text-[#F5F2EB] md:pb-32 md:pt-44">
        <Container size="wide">
          <div className="mb-16 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D6A84B]">
              EVENTS / APPEARANCES
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
              IDEAS IN THE ROOM · 01—04
            </p>
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4" data-events-hero-copy>
              <span className="mb-5 block h-px w-12 bg-[#D6A84B]" />
              <p className="max-w-sm text-base leading-relaxed text-white/60 md:text-lg">
                Every room is an opportunity to challenge assumptions, start
                better conversations, and leave people thinking differently.
              </p>
              <a
                href="#upcoming"
                className="mt-9 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D6A84B] transition-colors hover:text-white"
              >
                Explore appearances
                <ArrowDownRight size={16} />
              </a>
            </div>

            <div className="lg:col-span-8">
              <p className="mb-5 text-right text-[10px] uppercase tracking-[0.25em] text-white/40">
                ON STAGES · IN CONVERSATION · AROUND THE WORLD
              </p>
              <h1 className="text-right font-['Space_Grotesk'] text-[clamp(3.5rem,9.5vw,9rem)] font-medium leading-[0.94] tracking-[-0.085em]">
                <span className="block overflow-hidden pb-[0.10em]">
                  <span className="block" data-events-hero-line>
                    IDEAS MOVE.
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.10em]">
                  <span className="block text-[#D6A84B]" data-events-hero-line>
                    PEOPLE
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.10em]">
                  <span className="block" data-events-hero-line>
                    MOVE
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.10em]">
                  <span className="block" data-events-hero-line>
                    THINGS.
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </Container>

        <div className="pointer-events-none absolute bottom-0 right-[8%] hidden h-24 w-px bg-gradient-to-b from-[#D6A84B]/70 to-transparent md:block" />
      </section>

      <section className="py-24 md:py-36">
        <Container size="wide">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div data-events-reveal>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A17A2F]">
                IN THE SPOTLIGHT
              </p>
              <h2 className="max-w-2xl font-['Space_Grotesk'] text-4xl font-medium leading-[0.98] tracking-[-0.06em] md:text-6xl">
                A bigger conversation
                <br />
                starts with a question.
              </h2>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#77736C]">
              FEATURED APPEARANCE · DEMO
            </span>
          </div>

          <div
            className="group relative overflow-hidden bg-[#282828]"
            data-events-featured-image
          >
            <div className="relative aspect-[4/5] md:aspect-[16/8]">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2000&q=90"
                alt="A speaker presenting on stage in front of an audience"
                className="h-full w-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />

              <div className="absolute left-6 top-6 border border-white/30 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white md:left-10 md:top-10">
                Illustrative event concept
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-12">
                <div className="grid gap-8 md:grid-cols-12 md:items-end">
                  <div className="md:col-span-8">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#D6A84B]">
                      SAMPLE KEYNOTE · BUSINESS & LEADERSHIP
                    </p>
                    <h3 className="max-w-3xl font-['Space_Grotesk'] text-4xl font-medium leading-[0.95] tracking-[-0.06em] md:text-7xl">
                      The courage
                      <br />
                      to think differently.
                    </h3>
                  </div>
                  <div className="md:col-span-4 md:text-right">
                    <p className="mb-2 text-sm text-white/75">
                      A sample keynote appearance
                    </p>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/45">
                      Africa · Global stage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="upcoming"
        className="bg-[#111111] py-24 text-[#F5F2EB] md:py-36"
      >
        <Container size="wide">
          <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7" data-events-reveal>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6A84B]">
                THE CALENDAR
              </p>
              <h2 className="font-['Space_Grotesk'] text-5xl font-medium leading-[0.9] tracking-[-0.07em] md:text-8xl">
                WHERE THE
                <br />
                <span className="text-white/35">CONVERSATION</span>
                <br />
                HAPPENS.
              </h2>
            </div>

            <div className="md:col-span-5 md:pb-2" data-events-reveal>
              <p className="max-w-sm text-sm leading-relaxed text-white/55 md:ml-auto md:text-right">
                From keynote stages to focused leadership conversations, each
                appearance is an invitation to think beyond the obvious.
              </p>
              <p className="mt-5 text-[9px] uppercase tracking-[0.18em] text-[#D6A84B] md:text-right">
                Sample schedule · Illustrative dates and venues
              </p>
            </div>
          </div>

          <div className="border-t border-white/15">
            {upcomingEvents.map((event) => (
              <article
                key={event.number}
                data-events-row
                className="group grid gap-5 border-b border-white/15 py-9 transition-colors duration-300 hover:bg-white/[0.035] md:grid-cols-12 md:items-center md:gap-8 md:px-5"
              >
                <div className="flex items-center gap-4 md:col-span-2">
                  <span className="font-['Space_Grotesk'] text-2xl text-[#D6A84B]">
                    {event.number}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    {event.date}
                  </span>
                </div>

                <div className="md:col-span-5">
                  <p className="mb-3 text-[9px] uppercase tracking-[0.18em] text-[#D6A84B]">
                    {event.type}
                  </p>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-medium tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                    {event.title}
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <p className="mb-3 max-w-md text-sm leading-relaxed text-white/50">
                    {event.description}
                  </p>
                  <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-white/70">
                    <MapPin size={13} className="text-[#D6A84B]" />
                    {event.location}
                  </p>
                </div>

                <div className="flex justify-end md:col-span-1">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 group-hover:border-[#D6A84B] group-hover:bg-[#D6A84B] group-hover:text-[#111111]"
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-36">
        <Container size="wide">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div data-events-reveal>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A17A2F]">
                BEHIND THE MOMENT
              </p>
              <h2 className="font-['Space_Grotesk'] text-5xl font-medium leading-[0.9] tracking-[-0.07em] md:text-8xl">
                THE ROOM.
                <br />
                THE ENERGY.
                <br />
                <span className="text-[#A17A2F]">THE IDEAS.</span>
              </h2>
            </div>

            <div className="max-w-xs md:text-right" data-events-reveal>
              <p className="text-sm leading-relaxed text-[#77736C]">
                A visual collection of the conversations, stages, and
                encounters that shape the work.
              </p>
              <p className="mt-4 text-[9px] uppercase tracking-[0.17em] text-[#A17A2F]">
                Illustrative gallery · Not actual appearances
              </p>
            </div>
          </div>

          <div className="grid gap-x-7 gap-y-16 md:grid-cols-12">
            {pastMoments.map((moment) => (
              <article
                key={moment.title}
                data-events-gallery-item
                className={moment.className}
              >
                <div className="group relative aspect-[5/4] overflow-hidden bg-[#282828]">
                  <img
                    src={moment.image}
                    alt={moment.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
                  <span className="absolute bottom-5 left-5 border border-white/40 bg-black/20 px-3 py-2 text-[8px] uppercase tracking-[0.17em] text-white backdrop-blur-sm">
                    Demo image
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-['Space_Grotesk'] text-2xl font-medium tracking-[-0.045em] md:text-3xl">
                    {moment.title}
                  </h3>
                  <span className="pt-2 text-[8px] uppercase tracking-[0.16em] text-[#77736C]">
                    {moment.category}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#D6A84B] py-24 md:py-36">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8" data-events-cta>
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#111111]/65">
                HAVE A ROOM WORTH CHALLENGING?
              </p>
              <h2 className="font-['Space_Grotesk'] text-5xl font-medium leading-[0.86] tracking-[-0.075em] md:text-[7.5rem]">
                LET'S MAKE
                <br />
                IT MATTER.
              </h2>
            </div>

            <div className="md:col-span-4 md:pb-2" data-events-cta-copy>
              <p className="mb-8 max-w-sm text-sm leading-relaxed text-[#111111]/75">
                For keynote speaking, panel conversations, and strategic
                engagements, let's start with a conversation.
              </p>
              <Link
                to="/contact"
                className="site-button inline-flex items-center gap-4 border border-[#111111] bg-[#111111] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-transparent hover:text-[#111111]"
                data-button-tone="dark"
              >
                Discuss an appearance
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-[#111111]/25 pt-5">
            <span className="text-[9px] uppercase tracking-[0.18em] text-[#111111]/60">
              DAVID CHEKWAS
            </span>
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-[#111111]/60">
              <CalendarDays size={13} />
              AVAILABLE FOR SELECT ENGAGEMENTS
            </span>
          </div>
        </Container>
      </section>
    </main>
  );
}
