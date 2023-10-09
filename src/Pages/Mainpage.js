import React from "react";
import Hero from "../Components/mainComponents/Hero";
// import CarouselBack from "../Components/mainComponents/CarouselBack";
import FollowUs from "../Components/mainComponents/FollowUs";
import Footer from "../Components/mainComponents/Footer";
import Teams from "../Components/mainComponents/Teams";
import Services from "../Components/mainComponents/Services";
import AboutUs from "../Components/mainComponents/AboutUs";
import ContactUs from "../Components/mainComponents/ContactUs";

const Mainpage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen">
        <Hero />
      </div>
      {/* <CarouselBack></CarouselBack> */}
      <Services></Services>
      <AboutUs></AboutUs>
      <div className="bg-wave-shap bg-contain bg-no-repeat">
        <Teams></Teams>
      </div>
      <div className="bg-pattern bg-cover bg-no-repeat bg-center">
        <ContactUs />
      </div>
      <FollowUs></FollowUs>
      <Footer></Footer>
      
    </>
  );
};

export default Mainpage;
