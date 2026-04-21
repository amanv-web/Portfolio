import React, { useEffect, useRef } from "react";
import Navbar from "../components/Home/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "atropos/css";
import Atropos from "atropos/react";
import GradientText from "../components/fancy/text/GradientText";
import TextHighlighter from "../components/fancy/text/text-highlighter";
import Lenis from "lenis";
function About() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

const highlightProps = {
  className: "px-2 py-[2px] rounded-md bg-[#40d6c5]/10 text-[#40d6c5] font-medium",
  transition: { type: "spring", duration: 0.6, bounce: 0, delay: 0.2 },
  highlightColor: "rgba(64, 214, 197, 0.25)",
  useInViewOptions: { threshold: 0.5 },
};
  // Lenis smooth scroll (optimized)
  useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => lenis.destroy();
}, []);
  // GSAP animation (using ref instead of class)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.85,
        x: -40,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          end: "bottom 95%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Navbar />


      <div
        ref={containerRef}
        className="pt-20 md:pl-24 px-4 sm:px-6 lg:px-10 min-h-screen flex justify-around text-white flex-wrap-reverse md:flex-nowrap overflow-x-hidden gap-6 md:gap-10"
      >
        {/* Image */}
        <div className="flex justify-center items-center p-4 w-full md:w-auto">
          <Atropos className="my-atropos">
            <img
              ref={imageRef}
              src="https://res.cloudinary.com/dsxq0kytm/image/upload/f_auto,q_auto,w_600/v1744608394/Picsart_25-01-29_21-45-03-535_1_k7sue6.jpg"
              alt="Profile"
              className="w-60 sm:w-72 md:w-80 h-auto max-w-full object-cover rounded-xl"
              loading="lazy"
            />
          </Atropos>
        </div>

        {/* Content */}
       <div className="md:pt-5 md:w-4/6 w-full md:pl-0 pl-2 sm:pl-4 pr-2 sm:pr-4">
  <GradientText
    colors={["#40ffaa", "#4079ff", "#40ffaa"]}
    animationSpeed={3}
    showBorder={false}
    className="pb-6 md:pb-1 items-center flex text-center justify-center md:justify-start"
  >
    <h2 className="md:text-7xl sm:text-7xl text-5xl font-extrabold text-center md:text-left leading-tight">
      About me
    </h2>
  </GradientText>
  
 <div className="md:text-md text-sm sm:text-base text-gray-400 md:pt-5 pt-2 md:w-5/6 w-full leading-relaxed">
  
  <p className="mb-4 sm:mb-5">
    I'm Aman Vishwakarma, a{" "}
    <TextHighlighter {...highlightProps}>
      full-stack developer
    </TextHighlighter>{" "}
    based in India.
    
    Currently working at{" "}
    <TextHighlighter {...highlightProps}>
      WPP Production
    </TextHighlighter>{" "}
    as a frontend developer, where I focus on building scalable email templates and interactive web experiences.
  </p>

  <p className="mb-4 sm:mb-5">
    I specialize in creating{" "}
    <TextHighlighter {...highlightProps}>
      fast, responsive, and user-focused web applications
    </TextHighlighter>{" "}
    that are designed for real-world performance, not just visuals.
    
    Along with frontend, I work with backend technologies to deliver{" "}
    <TextHighlighter {...highlightProps}>
      complete end-to-end solutions
    </TextHighlighter>.
  </p>

  <p className="mb-4 sm:mb-5">
    I have hands-on experience building and deploying real-world projects, collaborating with teams, and solving practical problems.
    
    Alongside development, I also teach coding — helping students learn{" "}
    <TextHighlighter {...highlightProps}>
      JavaScript, Python, and SQL
    </TextHighlighter>{" "}
    with a strong focus on fundamentals.
  </p>

</div>
</div>
      </div>
    </>
  );
}

export default About;