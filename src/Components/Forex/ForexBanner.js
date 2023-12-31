import { Container, Typography } from "@material-ui/core";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../Utils/motion";
import ForexCard from "./ForexCard";
// import ConvertTable from "./ConvertTable";

const ForexBanner = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="banner3"
      >
        <Container className="h-[500px] flex flex-col pt-25 justify-between">
          <motion.div
            variants={textVariant()}
            className="flex h-3/5 flex-col justify-center items-center"
          >
            <Typography
              variant="h3"
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
              }}
              className="blue_gradient2"
            >
              Capitalize Currency Converter
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                color: "darkgrey",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
              }}
            >
              Check live foreign currency exchange rates
            </Typography>
          </motion.div>
          {/* Convert */}
          <ForexCard></ForexCard>
        </Container>
      </motion.div>
      <div className="h-[2500px]"></div> 
    </>
  );
};

export default ForexBanner;
