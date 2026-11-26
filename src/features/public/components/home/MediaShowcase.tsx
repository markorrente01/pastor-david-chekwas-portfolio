import { ArrowUpRight, Mic2, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../../shared/ui/container";
import { Section } from "../../../../shared/ui/section";

const mediaItems = [
  {
    number: "01",
    label: "FEATURED REEL · DEMO",
    title: "A different way to see what's possible.",
    description: "VIDEO PREVIEW PLACEHOLDER",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=85",
    featured: true,
  },
  {
    number: "02",
    label: "THE CONVERSATION",
    title: "Every stage is an opportunity to shift perspective.",
    description: "SPEAKING APPEARANCE PLACEHOLDER",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85",
    featured: false,
  },
  {
    number: "03",
    label: "IDEAS IN PRACTICE",
    title: "Turning bold questions into meaningful action.",
    description: "MEDIA FEATURE PLACEHOLDER",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=85",
    featured: false,
  },
];

export function MediaShowcase() {
  return (
    <Section
      className="media-showcase overflow-hidden bg-brand-ink py-24 text-white sm:py-32 lg:min-h-screen lg:py-20"
      data-gallery-section
    >
      <Container size="wide">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-brand-gold">
              ON STAGE & IN CONVERSATION
            </p>
            <h2 data-reveal-text className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              Ideas in{" "}
              <span className="font-editorial font-normal italic text-brand-gold">
                motion.
              </span>
            </h2>
          </div>
          <Link
            to="/media"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-brand-gold"
          >
            View media <ArrowUpRight size={16} />
          </Link>
        </div>
      </Container>

      <div className="media-gallery-viewport overflow-hidden">
        <div
          data-gallery-track
          className="media-gallery-track flex w-max items-center gap-5 px-5 sm:gap-7 sm:px-8 lg:gap-10 lg:px-12"
        >
          {mediaItems.map((item, index) => (
            <article
              key={item.number}
              className={`media-gallery-card group relative isolate flex min-h-[430px] w-[84vw] max-w-[780px] shrink-0 flex-col justify-between overflow-hidden bg-brand-charcoal p-7 sm:min-h-[520px] sm:p-10 lg:min-h-[570px] ${
                item.featured
                  ? "lg:w-[68vw]"
                  : "lg:w-[44vw]"
              } ${index === 1 ? "lg:my-12" : ""}`}
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 ${
                  item.featured ? "object-[center_35%]" : "object-center"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/35 to-brand-ink/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/35 to-transparent" />
              <div className="pointer-events-none absolute inset-4 border border-white/20 sm:inset-6" />
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full border border-brand-gold/35" />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[9px] tracking-[0.2em] text-brand-gold sm:text-[10px]">
                  {item.featured ? <Radio size={14} /> : <Mic2 size={14} />}
                  {item.label}
                </span>
                <span className="font-editorial text-2xl italic text-white/60">
                  {item.number}
                </span>
              </div>

              <div className="relative max-w-2xl">
                <h3 className={`font-editorial italic leading-[.95] ${
                  item.featured ? "text-5xl sm:text-7xl lg:text-8xl" : "text-4xl sm:text-6xl"
                }`}>
                  {item.title}
                </h3>
                <p className="mt-6 text-[9px] tracking-[0.2em] text-white/55">
                  {item.description}
                </p>
              </div>

              <Link
                to="/media"
                aria-label={`Explore ${item.label.toLowerCase()}`}
                className="absolute bottom-7 right-7 flex size-12 items-center justify-center rounded-full border border-white/50 bg-brand-ink/20 backdrop-blur-sm transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-ink sm:bottom-10 sm:right-10"
              >
                <ArrowUpRight size={21} />
              </Link>
            </article>
          ))}
        </div>
      </div>

      <Container size="wide">
        <p className="mt-7 text-[9px] tracking-[0.18em] text-white/35">
          TEMPORARY STOCK PHOTOGRAPHY · REPLACE WITH DAVID'S ACTUAL MEDIA
        </p>
      </Container>
    </Section>
  );
}
