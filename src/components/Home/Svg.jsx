import React from "react";
import { motion } from "framer-motion";

function Svg() {
  return (
    <motion.div className=" opacity-40">
      
      <motion.div
        className="absolute md:left-100 md:-top-90 -z-10 opacity-20"
        initial={{ x: -200, opacity: 0, y: 300 }}
        animate={{}}
        whileInView={{ x: 0, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      >
        <svg
          id="visual"
          viewBox="0 0 900 600"
          className="w-100 h-270 md:w-220 md:h-250 overflow-x-hidden"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>

            {/* HEX 1 */}
            <g transform="translate(442 149)">
              <path
                d="M0 -135.3L117.2 -67.7L117.2 67.7L0 135.3L-117.2 67.7L-117.2 -67.7Z"
                fill="none"
                stroke="#40d6c5"   /* ✅ fixed color */
                strokeWidth="2"
              />
            </g>

            {/* HEX 2 */}
            <g transform="translate(660 344)">
              <path
                d="M0 -93L80.5 -46.5L80.5 46.5L0 93L-80.5 46.5L-80.5 -46.5Z"
                fill="none"
                stroke="#4079ff"   /* ✅ secondary color */
                strokeWidth="2"
              />
            </g>

            {/* HEX 3 */}
            <g transform="translate(231 593)">
              <path
                d="M0 -94L81.4 -47L81.4 47L0 94L-81.4 47L-81.4 -47Z"
                fill="none"
                stroke="#40d6c5"   /* ✅ fixed color */
                strokeWidth="2"
              />
            </g>

          </g>
        </svg>
      </motion.div>

    </motion.div>
  );
}

export default Svg;