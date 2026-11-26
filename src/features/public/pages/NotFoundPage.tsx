import { Link } from "react-router-dom";
import { Container } from "../../../shared/ui/container";
import { Section } from "../../../shared/ui/section";

export function NotFoundPage() {
  return (
    <Section className="flex min-h-[65vh] items-center py-24">
      <Container size="wide">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-muted">
          ERROR 404
        </p>

        <h1 className="mt-5 font-display text-6xl font-semibold tracking-tight text-brand-ink sm:text-8xl">
          Lost your way<span className="text-brand-gold">?</span>
        </h1>

        <p className="mt-6 max-w-lg leading-7 text-brand-muted">
          The page you're looking for doesn't exist or may have moved.
        </p>

        <Link
          to="/"
          data-button-tone="dark"
          className="site-button mt-9 inline-flex min-h-12 items-center rounded-full px-6 text-sm font-medium"
        >
          Back to homepage
        </Link>
      </Container>
    </Section>
  );
}
