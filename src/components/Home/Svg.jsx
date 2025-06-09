import React from "react";
import { motion } from "framer-motion";

function Svg() {
    return (
        <motion.div
          className="absolute">
            <motion.div
              className="sticky overflow-hidden  blur-2xl drop-shadow-2xl  shadow-teal-300 md:left-250 left:50 w-200 h-100 bg-gradient-to-tr from-blue-900 to-purple-800 rounded-b-full top-100 -z-1  "
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            ></motion.div>
        </motion.div>
    );
}

export default Svg;
