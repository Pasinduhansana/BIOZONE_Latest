import React from "react";
import Landing from "../Components/Landing";
import Gallery from "../Components/Gallery";
import FAQ from "../Components/FAQ";
import AboutUs from "../Components/AboutUs";
import Advertisement from "../Components/Advertisement";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import Map from "../Components/Map";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Landing />
      <Map />
      <Gallery />
      <FAQ />
      {/* <AboutUs /> */}
      <Advertisement />
      <ContactUs />

      <Footer className="absolute bottom-0 left-0 w-screen" />
    </div>
  );
};

export default Home;
