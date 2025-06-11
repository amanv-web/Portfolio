import React from "react";
import HeroSection from "../components/Home/HeroSection";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import { motion } from "framer-motion";
function Home() {
  return (

    <>

    <div className="">
  

      <motion.img
        src="https://res.cloudinary.com/dsxq0kytm/image/upload/v1744608366/Mediamodifier-Design-Template_2_j6ll17.png"
        animate={{ x: 20 }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className=" absolute md:top-15 top-5  md:left-14 w-35 h-35 -z-1 brightness-50"
        alt=""
      />
      <div className="relative">
   
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
    
    </>
   
  );
}
export default Home;
