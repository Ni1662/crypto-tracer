import { AppBar, Button, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "#00C9C8",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
    button: {
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.6s ease-in-out",
        marginLeft: 25,
        "&:hover": {
            backgroundColor: "#00C9C8",
            color: "black",
            transform: "scale(0.95)",

        },
    },


}));

const Header = () => {

    const classes = useStyles();
    const history = useHistory();

    const { currency, setCurrency } = CryptoState();

    // console.log(currency);
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => history.push("/")} className={classes.title} variant="h6">
                            Capitalize
                        </Typography>

                        <div className={classes.nav}>
                            <Button onClick={() => history.push("/")} className={classes.button}>Home</Button>
                            <Button onClick={() => history.push("/crypto")} className={classes.button}>About Us</Button>
                            <Button onClick={() => history.push("/crypto")} className={classes.button}>Crypto</Button>
                            <Button onClick={() => history.push("/crypto")} className={classes.button}>Crypto</Button>
                            <Button onClick={() => history.push("/contact")} className={classes.button}>Contact Us</Button>
                        </div>

                        <Select
                            variant='outlined'
                            style={{
                                width: 100,
                                height: 40,
                                marginRight: 15,
                                marginLeft: 150,
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"INR"}>INR</MenuItem>
                            <MenuItem value={"USD"}>USD</MenuItem>
                        </Select>

                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header
