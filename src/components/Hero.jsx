import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
        <h1 className="flex text-white text-2xl md:text-6xl lg:text-8xl font-bold ">
      <motion.span
        className="mr-1 md:mr-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ times: [0, 0.2, 0.8, 1], duration: 4, repeat: Infinity }}
      >
        Hi
      </motion.span>
      <motion.span
        className="mr-1 md:mr-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ times: [0, 0.25, 0.45, 0.8, 1], duration: 4, repeat: Infinity }}
      >
        I'm
      </motion.span>
      <motion.span
        className="text-[#915eff]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ times: [0, 0.3, 0.55, 0.7, 0.9, 1], duration: 4, repeat: Infinity }}
      >
        Kanchan Gobari
      </motion.span>
    </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 ml-1`}>
            I'm a front-end developer with
            expertise in building  <br className="sm:block hidden" />{" "} dynamic, user-friendly web applications.
          </p>
        </div>
       
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center -mb-14  ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{y:[0, 24, 0] }}
              transition={{ duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                
               }}
            />
           
          </div>
        </a>

      </div>
    </section>
  );
};

export default Hero;
