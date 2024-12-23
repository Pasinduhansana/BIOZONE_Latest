import React, { useRef } from "react";
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
  // Define refs for each section
  const homeRef = useRef(null);
  const locationsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="flex flex-col">
      {/* Pass the refs to the corresponding sections */}
      <Navigation
        homeRef={homeRef}
        locationsRef={locationsRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}>
        <Landing />
      </div>
      <div ref={locationsRef}>
        <Map />
      </div>
      <div ref={galleryRef}>
        <Gallery />
      </div>
      <FAQ />
      <Advertisement />
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <Footer className="absolute bottom-0 left-0 w-screen" />
    </div>
  );
};

export default Home;
