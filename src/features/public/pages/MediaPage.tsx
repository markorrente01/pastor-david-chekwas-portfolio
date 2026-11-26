import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Headphones,
  Mic2,
  Newspaper,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../shared/ui/container";
import { Section } from "../../../shared/ui/section";
import { useMediaPageAnimations } from "../hooks/useMediaPageAnimations";

type MediaCategory = "All" | "Video" | "Podcast" | "Press";

interface MediaItem {
  id: number;
  category: Exclude<MediaCategory, "All">;
  format: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  number: string;
}

const filters: MediaCategory[] = ["All", "Video", "Podcast", "Press"];

const mediaItems: MediaItem[] = [
  {
    id: 1,
    category: "Video",
    format: "KEYNOTE PREVIEW",
    title: "Rethinking the way we lead",
    description:
      "A fresh perspective on leadership, responsibility and the decisions that shape tomorrow.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Speaker addressing an audience at an event",
    number: "01",
  },
  {
    id: 2,
    category: "Podcast",
    format: "PODCAST CONVERSATION",
    title: "The business of better questions",
    description:
      "An exploration of curiosity, opportunity and the thinking behind meaningful business growth.",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Podcast recording equipment in a studio",
    number: "02",
  },
  {
    id: 3,
    category: "Press",
    format: "EDITORIAL FEATURE",
    title: "Building beyond the obvious",
    description:
      "Why challenging familiar assumptions can open the door to more ambitious possibilities.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Contemporary workspace with a collaborative atmosphere",
    number: "03",
  },
  {
    id: 4,
    category: "Video",
    format: "IN CONVERSATION",
    title: "What does progress really mean?",
    description:
      "A conversation about the people, ideas and choices that make progress matter.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "People sharing ideas around a table",
    number: "04",
  },
  {
    id: 5,
    category: "Podcast",
    format: "PODCAST CONVERSATION",
    title: "The courage to think differently",
    description:
      "On independent thinking, taking a considered risk and creating room for new ideas.",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Microphone in a recording studio",
    number: "05",
  },
  {
    id: 6,
    category: "Press",
    format: "PERSPECTIVE",
    title: "A different future for business",
    description:
      "Looking at the opportunities that emerge when organisations are willing to rethink the way forward.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Team collaborating in a modern office",
    number: "06",
  },
];

const categoryIcons = {
  Video: Play,
  Podcast: Headphones,
  Press: Newspaper,
};

