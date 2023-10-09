import React from "react";
import Partition from "../Partition";
import SectionWrapper from "../../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../Utils/motion";
import { styles } from "../../styles";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 ">
      <div className="">
        <Partition />
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} flex justify-center`}>
            Our Unique Advantages
          </h2>
          <p
            className={`${styles.sectionSubText} flex items-center px-5 py-4 `}
          >
            At Capitalize, our mission is to empower your financial journey.
            With a rich legacy of financial expertise and cutting-edge
            technology, we provide insightful data, personalized solutions, and
            a seamless financial experience. Choose Capitalize for a brighter
            financial future.
          </p>
        </motion.div>
      </div>
      <motion.img
        src="./solution.png"
        alt="solution"
        className="object-cover h-[auto] md:h-[500px]"
        variants={fadeIn("up", "tween", 0.3, 1)}
      />
    </div>
  );
};

export default SectionWrapper(AboutUs, "about");
