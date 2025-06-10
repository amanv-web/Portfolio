import React from "react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import "atropos/css";
import Atropos from "atropos/react";
import GradientText from "../fancy/text/GradientText";
import Svg from "./Svg";
function HeroSection() {
  return (
    <>
      <Svg />
      <div className="md:flex items-center justify-around gap-40   h-screen pb-10">
        <motion.div
          initial={{ y: "5vw", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 2, delay: 0.5 }}
          className="md:w-2/6 w-11/12 flex flex-col justify-center items-start"
        >
          <h1 className="md:text-3xl   text-xl md:p-0 pt-20 pl-10 font-bold text-[#40d6c5]">
            Hey there!, I'm-
          </h1>
          <div>
            <h1 className="md:text-8xl text-6xl  md:pl-0  pl-10 font-extrabold">
              Aman{" "}
            </h1>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <h1 className="md:text-8xl text-6xl  md:pl-0  pl-10 font-extrabold ">
                Vishwakarma
              </h1>
            </GradientText>

            <Typewriter />
          </div>
          <div>
            <p className="text-md md:pl-0  pl-10 flex pt-5 f">
              Currently focused on building user experiences that drive growth.
            </p>
          </div>
          <div className="flex space-x-4 pt-5 md:pl-0  pl-10 ">
            <a
              href="mailto:getintouch.amanv@hotmail.com"
              className="  bg-gradient-to-r from-teal-400 to-blue-900
              text-white
              font-semibold
              py-3 px-6
              rounded-full
              shadow-sm
              transition
              duration-900
              ease-in-out
              hover:from-black
              hover:to-blue-900
              hover:shadow-blue-400
            focus:outline-none

              focus:ring-blue-400  "
            >
              Hire Me
            </a>
            <a
              rel="stylesheet"
              href="https://drive.google.com/file/d/1IT9hdTzZoitMdERo00eBZ0ivMR3fpUJN/view?usp=sharing"
            >
              <button
      className="  bg-gradient-to-r from-teal-400 to-blue-900            text-white 
            font-semibold
            py-3 px-6
            rounded-full
            shadow-sm
            transition
            duration-900
            ease-in-out
            hover:from-black
            hover:to-blue-900
            hover:shadow-blue-400
            focus:outline-none
            focus:ring-blue-400  "
              >
                View Resume
              </button>
            </a>
          </div>
        </motion.div>

        <div className="md:pl-0   md:pt-0 pt-10 sm:max-w-full flex justify-center items-center">
          <motion.div
            initial={{ y: "-5vw", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.5 }}
            className="flex justify-center sm:justify-center items-center md:w-90 md:h-90 h-60 w-60 overflow-hidden rounded-full shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#2a2a2a] transition-all"
          >
            <Atropos className="my-atropos overflow-hidden  rounded-full ">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="md:w-90 md:h-110 h-70 w-60 overflow-hidden rounded-full 
               shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#2a2a2a] 
               transition-all"
                src="https://res.cloudinary.com/dsxq0kytm/image/upload/v1744608384/profile_-_Imgur_z0fd9m.jpg"
                alt="Profile"
              />
            </Atropos>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
