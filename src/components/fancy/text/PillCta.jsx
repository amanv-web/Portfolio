import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function PillCTA({ text = "Click", onClick }) {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const tlRef = useRef(null);

useEffect(() => {
  const el = containerRef.current;
  const circle = circleRef.current;

  if (!el || !circle) return;

  const update = () => {
    const rect = el.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    if (!w || !h) return;

    const R = ((w * w) / 4 + h * h) / (2 * h);
    const D = Math.ceil(2 * R);
    const delta = Math.ceil(R - Math.sqrt(R * R - (w * w) / 4));
    const originY = D - delta;

    circle.style.width = `${D}px`;
    circle.style.height = `${D}px`;
    circle.style.bottom = `-${delta}px`;

    gsap.set(circle, {
      xPercent: -50,
      scale: 0,
      transformOrigin: `50% ${originY}px`,
    });

    const label = el.querySelector(".cta-label");
    const hover = el.querySelector(".cta-hover");

    gsap.set(label, { y: 0 });
    gsap.set(hover, { y: h + 10, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(circle, { scale: 1.2, duration: 0.3, ease: "power2.out" }, 0)
      .to(label, { y: -(h + 6), duration: 0.3 }, 0)
      .to(hover, { y: 0, opacity: 1, duration: 0.3 }, 0);

    tlRef.current = tl;
  };

  // 🔥 Run after layout settles
  setTimeout(update, 50);

  // 🔥 Also fix on resize
  window.addEventListener("resize", update);

  return () => window.removeEventListener("resize", update);
}, []);

  return (
    <button
      ref={containerRef}
      onMouseEnter={() => tlRef.current?.play()}
      onMouseLeave={() => tlRef.current?.reverse()}
      onClick={onClick}
      className="relative inline-flex items-center justify-center 
                 px-5 py-2.5 
                 rounded-full 
                 bg-[#40d6c5] 
                 text-black 
                 font-medium 
                 overflow-hidden 
                 whitespace-nowrap"
    >
      {/* circle */}
      <span
        ref={circleRef}
        className="absolute left-1/2 bottom-0 rounded-full bg-black pointer-events-none"
      />

      {/* text */}
      <span className="relative z-10 flex items-center justify-center">
        <span className="cta-label block">{text}</span>
        <span className="cta-hover absolute left-0 top-0 text-white">
          {text}
        </span>
      </span>
    </button>
  );
}

export default PillCTA;