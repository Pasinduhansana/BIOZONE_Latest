import React, { useState, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const PrimaryButton = ({ TextContent }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="flex flex-row items-center justify-center text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2  hover:scale-[1.02] rounded-[8px] h-[48px] w-[228px] hover:text-white transition-all duration-200"
        onClick={() =>
          window.open("https://charithamunasinghe.com/login", "_blank")
        }
      >
        {TextContent}
        <IoArrowForward className="ml-2 w-6 h-6 mb-[0.5]" />
      </button>
    </div>
  );
};

const SecondaryButton = ({ TextContent }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-primary1 border-2 bg-white border-primary1  hover:scale-[1.02] rounded-[8px] h-[48px] w-[156px] hover:text-primaryHover2 transition-all duration-200">
        {TextContent}
      </button>
    </div>
  );
};

const SubmitButton = ({ TextContent }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2  hover:scale-[1.02] rounded-[5px] h-[50px] w-[145px] hover:text-white transition-all duration-200">
        {TextContent}
      </button>
    </div>
  );
};

const SecondarySubmitButton = ({ TextContent }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-primary1 border-2 bg-white border-primary1  hover:scale-[1.02] rounded-[5px] h-[48px] w-[145px] hover:text-primaryHover2 transition-all duration-200">
        {TextContent}
      </button>
    </div>
  );
};

const SinhalaButton = ({ TextContent }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-primary1 text-[14px] border-2 bg-white border-primary1  hover:scale-[1.02] rounded-[5px] h-[30px] w-[30px] hover:text-primaryHover2 transition-all duration-200">
        සිං
      </button>
    </div>
  );
};

const EnglishButton = ({ TextContent }) => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-primary1 text-[12px] border-2 bg-white border-primary1  hover:scale-[1.02] rounded-[5px] h-[30px] w-[30px] hover:text-primaryHover2 transition-all duration-200">
        Eng
      </button>
    </div>
  );
};

const LanguageToggleButton = ({ onLanguageChange, language }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      document.documentElement.lang = savedLanguage; // Set the initial language
    }
  }, []);

  const handleLanguageChange = (lang) => {
    onLanguageChange(lang);
    console.log(`Language changed to: ${lang}`);
    document.documentElement.lang = lang; // Change the web language
    navigate(`?lang=${lang}`); // Update the URL language parameter
    if (window.location.pathname !== "/") {
      window.location.reload(true); // Reload the page if not on the SplashScreen
    }
  };

  const isEnglish = language === "en";

  return (
    <div className="flex items-center justify-center gap-1 ">
      <button
        className={`text-primary1 text-[14px] border-2 border-primary1 hover:scale-[1.02] rounded-[5px] h-[30px] w-[30px]  transition-all duration-200 ${
          isEnglish
            ? "bg-gradient-to-r from-primary1 to-primary2 text-white"
            : " bg-white"
        }`}
        onClick={() => handleLanguageChange("en")}
      >
        {isEnglish ? "En" : "En"}
      </button>
      <button
        className={`text-primary1 text-[14px] border-2  border-primary1 hover:scale-[1.02] rounded-[5px] h-[30px] w-[30px]  transition-all duration-200 ${
          !isEnglish
            ? "bg-gradient-to-r from-primary1 to-primary2 text-white"
            : " bg-white"
        }`}
        onClick={() => handleLanguageChange("si")}
      >
        {isEnglish ? "සිං" : "සිං"}
      </button>
    </div>
  );
};

export {
  PrimaryButton,
  SubmitButton,
  SecondaryButton,
  SecondarySubmitButton,
  SinhalaButton,
  EnglishButton,
  LanguageToggleButton,
};
