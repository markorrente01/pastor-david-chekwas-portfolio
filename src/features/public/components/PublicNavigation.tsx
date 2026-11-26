import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "About", to: "/about" },
  { label: "Speaking", to: "/speaking" },
  { label: "Media", to: "/media" },
  { label: "Events", to: "/events" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Insights", to: "/insights" },
  { label: "Resources", to: "/resources" },
];

export function PublicNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`editorial-nav ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="editorial-nav-inner">
          <Link
            to="/"
            className="editorial-brand"
            aria-label="David Chekwas homepage"
            onClick={closeMenu}
          >
            <span className="editorial-brand-name">
              DAVID <span>CHEKWAS</span>
            </span>
            <span className="editorial-brand-caption">
              ENTREPRENEUR · STRATEGIST · SPEAKER
            </span>
          </Link>

          <nav className="editorial-desktop-links" aria-label="Main navigation">
            {navigation.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `editorial-nav-link ${isActive ? "is-active" : ""}`
                }
              >
                <span className="editorial-link-index">
                  0{index + 1}
                </span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="editorial-nav-actions">
            <Link to="/contact" className="editorial-book-link">
              <span>Invite David</span>
              <span className="editorial-book-icon">
                <ArrowUpRight size={16} strokeWidth={1.7} />
              </span>
            </Link>

            <button
              type="button"
              className={`editorial-menu-toggle ${menuOpen ? "is-open" : ""}`}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="editorial-mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span>{menuOpen ? "CLOSE" : "MENU"}</span>
              <span className="editorial-menu-icon">
                {menuOpen ? <X size={21} /> : <Menu size={21} />}
              </span>
            </button>
          </div>
        </div>

        <div className="editorial-nav-progress" />
      </header>

      <div
        id="editorial-mobile-menu"
        className={`editorial-mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="editorial-mobile-menu-content">
          <div className="editorial-mobile-menu-heading">
            <span>EXPLORE</span>
            <span>THE WORLD OF DAVID CHEKWAS</span>
          </div>

          <nav className="editorial-mobile-links" aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `editorial-mobile-link ${isActive ? "is-active" : ""}`
                }
                style={{ "--menu-index": index } as React.CSSProperties}
              >
                <span className="editorial-mobile-index">
                  0{index + 1}
                </span>
                <span className="editorial-mobile-label">{item.label}</span>
                <ArrowUpRight size={22} strokeWidth={1.4} />
              </NavLink>
            ))}
          </nav>

          <div className="editorial-mobile-bottom">
            <div>
              <span className="editorial-mobile-bottom-label">HAVE AN EVENT IN MIND?</span>
              <p>Let's make it meaningful.</p>
            </div>

            <Link
              to="/contact"
              className="editorial-mobile-cta"
              onClick={closeMenu}
            >
              Invite David to speak
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="editorial-mobile-signature">
            <span>BASED IN AFRICA</span>
            <span className="editorial-signature-dot" />
            <span>SPEAKING GLOBALLY</span>
          </div>
        </div>
      </div>
    </>
  );
}
