import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../../shared/ui/container";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Speaking", to: "/speaking" },
  { label: "Media", to: "/media" },
  { label: "Events", to: "/events" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Insights", to: "/insights" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export function PublicFooter() {
  return (
    <footer className="bg-brand-ink py-16 text-brand-white sm:py-20">
      <Container size="wide">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-medium tracking-[0.2em] text-brand-gold">
              LET'S CREATE SOMETHING MEANINGFUL
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Have an idea worth{" "}
              <span className="font-editorial font-normal italic text-brand-gold">
                bringing to life?
              </span>
            </h2>

            <Link
              to="/contact"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-brand-gold px-6 text-sm font-semibold text-brand-ink transition-colors hover:bg-brand-white"
            >
              Start a conversation
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:justify-self-end">
            <p className="mb-6 text-xs font-medium tracking-[0.18em] text-white/50">
              EXPLORE
            </p>

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-3"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-white/70 transition-colors hover:text-brand-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="font-display text-sm font-bold tracking-wide text-white"
          >
            DAVID CHEKWAS<span className="text-brand-gold">.</span>
          </Link>

          <p>
            © {new Date().getFullYear()} David Chekwas. All rights reserved.
          </p>

          <p>Built with purpose.</p>
        </div>
      </Container>
    </footer>
  );
}