export function MediaPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<MediaCategory>("All");
  const [galleryProgress, setGalleryProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  useMediaPageAnimations(pageRef, activeFilter);

  const visibleItems =
    activeFilter === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeFilter);

  // MEDIA_GALLERY_FILTER_SYNC

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollLeft = 0;

    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    const progress =
      maxScroll > 0 ? (gallery.scrollLeft / maxScroll) * 100 : 0;

    setGalleryProgress(progress);
  }, [activeFilter, visibleItems.length]);

  function handleGalleryPointerDown(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const gallery = galleryRef.current;
    if (!gallery || gallery.scrollWidth <= gallery.clientWidth) return;

    event.preventDefault();

    isDraggingRef.current = true;
    setIsDragging(true);

    dragStartX.current = event.clientX;
    dragStartScroll.current = gallery.scrollLeft;

    gallery.setPointerCapture(event.pointerId);
  }

  function handleGalleryPointerMove(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (!isDraggingRef.current) return;

    const gallery = galleryRef.current;
    if (!gallery) return;

    event.preventDefault();

    const distance = event.clientX - dragStartX.current;
    gallery.scrollLeft = dragStartScroll.current - distance;
  }

  function handleGalleryPointerUp() {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    setIsDragging(false);
  }

  function handleGalleryScroll() {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    const progress =
      maxScroll > 0 ? (gallery.scrollLeft / maxScroll) * 100 : 0;

    setGalleryProgress(progress);
  }

  function handleGalleryKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
  ) {
    const gallery = galleryRef.current;
    if (!gallery) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      gallery.scrollBy({
        left: gallery.clientWidth * 0.75,
        behavior: "smooth",
      });
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      gallery.scrollBy({
        left: -gallery.clientWidth * 0.75,
        behavior: "smooth",
      });
    }
  }

  return (
    <div ref={pageRef}>
      {/* Editorial introduction */}
      <Section className="relative overflow-hidden bg-brand-ink pb-20 pt-28 text-brand-white sm:pb-28 sm:pt-36">
        <div className="pointer-events-none absolute -right-32 top-20 size-[440px] rounded-full bg-brand-gold/10 blur-[120px]" />

        <Container size="wide">
          <div className="relative grid items-end gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
            <div>
              <p className="mb-8 flex items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-brand-gold sm:text-xs">
                <span className="h-px w-9 bg-brand-gold" />
                MEDIA · CONVERSATIONS · PERSPECTIVES
              </p>

              <h1 className="font-display text-[clamp(3.8rem,9vw,8.5rem)] font-semibold leading-[0.91] tracking-[-0.08em]">
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-media-hero-line className="inline-block">
                    Ideas worth
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span
                    data-media-hero-line
                    className="inline-block font-editorial font-normal italic tracking-[-0.045em] text-brand-gold"
                  >
                    being heard.
                  </span>
                </span>
              </h1>
            </div>

            <div className="max-w-md pb-2 lg:justify-self-end">
              <p className="max-w-sm text-base leading-8 text-white/60 sm:text-lg">
                Conversations, appearances and ideas exploring the questions
                shaping business, leadership and the future.
              </p>

              <div className="mt-9 flex items-center gap-5 border-t border-white/15 pt-6">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-gold">
                  EXPLORE THE ARCHIVE
                </span>
                <ArrowDownRight
                  size={19}
                  className="text-brand-gold"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-3 border-t border-white/15 pt-6 sm:mt-28">
            {[
              ["01", "VIDEO"],
              ["02", "PODCASTS"],
              ["03", "PRESS"],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-3">
                <span className="text-[10px] text-brand-gold">{number}</span>
                <span className="text-[9px] font-semibold tracking-[0.17em] text-white/55 sm:text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured appearance */}
      <Section className="bg-brand-ivory py-20 sm:py-28">
        <Container size="wide">
          <div className="mb-10 flex items-center justify-between gap-5">
            <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-brand-muted">
              <span className="h-px w-8 bg-brand-gold" />
              SELECTED FEATURE
            </p>
            <span className="text-[9px] tracking-[0.16em] text-brand-muted">
              FICTIONAL DEMO CONTENT
            </span>
          </div>

          <div className="grid overflow-hidden bg-brand-charcoal text-white lg:grid-cols-[1.15fr_.85fr]">
            <div
              data-media-featured-image
              className="group relative min-h-[320px] overflow-hidden sm:min-h-[480px]"
            >
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=90"
                alt="Speaker on stage in front of an audience"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-brand-ink/10" />
              <span className="absolute left-6 top-6 border border-white/35 bg-brand-ink/30 px-4 py-2 text-[9px] font-semibold tracking-[0.18em] backdrop-blur-sm sm:left-9 sm:top-9">
                FEATURED PREVIEW
              </span>
              <span className="absolute bottom-7 left-7 flex items-center gap-3 text-[10px] font-semibold tracking-[0.18em] text-white sm:bottom-9 sm:left-9">
                <span className="h-px w-8 bg-brand-gold" />
                IDEAS IN THE ROOM
              </span>
            </div>

            <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-gold">
                  BUSINESS · LEADERSHIP · POSSIBILITY
                </p>
                <h2
                  data-media-heading
                  className="mt-8 max-w-lg font-display text-4xl font-semibold leading-[1.08] tracking-[-0.06em] sm:text-5xl"
                >
                  A different perspective on progress.
                </h2>
                <p className="mt-7 max-w-md text-sm leading-8 text-white/55 sm:text-base">
                  What happens when we stop accepting the familiar as the
                  inevitable? An exploration of the questions that help
                  individuals and organisations see what comes next.
                </p>
              </div>

              <div className="mt-12 border-t border-white/15 pt-6">
                <p className="mb-5 text-[9px] tracking-[0.17em] text-white/40">
                  CONCEPT APPEARANCE · DEMONSTRATION CONTENT
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 text-sm font-semibold text-brand-gold transition-colors hover:text-white"
                >
                  Discuss a media appearance
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Horizontal media storytelling */}
      <Section className="overflow-hidden bg-white py-20 sm:py-28">
        <Container size="wide">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold tracking-[0.22em] text-brand-muted">
                THE MEDIA ARCHIVE
              </p>
              <h2
                data-media-heading
                className="max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.065em] text-brand-ink sm:text-6xl"
              >
                Conversations.
                <br />
                <span className="font-editorial font-normal italic text-brand-gold">
                  Different perspectives.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-brand-muted">
              Explore a collection of concept interviews, podcast
              conversations and editorial features.
            </p>
          </div>

          <div className="mb-7 flex flex-wrap items-center justify-between gap-5 border-y border-brand-ink/10 py-5">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={`rounded-full border px-5 py-2.5 text-[10px] font-semibold tracking-[0.12em] transition-colors duration-300 ${
                    activeFilter === filter
                      ? "border-brand-ink bg-brand-ink text-white"
                      : "border-brand-ink/15 text-brand-muted hover:border-brand-gold hover:text-brand-ink"
                  }`}
                >
                  {filter === "All" ? "ALL FEATURES" : filter.toUpperCase()}
                </button>
              ))}
            </div>

            <span className="text-[9px] tracking-[0.16em] text-brand-muted">
              {visibleItems.length.toString().padStart(2, "0")} FEATURES
            </span>
          </div>

          <div
            ref={galleryRef}
            onPointerDown={handleGalleryPointerDown}
            onPointerMove={handleGalleryPointerMove}
            onPointerUp={handleGalleryPointerUp}
            onPointerCancel={handleGalleryPointerUp}
            onLostPointerCapture={handleGalleryPointerUp}
            onScroll={handleGalleryScroll}
            onKeyDown={handleGalleryKeyDown}
            onDragStart={(event) => event.preventDefault()}
            tabIndex={0}
            role="region"
            className={`media-gallery-track flex gap-5 overflow-x-auto pb-5 ${
              isDragging ? "is-dragging cursor-grabbing" : "cursor-grab"
            }`}
            aria-label="Media archive. Use the arrow keys, drag with your mouse, or swipe to explore."
          >
            {visibleItems.map((item) => {
              const Icon = categoryIcons[item.category];

              return (
                <article
                  key={item.id}
                  className="group w-[82vw] max-w-[440px] shrink-0 snap-start sm:w-[55vw] lg:w-[38vw]"
                >
                  <div className="relative aspect-[1.16/1] overflow-hidden bg-brand-charcoal">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-brand-ink/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="absolute left-5 top-5 flex items-center gap-2 bg-brand-ink/65 px-3 py-2 text-[9px] font-semibold tracking-[0.15em] text-white backdrop-blur-sm">
                      <Icon size={13} aria-hidden="true" />
                      {item.category.toUpperCase()}
                    </div>

                    <span className="absolute bottom-5 right-5 font-editorial text-4xl italic text-white/80">
                      {item.number}
                    </span>
                  </div>

                  <div className="border-b border-brand-ink/15 py-6">
                    <p className="text-[9px] font-semibold tracking-[0.18em] text-brand-gold">
                      {item.format}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.045em] text-brand-ink sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-brand-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-between gap-5">
            <span className="text-[9px] font-semibold tracking-[0.16em] text-brand-muted">
              DRAG OR SWIPE TO EXPLORE
            </span>
            <div className="h-px flex-1 overflow-hidden bg-brand-ink/10">
              <div
                className="h-full bg-brand-gold transition-[width] duration-150"
                style={{ width: `${galleryProgress}%` }}
              />
            </div>
            <span className="text-[9px] font-semibold tracking-[0.16em] text-brand-muted">
              {String(Math.round(galleryProgress)).padStart(2, "0")}%
            </span>
          </div>
        </Container>
      </Section>

      {/* Media invitation */}
      <Section className="relative overflow-hidden bg-brand-ivory py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-24 top-1/2 size-[380px] -translate-y-1/2 rounded-full border border-brand-gold/25" />
        <div className="pointer-events-none absolute -right-12 top-1/2 size-[280px] -translate-y-1/2 rounded-full border border-brand-gold/20" />

        <Container size="wide">
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-brand-muted">
                <Mic2 size={15} className="text-brand-gold" />
                THE NEXT CONVERSATION
              </p>
              <h2
                data-media-heading
                className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.065em] text-brand-ink sm:text-6xl"
              >
                Have a platform for a
                <span className="block font-editorial font-normal italic text-brand-gold">
                  bigger conversation?
                </span>
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-8 text-brand-muted sm:text-base">
                For interviews, podcast appearances, press enquiries and
                speaking conversations, get in touch.
              </p>
            </div>

            <Link
              to="/contact"
              className="site-button inline-flex min-h-14 w-fit shrink-0 items-center gap-4 rounded-full px-7 text-sm font-semibold"
            >
              Make an enquiry
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
