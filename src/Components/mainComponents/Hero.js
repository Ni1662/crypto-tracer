import React from "react";
import { styles } from "../../styles";
import { motion } from "framer-motion";

import { textVariant, staggerContainer, fadeIn } from "../../Utils/motion";
import { Star } from "../Partition";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <Star top="25%" left="10%" />
      <Star top="20%" left="40%" />
      <Star top="70%" left="30%" />
      <Star top="60%" left="5%" />
      <motion.div
        className={`${styles.paddingX} absolute  inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div
          className={`${styles.paddingX} top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-5`}
        >
          <div className="bg-[#0099b0] py-2 px-3 rounded-full text-base text-gray-200 hover:text-white flex items-center ">
            <img src="/assets/icons/dollar.svg" alt="dollar" className="pr-1" />
            Discover a new ways to enjoy your World!
          </div>
          <div className="mx-auto flex flex-row items-start gap-5">
            <div className="flex flex-col justify-center items-center mt-1">
              <div className="w-5 h-5 rounded-full bg-[#00c9c8] " />
              <div className="w-1 sm:h-50 h-80 blue-gradient " />
            </div>
            <div>
              <motion.h1
                className={`${styles.heroHeadText} text-white  `}
                variants={textVariant(0.2)}
              >
                Powerful investment &<br /> Trading{" "}
                {/* <img
                  src="./money.png"
                  alt="money"
                  className="object-contain "
                /> */}
                Solutions.
              </motion.h1>
              <motion.p
                className={`${styles.heroSubText} mt-2 text-blue-200`}
                variants={textVariant(0.6)}
              >
                Welcome to Capitalize, your one-stop destination for all things
                finance. Join us to access real-time crypto and forex data, stay
                informed about the stock market, read up on the latest financial
                news, and make smart investment predictions. Track your finances
                effortlessly and personalize your crypto portfolio. Start your
                journey to financial success today.
              </motion.p>
            </div>
          </div>
        </div>
        <motion.img
          src="/assets/hero/bank.png"
          alt="bank"
          className="hidden md:block h-[400px] object-cover z-10 relative"
          variants={fadeIn("up", "tween", 0.3, 1)}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
