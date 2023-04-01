import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
    }
}));

const Contactme = () => {

    const classes = useStyles();


    return (
        <Container style={{ fontFamily: "Montserrat", }} >

            <Row className="mb-5 mt-3">
                <Col lg="8">
                    <h1 className="display-4 mb-4">Contact Me</h1>
                    <hr className="t_border my-4 ml-0 text-left" />
                </Col>
            </Row>
            <Row className="sec_sp">
                <Col lg="5" className="mb-5">
                    <h3 className="color_sec py-4">Get in touch</h3>
                    <address>
                        <strong>Email: </strong>niteshkumar.nk649@gmail
                        {/* <a href={`mailto:${"niteshkumar.nk649@gmail.com"}`}>
                            {"niteshkumar.nk649@gmail.com"}
                        </a> */}
                        <br />
                        <br />
                        <p>
                            <strong>Phone: </strong>+91 9326588651
                        </p>
                        {/* {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                            <p>
                                <strong>Phone:</strong> "9326588651"
                            </p>
                        ) : (
                            ""
                        )} */}
                    </address>
                    <p>The World Of One Piece Is Populated By Humans And Many Other Races, Such As Dwarves, Fish-Men, And Giants. It Is Covered By Two Vast Oceans, Which Are Divided By A Massive Mountain Range Called The Red Line; </p>
                </Col>
                <Col lg="7" className="d-flex align-items-center">
                    <form action="https://formspree.io/f/xjvdgrkq" method="POST" className={classes.contact} >
                        <div className={classes.inputBox} style={{
                            display: "flex",
                            justifyContent: "space-between",

                        }}>
                            <div >
                                <span className={classes.sp} >Name</span>
                                <input
                                    type="text"
                                    // placeholder="username"
                                    name="username"
                                    required
                                    autoComplete="off"
                                    className={classes.input} ></input>

                            </div>
                            <div >
                                <span className={classes.sp} >Email</span>
                                <input
                                    type="email"
                                    // placeholder="Email"
                                    name="Email"
                                    required
                                    autoComplete="off"
                                    className={classes.input} ></input>

                            </div>
                        </div>
                        <div className={classes.inputBox} >
                            <span className={classes.sp} >Enter your message</span>
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
                        <input type="submit" value="Send"
                            style={{
                                fontFamily: "Montserrat",
                                fontWeight: "bold",
                                cursor: "pointer",
                                transition: "all 0.6s ease-in-out",
                                borderRadius: 20,
                                backgroundColor: "#00C9C8",

                            }}
                        />
                    </form>
                </Col>
            </Row>
        </Container >
    )
}

export default Contactme
