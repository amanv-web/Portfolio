import React from "react";
import { motion } from "framer-motion";

function Svg() {
    return (
        <motion.div
          className="">
            <motion.div
              className=" absolute left-100 "
              initial={{ x: 200, opacity: 0 }}
              animate={{ }}
              whileInView={{x: 0, opacity: 1}}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g><g transform="translate(695 120)"><path d="M0 -112.6L97.5 -56.3L97.5 56.3L0 112.6L-97.5 56.3L-97.5 -56.3Z" fill="none" stroke="#0066FF" stroke-width="2"></path></g><g transform="translate(186 318)"><path d="M0 -97L84 -48.5L84 48.5L0 97L-84 48.5L-84 -48.5Z" fill="none" stroke="#0066FF" stroke-width="2"></path></g><g transform="translate(464 387)"><path d="M0 -98L84.9 -49L84.9 49L0 98L-84.9 49L-84.9 -49Z" stroke="#4579ff" fill="none" stroke-width="2"></path></g></g></svg>
          </motion.div>
        </motion.div>
    );
}

export default Svg;
