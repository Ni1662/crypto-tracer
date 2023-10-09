import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../Utils/motion";

export const Star = ({ top, left }) => {
  return (
    <motion.div
      className={`absolute w-2 h-2 bg-[#21d397] transform rotate-45 rounded-full`}
      style={{ boxShadow: "0 0 5px #00c9c8", top: `${top}`, left: `${left}` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 1, 0],
        rotate: [0, 360, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    ></motion.div>
  );
};

const Partition = () => {
  return (
    <motion.div
      className="flex justify-center py-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        className="bg-[#00a8ff] w-2 h-2 rounded-full mx-0.5"
        variants={textVariant(0.1)}
      ></motion.div>
      <motion.div
        className="bg-[#9c88ff] w-2 h-2 rounded-full mx-0.5"
        variants={textVariant(0.2)}
      ></motion.div>
      <motion.div
        className="bg-[#fbc531] w-2 h-2 rounded-full mx-0.5"
        variants={textVariant(0.3)}
      ></motion.div>
      <motion.div
        className="bg-[#4cd137] w-2 h-2 rounded-full mx-0.5"
        variants={textVariant(0.4)}
      ></motion.div>
      <motion.div
        className="bg-[#487eb0] w-2 h-2 rounded-full mx-0.5"
        variants={textVariant(0.5)}
      ></motion.div>
      <motion.div
        className="bg-[#e84118] w-2 h-2 rounded-full mx-0.5"
        variants={textVariant(0.6)}
      ></motion.div>
      <motion.div
        className="bg-[#8c7ae6] w-2 h-2 rounded-full mx-0.5"
        variants={textVariant(0.7)}
      ></motion.div>
    </motion.div>
  );
};

export default Partition;
