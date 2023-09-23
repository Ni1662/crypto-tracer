import React from 'react'
// import Hero from '../Components/mainComponents/Hero'
import CarouselBack from '../Components/mainComponents/CarouselBack'
import FollowUs from '../Components/mainComponents/FollowUs'
import Footer from '../Components/mainComponents/Footer'
import Teams from '../Components/mainComponents/Teams'

const Mainpage = () => {
    return (
        <>
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div> */}
            <CarouselBack></CarouselBack>
            <Teams></Teams>
            <FollowUs></FollowUs>
            <Footer></Footer>
        </>
    )
}

export default Mainpage
