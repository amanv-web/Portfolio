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
           <svg id="visual" viewBox="0 0 960 540"      className="w-100 h-250 md:w-220 md:h-250 overflow-x-hidden" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g><g transform="translate(818 167)"><path d="M0 -112.6L97.5 -56.3L97.5 56.3L0 112.6L-97.5 56.3L-97.5 -56.3Z" fill="none" stroke="#297EA6" stroke-width="2"></path></g><g transform="translate(183 347)"><path d="M0 -96L83.1 -48L83.1 48L0 96L-83.1 48L-83.1 -48Z" fill="none" stroke="#297EA6" stroke-width="2"></path></g><g transform="translate(412 330)"><path d="M0 -70L60.6 -35L60.6 35L0 70L-60.6 35L-60.6 -35Z" stroke="#297EA6" fill="none" stroke-width="2"></path></g></g></svg>     
            </motion.div>
        </motion.div>
    );
}

export default Svg;
