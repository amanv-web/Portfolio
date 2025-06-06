import React, { useEffect, useRef } from "react";
import Navbar from "../components/Home/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsTimeline1 from "../components/Project/ProjectsTimeline1";
import ProjectsTimeline2 from "../components/Project/ProjectsTimeline2";
import ProjectsTimeline3 from "../components/Project/ProjectsTimeline3";
import ProjectsTimeline4 from "../components/Project/ProjectsTimeline4";

function Projects() {
  const projectRefs = useRef([]);

  const list = [
    ProjectsTimeline1,
    ProjectsTimeline3,
    ProjectsTimeline4,
    ProjectsTimeline2,
  ];

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
          {
            opacity: 1,
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
      <Navbar />
      <div>
        <h1 className="md:text-8xl text-6xl font-extrabold flex justify-center mt-10">
          Projects
        </h1>

        <div className="space-y-15 mt-20 flex justify-center items-center flex-col">
          {list.map((Component, index) => (

            <div className="my-atropos, myDiv ring-[0.3px] bg-[#171717] md:max-w-5xl md:px-4 md:mx-auto w-10/12 font-thin overflow-hidden rounded-2xl"
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}>
             
              <Component />
             
       
              </div>
          ))}
      </div>
      <h1 className="md:text-3xl text-2xl font-extrabold flex justify-center mt-10">
        More on Github.....
      </h1>
    </div >
    </>
  );
}

export default Projects;
