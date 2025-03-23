import React, { useEffect, useRef } from "react";
import Navbar from "../components/Home/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsTimeline from "../components/project/ProjectsTimeline1";
import ProjectsTimeline2 from "../components/project/ProjectsTimeline2";
import ProjectsTimeline3 from "../components/project/ProjectsTimeline3";
import ProjectsTimeline4 from "../components/project/ProjectsTimeline4";

function Projects() {
  const projectRefs = useRef([]);

  const list = [ProjectsTimeline, ProjectsTimeline3, ProjectsTimeline4, ProjectsTimeline2];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    projectRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.8,
          },
          { opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 90%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);
  return (
    <>
      <Navbar/>
      <div>
        <h1 className="md:text-8xl text-6xl font-extrabold flex justify-center mt-10">
          Projects
        </h1>
        <div className="space-y-15 mt-20  flex justify-center items-center flex-col">
          {list.map((Component, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="myDiv bg-[#1E1E1E] md:max-w-5xl md:px-4 md:mx-auto w-10/12   font-thin rounded-2xl"
            >
              <Component />
            </div>
          ))}
        </div>
        <h1 className="md:text-3xl text-2xl font-extrabold flex justify-center mt-10">
          More on Github.....
        </h1>
      </div>
    </>
  );
}

export default Projects;