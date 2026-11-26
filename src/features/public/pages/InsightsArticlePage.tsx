import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
} from "lucide-react";
import { Container } from "../../../shared/ui/container";
import { Section } from "../../../shared/ui/section";
import { useInsightsArticleAnimations } from "../hooks/useInsightsArticleAnimations";

interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

interface Article {
  category: string;
  title: string;
  description: string;
  read: string;
  image: string;
  date: string;
  introduction: string;
  sections: ArticleSection[];
  pullQuote: string;
  closing: string;
}

const articleContent: Record<string, Article> = {
  "the-courage-to-think-differently": {
    category: "Leadership",
    title: "The courage to think differently",
    description:
      "Real progress rarely begins with having all the answers. It begins when someone is willing to question the assumptions everyone else has accepted.",
    read: "5 MIN READ",
    date: "EDITORIAL NOTE 001",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
    introduction:
      "There is a quiet comfort in doing things the way they have always been done. Familiar processes. Familiar decisions. Familiar definitions of success. But familiarity and progress are not always the same thing.",
    sections: [
      {
        heading: "The comfort of the familiar",
        paragraphs: [
          "Every organisation develops a way of thinking. Over time, its assumptions become part of its identity. People stop questioning why certain decisions are made because those decisions have become routine.",
          "The danger is not that established thinking is always wrong. It is that unexamined thinking can quietly limit what becomes possible.",
        ],
      },
      {
        heading: "A different question changes the room",
        paragraphs: [
          "Thinking differently does not mean rejecting everything that came before. It means being willing to examine what is working, what is no longer useful and what has not yet been considered.",
          "The best leaders create space for questions that challenge comfortable answers. They understand that disagreement, curiosity and experimentation can be important ingredients of progress.",
        ],
      },
      {
        heading: "Make room for possibility",
        paragraphs: [
          "A new perspective rarely arrives fully formed. It develops through conversations, observation and the willingness to test an idea before dismissing it.",
          "The challenge is to build environments where people are encouraged to think, contribute and take responsibility for what comes next.",
        ],
      },
    ],
    pullQuote:
      "The future changes when someone becomes willing to question the present.",
    closing:
      "Perhaps the first step towards doing something different is simply having the courage to ask whether there is another way.",
  },

  "progress-begins-with-better-questions": {
    category: "Business",
    title: "Progress begins with better questions",
    description:
      "Why the quality of our questions can shape the quality of our decisions.",
    read: "4 MIN READ",
    date: "EDITORIAL NOTE 002",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2200&q=90",
    introduction:
      "We often celebrate answers. We reward certainty, speed and the ability to make decisions. Yet before every meaningful answer is a question that made it possible.",
    sections: [
      {
        heading: "Move beyond the obvious",
        paragraphs: [
          "The first answer is not always the most useful one. It may simply be the answer we have heard most often or the one that requires the least effort to accept.",
          "Better questions help people look beyond immediate symptoms and understand the assumptions underneath a problem.",
        ],
      },
      {
        heading: "Questions shape decisions",
        paragraphs: [
          "A team asked to increase output may focus entirely on speed. A team asked what meaningful progress looks like may discover a different opportunity altogether.",
          "The framing of a challenge influences the solutions people are willing to consider.",
        ],
      },
      {
        heading: "Build a culture of curiosity",
        paragraphs: [
          "Curiosity becomes valuable when it is part of how people work together. Leaders can encourage it by making thoughtful questions welcome and treating exploration as a serious part of decision-making.",
          "The aim is not to question everything endlessly. It is to ask enough to understand what truly matters.",
        ],
      },
    ],
    pullQuote:
      "A better question can create possibilities that an obvious answer never would.",
    closing:
      "Before rushing towards the next answer, take another look at the question.",
  },

  "what-does-meaningful-impact-look-like": {
    category: "Perspective",
    title: "What does meaningful impact look like?",
    description:
      "Looking beyond activity and ambition to understand what truly changes.",
    read: "6 MIN READ",
    date: "EDITORIAL NOTE 003",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2200&q=90",
    introduction:
      "It is easy to measure what we do. It can be much harder to understand what changes because we did it. Activity creates movement, but meaningful impact asks a deeper question.",
    sections: [
      {
        heading: "Activity is not the destination",
        paragraphs: [
          "Busy calendars, completed projects and ambitious targets can create a convincing picture of progress. But activity alone does not tell us whether people, organisations or communities are better because of the work.",
          "A useful starting point is to become more deliberate about the difference between what is delivered and what is changed.",
        ],
      },
      {
        heading: "Look at the people behind the numbers",
        paragraphs: [
          "Metrics help us understand patterns, but the people behind those numbers give them meaning. Their experiences can reveal whether an initiative is useful, accessible and sustainable.",
          "Impact becomes more meaningful when the people affected by a decision are part of how success is understood.",
        ],
      },
      {
        heading: "Think beyond the immediate result",
        paragraphs: [
          "Some of the most important outcomes take time. Better habits, stronger relationships and improved opportunities may not appear in an immediate report.",
          "Thinking about long-term consequences can help leaders make decisions that are valuable beyond the next milestone.",
        ],
      },
    ],
    pullQuote:
      "The measure of progress is not only what we accomplish, but what becomes better.",
    closing:
      "The next time we celebrate a result, it is worth asking what that result actually changed.",
  },

  "the-leadership-space-to-listen": {
    category: "Leadership",
    title: "The leadership space to listen",
    description:
      "A different perspective on attention, trust and the people we lead.",
    read: "5 MIN READ",
    date: "EDITORIAL NOTE 004",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=90",
    introduction:
      "Leadership is often associated with speaking, directing and making decisions. Yet some of its most important work happens in the moments when a leader chooses to listen.",
    sections: [
      {
        heading: "Attention is a leadership decision",
        paragraphs: [
          "Listening requires more than waiting for an opportunity to respond. It means giving another person the attention needed to understand what they are actually communicating.",
          "That kind of attention can reveal concerns, opportunities and perspectives that might otherwise remain invisible.",
        ],
      },
      {
        heading: "Trust grows through understanding",
        paragraphs: [
          "People are more likely to contribute when they believe their ideas will be considered. Listening does not mean agreeing with everything. It means taking the contribution seriously.",
          "Leaders who make room for honest conversations can develop a clearer understanding of the teams they are responsible for.",
        ],
      },
      {
        heading: "Make listening part of the culture",
        paragraphs: [
          "A listening culture is built through consistent behaviour. It appears in meetings, feedback conversations and the way decisions are explained.",
          "The goal is to create an environment where people can speak honestly and where their perspectives can influence meaningful action.",
        ],
      },
    ],
    pullQuote:
      "Sometimes leadership begins with creating enough space to hear what matters.",
    closing:
      "The next important leadership decision might begin with listening rather than speaking.",
  },

  "building-beyond-the-obvious": {
    category: "Business",
    title: "Building beyond the obvious",
    description:
      "How organisations can make room for ideas that challenge familiar models.",
    read: "7 MIN READ",
    date: "EDITORIAL NOTE 005",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90",
    introduction:
      "Every organisation needs systems. But systems that once supported growth can eventually become limitations when the world around them changes.",
    sections: [
      {
        heading: "Recognise when the model has changed",
        paragraphs: [
          "Markets, customer expectations and working environments continue to evolve. An approach that once created an advantage may not produce the same results indefinitely.",
          "Recognising change early requires attention to the world outside familiar routines.",
        ],
      },
      {
        heading: "Give ideas room to develop",
        paragraphs: [
          "New ideas often begin as incomplete observations. They need room to be explored, challenged and improved before they become practical solutions.",
          "Organisations can support this process by creating space for experimentation without losing sight of responsibility and execution.",
        ],
      },
      {
        heading: "Build for what comes next",
        paragraphs: [
          "Building beyond the obvious means thinking about future needs rather than only responding to present pressures.",
          "It requires a willingness to learn, adapt and make decisions that create room for sustainable progress.",
        ],
      },
    ],
    pullQuote:
      "The next opportunity may be hiding beyond the model that made yesterday successful.",
    closing:
      "The question is not only how to improve what exists, but what else might be possible.",
  },

  "the-value-of-a-new-perspective": {
    category: "Perspective",
    title: "The value of a new perspective",
    description:
      "Sometimes the most important shift is not what we see, but how we see it.",
    read: "4 MIN READ",
    date: "EDITORIAL NOTE 006",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=90",
    introduction:
      "Two people can look at the same situation and see entirely different possibilities. Perspective influences what we notice, what we value and the decisions we make.",
    sections: [
      {
        heading: "Our perspective has a history",
        paragraphs: [
          "Experience shapes how we interpret the world. It gives us useful knowledge, but it can also create assumptions that influence what we expect to find.",
          "Recognising those assumptions is an important part of developing a more considered view.",
        ],
      },
      {
        heading: "Invite another point of view",
        paragraphs: [
          "Different experiences can reveal aspects of a problem that one person might never notice alone.",
          "Seeking another perspective is not a sign of uncertainty. It can be a practical way to improve understanding and make stronger decisions.",
        ],
      },
      {
        heading: "Turn perspective into action",
        paragraphs: [
          "A new way of seeing something becomes valuable when it changes what we do next.",
          "The challenge is to translate insight into thoughtful action, while remaining open to learning along the way.",
        ],
      },
    ],
    pullQuote:
      "A shift in perspective can change the possibilities we are able to recognise.",
    closing:
      "Sometimes moving forward begins by looking at the same situation differently.",
  },
};

