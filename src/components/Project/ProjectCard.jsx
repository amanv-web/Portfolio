const ProjectCard = React.memo(({ project }) => {
  return (
    <div
      className="group relative grid sm:grid-cols-12 gap-4 p-5 rounded-2xl 
      bg-[#0b1220] border border-white/10 
      transition-all duration-300 hover:border-[#40d6c5]/50 hover:scale-[1.02]"
    >
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 
      bg-gradient-to-r from-[#40ffaa]/10 via-transparent to-[#4079ff]/10 pointer-events-none"></div>

      {/* IMAGE */}
      <div className="sm:col-span-4 overflow-hidden rounded-xl">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-44 object-cover rounded-xl 
            transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      </div>

      {/* CONTENT */}
      <div className="sm:col-span-8 flex flex-col justify-between z-10">

        <h2 className="text-lg sm:text-xl font-semibold text-[#40ffaa]">
          {project.title}
        </h2>

        {/* FEATURES */}
        <ul className="text-sm text-gray-400 list-disc ml-5 mt-2 space-y-1">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full 
              bg-[#111827] text-[#40d6c5] border border-[#40d6c5]/20"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
});