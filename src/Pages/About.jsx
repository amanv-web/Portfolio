import React, { useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "atropos/css";
import Atropos from "atropos/react";
import GradientText from "../components/fancy/text/GradientText";

function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".myimage",
      {
        opacity: 0,
        scale: 0.8,
        x: -40,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1,
        ease: "power2.in",
        scrollTrigger: {
          trigger: ".myimage",
          start: "top 90%",
          end: "bottom 95%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-20 md:pl-24 min-h-screen flex justify-around text-white flex-wrap-reverse md:flex-nowrap overflow-x-hidden">
        <div className="flex justify-center items-center p-4">
          <Atropos className="my-atropos">
            <img
              src="https://res.cloudinary.com/dsxq0kytm/image/upload/v1744608394/Picsart_25-01-29_21-45-03-535_1_k7sue6.jpg"
              alt="Profile"
              className="myimage w-72 h-auto max-w-full object-cover rounded-xl"
              loading="lazy"
            />
          </Atropos>
        </div>

        <div className="md:pt-5 md:w-4/6 md:pl-0 pl-5 pr-4">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class pb-6 md:pb-1"
          >
            <h1 className="md:text-8xl text-6xl font-extrabold text-center md:text-left">
              About me
            </h1>
          </GradientText>

          <motion.p
            className="md:text-lg text-gray-400 md:pt-5 pt-2 md:w-5/6 w-full text-justify"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.3,
              duration: 1,
              bounce: 1,
            }}
          >
            "I am Aman Vishwakarma, a passionate React Developer and tech nerd
            from Azamgarh, India - 276201. With experience in building modern,
            responsive web applications, I specialize in JavaScript (ES6+),
            React v19, Redux, Context API, Tailwind CSS, and Bootstrap. I focus
            on delivering seamless user experiences and optimized performance.
            As a dedicated Freelancer, I have successfully completed multiple
            projects, consistently exceeding client expectations with clean,
            efficient, and scalable code. My strong problem-solving skills and
            attention to detail allow me to tackle complex challenges, creating
            solutions that are both innovative and practical. I take pride in
            writing clean, maintainable code and continuously improving my
            skills to stay updated with the latest industry trends. Beyond
            coding, I enjoy exploring new technologies, collaborating with
            fellow developers, and contributing to projects that push the
            boundaries of web development. I believe that great digital
            experiences are built on both creativity and technical excellence,
            and I strive to combine these elements in every project I
            undertake."
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default About;
