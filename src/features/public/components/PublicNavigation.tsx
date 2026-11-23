import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "../../../shared/utils/cn";

interface NavigationItem {
  label: string;
  to: string;
  end?: boolean;
}

const primaryNavigation: NavigationItem[] = [
  { label: "Home", to: "/", end: true },
  { label: "About", to: "/about" },
  { label: "Speaking", to: "/speaking" },
  { label: "Media", to: "/media" },
  { label: "Events", to: "/events" },
  { label: "Insights", to: "/insights" },
];

const mobileNavigation: NavigationItem[] = [
  ...primaryNavigation,
  { label: "Testimonials", to: "/testimonials" },
  { label: "Resources", to: "/resources" },
];

const linkStyles = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-sm font-medium transition-colors duration-200",
    isActive
      ? "text-brand-ink"
      : "text-brand-muted hover:text-brand-ink",
  );

export function PublicNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-ink/10 bg-brand-ivory/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="flex flex-col gap-0.5"
          aria-label="David Chekwas homepage"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="font-display text-lg font-bold tracking-tight text-brand-ink">
            DAVID CHEKWAS<span className="text-brand-gold">.</span>
          </span>
          <span className="text-[9px] font-medium tracking-[0.2em] text-brand-muted">
            ENTREPRENEUR · STRATEGIST · SPEAKER
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkStyles}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-ink px-5 text-sm font-medium text-brand-white transition-colors hover:bg-brand-gold hover:text-brand-ink"
          >
            Book David
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink transition-colors hover:bg-brand-gold lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          {isMenuOpen ? (
            <X size={21} aria-hidden="true" />
          ) : (
            <Menu size={21} aria-hidden="true" />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
        className="border-t border-brand-ink/10 bg-brand-ivory px-5 py-6 lg:hidden"
      >
        <div className="flex flex-col gap-5">
          {mobileNavigation.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between text-lg font-medium transition-colors",
                  isActive ? "text-brand-ink" : "text-brand-muted",
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
              <span className="text-xs text-brand-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-ink px-5 text-sm font-medium text-brand-white"
          >
            Book David
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
