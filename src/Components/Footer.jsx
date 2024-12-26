import React, { useState, useEffect } from "react";
import Logo from "../Assest/Web_Images/Logo.png";
import Img1 from "../Assest/Web_Images/1.jpg";
import { IoArrowForward } from "react-icons/io5";
import {
  SubmitButton,
  SecondaryButton,
  PrimaryButton,
} from "./Elements/Buttons";
import bgimg from "../Assest/Web_Images/Bg Plexus.png";
import content from "../content/footerContent";
import { motion } from "framer-motion";

const Footer = ({ homeRef, locationsRef, galleryRef, contactRef }) => {
  const [language, setLanguage] = useState("en");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleNewsletterSubmit = async () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    const scrollToSection = (sectionRef) => {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    };

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail("");
      } else {
        alert("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const currentContent = content[language];
  const sectionRefs = [homeRef, galleryRef, locationsRef, contactRef];
  const socialLinks = {
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
  };

  return (
    <div className="relative flex flex-col w-full items-center justify-center overflow-hidden">
      <img
        src={bgimg}
        alt="bgimage"
        className="absolute bottom-0 lg:translate-y-2/3 -translate-y-1/6 left-10 lg:left-40 -rotate-[15deg] transform scale-y-[-1] h-[60%] -z-10 animate-orbit3"
      />

      <div className="flex items-center justify-center -mb-5 lg:mb-0">
        <motion.div
          className="flex flex-col items-center justify-between px-6 py-12 lg:px-60 md:flex-row md:py-4 ease-linear"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Text Section */}
          <div className="max-w-lg mb-8 md:text-left md:mb-0 md:w-3/6 mr-5">
            <h2 className="mb-4 text-3xl font-medium lg:font-semibold text-gray-[#606060] px-1 md:text-left sm:text-left md:font-semibold md:text-[30px] lg:text-3xl">
              {currentContent.readyToElevate}
            </h2>
            <p className="mb-6  text-primarytext3 text-[14px] lg:text-l px-1 md:text-left">
              {currentContent.startJourney}
            </p>
            {/* Buttons */}
            <div className="flex flex-col w-full lg:flex-row gap-2 lg:gap-5">
              <div className="flex items-center justify-center">
                <button
                  className="flex flex-row items-center justify-center text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2  hover:scale-[1.02] rounded-[8px] lg:h-[48px] lg:w-[228px] h-[42px] w-[92vw] hover:text-white transition-all duration-200"
                  onClick={() =>
                    window.open(
                      "https://charithamunasinghe.com/login",
                      "_blank"
                    )
                  }
                >
                  {currentContent.onlineStudentPortal}
                  <IoArrowForward className="ml-2 w-6 h-6 mb-[0.5]" />
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button className="text-primary1 border-2 bg-white border-primary1  hover:scale-[1.02] rounded-[8px] lg:h-[48px] lg:w-[156px] h-[42px] w-[92vw] hover:text-primaryHover2 transition-all duration-200">
                  {currentContent.viewTimetables}
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center w-full md:w-1/2">
            <img src={Img1} alt="CTA Image" className="rounded-lg shadow-lg" />
          </div>
        </motion.div>
      </div>

      <div className="flex w-full  items-center justify-between border-t-[1px] mt-5">
        <footer className="pt-16 pb-6  sm:px-6 md:px-12 lg:px-60 font-poppins w-screen">
          {/* Grid Layout */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-20 md:gap-12 w-full lg:w-auto mt-5 md:mt-0 lg:mt-0 md:justify-items-center">
              {/* Navigation Section */}
              <div className="text-center lg:-mt-5 lg:text-left md:text-center">
                <h3 className="mb-2 font-[00] text-primary3">
                  {currentContent.navigation}
                </h3>
                <ul className="space-y-2 pt-1 lg:pt-3 text-primarytext3 text-[13px] lg:text-[14px] font-thin">
                  {currentContent.navLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        onClick={() => scrollToSection(sectionRefs[index])}
                        className="relative hover:text-primary3 group cursor-pointer"
                      >
                        {link}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials Section */}
              <div className="text-center lg:-mt-5 lg:text-left md:text-center">
                <h3 className="mb-2 font-[400] text-primary3">
                  {currentContent.socials}
                </h3>
                <ul className="space-y-2 pt-1 lg:pt-3 text-primarytext3 text-[13px] lg:text-[14px] font-thin">
                  {currentContent.socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={socialLinks[link.toLowerCase()]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative hover:text-primary3 group"
                      >
                        {link}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features Section */}
              <div className="text-center col-span-2 md:col-span-1 lg:col-span-1 lg:-mt-5 mb-2 lg:text-left md:text-center mt-6 md:mt-0">
                <h3 className="mb-2 font-[400] text-primary3">
                  {currentContent.features}
                </h3>
                <ul className="space-y-2 pt-1 lg:pt-3 text-primarytext3 text-[13px] lg:text-[14px] font-thin">
                  {currentContent.featureLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="relative hover:text-primary3 group"
                      >
                        {link}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="order-first md:w-full md:mt-10 lg:mt-0 text-center md:text-left md:order-none lg:w-2/6 mb-5 z-40">
              <div className="w-full px-4 sm:px-0 text-primarytext3 mb-4 font-thin">
                {currentContent.newsletter}
              </div>
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 px-10 lg:px-0 lg:pr-5">
                <input
                  type="email"
                  placeholder={currentContent.enterEmail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 w-[92vw] lg:w-full px-4 lg:px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryHover1"
                />
                <div className="flex items-center justify-center ">
                  <button
                    className="text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2  hover:scale-[1.02] rounded-[6px] h-[40px] w-[92vw] md:w-[170px] lg:w-auto lg:px-2 hover:text-white font-normal transition-all duration-200"
                    onClick={handleNewsletterSubmit}
                  >
                    {currentContent.submit}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-between space-y-4 text-primarytext3 md:space-y-0 md:flex-row">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="Logo" className="w-48 h-auto" />
              {/* <span className="text-3xl font-medium text-primary3">
                BIOZONE
              </span> */}
            </div>
            {/* Copyright */}
            <p className=" text-[13px] lg:text-sm text-center md:text-left text-[#008661] sm:text-base">
              © 2024 BioZone by Webminds. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
