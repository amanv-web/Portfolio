import React, { useEffect , useRef, useState } from "react";
import Navbar from "../components/Home/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "atropos/css";
import Atropos from "atropos/react";
import GradientText from "../components/fancy/text/GradientText";
import TextHighlighter from "../components/fancy/text/text-highlighter";
import Lenis from "lenis"

function About() {
  const containerRef = useRef(null);
  const elementRef = useRef(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const highlightClass = "rounded-[0.3em] px-2 text-white ";
  const highlightColor = "#868686";
  const inViewOptions = {
    threshold: 1,
  };
  const transition = { type: "spring", duration: 1, bounce: 0, delay:0.5 }
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHighlighted(entry.isIntersecting);
      },
      inViewOptions
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const lenis = new Lenis({
      autoRaf: true,
      wrapper: containerRef.current,
      duration: 3,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1,
      delay: 5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".myimage",
      {
        opacity: 0,
        scale: 0.8,
        x: -40,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: ".myimage",
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

      <div className="pt-20 md:pl-24 min-h-screen flex justify-around text-white flex-wrap-reverse md:flex-nowrap overflow-x-hidden">
        <div className="flex justify-center items-center p-4">
          <Atropos className="my-atropos">
            <img
              src="https://res.cloudinary.com/dsxq0kytm/image/upload/v1744608394/Picsart_25-01-29_21-45-03-535_1_k7sue6.jpg"
              alt="Profile"
              className="myimage w-72 h-auto max-w-full object-cover rounded-xl"
              loading="lazy"
            />
          </Atropos>
        </div>

        <div className="md:pt-5 md:w-4/6 md:pl-0 pl-5 pr-4">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class pb-6 md:pb-1"
          >
            <h1 className="md:text-8xl text-6xl font-extrabold text-center md:text-left">
              About me
            </h1>
          </GradientText>

          <div
            className="md:text-lg text-gray-400 md:pt-5 pt-2 md:w-5/6 w-full text-justify"
           
                    ref={containerRef}

          >
         <p>
  I'm Aman Vishwakarma, a passionate{" "}
  <TextHighlighter
    className={highlightClass}
    transition={transition}
    highlightColor={highlightColor}
    useInViewOptions={inViewOptions}
  >
    Front-End Developer & Tech Enthusiast
  </TextHighlighter>{" "}
  from Azamgarh, India. I specialize in building{" "}
  <TextHighlighter
    className={highlightClass}
    transition={transition}
    highlightColor={highlightColor}
    useInViewOptions={inViewOptions}
  >
    modern, responsive web applications
  </TextHighlighter>
  {" "}with a strong focus on clean design and optimized performance.
</p>

<p>
  With hands-on experience in{" "}
  <TextHighlighter
    className={highlightClass}
    transition={transition}
    highlightColor={highlightColor}
    useInViewOptions={inViewOptions}
  >
    JavaScript (ES6+), React v19, Tailwind CSS,
  </TextHighlighter>{" "}
  Redux, Context API, and Bootstrap, I deliver code that is{" "}
  <TextHighlighter
    className={highlightClass}
    transition={transition}
    highlightColor={highlightColor}
    useInViewOptions={inViewOptions}
  >
    scalable, efficient, and maintainable.
  </TextHighlighter>
</p>

<p>
  I'm also proud to serve as an{" "}
  <TextHighlighter
    className={highlightClass}
    transition={transition}
    highlightColor={highlightColor}
    useInViewOptions={inViewOptions}
  >
    IT Teacher (Grades 6–10)
  </TextHighlighter>{" "}
  at a CBSE-affiliated school, where I help young minds explore the world of coding and technology.
</p>

<p>
  As a dedicated{" "}
  <TextHighlighter
    className={highlightClass}
    transition={transition}
    highlightColor={highlightColor}
    useInViewOptions={inViewOptions}
  >
    Freelancer
  </TextHighlighter>
  , I've consistently exceeded client expectations by creating high-quality web experiences. I bring a{" "}
  <TextHighlighter
    className={highlightClass}
    transition={transition}
    highlightColor={highlightColor}
    useInViewOptions={inViewOptions}
  >
    problem-solving mindset and strong attention to detail
  </TextHighlighter>{" "}
  to every project I undertake.
</p>

<p>
  Beyond coding, I enjoy{" "}
  <TextHighlighter
    className={highlightClass}
    transition={transition}
    highlightColor={highlightColor}
    useInViewOptions={inViewOptions}
  >
    exploring new technologies, collaborating with developers,
  </TextHighlighter>{" "}
  and contributing to innovative solutions. I believe{" "}
    great digital experiences 
    <TextHighlighter
    className={highlightClass}
    transition={transition}
    highlightColor={highlightColor}
    useInViewOptions={inViewOptions}
  >
    blend creativity and technical excellence
  </TextHighlighter>{" "}a
  , and I strive to bring both to every line of code I write.
</p>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;
