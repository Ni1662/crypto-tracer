import React from "react";
import SectionWrapper from "../../hoc/SectionWrapper";
import Partition from "../Partition";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../Utils/motion";
import { styles } from "../../styles";
import { Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    fontFamily: "Montserrat",
    width: "75%",
    letterSpacing: "0.1rem",
    padding: "10px 0 5px",
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#00C9C8",
    },
    "& MuiInputLabel": {
      color: "white",
    },
    "&:hover label": {
      color: "#00C9C8",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00C9C8",
    },
    "&:hover .MuiInput-underline:before": {
      borderBottomColor: "#00C9C8",
    },
  },
});

const ContactUs = () => {
  const classes = useStyles();

  return (
    <>
      <Partition />
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} flex justify-center`}>
          Contact With Us
        </h2>
        <p
          className={`${styles.sectionSubText} flex items-center text-center sm:px-60 py-2 `}
        >
          Feel free to reach out to us with any questions, feedback, or
          inquiries. Our team is here to assist you and provide the information
          you need. We value your input and look forward to hearing from you.
          Contact us today and let's connect!
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 0.75)}
        className="flex flex-wrap items-center justify-center"
      >
        <div className="flex w-[75%] gap-10">
          <TextField
            label="Name"
            className={`${classes.input} `}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            label="Email"
            className={`${classes.input}`}
            InputProps={{
              style: { color: "white" },
            }}
          />
        </div>
        <TextField
          label="Subject"
          className={`${classes.input}`}
          InputProps={{
            style: { color: "white" },
          }}
        />
        <TextField
          label="Message"
          multiline
          minRows={4}
          className={`${classes.input}`}
          InputProps={{
            style: { color: "white" },
          }}
        />
      </motion.div>
      <motion.div
        className="sm:mx-40 mx-20 mt-10 "
        variants={fadeIn("up", "tween", 0.9, 0.75)}
      >
        <Button
          className={`text-white font-semibold p-2 px-4`}
          style={{ backgroundColor: "#00C9C8" }}
        >
          Send Message
        </Button>
      </motion.div>
    </>
  );
};

export default SectionWrapper(ContactUs, "contact");
