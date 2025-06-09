"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.01),
      }
    );
  }, []);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap gap-1">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "opacity-0 text-purple-400 dark:text-purple-300",
                filter && "blur-sm"
              )}
              style={{
                filter: filter ? "blur(5px)" : "none",
              }}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className="text-md leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
