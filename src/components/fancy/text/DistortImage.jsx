import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function DistortImage({ image }) {
  const imgRef = useRef(null);

  const cursor = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

    const handleMouseMove = (e) => {
      cursor.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const values = {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
    };

    let rafId;

    const render = () => {
      const rect = imgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = cursor.current.x - centerX;
      const distY = cursor.current.y - centerY;

      // movement (parallax)
      values.x = lerp(values.x, map(distX, -300, 300, -20, 20), 0.08);
      values.y = lerp(values.y, map(distY, -300, 300, -20, 20), 0.08);

      // tilt effect (premium feel)
      values.rotateY = lerp(values.rotateY, map(distX, -300, 300, -8, 8), 0.08);
      values.rotateX = lerp(values.rotateX, map(distY, -300, 300, 8, -8), 0.08);

      gsap.set(imgRef.current, {
        x: values.x,
        y: values.y,
        rotateX: values.rotateX,
        rotateY: values.rotateY,
        transformPerspective: 800,
        transformOrigin: "center",
      });

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[340px] aspect-[3/4] mx-auto perspective">
      <img
        ref={imgRef}
        src={image}
        alt="Hero"
        className="w-full h-full object-cover rounded-2xl will-change-transform"
      />
    </div>
  );
}

export default DistortImage;