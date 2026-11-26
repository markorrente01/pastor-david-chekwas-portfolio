import { useRef } from "react";
import { HomeHero } from "../components/home/HomeHero";
import { MediaShowcase } from "../components/home/MediaShowcase";
import {
  BookingCTA,
  CredibilityStrip,
  EventsPreview,
  InsightsPreview,
  SpeakingTopics,
  TestimonialsPreview,
} from "../components/home/HomeSections";
import { useHomeSectionAnimations } from "../hooks/useHomeSectionAnimations";

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useHomeSectionAnimations(pageRef);

  return (
    <div ref={pageRef}>
      <HomeHero />
      <CredibilityStrip />
      <SpeakingTopics />
      <MediaShowcase />
      <TestimonialsPreview />
      <EventsPreview />
      <InsightsPreview />
      <BookingCTA />
    </div>
  );
}
