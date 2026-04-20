import React from "react";
import GradientText from "../components/fancy/text/GradientText";
import { projects } from "../data/projects";

const ProjectCard = React.memo(({ project }) => {
  return (
    <div className="group rounded-2xl overflow-hidden 
    bg-[#111] border border-white/10 
    transition-all duration-300 
    hover:-translate-y-2 hover:border-[#40d6c5]/40">

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
      <div className="p-5 space-y-4">

        <h2 className="text-xl font-semibold text-[#40d6c5]">
          {project.title}
        </h2>

        <ul className="text-sm text-gray-400 space-y-1">
          {project.features.slice(0, 3).map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
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

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block pt-2 text-sm text-[#40ffaa] hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
});

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-16">

   <GradientText colors={["#40ffaa", "#4079ff"]}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-left">
          Projects
        </h1>
      </GradientText>
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}

export default Projects;