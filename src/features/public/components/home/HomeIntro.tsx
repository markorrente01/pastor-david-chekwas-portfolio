export function HomeIntro() {
  return (
    <div
      className="home-intro fixed inset-0 z-[200] flex items-center justify-center bg-brand-ink px-6 text-brand-white"
      aria-hidden="true"
    >
      <div className="home-intro-content text-center">
        <p className="home-intro-kicker mb-5 text-[10px] font-medium tracking-[0.45em] text-brand-gold">
          A PORTFOLIO OF IDEAS
        </p>

        <h2 className="home-intro-name font-display text-[clamp(2.8rem,9vw,7.5rem)] font-semibold leading-none tracking-[-0.07em]">
          DAVID CHEKWAS
        </h2>

        <p className="home-intro-tagline mt-5 font-editorial text-2xl italic text-brand-gold sm:text-3xl">
          Ideas in motion.
        </p>

        <div className="home-intro-line mx-auto mt-9 h-px w-16 bg-brand-gold/70" />
      </div>
    </div>
  );
}
