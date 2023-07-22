import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

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
    <>
      <div className={classes.footer}>
        <div className={classes.container}>
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
            <div>Nitesh Agrawal: +91 9326588651 </div>
          </div>
          <div className={classes.info}>
            <div>niteshkumar.nk649@gmail.com</div>
            &nbsp;&nbsp;
            <div>Nitesh Agrawal: +91 9326588651 </div>
          </div>
          <div className={classes.info}>
            <div>niteshkumar.nk649@gmail.com</div>
            &nbsp;&nbsp;
            <div>Nitesh Agrawal: +91 9326588651 </div>
          </div>
        </div>
        <div className={classes.container}>
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
            The World Of One Piece Is Populated By Humans And Many Other Races,
            Such As Dwarves, Fish-Men, And Giants. It Is Covered By Two Vast
            Oceans,
          </div>
        </div>
      </div>
      <div className={classes.copyright}>Copyright © Capitalize 2023</div>
    </>
  );
};

export default Footer;
