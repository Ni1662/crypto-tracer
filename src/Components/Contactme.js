import { makeStyles } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionWrapper from "../hoc/SectionWrapper";
// import Partition from "../Partition";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utils/motion";

const useStyles = makeStyles(() => ({
  contact: {
    display: "flex",
    flexDirection: "column",
  },
  inputBox: {
    position: "relative",
    width: 550,
    padding: 2,
  },
  input: {
    fontFamily: "Montserrat",
    width: "100%",
    background: "transparent",
    color: "#fff",
    borderColor: "#00C9C8",
    letterSpacing: "0.1rem",
    padding: "10px 0 5px",
    borderRadius: 20,
    borderWidth: 2,
    outline: "none",
    // "&:valid ~ sp, focus ~ sp": {
    //     color: "#2196f3",
    //     transform: "translateY(-16px)",
    // },
  },
  sp: {
    // position: "absolute",
    fontFamily: "Montserrat",
    left: 0,
    padding: "10px 0 5px",
    color: "rgba(255, 255, 255, 0.5)",
    textTransform: "uppercase",
    pointerEvents: "none",
    letterSpacing: "0.1rem",
    transition: "0.5s",
  },
  "@media (max-width: 670px)": {
    inputBox: {
      flexDirection: "column",
      width: "auto",
    },
  },
}));

const Contactme = () => {
  const classes = useStyles();

  return (
    <Container style={{ fontFamily: "Montserrat" }}>
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <motion.h1 variants={textVariant()} className="display-4 mb-4">
            Contact With Us
          </motion.h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <motion.div variants={fadeIn("right", "tween", 0.5, 0.75)}>
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email: </strong>niteshkumar.nk649@gmail
              {/* <a href={`mailto:${"niteshkumar.nk649@gmail.com"}`}>
                            {"niteshkumar.nk649@gmail.com"}
                        </a> */}
              <br />
              <br />
              <p>
                <strong>Phone: </strong>+91 932XXXXX51
              </p>
              {/* {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                            <p>
                                <strong>Phone:</strong> "9326588651"
                            </p>
                        ) : (
                            ""
                        )} */}
            </address>
            <p>
              Feel free to reach out to us with any questions, feedback, or
              inquiries. Our team is here to assist you and provide the
              information you need. We value your input and look forward to
              hearing from you. Contact us today and let's connect!
            </p>
          </motion.div>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <motion.div variants={fadeIn("left", "tween", 0.5, 0.75)}>
          <form
            action="https://formspree.io/f/xjvdgrkq"
            method="POST"
            className={classes.contact}
          >
            <div
              className={classes.inputBox}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span className={classes.sp}>Name</span>
                <input
                  type="text"
                  // placeholder="username"
                  name="username"
                  required
                  autoComplete="off"
                  className={classes.input}
                ></input>
              </div>
              <div>
                <span className={classes.sp}>Email</span>
                <input
                  type="email"
                  // placeholder="Email"
                  name="Email"
                  required
                  autoComplete="off"
                  className={classes.input}
                ></input>
              </div>
            </div>
            <div className={classes.inputBox}>
              <span className={classes.sp}>Enter your message</span>
              <textarea
                name="Message"
                cols="10"
                rows="10"
                required
                autoComplete="off"
                className={classes.input}
                // placeholder='Enter your message'
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.6s ease-in-out",
                borderRadius: 20,
                backgroundColor: "#00C9C8",
                padding: 3,
              }}
            />
          </form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionWrapper(Contactme, "contact");
