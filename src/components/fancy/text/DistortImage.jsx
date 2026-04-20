import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function DistortImage({
  image,
  baseFrequency = 0.015,
  numOctaves = 5,
  seed = 4,
  maxDisplacement = 120,
  movementBound = 40,
}) {
  const svgRef = useRef(null);
  const displacementRef = useRef(null);

  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cachedCursor = useRef({ ...cursor.current });

  useEffect(() => {
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
    const distance = (x1, x2, y1, y2) => Math.hypot(x1 - x2, y1 - y2);

    const handleMouseMove = (e) => {
      cursor.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const values = {
      x: 0,
      y: 0,
      rz: 0,
      scale: 0,
    };

    let rafId;

    const render = () => {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = cursor.current.x - centerX;
      const distY = cursor.current.y - centerY;

      values.x = lerp(values.x, map(distX, -300, 300, -40, 40), 0.08);
      values.y = lerp(values.y, map(distY, -300, 300, -40, 40), 0.08);
      values.rz = lerp(values.rz, map(distX, -300, 300, -6, 6), 0.08);

      gsap.set(svgRef.current, {
        x: values.x,
        y: values.y,
        rotateZ: values.rz,
      });

      const dist = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );

      values.scale = lerp(values.scale, map(dist, 0, 150, 0, maxDisplacement), 0.06);

      gsap.set(displacementRef.current, {
        attr: { scale: values.scale },
      });

      cachedCursor.current = { ...cursor.current };

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [maxDisplacement]);

  return (
    <div className="w-full max-w-[300px] aspect-[3/4] mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 600 750"
        className="w-full h-full block rounded-xl overflow-hidden"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="distortFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency={baseFrequency}
              numOctaves={numOctaves}
              seed={seed}
              result="noise"
            />
            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>

        <image
          href={image}
          width="600"
          height="750"
          filter="url(#distortFilter)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
}

export default DistortImage;