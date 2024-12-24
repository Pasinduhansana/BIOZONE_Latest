import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgimage from "../Assest/Web_Images/Bg Plexus.png";
import Logo from "../Assest/Web_Images/BioZoneLogo.png";
import { LanguageToggleButton } from "./Elements/Buttons";
import content from "../content/splashScreenContent";
import { useNavigate } from "react-router-dom";

const SplashScreen = ({ handleLanguageChange }) => {
  const [language, setLanguage] = useState("en");
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (isLanguageSelected) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        handleLanguageChange(language);
        navigate("/home"); // Redirect to home screen
      }, 3000); // Adjust the duration as needed

      return () => clearTimeout(timer);
    }
  }, [isLanguageSelected, language, handleLanguageChange, navigate]);

  const currentContent = content[language];

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      {/* Background Image */}
      <img
        src={bgimage}
        alt="Background DNA sample"
        className="absolute left-0 bottom-0 -z-10 animate-orbit"
      />
      <div className="text-center relative z-10">
        {/* Logo with Animation */}
        <motion.img
          alt="Biozone logo"
          className="mx-auto mb-4"
          height="100"
          src={Logo}
          width="100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: isAnimating ? 1.5 : 1 }}
          transition={{ duration: 1.5 }}
        />
        {!isAnimating && (
          <>
            <h1 className="text-2xl font-bold text-green-600 mb-2">BIOZONE</h1>
            <p className="text-gray-600 mb-6">
              {currentContent.selectLanguage}
            </p>
            <LanguageToggleButton
              onLanguageChange={(lang) => {
                setLanguage(lang);
                localStorage.setItem("language", lang);
                setIsLanguageSelected(true);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
