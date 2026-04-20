import React from "react";
import Navbar from "../components/Home/Navbar";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
       import PillCTA from "../components/fancy/text/PillCta";

import GradientText from "../components/fancy/text/GradientText";
import Svg from "@/components/Home/Svg copy 2";

function Contact() {
  return (
    <>
      <Navbar />
      <Svg />

      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10">
        <div className="w-full max-w-3xl text-center">

          {/* Heading */}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
              Get in touch
            </h1>
          </GradientText>

          {/* Description */}
          <p className="pt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            I'm open to new opportunities and collaborations. Whether you have a question or want to work together, feel free to reach out.
          </p>

          {/* CTA */}

<div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center items-center">

  <PillCTA
    text={
      <span className="flex items-center px-1 gap-2 justify-center w-full">
        <FaLinkedin className="text-lg" />
        LinkedIn
      </span>
    }
    onClick={() =>
      window.open(
        "https://www.linkedin.com/in/aman-vishwakarma-81a094356",
        "_blank"
      )
    }
    className="bg-gradient-to-r  from-teal-400 to-blue-900 text-white shadow-md  h-[52px] flex-none"
  />

  <PillCTA
    text={
      <span className="flex items-center px-3 gap-2 justify-center w-full">
        <MdEmail className="text-lg" />
        Email
      </span>
    }
    onClick={() =>
      (window.location.href = "mailto:getintouch.amanv@hotmail.com")
    }
    className="bg-gradient-to-r from-teal-400 to-blue-900 text-white shadow-md  h-[52px] flex-none"
  />

  <PillCTA
    text={
      <span className="flex items-center px-2 gap-2 justify-center w-full">
        <FaGithubSquare className="text-lg" />
        GitHub
      </span>
    }
    onClick={() =>
      window.open("https://github.com/amanv-web", "_blank")
    }
    className="bg-gradient-to-r from-teal-400  to-blue-900 text-white shadow-md w-[240px] h-[52px] flex-none"
  />

</div>
        </div>
      </section>
    </>
  );
}

export default Contact;