import React, { useEffect } from 'react'
import Navbar from '../components/Home/Navbar'
import gsap from 'gsap';
          import GradientText from '../components/fancy/text/GradientText'
import Svg from '../components/Home/Svg copy 3';


function Skills() {
 
useEffect(() => {
  gsap.fromTo(
    ".movimg1",
    { opacity: 1, scale: 1 },
    {
      opacity: 0.5,
      scale: 0.8,
      scrollTrigger: {
        trigger: ".movimg1",
            start: "top 10%",
        end: "top 10%",
        scrub: true,

      },
    }
  ); gsap.fromTo(
    ".movimg2",
    { opacity: 1, scale: 1 },
    {
      opacity: 0.5,
      scale: 0.8,
      scrollTrigger: {
        trigger: ".movimg2",
            start: "top 10%",
        end: "top 10%",
        scrub: true,

      },
    }
  ); gsap.fromTo(
    ".movimg3",
    { opacity: 1, scale: 1 },
    {
      opacity: 0.5,
      scale: 0.8,
      scrollTrigger: {
        trigger: ".movimg3",
        start: "top 10%",
        end: "top 10%",
        scrub: true,

      },
    }
  );
}, []);

  return (
    <>

  

      <div className='pb-20 pt-20'>
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
      <div id="skills" className="py-10  text-center text-white h-screen">
          <p className="text-center px-2  text-lg text-gray-300 ">
      Over the years, I’ve explored and built amazing things using these technologies.
    </p>
  <div className="max-w-6xl h-96 mx-auto grid md:flex grid-cols-1 p-8 space-x-8">
 
  


    <div className="movimg1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 mb-10 transition-all w-full duration-500 ease-in-out hover:border-teal-900 hover:shadow-md hover:scale-[1.02]  hover:shadow-blue-700"
>
      <h3 className="text-2xl font-semibold text-center mb-4 text-white">Frontend Development</h3>
      <div className="flex flex-wrap justify-center gap-4">
       
        <span  className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img loading="lazy" src="https://img.icons8.com/color/48/react-native.png" alt="React.js" className="w-5 h-5 mr-2" />
          React.js
        </span>  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img  src="https://img.icons8.com/color/48/tailwind_css.png" alt="Tailwind CSS" className="w-5 h-5 mr-2" loading="lazy" />
          Tailwind CSS
        </span> 
           <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/redux.png" alt="Redux" className="w-5 h-5 mr-2"  loading="lazy"/>
          Redux
        </span> <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/html-5.png" alt="HTML5" className="w-5 h-5 mr-2" loading="lazy" />
          HTML5
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/css3.png" alt="CSS3" className="w-5 h-5 mr-2" loading="lazy"/>
          CSS3
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/javascript.png" alt="JavaScript" className="w-5 h-5 mr-2" loading="lazy" />
          JavaScript
        </span>
       
     
       
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/bootstrap.png" alt="Bootstrap" className="w-5 h-5 mr-2" loading="lazy" />
          Bootstrap
        </span>
       
      </div>
    </div>


    <div className="movimg2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 mb-10 transition-all w-full duration-500 ease-in-out hover:border-teal-900 hover:shadow-md hover:scale-[1.02]  hover:shadow-blue-700">
      <h3 className="text-2xl font-semibold text-center mb-4 text-white">Dev Tools & Animation</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/color/48/git.png" alt="Git" className="w-5 h-5 mr-2" loading="lazy"/>
          Git
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img src="https://img.icons8.com/ios-filled/50/github.png" alt="GitHub" className="w-5 h-5 mr-2 invert" loading="lazy"/>
          GitHub
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img loading="lazy" src="https://tsh.io/wp-content/uploads/fly-images/32664/framer-motion-logo-1-312x211.png" alt="Framer Motion" className="w-5 h-5 mr-2" />
          Framer Motion
        </span>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img loading="lazy" src="https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg" alt="GSAP" className="w-5 h-5 mr-2" />
          GSAP
        </span>
      </div>
    </div>

  
    <div className="movimg3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 mb-10 transition-all w-full duration-500 ease-in-out hover:border-teal-900 hover:shadow-md hover:scale-[1.02]  hover:shadow-blue-700">
      <h3 className="text-2xl font-semibold text-center mb-4 text-white">
        <span className="opacity-50">Backend</span> & Database</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img loading="lazy" src="https://img.icons8.com/color/48/mongodb.png" alt="MongoDB" className="w-5 h-5 mr-2" />
          MongoDB
        </span>
       
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white shadow-md hover:bg-[#2ab2fe] transition">
          <img loading="lazy"src="https://img.icons8.com/color/48/firebase.png" alt="Firebase" className="w-5 h-5 mr-2" />
          Firebase
        </span>
      </div>
    </div>
  </div>
</div>

        </div>
  


    </>

  );
};


export default Skills