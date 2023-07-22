import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ContactsIcon from "@material-ui/icons/Contacts";

const useStyles = makeStyles(() => ({
  title: {
    // flex: 1,
    fontSize: 30,
    color: "#00C9C8",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  container: {
    width: 350,
    padding: 25,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
  },
  link: {
    display: "flex",
    alignItems: "center",

    textDecoration: "none",
    fontSize: 20,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.6s ease-in-out",
    color: "white",
    "&:hover": {
      color: "#00C9C8",
      transform: "scale(0.95)",
    },
  },
  icon: {
    color: "#00C9C8",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className={classes.container}>
          <Typography className={classes.title} variant="h6">
            Capitalize
          </Typography>
          <List>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/" className={classes.link}>
                  <HomeIcon style={{ marginRight: 10 }} />
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/about" className={classes.link}>
                  <AccountCircleIcon style={{ marginRight: 10 }} />
                  About Us
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/crypto" className={classes.link}>
                  <MonetizationOnIcon style={{ marginRight: 10 }} />
                  Crypto
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/forex" className={classes.link}>
                  <MonetizationOnIcon style={{ marginRight: 10 }} />
                  Forex
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/contact" className={classes.link}>
                  <ContactsIcon style={{ marginRight: 10 }} />
                  Contact Us
                </Link>
              </ListItemText>
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
