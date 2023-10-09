import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core";
import SectionWrapper from "../../hoc/SectionWrapper";
import Partition from "../Partition";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../Utils/motion";

const useStyles = makeStyles(() => ({
  head: {
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontSize: 55,
    letterSpacing: 4,
    padding: 20,
    margin: 20,
    color: "#00C9C8",
    textAlign: "center",
  },

  social: {
    display: "flex",
    justifyContent: "center",
  },

  fac: {
    display: "flex",
    // background: "#252729",
    height: 75,
    width: 75,
    margin: 0,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow:
      "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.1)",
    border: "1px solid rgba(0,0,0,0.0)",
    transition: "transform 0.9s",

    fontSize: 35,
    color: "#777",

    "&:hover": {
      boxShadow:
        "inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),inset -4px -4px 6px -1px rgba(255, 255, 255, 0.3),-0.5px -0.5px 0px rgba(255, 255, 255, 0.1),0.5px 0.5px 0px rgba(0, 0, 0, 0.15),0px 12px 10px -10px rgba(0, 0, 0, 0.05);border: 1px solid rgba(0, 0, 0, 0.01)",
      transform: "translateY(2px) scale(0.90)",
      color: "#3b5998",
    },
  },

  twi: {
    display: "flex",
    // background: "#e3edf7",
    height: 75,
    width: 75,
    margin: 0,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow:
      "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.1)",
    border: "1px solid rgba(0,0,0,0.0)",
    transition: "transform 0.5s",

    fontSize: 35,
    color: "#777",

    "&:hover": {
      boxShadow:
        "inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),inset -4px -4px 6px -1px rgba(255, 255, 255, 0.3),-0.5px -0.5px 0px rgba(255, 255, 255, 0.1),0.5px 0.5px 0px rgba(0, 0, 0, 0.15),0px 12px 10px -10px rgba(0, 0, 0, 0.05);border: 1px solid rgba(0, 0, 0, 0.01)",
      transform: "translateY(2px) scale(0.90)",
      color: "#00acee",
    },
  },

  what: {
    display: "flex",
    // background: "#e3edf7",
    height: 75,
    width: 75,
    margin: 0,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow:
      "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.1)",
    border: "1px solid rgba(0,0,0,0.0)",
    transition: "transform 0.5s",

    fontSize: 35,
    color: "#777",

    "&:hover": {
      boxShadow:
        "inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),inset -4px -4px 6px -1px rgba(255, 255, 255, 0.3),-0.5px -0.5px 0px rgba(255, 255, 255, 0.1),0.5px 0.5px 0px rgba(0, 0, 0, 0.15),0px 12px 10px -10px rgba(0, 0, 0, 0.05);border: 1px solid rgba(0, 0, 0, 0.01)",
      transform: "translateY(2px) scale(0.90)",
      color: "#4fce5d",
    },
  },

  insta: {
    display: "flex",
    // background: "#e3edf7",
    height: 75,
    width: 75,
    margin: 0,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow:
      "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.1)",
    border: "1px solid rgba(0,0,0,0.0)",
    transition: "transform 0.5s",

    fontSize: 35,
    color: "#777",

    "&:hover": {
      boxShadow:
        "inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),inset -4px -4px 6px -1px rgba(255, 255, 255, 0.3),-0.5px -0.5px 0px rgba(255, 255, 255, 0.1),0.5px 0.5px 0px rgba(0, 0, 0, 0.15),0px 12px 10px -10px rgba(0, 0, 0, 0.05);border: 1px solid rgba(0, 0, 0, 0.01)",
      transform: "translateY(2px) scale(0.90)",
      color: "#f14843",
    },
  },
}));

const FollowUs = () => {
  const classes = useStyles();

  return (
    <>
    <Partition />
      <motion.h1 className={classes.head} variants={textVariant()}>Follow Us Social Media</motion.h1>
      <motion.div className={classes.social} variants={fadeIn("up", "tween", 0.5, 0.75)}>
        <FacebookIcon className={classes.fac} />
        <TwitterIcon className={classes.twi} />
        <WhatsAppIcon className={classes.what} />
        <InstagramIcon className={classes.insta} />
      </motion.div>
    </>
  );
};

export default SectionWrapper(FollowUs, "folloe");
