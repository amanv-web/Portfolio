import React from "react";
import GradientText from "../components/fancy/text/GradientText";
import { projects } from "../data/projects";

/* CARD */
const ProjectCard = React.memo(({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group h-full"
    >
      <div
        className="bg-[#111] rounded-2xl overflow-hidden 
        border border-white/10 
        transition-all duration-300 
        hover:-translate-y-2 hover:border-[#40d6c5]/40
        flex flex-col h-full"
      >
        {/* IMAGE */}
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-48 object-cover 
            transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-grow">

          {/* TITLE */}
          <h2 className="text-xl font-semibold text-[#40d6c5]">
            {project.title}
          </h2>

          {/* FEATURES */}
          <ul className="text-sm text-gray-400 space-y-1 mt-3">
            {project.features.slice(0, 3).map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>

          {/* TECH STACK (ALWAYS BOTTOM) */}
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full 
                bg-[#020617] text-gray-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    </a>
  );
});

/* PAGE */
function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 md:py-16">

      {/* HEADING */}
      <GradientText colors={["#40ffaa", "#4079ff"]}>
        <h2 className="text-4xl mt-12  sm:text-5xl md:text-6xl font-extrabold md:mb-12 mb-6 text-left">
          Projects
        </h2>
      </GradientText>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}

export default Projects;