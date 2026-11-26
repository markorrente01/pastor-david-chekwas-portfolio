import { useMemo, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Clock3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../shared/ui/container";
import { Section } from "../../../shared/ui/section";
import { useInsightsPageAnimations } from "../hooks/useInsightsPageAnimations";

const featuredArticle = {
  slug: "the-courage-to-think-differently",
  category: "Leadership",
  title: "The courage to think differently",
  description:
    "Real progress rarely begins with having all the answers. It begins when someone is willing to question the assumptions everyone else has accepted.",
  read: "5 MIN READ",
  image:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90",
};

const articles = [
  {
    slug: "progress-begins-with-better-questions",
    category: "Business",
    title: "Progress begins with better questions",
    description:
      "Why the quality of our questions can shape the quality of our decisions.",
    read: "4 MIN READ",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "what-does-meaningful-impact-look-like",
    category: "Perspective",
    title: "What does meaningful impact look like?",
    description:
      "Looking beyond activity and ambition to understand what truly changes.",
    read: "6 MIN READ",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "the-leadership-space-to-listen",
    category: "Leadership",
    title: "The leadership space to listen",
    description:
      "A different perspective on attention, trust and the people we lead.",
    read: "5 MIN READ",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "building-beyond-the-obvious",
    category: "Business",
    title: "Building beyond the obvious",
    description:
      "How organisations can make room for ideas that challenge familiar models.",
    read: "7 MIN READ",
    number: "05",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "the-value-of-a-new-perspective",
    category: "Perspective",
    title: "The value of a new perspective",
    description:
      "Sometimes the most important shift is not what we see, but how we see it.",
    read: "4 MIN READ",
    number: "06",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = ["All", "Leadership", "Business", "Perspective"] as const;

type Category = (typeof categories)[number];

export function InsightsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const visibleArticles = useMemo(
    () =>
      activeCategory === "All"
        ? articles
        : articles.filter((article) => article.category === activeCategory),
    [activeCategory],
  );

  useInsightsPageAnimations(pageRef, activeCategory);

  return (
    <div ref={pageRef} className="overflow-hidden bg-brand-ivory text-brand-ink">
      {/* EDITORIAL COVER */}
      <Section className="relative bg-brand-ink pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
        <Container size="wide">
          <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_.65fr]">
            <div>
              <p className="mb-8 flex items-center gap-3 text-[10px] font-semibold tracking-[0.28em] text-brand-gold">
                <span className="h-px w-9 bg-brand-gold" />
                THE IDEAS JOURNAL
                <span className="text-white/35">/ ISSUE 001</span>
              </p>

              <h1 className="font-display text-[clamp(4rem,11vw,10rem)] font-semibold leading-[.82] tracking-[-0.085em]">
                <span className="block overflow-hidden">
                  <span data-insight-hero-line className="block">IDEAS THAT</span>
                </span>
                <span className="block overflow-hidden">
                  <span data-insight-hero-line className="block font-editorial font-normal italic text-brand-gold">
                    refuse to
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span data-insight-hero-line className="block">SIT STILL.</span>
                </span>
              </h1>
            </div>

            <div data-insight-hero-meta className="max-w-sm pb-2 lg:justify-self-end">
              <p className="text-lg leading-8 text-white/65">
                Notes on leadership, business and the questions that move
                meaningful work forward.
              </p>
              <div className="mt-9 flex items-center gap-4 border-t border-white/15 pt-5 text-[9px] tracking-[0.2em] text-white/45">
                <span>THINK</span>
                <span className="size-1 rounded-full bg-brand-gold" />
                <span>QUESTION</span>
                <span className="size-1 rounded-full bg-brand-gold" />
                <span>REIMAGINE</span>
              </div>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-white/15 pt-5 text-[9px] tracking-[0.2em] text-white/40">
            <span>INDEPENDENT THOUGHTS · SAMPLE EDITORIAL CONTENT</span>
            <span className="hidden sm:block">BASED IN AFRICA · THINKING GLOBALLY</span>
            <ArrowDownRight size={18} className="text-brand-gold" />
          </div>
        </Container>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-28 size-[360px] rounded-full border border-brand-gold/10 sm:size-[520px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-44 size-[230px] rounded-full border border-brand-gold/10 sm:size-[380px]"
        />
      </Section>

      {/* FEATURED ESSAY */}
      <Section id="featured-insight" className="relative bg-brand-ivory py-24 sm:py-32">
        <Container size="wide">
          <div className="mb-10 flex items-center justify-between">
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-brand-muted">
              <Sparkles size={15} className="text-brand-gold" />
              THE EDITOR'S PICK
            </p>
            <span className="font-editorial text-xl italic text-brand-muted">No. 001</span>
          </div>

          <article className="relative grid overflow-hidden bg-brand-ink text-white lg:min-h-[650px] lg:grid-cols-[1.15fr_.85fr]">
            <div
              data-insight-feature-image
              className="group relative min-h-[360px] overflow-hidden bg-brand-charcoal lg:min-h-full"
            >
              <img
                src={featuredArticle.image}
                alt="A thoughtful modern workspace"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/65 via-transparent to-brand-ink/10" />
              <span className="absolute left-7 top-7 border border-white/40 px-3 py-2 text-[9px] tracking-[0.2em] text-white">
                FEATURED ESSAY · DEMO
              </span>
              <span className="absolute bottom-7 left-7 font-editorial text-6xl italic text-white/70">
                01
              </span>
              <div className="absolute bottom-8 right-8 flex size-14 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand-gold group-hover:text-brand-ink">
                <ArrowUpRight size={22} />
              </div>
            </div>

            <div
              data-insight-feature-copy
              className="relative flex flex-col justify-between p-8 sm:p-12 lg:p-14"
            >
              <div>
                <p className="mb-7 text-[10px] font-semibold tracking-[0.24em] text-brand-gold">
                  {featuredArticle.category.toUpperCase()} / PERSPECTIVE
                </p>
                <h2 className="max-w-xl font-editorial text-5xl italic leading-[.98] sm:text-6xl lg:text-7xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-8 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                  {featuredArticle.description}
                </p>
              </div>

              <div className="mt-14 flex items-center justify-between border-t border-white/15 pt-6">
                <span className="flex items-center gap-2 text-[9px] tracking-[0.18em] text-white/45">
                  <Clock3 size={14} />
                  {featuredArticle.read}
                </span>
                <Link
                  to={`/insights/${featuredArticle.slug}`}
                  className="group inline-flex items-center gap-3 text-xs font-semibold"
                >
                  Explore the idea
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </article>
        </Container>
      </Section>

      {/* THE INDEX */}
      <Section className="bg-[#EAE6DD] py-24 sm:py-32">
        <Container size="wide">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-brand-muted">
                THE READING ROOM / 001—006
              </p>
              <h2 className="font-display text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
                Explore the <span className="font-editorial font-normal italic">ideas.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-brand-ink/60">
                Different questions. Different perspectives. One intention:
                to think beyond the familiar.
              </p>
            </div>

            <div className="flex flex-wrap gap-2" aria-label="Filter articles">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-3 text-[10px] font-semibold tracking-[0.12em] transition-all duration-300 ${
                    activeCategory === category
                      ? "border-brand-ink bg-brand-ink text-white"
                      : "border-brand-ink/20 text-brand-ink/65 hover:border-brand-ink hover:text-brand-ink"
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-x-6 gap-y-14 border-t border-brand-ink/20 pt-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                data-insight-card
                className="group relative flex flex-col"
              >
                <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-brand-charcoal">
                  <img
                    src={article.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-5 top-5 border border-white/50 bg-brand-ink/15 px-3 py-2 text-[8px] tracking-[0.18em] text-white backdrop-blur-sm">
                    {article.category.toUpperCase()}
                  </span>
                  <span className="absolute bottom-4 right-5 font-editorial text-5xl italic text-white/75">
                    {article.number}
                  </span>
                  <span className="absolute bottom-4 left-5 flex size-10 translate-y-3 items-center justify-center rounded-full bg-brand-gold text-brand-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="flex items-center justify-between text-[9px] tracking-[0.18em] text-brand-muted">
                  <span>{article.category.toUpperCase()}</span>
                  <span>{article.read}</span>
                </div>

                <h3 className="mt-4 max-w-sm font-display text-2xl font-medium leading-tight tracking-tight transition-colors duration-300 group-hover:text-brand-muted sm:text-3xl">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-brand-ink/60">
                  {article.description}
                </p>

                <span className="mt-7 flex items-center gap-2 border-b border-brand-ink/20 pb-4 text-[10px] font-semibold tracking-[0.14em] transition-colors group-hover:border-brand-gold">
                  READ THE NOTE
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-12 border-t border-brand-ink/20 pt-5 text-[9px] tracking-[0.18em] text-brand-muted">
            ILLUSTRATIVE ARTICLE TITLES AND EXCERPTS · DEMO CONTENT
          </p>
        </Container>
      </Section>

      {/* THE MARGIN NOTE */}
      <Section className="relative overflow-hidden bg-brand-ivory py-28 sm:py-40">
        <Container size="narrow">
          <div data-insight-margin-note className="relative text-center">
            <span className="font-editorial text-7xl italic leading-none text-brand-gold/70">
              “
            </span>
            <p className="font-editorial text-4xl italic leading-[1.12] sm:text-6xl">
              The way we think shapes the things we build. Change the thinking,
              and you change what becomes possible.
            </p>
            <div className="mx-auto mt-10 h-px w-16 bg-brand-gold" />
            <p className="mt-5 text-[9px] font-semibold tracking-[0.22em] text-brand-muted">
              A NOTE ON PERSPECTIVE · ILLUSTRATIVE COPY
            </p>
          </div>
        </Container>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-1/2 hidden -translate-y-1/2 font-editorial text-[20rem] italic leading-none text-brand-ink/[0.025] lg:block"
        >
          THINK
        </span>
      </Section>

      {/* CLOSING THOUGHT */}
      <Section className="relative overflow-hidden bg-brand-gold py-24 sm:py-32">
        <Container size="wide">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-7 text-[10px] font-semibold tracking-[0.25em] text-brand-ink/60">
                THE NEXT IDEA STARTS WITH A QUESTION
              </p>
              <h2 className="font-display text-5xl font-semibold leading-[.94] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                Don't just accept
                <br />
                <span className="font-editorial font-normal italic">the obvious.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              data-insight-closing-link
              className="group inline-flex min-h-14 w-fit items-center gap-5 rounded-full bg-brand-ink px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-charcoal"
            >
              Start a conversation
              <span className="flex size-8 items-center justify-center rounded-full bg-brand-gold text-brand-ink transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-brand-ink/20 pt-5 text-[9px] tracking-[0.18em] text-brand-ink/55">
            <span>THINK BIGGER. LEAD DIFFERENTLY.</span>
            <span>BUILD WHAT MATTERS.</span>
          </div>
        </Container>
      </Section>
    </div>
  );
}
