import {
  AppBar,
  Button,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModel from "./Authentication/AuthModel";
import UserSidebar from "./Authentication/UserSidebar";
import DrawerComponent from "./Drawer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../Utils/motion";
import { useLocation } from "react-router-dom";

// import Brightness7Icon from "@material-ui/icons/Brightness7";
// import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#00C9C8",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.6s ease-in-out",
    color: "white",
    marginLeft: 25,
    "&:hover": {
      backgroundColor: "#00C9C8",
      color: "black",
      transform: "scale(0.95)",
    },
  },
  activeButton: {
    backgroundColor: "#00C9C8",
    color: "black",
    transform: "scale(0.95)",
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { currency, setCurrency, user } = CryptoState();

  const location = useLocation();

  // const [darkMode, setDarkMode] = useState(true);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  // console.log(currency);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      // type: darkMode ? "dark" : "light",
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div variants={fadeIn("down", "tween", 0.5, 1)}>
          <AppBar
            color="transparent"
            position="static"
            style={{ background: "transparent", boxShadow: "none" }}
          >
            <Container>
              <Toolbar>
                <Typography
                  onClick={() => history.push("/")}
                  className={`${classes.title} flex gap-2 `}
                  variant="h6"
                >
                  <img
                    src="/assets/icons/logo.svg"
                    alt="logo"
                    width={28}
                    height={28}
                  />
                  Capitalize
                </Typography>

                {/* resp */}
                {isMobile ? (
                  <DrawerComponent />
                ) : (
                  <>
                    <div className={classes.nav}>
                      <Button
                        onClick={() => history.push("/")}
                        className={`${classes.button} ${
                          location.pathname === "/" ? classes.activeButton : ""
                        }`}
                      >
                        Home
                      </Button>
                      <a href="#about">
                        <Button
                          // onClick={() => history.push("about")}
                          // href="#about"
                          className={`${classes.button} ${
                            location.pathname === "/#about"
                              ? classes.activeButton
                              : ""
                          }`}
                        >
                          About Us
                        </Button>
                      </a>

                      <Button
                        onClick={() => history.push("/crypto")}
                        className={`${classes.button} ${
                          location.pathname === "/crypto"
                            ? classes.activeButton
                            : ""
                        }`}
                      >
                        Crypto
                      </Button>
                      <Button
                        onClick={() => history.push("/forex")}
                        className={`${classes.button} ${
                          location.pathname === "/forex"
                            ? classes.activeButton
                            : ""
                        }`}
                      >
                        Forex
                      </Button>
                      <Button
                        onClick={() => history.push("/contact")}
                        className={`${classes.button} ${
                          location.pathname === "/contact"
                            ? classes.activeButton
                            : ""
                        }`}
                      >
                        Contact Us
                      </Button>
                      {user && (
                        <>
                          <Button
                            onClick={() => history.push("/news")}
                            className={`${classes.button} ${
                              location.pathname === "/news"
                                ? classes.activeButton
                                : ""
                            }`}
                          >
                            News
                          </Button>
                          <Button
                            onClick={() => history.push("/profile")}
                            className={`${classes.button} ${
                              location.pathname === "/profile"
                                ? classes.activeButton
                                : ""
                            }`}
                          >
                            Profile
                          </Button>
                        </>
                      )}
                    </div>
                  </>
                )}

                <Select
                  variant="outlined"
                  style={{
                    width: 100,
                    height: 40,
                    marginRight: 15,
                    color: "white",
                    // {isMobile?marginLeft: 150: marginLeft: 0}
                    marginLeft: isMobile ? 0 : 150,
                  }}
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  // inputLabelProps={{
                  //   style: { color: "white" },
                  // }}
                >
                  <MenuItem value={"INR"}>INR</MenuItem>
                  <MenuItem value={"USD"}>USD</MenuItem>
                </Select>
                {user ? <UserSidebar /> : <AuthModel />}

                {/* <IconButton onClick={toggleDarkMode} color="inherit">
              {theme.palette.type === "dark" ? (
                <Brightness7Icon style={{ color: "#fff" }} />
              ) : (
                <Brightness4Icon style={{ color: "#000" }} />
              )}
            </IconButton> */}
              </Toolbar>
            </Container>
          </AppBar>
        </motion.div>
      </motion.div>
    </ThemeProvider>
  );
};

export default Header;
