import React from "react";
import Navbar from "../components/Home/Navbar";
import GradientText from "../components/fancy/text/GradientText";
/* ✅ ICONS (ALL VALID) */
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSalesforce,
  SiGreensock,
} from "react-icons/si";

import { MdEmail } from "react-icons/md";

/* ✅ SKILLS DATA (CLEAN + CORRECT ORDER) */
const skillsData = [
  {
    title: "Full Stack",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },

  {
    title: "Tools & Animation",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GSAP", icon: <SiGreensock /> },
      { name: "Framer Motion", icon: <FaCode /> }, // fallback icon
    ],
  },

  {
    title: "Email Development",
    skills: [
      { name: "HTML Email", icon: <MdEmail /> },
      { name: "Adobe Experience Manager", icon: <FaCode /> }, // fallback (clean)
      { name: "Salesforce Marketing Cloud", icon: <SiSalesforce /> },
      { name: "Litmus Testing", icon: <MdEmail /> },
      { name: "Responsive Email Design", icon: <MdEmail /> },
    ],
  },
];

function Skills() {
  return (
    <>
      <Navbar />
  
      <div className="max-w-6xl  bg-black mx-auto px-6 sm:px-8 lg:px-10 md:py-16 text-white">

        {/* Heading */}
        <GradientText
          colors={["#40ffaa", "#4079ff"]}
          animationSpeed={3}
          showBorder={false}
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mt-12 md:mb-12 mb-6">
            Skills
          </h2>
        </GradientText>

      

        {/* GRID → 3 CARDS ONLY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {skillsData.map((category, i) => (
            <div
              key={i}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 
              transition-all duration-300 
              hover:-translate-y-1 hover:border-[#40d6c5]/40"
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-5 text-[#40d6c5]">
                {category.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 
                    bg-[#020617] rounded-full text-sm text-gray-300 
                    border border-white/10 
                    hover:border-[#40d6c5]/40 transition"
                  >
                    <span className="text-[#40d6c5] text-lg">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

          </div>
    </>
  );
}

export default Skills;