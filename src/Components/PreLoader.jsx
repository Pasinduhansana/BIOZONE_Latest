import React, { useEffect } from "react";
import { motion } from "framer-motion";
import bgimage from "../Assest/Web_Images/Bg Plexus.png";
import Logo from "../Assest/Web_Images/BioZoneLogo.png";

const PreLoader = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [onLoaded]);

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
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <h1 className="text-2xl font-bold text-green-600 mb-2">BIOZONE</h1>
        <p className="text-gray-600 mb-6">Loading...</p>
      </div>
    </div>
  );
};

export default PreLoader;
