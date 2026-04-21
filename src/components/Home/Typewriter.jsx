import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Typewriter({
  texts = [],
  speed = 2500,
  startDelay = 500,
}) {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // Start delay (prevents instant animation)
  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [startDelay]);

  // Rotate text
  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, speed);

    return () => clearInterval(interval);
  }, [started, texts.length, speed]);

  const currentText = texts[index].split("");

  return (
    <span className="inline-flex">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-flex"
        >
          {currentText.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              transition={{
                delay: i * 0.03,
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="inline-block"
            >
              {/* 🔥 FIXED SPACE ISSUE */}
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}