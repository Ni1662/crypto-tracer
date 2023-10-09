import React from "react";
import Partition from "../Partition";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../Utils/motion";
import { styles } from "../../styles";
import SectionWrapper from "../../hoc/SectionWrapper";
import { services } from "../../constants";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt className="xs:w-full w-[350px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[380px] flex justify-evenly items-center flex-col "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
          <p className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]">{description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <>
      <Partition />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} flex justify-center`}>
          Our Core Services
        </h2>
        <p
          className={`${styles.sectionSubText} flex items-center text-center px-20 py-2 `}
        >
          Capitalize is your comprehensive financial platform offering real-time
          data, market insights, and personalized finance management. Make
          informed decisions today.
        </p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "service");
