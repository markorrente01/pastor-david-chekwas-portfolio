import { ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Container } from "../../../shared/ui/container";
import { Section } from "../../../shared/ui/section";

interface PublicPlaceholderPageProps {
  title: string;
  description?: string;
}

function formatSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function PublicPlaceholderPage({
  title,
  description = "This part of David's story is currently being prepared. Check back soon for more.",
}: PublicPlaceholderPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const pageTitle = slug ? formatSlug(slug) : title;

  return (
    <Section className="flex min-h-[65vh] items-center py-24 sm:py-32">
      <Container size="wide">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-semibold tracking-[0.22em] text-brand-muted">
            DAVID CHEKWAS · {pageTitle.toUpperCase()}
          </p>

          <h1 className="font-display text-5xl font-semibold leading-[1.08] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">
            {pageTitle}
            <span className="text-brand-gold">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-brand-muted sm:text-lg">
            {description}
          </p>

          <Link
            to="/contact"
            data-button-tone="dark"
            className="site-button mt-10 inline-flex min-h-12 items-center gap-3 rounded-full px-6 text-sm font-medium"
          >
            Get in touch
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
