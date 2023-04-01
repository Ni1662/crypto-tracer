import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({

    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    mainContain: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    image: {
        borderRadius: "50%",
    }

}));

const Teams = () => {

    const classes = useStyles();

    return (
        
        <div>
            <div>
                <Typography
                    variant="h2"
                    style={{
                        fontWeight: "bold",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                        textAlign: "center",
                        padding: "20px"
                    }}
                >
                    Meet Our Team
                </Typography>
            </div>
            <div className={classes.mainContain}>
                <div className={classes.container}>
                    <img src='./amu.jfif' height="300" width="300" alt='' className={classes.image} />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span
                            style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                                fontWeight: "bold",
                            }}
                        >
                            Amruta
                        </span>
                        <span style={{ color: "darkgrey" }}>1234567</span>
                    </div>
                </div>
                <div className={classes.container}>
                    <img src='./amu.jfif' height="300" width="300" alt='' className={classes.image} />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span
                            style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                                fontWeight: "bold",
                            }}
                        >
                            Amruta
                        </span>
                        <span style={{ color: "darkgrey" }}>1234567</span>
                    </div>
                </div>
                <div className={classes.container}>
                    <img src='./amu.jfif' height="300" width="300" alt='' className={classes.image} />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <span
                            style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                                fontWeight: "bold",
                            }}
                        >
                            Amruta
                        </span>
                        <span style={{ color: "darkgrey" }}>1234567</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Teams
