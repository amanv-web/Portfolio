import React from "react";

import { motion } from "framer-motion";
export default function ProjectsTimeline1() {
  return (
    <div>

      <div className=" max-w-5xl md:px-4 md:py-12  mx-auto  ">
        <motion.div className="grid gap-4 mx-4 sm:grid-cols-12 py-3 ">
        <div className="col-span-12 sm:col-span-3">
  <div className="text-center sm:text-left mb-1 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#00FFFF]">
  
  <a href="https://anime-stickers.vercel.app/"><h3 className="text-3xl font-semibold text-left text-[#00FFFF]">Anime Nexus</h3>
<img
  className="w-full md:h-40   h-56 rounded-lg"
  src="https://res.cloudinary.com/dsxq0kytm/image/upload/v1744642118/Screenshot_4_xrtore.png"
  alt=""
  lazyload="lazy"
/></a>  
  </div>
</div>
<div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
  <div className="col-span-12 space-y-3 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-[#00FFFF] md:text-md text-md text-[#D3D3D3]">
    
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#00FFFF]">
      <h3 className="text-xl font-semibold tracking-wide text-[#00FFFF]">
        Key Features
      </h3>
      <li>Anime Discovery</li>
      <li>Advanced Search & Filters </li>
      <li>Responsive UI </li>
      <li>Dark Mode Support </li>
    </div>

    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#00FFFF]">
      <h3 className="text-xl font-semibold tracking-wide text-[#00FFFF]">
        Tech Stack:
      </h3>
      <li>Frontend: React v19, Redux, Tailwind CSS, React Router</li>
      <li>State Management: Redux Toolkit</li>
      <li>Styling: Tailwind CSS, AOS (for smooth animations)</li>
      <li>API Integration: Consumes anime data from an external API (Context API)</li>
    </div>
  </div>
</div>

        </motion.div>
      </div>

    </div>
  );
}
