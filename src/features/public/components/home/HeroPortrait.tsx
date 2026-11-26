
import type { RefObject } from "react";
import { MoveUpRight } from "lucide-react";

interface HeroPortraitProps {
  imageRef: RefObject<HTMLImageElement | null>;
}

export function HeroPortrait({ imageRef }: HeroPortraitProps) {
  return (
    <div className="relative mx-auto w-full max-w-[490px] lg:ml-auto lg:mr-0">
      <div className="absolute -right-5 -top-5 z-20 hidden size-28 rounded-full border border-brand-gold/50 sm:block" />

      <div className="hero-portrait-frame relative aspect-[4/5] overflow-hidden bg-brand-charcoal">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1100&q=85"
          alt="Temporary portrait used for the David Chekwas portfolio design"
          className="h-full w-full object-cover object-center grayscale-[25%]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-brand-ink/10" />

        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
          <p className="text-[10px] font-medium tracking-[0.25em] text-brand-gold">
            THE BIGGER PICTURE
          </p>

          <p className="mt-2 max-w-xs font-editorial text-3xl italic leading-tight text-white sm:text-4xl">
            Think beyond what is. Build what could be.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 z-20 hidden size-24 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-ink sm:flex">
        <MoveUpRight className="text-brand-gold" size={28} />
      </div>

      <p className="mt-5 text-right text-[9px] tracking-[0.2em] text-white/35">
        PORTRAIT FOR DESIGN PREVIEW
      </p>
    </div>
  );
}
