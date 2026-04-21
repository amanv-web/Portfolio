import React from "react";
import { motion } from "framer-motion";
import PillCTA from "../fancy/text/PillCta";
import Typewriter from "./Typewriter";
import GradientText from "../fancy/text/GradientText";
import Svg from "./Svg";

function HeroSection() {
  return (
    <>
      <Svg />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between 
      max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 min-h-screen">

        {/* LEFT */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          {/* Intro */}
          <p className="text-[#40d6c5] font-semibold mb-2">
            Hey there, I’m
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Aman
          </h1>

          <GradientText colors={["#40ffaa", "#4079ff"]}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              Vishwakarma
            </h1>
          </GradientText>

          {/* FIXED LINE */}
          <p className="mt-4 text-lg sm:text-xl">
            I am{" "}
            <span className="text-[#40d6c5] font-semibold">
              Full Stack Developer
            </span>
          </p>

          {/* Description */}
          <p className="mt-4 text-gray-400 max-w-md leading-relaxed text-sm sm:text-base">
            I build fast, responsive, and user-friendly web applications using modern web technologies.
          </p>

          {/* CTA (FIXED) */}
          <div className="flex gap-3 mt-6 flex-wrap sm:flex-nowrap">

            <div className="w-full sm:w-auto">
              <PillCTA
                text="Hire Me"
                onClick={() =>
                  (window.location.href =
                    "mailto:getintouch.amanv@hotmail.com")
                }
              />
            </div>

            <div className="w-full sm:w-auto">
              <PillCTA
                text="View Resume"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1_n-5QK_S_Z9PpbXZzIrylfpeN1gxJ2Z4/view",
                    "_blank"
                  )
                }
              />
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative group">
            <img
              src="  <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
         <div className="w-full aspect-[3/4] overflow-hidden bg-[#020617]">
  <img
    src="https://res.cloudinary.com/dsxq0kytm/image/upload/v1776758613/file_00000000ac0c7208a3d9409701245160_bldiug.png"
    alt="Hero Image"
    loading="lazy"
    className="w-full h-full object-cover 
    transition-transform duration-500 group-hover:scale-105"
  />
</div>
        </div>"
              alt="Aman Vishwakarma"
              className="w-52 sm:w-64 md:w-80 rounded-xl object-cover 
              transition duration-500 
              group-hover:scale-105 
              group-hover:shadow-[0_0_30px_rgba(64,214,197,0.4)]"
              loading="lazy"
            />

            <div className="absolute inset-0 rounded-xl 
            bg-gradient-to-r from-teal-400/10 to-blue-900/10 
            blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>
        </div>

      </div>
    </>
  );
}

export default HeroSection;
