import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Landing from "../Components/Landing";
import Gallery from "../Components/Gallery";
import FAQ from "../Components/FAQ";
import AboutUs from "../Components/AboutUs";
import Advertisement from "../Components/Advertisement";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import Map from "../Components/Map";
import VortextComponent from "../Components/VortextComponent";
import Text from "../Components/Elements/Text";
import { SecondaryButton } from "../Components/Elements/Buttons"; // Import SecondaryButton

const Home = () => {
  // Define refs for each section
  const homeRef = useRef(null);
  const locationsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get("lang");
    if (lang) {
      localStorage.setItem("language", lang);
    }
  }, [location]);

  const scrollToMap = () => {
    locationsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col max-w-[100vw] overflow-hidden">
      <Navigation
        homeRef={homeRef}
        locationsRef={locationsRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
      <SecondaryButton TextContent="Go to Map" onclickevent={scrollToMap} />{" "}
      <div ref={homeRef}>
        <Landing mapref={locationsRef} />
      </div>
      <div ref={locationsRef}>
        <Map />
      </div>
      <div ref={galleryRef}>
        <Gallery />
      </div>
      <FAQ />
      <Text />
      <Advertisement />
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <VortextComponent
        homeRef={homeRef}
        locationsRef={locationsRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
    </div>
  );
};

export default Home;
