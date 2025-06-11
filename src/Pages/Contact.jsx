import React from "react";
import Navbar from "../components/Home/Navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import GradientText from "../components/fancy/text/GradientText";
import Svg from "@/components/Home/Svg copy 2";

function Contact() {
  return (
    <>
      <Svg />
      <div className="flex justify-center items-center h-screen ">
        <div className=" md:w-1/2 md:p-10 p-10 ">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            <h1 className="md:text-8xl text-6xl font-extrabold text-center md:text-left">
              Get in touch
            </h1>
          </GradientText>
          <p className="pt-4 text-center ">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div>
            <div
              className=" flex
         justify-around pt-7 gap-1"
            >
<a
  href="https://www.linkedin.com/in/aman-vishwakarma-81a094356"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-blue-900 px-5 py-3 text-white font-semibold rounded-full shadow-sm text- transition duration-500 ease-in-out hover:from-black hover:to-blue-900 hover:shadow-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
>
    <FaLinkedin className="text-xl" />
    LinkedIn
</a>

<a
  href="mailto:getintouch.amanv@hotmail.com"
  className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-blue-900 px-5 py-2 text-white font-semibold rounded-full shadow-sm text- transition duration-500 ease-in-out hover:from-black hover:to-blue-900 hover:shadow-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
>
    <MdEmail className="text-xl" />
    Email
  
</a>

             <a
  href="https://github.com/amanv-web"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-blue-900 px-5 py-2 text-white font-semibold rounded-full shadow-sm transition duration-500 ease-in-out hover:from-black hover:to-blue-900 hover:shadow-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
>
  <FaGithubSquare className="text-xl" />
  GitHub
</a>
            </div>
          </div>
        </div>
      </div>
    </>
  ); 
}

export default Contact;
