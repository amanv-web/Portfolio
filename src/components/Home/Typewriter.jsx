import React from 'react'
import Typewriter from 'typewriter-effect';
function typewriter() {
  return (
    <div className='text-3xl font-bold pt-2 md:pl-0  pl-10 '>
      <Typewriter
    options={{
        loop: true,
   
    }}

  onInit={(typewriter) => {
    typewriter
      .typeString("A ")
      .pauseFor(500)
      .typeString("Web Developer")
      .pauseFor(2000)
      .deleteChars(13) 
      .typeString("Software Developer")
      .pauseFor(2000)
  
      .start();
  }}
/></div>
  )
}

export default typewriter