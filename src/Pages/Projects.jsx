import React from "react";
import Navbar from "../components/Home/Navbar";
import { motion } from "framer-motion";
import GradientText from "../components/fancy/text/GradientText";
import { useContext } from "react";
import { ProjectContext } from "../components/Project/ProjectList";


function Projects() {
  const { projects } = useContext(ProjectContext);

  return (
    <>
  
      <div className=" my div max-w-5xl p-2 md:px-4 md:py-12 mx-auto space-y-5  ">
        <div>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            <h1 className="md:text-8xl text-6xl font-extrabold text-center pb-10 md:text-left">
              Projects
            </h1>
          </GradientText>
        </div>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
        initial={{ opacity: 0, y: 20, scale:0.9}}
        whileInView={{ opacity: 1, y: 0, scale:1}}
        transition={{  }}
       viewport={{ once: true }}
       whileHover={{  }}
             className="grid rounded-xl gap-4 mx-4 sm:grid-cols-12 py-3  p-4  bg-white/10 backdrop-blur-md border border-white/20  shadow-lg hover:scale-105 transition-all duration-500 ease-in-out hover:border-blue-900 hover:shadow-sm hover:scale-[1]  hover:shadow-teal-500"
          >
            <div className="col-span-12 sm:col-span-3">
              <div className=" p-4 text-center sm:text-left mb-1 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#00FFFF] ">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-3xl font-semibold text-left text-[#00FFFF]">
                    {project.title}
                  </h3>
                  <img
                    className="w-full md:h-40 h-56 rounded-lg mt-3 "
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>

            <div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-3 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300 md:text-md text-md">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00FFFF]">
                  <h3 className="text-xl font-semibold tracking-wide text-[#00FFFF]">
                    Key Features
                  </h3>
                  {project.features.map((feature, i) => (
                    <li className="text-md font-light" key={i}>
                      {feature}
                    </li>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00FFFF]">
                  <h3 className="text-xl font-semibold tracking-wide text-[#00FFFF] pb-2">
                    Tech Stack:
                  </h3>
                  {project.techStack.map((tech, i) => (
                    <p className="text-sm font-light -pb-2" key={i}>
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <h1 className="md:text-3xl text-2xl font-extrabold flex justify-center mt-10">
          More on GitHub.....
        </h1>
      </div>
    </>
  );
}

export default Projects;
