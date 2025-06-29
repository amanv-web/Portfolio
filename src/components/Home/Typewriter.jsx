
import { LayoutGroup, motion } from "framer-motion";

import TextRotate from "../fancy/text/text-rotate";


export default function Preview() {
  return (
    <div className=" text-2xl sm:text-3xl md:text-5xl flex flex-row items-center md:pl-0  pl-10  dark:text-muted text-foreground  overflow-hidden  ">
      <LayoutGroup>
        <motion.p className="flex  " layout>
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2 text-white"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            I am{""}
          </motion.span>
          <TextRotate
            texts={[
              "Web developer",
              "Frontend developer",
            ]}
            mainClassName="text-white px-2 sm:px-2 md:px-3 text-[#49e3da] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.p>
      </LayoutGroup>
    </div>
  )
}
