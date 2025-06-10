import React from "react";
import { motion } from "framer-motion";

function Svg() {
    return (
        <motion.div
          className="">
            <motion.div
              className=" absolute h-screen md:left-100 md:-top-90"
              initial={{ x: -200, opacity: 0 , y:300}}
              animate={{  }}
              whileInView={{x: 0, opacity: 1 , y:0}}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
              <svg id="visual" viewBox="0 0 900 600" 
              className="w-100 h-270 md:w-220 md:h-250 overflow-x-hidden" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g><g transform="translate(442 149)"><path d="M0 -135.3L117.2 -67.7L117.2 67.7L0 135.3L-117.2 67.7L-117.2 -67.7Z" fill="none" stroke="#297EA6" stroke-width="2"></path></g><g transform="translate(660 344)"><path d="M0 -93L80.5 -46.5L80.5 46.5L0 93L-80.5 46.5L-80.5 -46.5Z" fill="none" stroke="#297EA6" stroke-width="2"></path></g><g transform="translate(231 593)"><path d="M0 -94L81.4 -47L81.4 47L0 94L-81.4 47L-81.4 -47Z" fill="none" stroke="#297EA6" stroke-width="2"></path></g></g></svg>
            </motion.div>
        </motion.div>
    );
}

export default Svg;
