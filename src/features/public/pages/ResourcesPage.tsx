import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  Layers3,
  Lightbulb,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useResourcesPageAnimations } from "../hooks/useResourcesPageAnimations";

type ResourceCategory =
  | "All"
  | "Leadership"
  | "Business"
  | "Perspective";

type Resource = {
  id: string;
  number: string;
  title: string;
  category: Exclude<ResourceCategory, "All">;
  format: string;
  readTime: string;
  description: string;
  premise: string;
  takeaways: string[];
  accent: string;
};

const categories: ResourceCategory[] = [
  "All",
  "Leadership",
  "Business",
  "Perspective",
];

const resources: Resource[] = [
  {
    id: "01",
    number: "01",
    title: "The questions leaders should be asking",
    category: "Leadership",
    format: "Leadership field note",
    readTime: "8 min read",
    description:
      "A practical starting point for leaders who want to move beyond managing activity and start creating meaningful direction.",
    premise:
      "Leadership is not simply about having answers. It is about knowing which questions are worth asking, and creating the conditions for people to explore them.",
    takeaways: [
      "Challenge assumptions before setting direction.",
      "Make room for questions that create productive tension.",
      "Build a culture where curiosity is part of the work.",
    ],
    accent: "from-[#D6A84B]/25 via-[#D6A84B]/5 to-transparent",
  },
  {
    id: "02",
    number: "02",
    title: "Building beyond the obvious",
    category: "Business",
    format: "Strategic framework",
    readTime: "12 min read",
    description:
      "A framework for examining the opportunities hidden behind familiar business models and conventional thinking.",
    premise:
      "The obvious opportunity is not always the most valuable one. Sustainable growth often begins when a business is willing to question the way it has always operated.",
    takeaways: [
      "Identify the assumptions shaping your current model.",
      "Look for overlooked customer problems.",
      "Separate familiar activity from meaningful progress.",
    ],
    accent: "from-[#9A8B70]/25 via-[#9A8B70]/5 to-transparent",
  },
  {
    id: "03",
    number: "03",
    title: "A different way to think about growth",
    category: "Business",
    format: "Growth perspective",
    readTime: "6 min read",
    description:
      "A short exploration of what growth means when scale, relevance and long-term value matter equally.",
    premise:
      "Growth should be measured by more than how much a business expands. The quality of that growth matters just as much as its speed.",
    takeaways: [
      "Define what meaningful growth looks like.",
      "Understand the difference between scale and progress.",
      "Build systems that support long-term value.",
    ],
    accent: "from-[#6F8580]/25 via-[#6F8580]/5 to-transparent",
  },
  {
    id: "04",
    number: "04",
    title: "The courage to think differently",
    category: "Perspective",
    format: "Thinking exercise",
    readTime: "5 min read",
    description:
      "A collection of prompts designed to help individuals and teams question familiar ideas and explore new possibilities.",
    premise:
      "New thinking rarely begins with a completely new answer. More often, it begins with the courage to question an old assumption.",
    takeaways: [
      "Notice the ideas you rarely challenge.",
      "Explore the opposite of your default response.",
      "Turn uncomfortable questions into useful conversations.",
    ],
    accent: "from-[#A48A70]/25 via-[#A48A70]/5 to-transparent",
  },
  {
    id: "05",
    number: "05",
    title: "Creating space for better decisions",
    category: "Leadership",
    format: "Leadership guide",
    readTime: "9 min read",
    description:
      "A guide to slowing down the decision-making process without slowing down the organisation.",
    premise:
      "Better decisions require more than speed. They require clarity, useful disagreement and an understanding of what is really at stake.",
    takeaways: [
      "Distinguish urgency from importance.",
      "Invite perspectives that challenge the room.",
      "Make decisions with clear ownership and intent.",
    ],
    accent: "from-[#8C806B]/25 via-[#8C806B]/5 to-transparent",
  },
  {
    id: "06",
    number: "06",
    title: "What does meaningful impact look like?",
    category: "Perspective",
    format: "Reflection",
    readTime: "7 min read",
    description:
      "A reflection on moving beyond visible activity and thinking more carefully about the value we create.",
    premise:
      "Impact is not simply what we do or how many people see it. It is the difference that remains after the activity is over.",
    takeaways: [
      "Define the change you actually want to create.",
      "Look beyond visibility and immediate outcomes.",
      "Connect everyday decisions to a larger purpose.",
    ],
    accent: "from-[#B69A63]/25 via-[#B69A63]/5 to-transparent",
  },
];

