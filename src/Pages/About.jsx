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
      className="pt-30 
      max-w-6xl mx-auto 
      px-6 sm:px-8 lg:px-12 
      flex  md:flex-row flex-col-reverse items-center
      md:items-start 
   
      gap-4 md:gap-16 
   text-white"
      
    >

      {/* IMAGE */}
      <div className=" ">
        <Atropos className="my-atropos">
          <img
            ref={imageRef}
            src="https://res.cloudinary.com/dsxq0kytm/image/upload/f_auto,q_auto,w_600/v1744608394/Picsart_25-01-29_21-45-03-535_1_k7sue6.jpg"
            alt="Profile"
            className="w-[240px] sm:w-[280px] md:w-[320px] 
            object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </Atropos>
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-[58%]">

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="md:pb-4  "
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            About me
          </h2>
        </GradientText>

        <div className="text-sm sm:text-base text-gray-400 pt-4 leading-relaxed">

          <p className="mb-4">
            I'm Aman Vishwakarma, a{" "}
            <TextHighlighter {...highlightProps}>
              full-stack developer
            </TextHighlighter>{" "}
            based in India.

            Currently working at{" "}
            <TextHighlighter {...highlightProps}>
              WPP Production
            </TextHighlighter>{" "}
            as a frontend developer, where I focus on building{" "}
            <TextHighlighter {...highlightProps}>300+</TextHighlighter>{" "}
            scalable email templates and{" "}
            <TextHighlighter {...highlightProps}>28+</TextHighlighter>{" "}
            interactive web pages.
          </p>

          <p className="mb-4">
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

          <p>
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