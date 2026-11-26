import { useRef } from "react";
import SideRays from "../../../../shared/ui/SideRays";
import { AboutTransition } from "./AboutTransition";
import { HomeIntro } from "./HomeIntro";
import { HeroContent } from "./HeroContent";
import { HeroPortrait } from "./HeroPortrait";
import { useHomeHeroAnimations } from "../../hooks/useHomeHeroAnimations";

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLImageElement>(null);

  useHomeHeroAnimations({ heroRef, portraitRef });

  return (
    <>
      <section
        ref={heroRef}
        className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col justify-center overflow-hidden bg-brand-ink text-brand-white md:min-h-[680px]"
      >
        <HomeIntro />

        <div className="pointer-events-none absolute inset-0 z-0">
          <SideRays
            rayColor1="#D6A84B"
            rayColor2="#F5F2EB"
            blend={0.28}
            origin="top-right"
            speed={0.45}
            intensity={1.15}
            spread={2.3}
            density={4}
            sharpness={0.58}
            falloff={1.7}
            glow={0.55}
            saturation={0.9}
            dust={0.06}
            followMouse={false}
            intro
            opacity={0.68}
            maxDevicePixelRatio={1.25}
            className="absolute inset-0"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:90px_90px]" />

        <div className="pointer-events-none absolute -right-40 top-0 z-[1] size-[550px] rounded-full bg-brand-gold/10 blur-[130px]" />

        <div className="hero-content relative z-10 flex flex-1 flex-col justify-center py-16 md:py-12">
          <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-8 lg:px-12">
            <HeroContent />
            <HeroPortrait imageRef={portraitRef} />
          </div>
        </div>
      </section>

      <AboutTransition />
    </>
  );
}