const categoryDescriptions: Record<ResourceCategory, string> = {
  All: "Ideas, frameworks and questions for people building what comes next.",
  Leadership: "Rethinking how we lead, influence and make decisions.",
  Business: "New perspectives on strategy, opportunity and meaningful growth.",
  Perspective: "Questions that challenge familiar thinking and open new doors.",
};

export function ResourcesPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] =
    useState<ResourceCategory>("All");
  const [selectedResource, setSelectedResource] =
    useState<Resource | null>(null);

  const visibleResources =
    activeCategory === "All"
      ? resources
      : resources.filter(
          (resource) => resource.category === activeCategory,
        );

  useResourcesPageAnimations(pageRef, activeCategory);

  useEffect(() => {
    if (!selectedResource) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedResource(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedResource]);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#F5F2EB] text-[#111111]"
    >
      {/* HERO */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#111111] text-[#F5F2EB]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-40 top-20 h-[560px] w-[560px] rounded-full border border-white/[0.07]" />
          <div className="absolute -right-16 top-44 h-[360px] w-[360px] rounded-full border border-white/[0.07]" />
          <div className="absolute right-16 top-72 h-[160px] w-[160px] rounded-full border border-[#D6A84B]/20" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-[1440px] flex-col justify-between px-6 pb-12 pt-32 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between gap-6">
            <p className="resources-hero-meta text-[10px] uppercase tracking-[0.3em] text-[#D6A84B] sm:text-xs">
              THE KNOWLEDGE ARCHIVE
            </p>
            <p className="resources-hero-meta hidden text-xs tracking-[0.15em] text-white/40 sm:block">
              IDEAS / 001—006
            </p>
          </div>

          <div className="relative z-10 max-w-[1100px] py-20">
            <p className="resources-hero-kicker mb-8 text-xs uppercase tracking-[0.22em] text-white/45">
              A LIBRARY FOR THE CURIOUS
            </p>

            <h1 className="resources-hero-title text-[clamp(3.8rem,10vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              <span className="block overflow-hidden">
                <span className="resources-hero-line block">
                  THINK
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="resources-hero-line block text-[#D6A84B]">
                  BEYOND.
                </span>
              </span>
            </h1>

            <div className="mt-12 flex flex-col gap-8 border-t border-white/15 pt-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="resources-hero-description max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
                Ideas, frameworks and questions for people who
                refuse to accept that the obvious is the only way.
              </p>

              <a
                href="#archive"
                className="resources-hero-link inline-flex w-fit items-center gap-4 text-xs uppercase tracking-[0.18em] transition-colors hover:text-[#D6A84B]"
              >
                Explore the archive
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25">
                  <ArrowDown size={15} />
                </span>
              </a>
            </div>
          </div>

          <div className="resources-hero-bottom flex items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-white/35">
            <span>THOUGHT. STRATEGY. ACTION.</span>
            <span>BASED IN AFRICA. THINKING GLOBALLY.</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="resources-intro-label flex items-start gap-4">
            <span className="mt-1 h-2 w-2 rounded-full bg-[#D6A84B]" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#77736C]">
                WHY THIS LIBRARY EXISTS
              </p>
              <p className="mt-3 text-xs text-[#77736C]">
                A place to start thinking.
              </p>
            </div>
          </div>

          <div className="resources-intro-copy">
            <h2 className="max-w-4xl text-[clamp(2.5rem,5.5vw,5.6rem)] font-medium leading-[1.02] tracking-[-0.065em]">
              The best ideas don't just give you answers.
              <span className="font-serif italic font-normal text-[#A58A55]">
                {" "}They change your questions.
              </span>
            </h2>

            <p className="mt-10 max-w-xl text-base leading-[1.9] text-[#77736C]">
              This is a growing collection of thinking tools,
              practical perspectives and ideas around leadership,
              business and the work of building something that matters.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED RESOURCE */}
      <section className="px-6 pb-28 sm:px-10 lg:px-16 lg:pb-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="resources-featured relative grid overflow-hidden bg-[#22221F] text-[#F5F2EB] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex min-h-[460px] flex-col justify-between overflow-hidden p-8 sm:p-12 lg:p-16">
              <div className="absolute -right-16 top-12 h-80 w-80 rounded-full border border-[#D6A84B]/20" />
              <div className="absolute -right-2 top-28 h-52 w-52 rounded-full border border-[#D6A84B]/20" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D6A84B]">
                  THE FEATURED THINKING
                </span>
                <span className="text-xs text-white/35">01 / 06</span>
              </div>

              <div className="relative z-10 py-16">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#D6A84B]/40 text-[#D6A84B]">
                  <Lightbulb size={23} strokeWidth={1.3} />
                </div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  A LEADERSHIP FIELD NOTE
                </p>
                <h2 className="max-w-xl text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.98] tracking-[-0.065em]">
                  What if the problem is the way we think?
                </h2>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-5 text-xs text-white/45">
                <span>AN EXERCISE IN PERSPECTIVE</span>
                <span>PREVIEW CONCEPT</span>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-[#D6A84B] p-8 text-[#111111] sm:p-12 lg:p-16">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em]">
                  A DIFFERENT STARTING POINT
                </span>
                <Compass size={22} strokeWidth={1.3} />
              </div>

              <div className="py-16">
                <p className="max-w-md text-xl leading-relaxed sm:text-2xl">
                  Before searching for a better solution, consider
                  whether you're asking the right question.
                </p>
                <p className="mt-8 max-w-md text-sm leading-relaxed text-black/65">
                  A short thinking exercise about assumptions,
                  perspective and the possibilities that emerge
                  when we challenge what we take for granted.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedResource(resources[0])}
                className="group flex w-full items-center justify-between border-t border-black/20 pt-5 text-left text-xs uppercase tracking-[0.17em]"
              >
                Explore this preview
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/30 transition-all duration-300 group-hover:bg-[#111111] group-hover:text-[#F5F2EB]">
                  <ArrowUpRight size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHIVE */}
      <section
        id="archive"
        className="scroll-mt-20 bg-[#EAE6DD] px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex flex-col justify-between gap-10 border-b border-[#111111]/15 pb-10 lg:flex-row lg:items-end">
            <div className="resources-archive-heading">
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#A58A55]">
                THE COLLECTION
              </p>
              <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.075em]">
                The archive<span className="text-[#A58A55]">.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#77736C]">
                A collection of ideas to explore, challenge and put
                into practice.
              </p>
            </div>

            <div className="resources-archive-count text-xs uppercase tracking-[0.16em] text-[#77736C]">
              <span className="text-3xl font-medium tracking-tight text-[#111111]">
                {String(visibleResources.length).padStart(2, "0")}
              </span>
              <span className="ml-3">ENTRIES IN VIEW</span>
            </div>
          </div>

          <div className="resources-filter-row mb-12 flex flex-wrap items-center gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-3 text-[10px] uppercase tracking-[0.16em] transition-all duration-300 ${
                    isActive
                      ? "border-[#111111] bg-[#111111] text-[#F5F2EB]"
                      : "border-[#111111]/20 text-[#77736C] hover:border-[#111111] hover:text-[#111111]"
                  }`}
                >
                  {category}
                </button>
              );
            })}

            <p className="ml-auto hidden max-w-xs text-right text-xs leading-relaxed text-[#77736C] md:block">
              {categoryDescriptions[activeCategory]}
            </p>
          </div>

          <div
            className="resources-list border-t border-[#111111]/20"
            aria-live="polite"
          >
            {visibleResources.map((resource) => (
              <article
                key={resource.id}
                className="resources-entry group grid gap-6 border-b border-[#111111]/20 py-8 transition-colors duration-300 hover:bg-white/30 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-8 lg:grid-cols-[100px_1fr_220px_auto]"
              >
                <span className="resources-entry-number font-serif text-3xl italic text-[#A58A55]">
                  {resource.number}
                </span>

                <div className="min-w-0">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#A58A55]">
                      {resource.category}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#77736C]/50" />
                    <span className="text-[9px] uppercase tracking-[0.15em] text-[#77736C]">
                      {resource.format}
                    </span>
                  </div>

                  <h3 className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl lg:text-[2.5rem]">
                    {resource.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#77736C]">
                    {resource.description}
                  </p>
                </div>

                <div className="hidden text-xs text-[#77736C] lg:block">
                  {resource.readTime}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedResource(resource)}
                  aria-label={`Preview ${resource.title}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#111111]/20 transition-all duration-300 group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-[#F5F2EB]"
                >
                  <ArrowUpRight size={19} />
                </button>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.17em] text-[#77736C]">
            <span>END OF CURRENT COLLECTION</span>
            <span>MORE IDEAS TO COME</span>
          </div>
        </div>
      </section>

      {/* EDITORIAL STATEMENT */}
      <section className="relative overflow-hidden bg-[#F5F2EB] px-6 py-32 sm:px-10 lg:px-16 lg:py-48">
        <div className="absolute -right-28 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[#D6A84B]/20" />
        <div className="absolute -right-10 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full border border-[#D6A84B]/25" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="resources-statement-label mb-12 flex items-center gap-4">
            <span className="h-px w-12 bg-[#D6A84B]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#77736C]">
              TAKE THE THINKING FURTHER
            </span>
          </div>

          <h2 className="resources-statement max-w-6xl text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.95] tracking-[-0.075em]">
            Don't just collect ideas.
            <span className="block font-serif italic font-normal text-[#A58A55]">
              Put them to work.
            </span>
          </h2>

          <div className="mt-16 flex flex-col gap-8 border-t border-[#111111]/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-[#77736C]">
              The value of an idea is found in what it helps you
              question, change and build.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-5 text-xs uppercase tracking-[0.18em]"
            >
              Start a conversation
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-[#F5F2EB] transition-transform duration-300 group-hover:translate-x-2">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* PREVIEW PANEL */}
      {selectedResource && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#111111]/80 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedResource(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resource-preview-title"
            className="relative my-auto w-full max-w-3xl overflow-hidden bg-[#F5F2EB] shadow-2xl"
          >
            <div className="flex items-center justify-between bg-[#22221F] px-6 py-5 text-[#F5F2EB] sm:px-10">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#D6A84B]">
                  RESOURCE PREVIEW / {selectedResource.number}
                </p>
                <p className="mt-2 text-xs text-white/45">
                  {selectedResource.format}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedResource(null)}
                aria-label="Close resource preview"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-[#111111]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-7 sm:p-12">
              <div className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#A58A55]">
                <BookOpen size={15} />
                {selectedResource.category}
              </div>

              <h2
                id="resource-preview-title"
                className="max-w-2xl text-[clamp(2.3rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.065em]"
              >
                {selectedResource.title}
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-[1.85] text-[#77736C]">
                {selectedResource.premise}
              </p>

              <div className="mt-12 border-t border-[#111111]/15 pt-8">
                <div className="mb-7 flex items-center gap-3">
                  <Layers3 size={17} className="text-[#A58A55]" />
                  <h3 className="text-xs uppercase tracking-[0.18em]">
                    Inside this idea
                  </h3>
                </div>

                <ul className="space-y-5">
                  {selectedResource.takeaways.map((takeaway, index) => (
                    <li
                      key={takeaway}
                      className="flex gap-5 text-sm leading-relaxed text-[#77736C]"
                    >
                      <span className="font-serif text-lg italic text-[#A58A55]">
                        0{index + 1}
                      </span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 border-t border-[#111111]/15 pt-6">
                <div className="flex items-start gap-3">
                  <Lightbulb
                    size={17}
                    className="mt-0.5 shrink-0 text-[#A58A55]"
                  />
                  <p className="text-xs leading-relaxed text-[#77736C]">
                    This is an illustrative preview. The complete
                    resource content will be developed as part of
                    the finished knowledge library.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FINAL NOTE */}
      <section className="bg-[#111111] px-6 py-7 text-[#F5F2EB] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-[9px] uppercase tracking-[0.2em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>DAVID CHEKWAS / THE KNOWLEDGE ARCHIVE</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84B]" />
            IDEAS FOR WHAT COMES NEXT
          </span>
        </div>
      </section>
    </main>
  );
}
