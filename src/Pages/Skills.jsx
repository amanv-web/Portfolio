import React, { useEffect } from 'react'
import Navbar from '../components/Home/Navbar'
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
              import GradientText from '../components/fancy/text/GradientText'


function Skills() {

 


  useEffect(() => {
    gsap.registerPlugin(scrollTrigger);
    gsap.fromTo(
      ".movh1",
      { opacity: 0, scale: 0.8, X:0 }, 
      {
        opacity: 1,
        scale: 1,
      
        duration: 3,
        delay: 1,
        scrollTrigger: {
          trigger: ".movh1",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1, 
        },
      }
    );
    gsap.to(".movimg1", {
      opacity: 0,
      scale: 0.8,
      duration: 5,
      delay: 1,
      scrollTrigger: {
        trigger: ".movimg1",
        start: "top 10%",
        end: "bottom 5%",
        scrub: true,

        opacity: 1,
      },
    });

    gsap.to(".movimg2", {
      opacity: 0,
      scale: 0.8,
      duration: 5,
      delay: 1,
      scrollTrigger: {
        trigger: ".movimg2",
        start: "top 10%",
        end: "bottom 5%",
        scrub: true,

        opacity: 1,
      },
    });

    gsap.to(".movimg3", {
      opacity: 0,
      scale: 0.8,
      duration: 5,
      delay: 1,
      scrollTrigger: {
        trigger: ".movimg3",
        start: "top 10%",
        end: "bottom 5%",
        scrub: true,

        opacity: 1,
      },
    });


  }, []);

  return (
    <>

      <Navbar />
      <div className='pb-20'>
        <div>
         <GradientText
           colors={["#40ffaa", "#4079ff", "#40ffaa",  "#40ffaa"]}
           animationSpeed={3}
           showBorder={false}
           className="custom-class"
         >
               <h1 className="md:text-8xl text-6xl font-extrabold text-center md:text-left">Skills</h1>
         </GradientText>
        </div>
      <section id="skills" className="py-16  text-white">
  <div className="max-w-5xl mx-auto ">
 
    <p className="text-center text-lg text-gray-300 mb-10">
      Over the years, I’ve explored and built amazing things using these technologies. Each of them has helped me shape ideas into real web experiences.
    </p>


    <div className="movimg1 bg-gradient-to-br to-green-800 from-blue-300 outline-blue-300 shadow-green-500 outline rounded-xl p-6 mb-10 shadow-md">
      <h3 className="text-2xl font-semibold text-center mb-4 text-white">Frontend Development</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/html-5.png" alt="HTML5" className="w-5 h-5 mr-2" />
          HTML5
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/css3.png" alt="CSS3" className="w-5 h-5 mr-2" />
          CSS3
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/javascript.png" alt="JavaScript" className="w-5 h-5 mr-2" />
          JavaScript
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/react-native.png" alt="React.js" className="w-5 h-5 mr-2" />
          React.js
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/redux.png" alt="Redux" className="w-5 h-5 mr-2" />
          Redux
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/tailwind_css.png" alt="Tailwind CSS" className="w-5 h-5 mr-2" />
          Tailwind CSS
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/bootstrap.png" alt="Bootstrap" className="w-5 h-5 mr-2" />
          Bootstrap
        </span>
       
      </div>
    </div>


    <div className="movimg2 bg-gradient-to-br to-gray-800 from-blue-300    rounded-xl p-6 mb-10 shadow-lg">
      <h3 className="text-2xl font-semibold text-center mb-4 text-white">Dev Tools & Animation</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/git.png" alt="Git" className="w-5 h-5 mr-2" />
          Git
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/ios-filled/50/github.png" alt="GitHub" className="w-5 h-5 mr-2 invert" />
          GitHub
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://tsh.io/wp-content/uploads/fly-images/32664/framer-motion-logo-1-312x211.png" alt="Framer Motion" className="w-5 h-5 mr-2" />
          Framer Motion
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg" alt="GSAP" className="w-5 h-5 mr-2" />
          GSAP
        </span>
      </div>
    </div>

  
    <div className="movimg3 bg-gradient-to-br to-gray-800 from-blue-300   rounded-xl p-6 shadow-lg">
      <h3 className="text-2xl font-semibold text-center mb-4 text-white">
        <span className="opacity-50">Backend</span> & Database</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/mongodb.png" alt="MongoDB" className="w-5 h-5 mr-2" />
          MongoDB
        </span>
       
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/firebase.png" alt="Firebase" className="w-5 h-5 mr-2" />
          Firebase
        </span>
      </div>
    </div>
  </div>
</section>

        </div>
  


    </>

  );
};


export default Skills