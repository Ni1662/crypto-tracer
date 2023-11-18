// import { makeStyles } from "@material-ui/core";
import React from "react";
import Partition from "../../Components/Partition";
import { fadeIn, textVariant } from "../../Utils/motion";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import { teams } from "../../constants";
import { insta, fb, linkedin } from "../../Utils/Icons";


const Card = ({
  index,
  name,
  designation,
  img,
  instaurl,
  fburl,
  linkedinurl,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="flex flex-col items-center "
    >
      <div className="imghover scale-[0.78] h-[400px] w-[312px] hover:scale-[0.88]">
        <div className="clip-path top-[-200px]">
          <div className="absolute backgroundGradient h-[380px] w-[380px] rounded-full top-[210px] left-[10px] " />
          <img
            src={img}
            alt={name}
            className="relative h-[400px] object-cover imghover scale-[1.15] translate-y-[20px] top-[164px] left-[30px] hover:scale-[1.2] hover:translate-y-0  "
          />
        </div>
        <div className="w-[380px] left-[10px] sm:h-1 h-1 blue-gradient " />
      </div>
      <h3 className="text-white text-[20px] font-bold text-center ml-10">
        {name}
      </h3>
      <p className=" text-secondary text-[17px] max-w-3xl ml-10">
        {designation}
      </p>
      <div className=" flex gap-4 ml-10">
        <a
          href={instaurl}
          className="text-[#00c9c8] hover:text-[#00c9c8] text-2xl "
        >
          {insta}
        </a>
        <a
          href={fburl}
          className="text-[#00c9c8] hover:text-[#00c9c8] text-2xl"
        >
          {fb}
        </a>
        <a
          href={linkedinurl}
          className="text-[#00c9c8] hover:text-[#00c9c8] text-2xl "
        >
          {linkedin}
        </a>
      </div>
    </motion.div>
  );
};

const Teams = () => {
  // const classes = useStyles();

  return (
    <>
      <div className="mt-40">
        <Partition />
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} flex justify-center`}>
            Awesome Team
          </h2>
          <p
            className={`${styles.sectionSubText} flex items-center px-5 py-4 text-center `}
          >
            Our talented team of experts combines their passion for finance and
            technology to drive innovation and deliver exceptional solutions
          </p>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-around ">
        {teams.map((team, index) => (
          <Card key={team.name} index={index} {...team} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Teams, "team");
