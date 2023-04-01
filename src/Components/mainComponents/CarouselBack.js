import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const useStyles = makeStyles(() => ({
    image: {
        width: "100%",
        height: "80vh",
    }


}));

const CarouselBack = () => {

    const [index, setIndex] = useState(0);
    const classes = useStyles();
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className={classes.image}
                        src="./img.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.image}
                        src="./img2.webp"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.image}
                        src="./img3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div
                style={{
                    // margin: 40,
                    color: "darkgrey",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                    textAlign: "center",
                    borderStyle: "solid",
                    // borderColor: "#0f1a2c",
                    // borderColor: "#215e77",
                    borderColor: "#163a52",
                    borderWidth: 20,
                }}
            >
                <p
                    style={{
                        margin: 40,
                    }}
                >
                    The world of One Piece is populated by humans and many other races, such as dwarves, fish-men, and giants. It is covered by two vast oceans, which are divided by a massive mountain range called the Red Line; The Grand Line, a sea that runs perpendicular to the Red Line, further divides them into four seas: North Blue, East Blue, West Blue, and South Blue.
                </p>
            </div>
        </>
    )
}

export default CarouselBack
