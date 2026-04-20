import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export const TextHighlighter = forwardRef((
  {
    children,
    as = "span",
    triggerType = "inView",
    transition = { type: "spring", duration: 1, delay: 0, bounce: 0 },
    useInViewOptions = {
      once: true,
      initial: false,
      amount: 0.1,
    },
    className,

    // ✅ FIXED THEME COLOR (SOFT TEAL)
    highlightColor = "rgba(64, 214, 197, 0.25)",

    direction = "ltr",
    ...props
  },
  ref
) => {
  const componentRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentDirection, setCurrentDirection] = useState(direction);

  useEffect(() => {
    setCurrentDirection(direction);
  }, [direction]);

  const isInView =
    triggerType === "inView"
      ? useInView(componentRef, useInViewOptions)
      : false;

  useImperativeHandle(ref, () => ({
    animate: (animationDirection) => {
      if (animationDirection) {
        setCurrentDirection(animationDirection);
      }
      setIsAnimating(true);
    },
    reset: () => setIsAnimating(false),
  }));

  const shouldAnimate =
    triggerType === "hover"
      ? isHovered
      : triggerType === "inView"
      ? isInView
      : triggerType === "ref"
      ? isAnimating
      : triggerType === "auto"
      ? true
      : false;

  const ElementTag = as || "span";

  const getBackgroundSize = (animated) => {
    switch (currentDirection) {
      case "ltr":
      case "rtl":
        return animated ? "100% 100%" : "0% 100%";
      case "ttb":
      case "btt":
        return animated ? "100% 100%" : "100% 0%";
      default:
        return animated ? "100% 100%" : "0% 100%";
    }
  };

  const getBackgroundPosition = () => {
    switch (currentDirection) {
      case "ltr":
        return "0% 0%";
      case "rtl":
        return "100% 0%";
      case "ttb":
        return "0% 0%";
      case "btt":
        return "0% 100%";
      default:
        return "0% 0%";
    }
  };

  const animatedSize = useMemo(
    () => getBackgroundSize(shouldAnimate),
    [shouldAnimate, currentDirection]
  );

  const initialSize = useMemo(
    () => getBackgroundSize(false),
    [currentDirection]
  );

  const backgroundPosition = useMemo(
    () => getBackgroundPosition(),
    [currentDirection]
  );

  // ✅ UPDATED STYLE (THEME BASED)
  const highlightStyle = {
    backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: backgroundPosition,
    backgroundSize: animatedSize,
    boxDecorationBreak: "clone",
    WebkitBoxDecorationBreak: "clone",
  };

  return (
    <ElementTag
      ref={componentRef}
      onMouseEnter={() => triggerType === "hover" && setIsHovered(true)}
      onMouseLeave={() => triggerType === "hover" && setIsHovered(false)}
      {...props}
    >
      <motion.span
        className={cn("inline", className)}
        style={highlightStyle}
        animate={{ backgroundSize: animatedSize }}
        initial={{ backgroundSize: initialSize }}
        transition={transition}
      >
        {children}
      </motion.span>
    </ElementTag>
  );
});

TextHighlighter.displayName = "TextHighlighter";

export default TextHighlighter;