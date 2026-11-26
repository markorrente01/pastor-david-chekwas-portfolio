import { useLayoutEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Container } from "../../../shared/ui/container";
import { Section } from "../../../shared/ui/section";
import { KineticStatement } from "../../../shared/ui/kinetic-statement";

const speakingTopics = [
  {
    number: "01",
    category: "Leadership",
    title: "The Future of Leadership",
    description: "Leading when the old rules no longer work.",
  },
  {
    number: "02",
    category: "Entrepreneurship",
    title: "Beyond the Startup Mindset",
    description: "Building businesses that outgrow their founders.",
  },
  {
    number: "03",
    category: "Strategy",
    title: "The Strategy Advantage",
    description: "Stop being busy. Start being intentional.",
  },
  {
    number: "04",
    category: "Innovation",
    title: "Rethinking Business in the Digital Age",
    description:
      "The future won't wait for your organization to catch up.",
  },
  {
    number: "05",
    category: "People & Culture",
    title: "The Human Side of Business",
    description:
      "People build businesses. Leadership determines what they become.",
  },
];

const formats = [
  "Keynote presentations",
  "Panel conversations",
  "Fireside chats",
  "Workshops",
];

gsap.registerPlugin(ScrollTrigger);

export function SpeakingPage() {
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = pageRef.current;

    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      // Hero: choreographed entrance, following the approved showcase.
      gsap.fromTo(
        "[data-speaking-hero-line]",
        { yPercent: 120, rotate: 3 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.15,
          stagger: 0.13,
          ease: "power4.out",
          delay: 0.15,
        },
      );

      // Editorial introduction: masked vertical reveal.
      gsap.fromTo(
        "[data-speaking-intro-title]",
        { y: 90, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: "[data-speaking-intro-title]",
            start: "top 80%",
            once: true,
          },
        },
      );

      // Topics heading: editorial reveal.
      gsap.fromTo(
        "[data-speaking-topics-title]",
        { y: 85, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.15,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: "[data-speaking-topics-title]",
            start: "top 82%",
            once: true,
          },
        },
      );

      // Topics: staggered entrance from the right.
      gsap.fromTo(
        "[data-speaking-topic]",
        { x: 80, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.13,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: "[data-speaking-topic]",
            start: "top 78%",
            once: true,
          },
        },
      );

      // Engagement heading: vertical entrance.
      gsap.fromTo(
        "[data-speaking-format-title]",
        { y: 70, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.1,
          ease: "power4.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: "[data-speaking-format-title]",
            start: "top 80%",
            once: true,
          },
        },
      );

      // Engagement options: sequential horizontal movement.
      gsap.fromTo(
        "[data-speaking-format-row]",
        { x: 55, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: "[data-speaking-format-row]",
            start: "top 80%",
            once: true,
          },
        },
      );

      // Final CTA: dramatic scale and rise.
      gsap.fromTo(
        "[data-speaking-cta-title]",
        { scale: 0.72, y: 80, autoAlpha: 0 },
        {
          scale: 1,
          y: 0,
          autoAlpha: 1,
          duration: 1.3,
          ease: "expo.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: "[data-speaking-cta-title]",
            start: "top 75%",
            once: true,
          },
        },
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <main ref={pageRef}>
      {/* Hero */}
      <Section className="relative isolate overflow-hidden bg-brand-ink text-brand-white">
        <Container
          size="wide"
          className="relative flex min-h-[760px] flex-col justify-between pb-16 pt-32 sm:min-h-[850px] sm:pb-20 sm:pt-40"
        >
          <div className="flex items-center justify-between gap-6 border-b border-white/15 pb-5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold">
              Speaking / 01
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">
              Based in Africa · Speaking globally
            </span>
          </div>

          <div className="relative z-10 ml-auto mt-20 w-full max-w-6xl text-right">
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-brand-gold">
              Ideas · Perspective · Possibility
            </p>

            <h1 className="text-[clamp(4rem,11vw,10.5rem)] font-semibold uppercase leading-[0.94] tracking-[-0.085em]">
              <span className="block overflow-hidden pb-[0.16em]">
                <span data-speaking-hero-line className="inline-block">MAKE THEM</span>
              </span>
              <span className="block overflow-hidden pb-[0.16em]">
                <span data-speaking-hero-line className="inline-block text-brand-gold">THINK</span>
              </span>
              <span className="block overflow-hidden pb-[0.16em]">
                <span data-speaking-hero-line className="inline-block font-serif font-normal italic normal-case tracking-[-0.055em]">
                  differently.
                </span>
              </span>
            </h1>
          </div>

          <div className="mt-20 grid gap-10 border-t border-white/15 pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-md text-sm leading-8 text-white/60 sm:text-base">
              Challenging familiar thinking about business, leadership and
              growth — and opening up new ways to see what is possible.
            </p>

            <div className="flex flex-col items-start gap-5 sm:items-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-brand-gold px-7 py-4 text-sm font-semibold text-brand-ink transition-colors duration-300 hover:bg-brand-white"
              >
                Bring David to your stage
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Scroll to explore
              </span>
            </div>
          </div>
        </Container>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full border border-brand-gold/15 sm:h-[650px] sm:w-[650px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-[30%] h-[340px] w-[340px] rounded-full border border-brand-gold/10 sm:h-[500px] sm:w-[500px]"
        />
      </Section>

      {/* Perspective */}
      <Section className="bg-brand-ivory py-28 sm:py-36">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-24">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-brand-muted">
                The thinking behind the conversation
              </p>

              <h2 data-speaking-intro-title className="mt-10 max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.065em] text-brand-ink sm:text-7xl">
                The world doesn't need more{" "}
                <span className="font-serif font-normal italic text-brand-muted">
                  noise.
                </span>
                <br />
                It needs better questions.
              </h2>
            </div>

            <div className="lg:pt-24">
              <div className="mb-8 h-px w-16 bg-brand-gold" />
              <p className="text-base leading-8 text-brand-muted">
                The most valuable conversations often begin by questioning
                what everyone else has accepted as normal.
              </p>
              <p className="mt-6 text-base leading-8 text-brand-muted">
                David's perspective sits at the intersection of
                entrepreneurship, leadership, innovation and human potential.
                His work explores how individuals and organisations can move
                beyond outdated approaches and build with greater intention.
              </p>
              <p className="mt-6 text-base leading-8 text-brand-muted">
                The aim is not simply to deliver information. It is to create
                a different way of looking at the challenges and opportunities
                ahead.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Topics */}
      <Section className="bg-[#E9E5DC] py-28 sm:py-36">
        <Container size="wide">
          <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-brand-muted">
                The conversation index / 02
              </p>
              <p className="mt-5 font-serif text-2xl italic text-brand-muted">
                Five ways to rethink what comes next.
              </p>
            </div>

            <h2 data-speaking-topics-title className="text-right text-5xl font-medium leading-[0.92] tracking-[-0.065em] text-brand-ink sm:text-7xl">
              IDEAS THAT
              <br />
              <span className="font-serif font-normal italic">
                challenge.
              </span>
            </h2>
          </div>

          <div className="border-t border-brand-ink/20">
            {speakingTopics.map((topic) => (
              <article
                data-speaking-topic
                key={topic.number}
                className="group grid gap-6 border-b border-brand-ink/20 py-8 transition-colors duration-300 hover:bg-[#DED8CC] sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-8 sm:py-9 lg:grid-cols-[100px_1fr_220px_auto]"
              >
                <span className="font-serif text-3xl italic text-brand-gold">
                  {topic.number}
                </span>

                <div className="min-w-0">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold">
                      {topic.category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-brand-muted/50" />
                    <span className="text-[9px] uppercase tracking-[0.15em] text-brand-muted">
                      Speaking topic
                    </span>
                  </div>

                  <h3 className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.045em] text-brand-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl lg:text-[2.5rem]">
                    {topic.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-muted">
                    {topic.description}
                  </p>
                </div>

                <div className="hidden text-xs text-brand-muted lg:block">
                  KEYNOTE / {topic.number}
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-ink/20 text-brand-muted transition-all duration-300 group-hover:border-brand-ink group-hover:bg-brand-ink group-hover:text-brand-white"
                >
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Centered signature statement with masked text choreography */}
      <KineticStatement
        eyebrow="The measure of a conversation"
        lines={[
          <>A GOOD TALK</>,
          <>SHOULD OPEN</>,
          <span className="font-serif font-normal italic text-brand-gold normal-case tracking-[-0.04em]">
            a new door.
          </span>,
        ]}
        description="Fresh perspectives. Thoughtful questions. More intentional ways to approach the future of business and leadership."
      />

      {/* Formats */}
      <Section className="bg-brand-white py-28 sm:py-36">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-brand-muted">
                Ways to engage / 03
              </p>

              <h2 data-speaking-format-title className="mt-8 max-w-lg text-5xl font-medium leading-[0.95] tracking-[-0.065em] text-brand-ink sm:text-6xl">
                One message.
                <br />
                <span className="font-serif font-normal italic text-brand-muted">
                  Different rooms.
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-8 text-brand-muted">
                The right format depends on the audience, the event and the
                kind of conversation you want to create.
              </p>
            </div>

            <div className="border-t border-brand-ink/20">
              {formats.map((format, index) => (
                <div
                  data-speaking-format-row
                  key={format}
                  className="grid grid-cols-[48px_1fr_auto] items-center gap-4 border-b border-brand-ink/20 py-7 sm:py-9"
                >
                  <span className="text-xs tabular-nums text-brand-muted">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-medium tracking-[-0.035em] text-brand-ink sm:text-3xl">
                    {format}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-brand-muted"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section className="bg-brand-gold py-28 text-brand-ink sm:py-36">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-brand-ink/60">
                Have a room worth challenging?
              </p>

              <h2 data-speaking-cta-title className="mt-8 max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                LET'S START
                <br />
                A BIGGER
                <br />
                <span className="font-serif font-normal italic">
                  conversation.
                </span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-4 rounded-full border border-brand-ink/30 px-7 py-4 text-sm font-semibold text-brand-ink transition-colors duration-300 hover:bg-brand-ink hover:text-brand-white"
            >
              Discuss your event
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-brand-ink/20 pt-6 text-[10px] uppercase tracking-[0.2em] text-brand-ink/55">
            <span>David Chekwas / Speaking</span>
            <ArrowDown size={15} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
