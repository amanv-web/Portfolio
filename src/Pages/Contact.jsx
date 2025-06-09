import React from "react";
import Navbar from '../components/Home/Navbar'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

             import GradientText from '../components/fancy/text/GradientText'
import Svg from "@/components/Home/Svg copy 2";
     


function Contact() {
  return (
    <>
      <Navbar />
<Svg/>
      <div className="flex justify-center items-center h-screen md:pb-40 ">
        <div className=" md:w-1/2 md:p-10 p-10 ">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa",  "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
              <h1 className="md:text-8xl text-6xl font-extrabold text-center md:text-left">Get in touch</h1>
        </GradientText>
          <p className="pt-4 text-center ">
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
          <div>
            <div
              className=" flex
         justify-around pt-7 gap-5"
            >


              <a href='http://www.linkedin.com/in/aman-vishwakarma-81a094356' className="w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black" >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00FFFF_0%,#1E1E1E_50%,#00FFFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#1E1E1E] px-3 py-1 md:text-md text-sm font-medium text-[#00FFFF] backdrop-blur-3xl md:gap-3.5 gap-0.5 ">
                  <FaLinkedin />   Linked In
                </span>
              </a>



              <a href="mailto:getintouch.amanv@hotmail.com" className="w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00FFFF_0%,#1E1E1E_50%,#00FFFF_100%)] " />

                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#1E1E1E] px-3 py-1 md:text-1xl text-sm font-medium text-[#00FFFF] backdrop-blur-3xl md:gap-3.5 gap-0.5">
                  <MdEmail />  Email
                </span>
              </a>

              <a href="https://github.com/amanv-web" className="w-full relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00FFFF_0%,#1E1E1E_50%,#00FFFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#1E1E1E] px-3 py-1 md:text-md text-sm font-medium  text-[#00FFFF] backdrop-blur-3xl md:gap-3.5 gap-0.5">
                  <FaGithubSquare />  Github
                </span>
              </a>



            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
