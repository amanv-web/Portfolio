import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const PillNav = ({ items, activeHref, ease = "power2.out" }) => {
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, i) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

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

        const label = pill.querySelector(".pill-label");
        const hover = pill.querySelector(".pill-label-hover");

        gsap.set(label, { y: 0 });
        gsap.set(hover, { y: h + 10, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, duration: 0.3, ease }, 0)
          .to(label, { y: -(h + 6), duration: 0.3, ease }, 0)
          .to(hover, { y: 0, opacity: 1, duration: 0.3, ease }, 0);

        tlRefs.current[i] = tl;
      });
    };

    // delay fix for layout
    setTimeout(() => requestAnimationFrame(layout), 100);

    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, [items, ease]);

  const handleEnter = (i) => {
    tlRefs.current[i]?.play();
  };

  const handleLeave = (i) => {
    tlRefs.current[i]?.reverse();
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center bg-black rounded-full px-2 py-1 border border-neutral-700">
        <ul className="flex gap-1">
          {items.map((item, i) => {
            const isActive = activeHref === item.href;

            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  className="relative flex items-center justify-center px-3 py-2 text-sm font-medium rounded-full overflow-hidden"
                  style={{
                    background: isActive ? "#40d6c5" : "#ffffff",
                    color: "#000000",
                  }}
                >
                  {/* Hover circle */}
                  <span
                    ref={(el) => (circleRefs.current[i] = el)}
                    className="absolute left-1/2 bottom-0 rounded-full bg-black"
                  />

                  {/* Text */}
                  <span className="relative z-10">
                    <span className="pill-label block">
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0"
                      style={{ color: "#ffffff" }} // 🔥 FIX
                    >
                      {item.label}
                    </span>
                  </span>

                  {/* Active dot */}
                  {isActive && (
                    <span className="absolute -bottom-1 w-2 h-2 bg-black rounded-full left-1/2 -translate-x-1/2" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default PillNav;