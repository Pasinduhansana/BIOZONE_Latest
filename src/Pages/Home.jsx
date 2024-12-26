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

	return (
		<div className="flex flex-col w-screen overflow-hidden">
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
			{/* <AboutUs /> */}
			<Text />
			{/* <Advertisement /> */}
			<div ref={contactRef}>
				<ContactUs />
			</div>
			{/* <Footer
        className="absolute bottom-0 left-0 w-screen"
        homeRef={homeRef}
        locationsRef={locationsRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      /> */}
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
