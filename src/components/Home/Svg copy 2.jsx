import React from "react";
import { motion } from "framer-motion";

function Svg() {
    return (
        <motion.div
          className="">
            <motion.div
              className=" absolute md:left-100 md:-top-10"
              initial={{ x: -200, opacity: 0 }}
              animate={{  }}
              whileInView={{x: 0, opacity: 1}}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
           <svg id="visual" viewBox="0 0 960 540"      className="w-100 h-250 md:w-220 md:h-250 overflow-x-hidden" 

          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g transform="translate(542 244)">
              <path
                d="M0 -104.1L90.1 -52L90.1 52L0 104.1L-90.1 52L-90.1 -52Z"
                stroke="#6600FF"
                fill="none"
                strokeWidth="2"
              />
            </g>
            <g transform="translate(850 112)">
              <path
                d="M0 -67L58 -33.5L58 33.5L0 67L-58 33.5L-58 -33.5Z"
                stroke="#6600FF"
                fill="none"
                strokeWidth="2"
              />
            </g>
            <g transform="translate(299 138)">
              <path
                d="M0 -70L60.6 -35L60.6 35L0 70L-60.6 35L-60.6 -35Z"
                stroke="#6600FF"
                fill="none"
                strokeWidth="2"
              />
            </g>
            <g transform="translate(333 398)">
              <path
                d="M0 -76L65.8 -38L65.8 38L0 76L-65.8 38L-65.8 -38Z"
                stroke="#6600FF"
                fill="none"
                strokeWidth="2"
              />
            </g>
          </g>
        </svg>       </motion.div>
        </motion.div>
    );
}

export default Svg;
