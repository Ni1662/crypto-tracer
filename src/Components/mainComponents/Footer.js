import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../Utils/motion";

const useStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    padding: 20,
    margin: 20,
    fontFamily: "Montserrat",
  },
  info: {
    display: "flex",
    // flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    margin: 8,
    fontFamily: "Montserrat",
  },
  copyright: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    padding: 4,
    fontFamily: "Montserrat",
  },
  "@media (max-width: 930px)": {
    footer: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      fontFamily: "Montserrat",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={classes.footer}>
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 0.75)}
          className={classes.container}
        >
          <Typography
            variant="h5"
            style={{
              padding: 10,
              textTransform: "uppercase",
              fontSize: 25,
              fontWeight: "bold",
              letterSpacing: 3,
            }}
          >
            Connect with Us:
          </Typography>
          <div className={classes.info}>
            <div>niteshkumar.nk649@gmail.com </div>
            &nbsp;&nbsp;
            <div>Nitesh Agrawal </div>
          </div>
          <div className={classes.info}>
            <div>bodhankaramruta@gmail.com@gmail.com</div>
            &nbsp;&nbsp;
            <div>Amruta Bodhankar</div>
          </div>
          <div className={classes.info}>
            <div>banmol241@gmail.com </div>
            &nbsp;&nbsp;
            <div>Anmol Bajaj</div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.5, 0.75)}
          className={classes.container}
        >
          <Typography
            variant="h5"
            style={{
              padding: 10,
              textTransform: "uppercase",
              fontSize: 25,
              fontWeight: "bold",
              letterSpacing: 3,
            }}
          >
            Address:
          </Typography>
          <div>
            TCET, A-Block, Gate No 5, Thakur Educational Campus, Shyamnarayan
            Thakur Rd, Thakur Village, Kandivali East, Mumbai, Maharashtra
            400101
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 0.75)}
        className={classes.copyright}
      >
        Copyright © Capitalize 2023
      </motion.div>
    </motion.div>
  );
};

export default Footer;
