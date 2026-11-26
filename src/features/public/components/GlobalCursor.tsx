import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, select, textarea, [data-cursor-hover]";

export function GlobalCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const finePointer = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );

    if (!finePointer.matches) return;

    let pointerX = -100;
    let pointerY = -100;
    let ringX = pointerX;
    let ringY = pointerY;
    let hovering = false;
    let visible = false;
    let animationFrame = 0;

    const animate = () => {
      ringX += (pointerX - ringX) * 0.18;
      ringY += (pointerY - ringY) * 0.18;

      ring.style.transform =
        `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${hovering ? 1.7 : 1})`;

      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      dot.style.transform =
        `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;

      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      const target = document.elementFromPoint(pointerX, pointerY);
      const nextHovering = Boolean(
        target?.closest(INTERACTIVE_SELECTOR),
      );

      if (nextHovering !== hovering) {
        hovering = nextHovering;
        ring.style.backgroundColor = hovering
          ? "rgba(214, 168, 75, 0.10)"
          : "transparent";
        ring.style.borderColor = hovering
          ? "rgba(214, 168, 75, 0.95)"
          : "rgba(214, 168, 75, 0.65)";
      }
    };

    const hideCursor = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", hideCursor);

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", hideCursor);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] size-1.5 rounded-full bg-brand-gold opacity-0"
        style={{ willChange: "transform, opacity" }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] size-9 rounded-full border border-brand-gold/65 opacity-0"
        style={{
          backgroundColor: "transparent",
          willChange: "transform, opacity",
          transition: "opacity 180ms ease, background-color 250ms ease, border-color 250ms ease",
        }}
      />
    </>
  );
}