const relatedArticles = [
  {
    slug: "progress-begins-with-better-questions",
    category: "Business",
    title: "Progress begins with better questions",
  },
  {
    slug: "the-leadership-space-to-listen",
    category: "Leadership",
    title: "The leadership space to listen",
  },
  {
    slug: "the-value-of-a-new-perspective",
    category: "Perspective",
    title: "The value of a new perspective",
  },
];

export function InsightsArticlePage() {
  const { slug = "" } = useParams();
  const pageRef = useRef<HTMLDivElement>(null);
  const article = articleContent[slug];

  useInsightsArticleAnimations(pageRef);

  if (!article) {
    return (
      <Section className="min-h-[75vh] bg-brand-ivory py-40">
        <Container size="narrow">
          <p className="text-[10px] tracking-[0.2em] text-brand-muted">
            ARTICLE NOT FOUND
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold">
            This page hasn't been written yet.
          </h1>
          <Link
            to="/insights"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold"
          >
            <ArrowLeft size={17} />
            Back to the journal
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <div ref={pageRef} className="overflow-hidden bg-brand-ivory text-brand-ink">
      <Section className="bg-brand-ink pb-16 pt-36 text-white sm:pt-44">
        <Container size="wide">
          <Link
            to="/insights"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.18em] text-white/55 transition-colors hover:text-brand-gold"
          >
            <ArrowLeft size={15} />
            BACK TO THE JOURNAL
          </Link>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_.45fr] lg:items-end">
            <div>
              <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold tracking-[0.24em] text-brand-gold">
                <span className="h-px w-8 bg-brand-gold" />
                {article.category.toUpperCase()}
                <span className="text-white/35">/ {article.date}</span>
              </p>

              <h1 className="max-w-5xl font-editorial text-6xl italic leading-[.94] sm:text-8xl lg:text-[7.5rem]">
                {article.title}
              </h1>
            </div>

            <div className="pb-2">
              <p className="text-base leading-8 text-white/60">
                {article.description}
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/15 pt-5 text-[9px] tracking-[0.18em] text-white/45">
                <Clock3 size={14} />
                {article.read}
                <span className="ml-auto">ILLUSTRATIVE ARTICLE</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <div
        data-article-cover
        className="relative h-[48vh] min-h-[340px] max-h-[720px] overflow-hidden bg-brand-charcoal sm:h-[65vh]"
      >
        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 to-transparent" />
        <span className="absolute bottom-7 left-6 text-[9px] tracking-[0.2em] text-white/70 sm:left-12">
          DAVID CHEKWAS / THE IDEAS JOURNAL
        </span>
      </div>

      <Section className="py-24 sm:py-32">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[.35fr_1fr] lg:gap-24">
            <aside className="h-fit lg:sticky lg:top-28">
              <p className="text-[9px] font-semibold tracking-[0.2em] text-brand-muted">
                IN THIS ARTICLE
              </p>
              <div className="mt-5 h-px w-full bg-brand-ink/20" />
              <p className="mt-5 font-editorial text-4xl italic">01—03</p>
              <p className="mt-3 text-[9px] tracking-[0.16em] text-brand-muted">
                A MOMENT TO THINK
              </p>
            </aside>

            <article className="max-w-3xl">
              <p
                data-article-intro
                className="font-editorial text-3xl italic leading-[1.3] sm:text-5xl"
              >
                {article.introduction}
              </p>

              <div className="mt-16 space-y-16 sm:mt-24 sm:space-y-24">
                {article.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    data-article-chapter
                    className="relative border-t border-brand-ink/20 pt-7"
                  >
                    <div className="mb-7 flex items-center gap-4">
                      <span className="font-editorial text-2xl italic text-brand-gold">
                        0{index + 1}
                      </span>
                      <span className="h-px flex-1 bg-brand-ink/15" />
                    </div>

                    <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                      {section.heading}
                    </h2>

                    <div className="mt-8 space-y-6">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-brand-ink/70 sm:text-lg sm:leading-9"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section className="overflow-hidden bg-[#EAE6DD] py-28 sm:py-40">
        <Container size="narrow">
          <div data-article-quote className="text-center">
            <span className="font-editorial text-8xl italic leading-none text-brand-gold">
              “
            </span>
            <blockquote className="font-editorial text-4xl italic leading-[1.1] sm:text-6xl">
              {article.pullQuote}
            </blockquote>
            <div className="mx-auto mt-10 h-px w-16 bg-brand-gold" />
            <p className="mt-5 text-[9px] tracking-[0.2em] text-brand-muted">
              A THOUGHT TO TAKE WITH YOU
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-ivory py-24 sm:py-32">
        <Container size="wide">
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-[10px] font-semibold tracking-[0.2em] text-brand-muted">
              THE LAST WORD
            </p>
            <p
              data-article-closing
              className="font-editorial text-4xl italic leading-tight sm:text-6xl"
            >
              {article.closing}
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-ink py-24 text-white sm:py-32">
        <Container size="wide">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-[10px] tracking-[0.2em] text-brand-gold">
                KEEP EXPLORING
              </p>
              <h2 className="font-display text-4xl font-semibold sm:text-6xl">
                More to <span className="font-editorial font-normal italic">consider.</span>
              </h2>
            </div>
            <Link
              to="/insights"
              className="hidden items-center gap-2 text-xs text-white/65 transition-colors hover:text-brand-gold sm:inline-flex"
            >
              All insights <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 border-t border-white/20 pt-7 md:grid-cols-3">
            {relatedArticles
              .filter((item) => item.slug !== slug)
              .slice(0, 2)
              .map((item, index) => (
                <Link
                  key={item.slug}
                  to={`/insights/${item.slug}`}
                  data-article-related
                  className="group border-b border-white/20 py-6 transition-colors hover:border-brand-gold md:border-b-0"
                >
                  <span className="font-editorial text-3xl italic text-brand-gold/75">
                    0{index + 1}
                  </span>
                  <p className="mt-7 text-[9px] tracking-[0.18em] text-white/45">
                    {item.category.toUpperCase()}
                  </p>
                  <h3 className="mt-3 font-editorial text-3xl italic leading-tight sm:text-4xl">
                    {item.title}
                  </h3>
                  <span className="mt-7 inline-flex items-center gap-2 text-[10px] tracking-[0.15em] text-white/65 transition-colors group-hover:text-brand-gold">
                    READ NEXT <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
          </div>

          <Link
            to="/insights"
            className="mt-12 inline-flex items-center gap-3 text-xs font-semibold text-white/65 transition-colors hover:text-brand-gold"
          >
            <ArrowLeft size={16} />
            Return to the journal
          </Link>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-brand-gold"
        data-article-progress
      />
    </div>
  );
}
