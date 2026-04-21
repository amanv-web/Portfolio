import React from "react";
import { motion } from "framer-motion";
import PillCTA from "../fancy/text/PillCta";
import GradientText from "../fancy/text/GradientText";
import Svg from "./Svg";
import DistortImage from "../fancy/text/DistortImage";
function HeroSection() {
  return (
    <>
     <Svg/>

      <div
        className="flex mt-8 flex-col md:flex-row items-center 
        justify-center md:justify-between
        gap-10 md:gap-16
        max-w-6xl mx-auto px-8 sm:px-8 lg:px-10 py-4 md:py-10"
      >

        {/* LEFT */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <p className="text-[#40d6c5] font-semibold mb-2">
            Hey there, I’m
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Aman
          </h1>

          <GradientText colors={["#40ffaa", "#4079ff"]}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              Vishwakarma
            </h1>
          </GradientText>

          <p className="mt-4 text-lg sm:text-xl">
            I am{" "}
            <span className="text-[#40d6c5] font-semibold">
              Full Stack Developer
            </span>
          </p>

          <p className="mt-4 text-gray-400 max-w-md leading-relaxed text-sm sm:text-base">
            I build fast, responsive, and user-friendly web applications using modern web technologies.
          </p>

<div className="flex gap-3 mt-6">

  <PillCTA
    text="Hire Me"
    onClick={() =>
      (window.location.href =
        "mailto:getintouch.amanv@hotmail.com")
    }
  />

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
        </motion.div>

        {/* RIGHT IMAGE */}
     <div className="w-full md:w-1/2 flex justify-center relative z-10">

  <div className="mt-10">
    
    <DistortImage
      image="https://res.cloudinary.com/dsxq0kytm/image/upload/f_auto,q_auto,w_400/v1776758613/file_00000000ac0c7208a3d9409701245160_bldiug.png"
      maxDisplacement={60}
    />

  </div>

</div>
      </div>
    </>
  );
}

export default HeroSection;
