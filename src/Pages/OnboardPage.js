import { Avatar, Box, Button, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import { useHistory } from "react-router-dom";

const USER_URL = "https://mirror-humble-chameleon.glitch.me/api/users/";

const useStyles = makeStyles({
  container: {
    padding: 25,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
    alignItems: "center",
    gap: 10,
  },
  profile: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    height: "92%",
  },
  submit: {
    height: "8%",
    width: "100%",
    marginTop: 20,
    fontWeight: "bold",
    lineHeight: "42px",
    padding: 0,
    border: "none",
    background: "#00C9C8",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      color: "#00C9C8",
      background: "transparent",
      boxShadow: "none",
    },
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      height: "2px",
      width: 0,
      background: "#00C9C8",
      boxShadow:
        "-1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003, 4px 4px 5px 0px #0002",
      transition: "700ms ease all",
    },
    "&:after": {
      right: "inherit",
      top: "inherit",
      left: 0,
      bottom: 0,
    },
    "&:hover:before, &:hover:after": {
      width: "100%",
      transition: "800ms ease all",
    },
  },
  picture: {
    width: 200,
    height: 200,
    cursor: "pointer",
    backgroundColor: "#00C9C8",
    objectFit: "contain",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    border: "3px solid #00c9c8",
    padding: "1rem 2.5rem",
    width: "574px",
    borderRadius: "32px",
  },
  input: {
    fontFamily: "Montserrat",
    width: "100%",
    background: "transparent",
    color: "red",
    borderColor: "#00C9C8",
    letterSpacing: "0.1rem",
    padding: "10px 0 5px",
    borderRadius: 20,
    borderWidth: 2,
    outline: "none",
    "& label": {
      color: "#00C9C8",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& MuiInputLabel": {
      color: "#00C9C8",
    },
    "&:hover label": {
      color: "#FCFCD4",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#00C9C8",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "&:hover .MuiInput-underline:before": {
      borderBottomColor: "#FCFCD4", 
    },
  },
});

const OnboardPage = () => {
  const history = useHistory();
  const classes = useStyles();

  const { user, setAlert, setOnboard, onboard, setUserinfo } = CryptoState();
  const [updatedUsername, setUpdatedUsername] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [updatedBio, setUpdatedBio] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${USER_URL}/getuser/${user.uid}`);
        const onboardedValue = response.data.onboarded;
        setOnboard(onboardedValue);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
    onboard ? history.push("/") : history.push("/onboard");
  }, [user?.uid, onboard, history, setOnboard]);

  const handleUpdate = async () => {
    // Make an API request to update user details
    try {
      const response = await axios.post(`${USER_URL}/updateuser`, {
        uid: user.uid, // Assuming you have user data available
        username: updatedUsername,
        name: updatedName,
        bio: updatedBio,
        onboarded: true, // Set 'onboarded' to true
        // Add other fields you want to update here
      });

      if (response.data.user) {
        // Update the user data in your state/context
        setUserinfo(response.data.user);

        // Display a success message to the user
        setAlert({
          open: true,
          message: "User details updated successfully",
          type: "success",
        });
        history.push("/");
      }
    } catch (error) {
      // Handle errors and display an error message to the user
      console.error("Error updating user details:", error);
      setAlert({
        open: true,
        message: "Error updating user details",
        type: "error",
      });
    }
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.form}>
        <Avatar
          className={classes.picture}
          src={user?.photoURL}
          alt={user?.displayName || user?.email}
        />
        <TextField
          label="Username"
          value={updatedUsername || user?.displayName}
          onChange={(e) => setUpdatedUsername(e.target.value)}
          className={classes.input}
        />
        <TextField
          label="Name"
          value={updatedName || user?.displayName}
          onChange={(e) => setUpdatedName(e.target.value)}
          className={classes.input}
        />
        <TextField
          label="Bio"
          multiline
          rows={4}
          value={updatedBio}
          onChange={(e) => setUpdatedBio(e.target.value)}
          className={classes.input}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          className={classes.submit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default OnboardPage;
