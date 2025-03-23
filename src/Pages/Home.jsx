import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Navbar from '../components/Home/Navbar'
import Skills from './Skills'
import { motion } from 'framer-motion'
function Home() {
  return (
    <>
      <Navbar />

      <motion.img src="https://imgur.com/8cYZYJC.png"
        animate={{ x: 20 }}
        transition={{
          duration: 1,
          delay: 0,
        }}
        className=" absolute md:top-15 top-5  md:left-14 w-35 h-35 -z-1 brightness-50" alt="" />
      <div className="relative" >
        
        <HeroSection />

        <About />
        <Skills />
        <Projects />
        <Contact />




      </div>
    </>
  )
}
export default Home