import React, { useState, useEffect } from "react";
import {
  IoMailOutline,
  IoCallOutline,
  IoMapOutline,
  IoEarth,
} from "react-icons/io5";
import contactUsContent from "../content/ContactUsContent";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import bgImage from "../Assest/Web_Images/Bg Plexus.png";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// SubmitButton Component
const SubmitButton = ({ TextContent, onClick }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2 hover:scale-[1.02] rounded-[5px] h-[50px] w-[145px] hover:text-white transition-all duration-200"
        onClick={onClick}
      >
        {TextContent}
      </button>
    </div>
  );
};

const SecondarySubmitButton = ({ TextContent, onClick }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="text-primary1 border-2 bg-white border-primary1 hover:scale-[1.02] rounded-[5px] h-[48px] w-[145px] hover:text-primaryHover2 transition-all duration-200"
        onClick={onClick}
      >
        {TextContent}
      </button>
    </div>
  );
};

const SecondarySubmitButton1 = ({ TextContent, onClick }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="text-primary1 border-2 bg-white border-primary1 hover:scale-[1.02] rounded-[5px] h-[48px] w-full sm:w-[250px] hover:text-primaryHover2 transition-all duration-200"
        onClick={onClick}
      >
        {TextContent}
      </button>
    </div>
  );
};

const ContactUs = () => {
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const content = contactUsContent[language] || contactUsContent.en;

  const handleClear = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=94777219676&text=Hello+Biozone&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/+94777219676", "_blank");
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
  
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:3080/api/send-email", {
        from: formData.email,
        to: "navodchathushka@gmail.com",  // Replace with actual email
        subject: formData.subject,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      });
  
      if (response.status === 200) {
        toast.success("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send email. Please try again later.");
        console.log(response);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error(error);
    }
  };
  

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <div className="px-4 md:px-10 lg:px-10 xl:px-52 relative h-full md:h-full flex items-center justify-center">
        {/* Container */}
        <div className="flex flex-col md:flex-col lg:flex-row lg:justify-evenly items-center gap-10 px-6 py-12  mx-auto">
          {/* Left Side: Contact Form */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-gray-500 text-[16px] sm:text-[18px] md:text-base mb-4 text-center lg:text-left">
              {content.intro}
            </p>

            <form className="space-y-6 mt-12" onSubmit={handleSubmit}>
              {/* Input Fields */}
              <div className="relative">
                <label className="absolute left-4 top-[-15px] px-2 bg-white text-black-500 text-[14px] md:text-[16px]">
                  {content.labels.name}
                </label>
                <div className="border border-primary1 rounded-[10px] p-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full focus:outline-none placeholder-transparent"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="absolute left-4 top-[-15px] px-2 bg-white text-black-500 text-[14px] md:text-[16px]">
                  {content.labels.email}
                </label>
                <div className="border border-primary1 rounded-[10px] p-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full focus:outline-none placeholder-transparent"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="absolute left-4 top-[-15px] px-2 bg-white text-black-500 text-[14px] md:text-[16px]">
                  {content.labels.subject}
                </label>
                <div className="border border-primary1 rounded-[10px]  p-2">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full focus:outline-none placeholder-transparent"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="absolute left-4 top-[-15px] px-2 bg-white text-black-500 text-[14px] md:text-[16px]">
                  {content.labels.message}
                </label>
                <div className="border border-primary1 rounded-[10px]  p-3">
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full focus:outline-none placeholder-transparent"
                  ></textarea>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex lg:justify-end gap-3 lg:gap-5 justify-center ">
                <SecondarySubmitButton
                  TextContent={content.buttons.clear}
                  onClick={handleClear}
                />
                <SubmitButton
                  TextContent={content.buttons.submit}
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </motion.div>

          <div
            className="hidden lg:block self-stretch h-screen opacity-50"
            style={{
              background:
                "linear-gradient(to bottom, transparent 10px, #008000 10px, #008000 20px, transparent 20px)", // Green color
              backgroundSize: "100% 20px", // Adjust the 20px to control the gap between dashes
              width: "1px", // Adjust the width to match your original border
            }}
          ></div>

          {/* Right Side: Contact Options */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-[#008861] text-center text-4xl lg:text-4xl md:text-[64px] font-[600px] lg:mt-0 md:mt-5 mb-4 lg:mb-10">
              {content.getInTouch}
            </h2>
            <p className="text-gray-500 text-center text-sm sm:text-base mb-6">
              {content.description}
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4 md:gap-1  sm:grid-cols-2 lg:gap-x-[70px] lg:gap-10 sm:gap-6 mb-6 lg:mt-10 justify-items-center items-centers">
              {/* Card 1 */}
              <div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4 relative h-32 w-full sm:w-64 md:w-[250px] sm:p-10">
                <span className="text-primary1 text-3xl absolute top-4 left-4 sm:top-5 sm:left-5">
                  <IoMailOutline />
                </span>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-5 text-wrap overflow-hidden">
                  <p className="text-black font-semibold text-sm sm:font-medium">
                    {content.contactMethods.email}
                  </p>
                  <p className="text-black font-light text-xs sm:text-[14px] opacity-70 text-wrap w-full">
                    info@charithamunasinghe.lk
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4 relative h-32 w-full sm:w-64 md:w-[250px] sm:p-10">
                <span className="text-primary1 text-3xl absolute top-4 left-4 sm:top-5 sm:left-5">
                  <IoCallOutline />
                </span>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-5">
                  <p className="text-black font-semibold text-sm sm:font-medium">
                    {content.contactMethods.call}
                  </p>
                  <p className="text-black font-light text-xs sm:text-sm opacity-70">
                    +94 77 721 9676
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              {/* <div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4 relative h-32 w-full sm:w-64 md:w-[200px] sm:p-10">
                <span className="text-primary1 text-3xl absolute top-4 left-4 sm:top-5 sm:left-5">
                  <IoMapOutline />
                </span>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-5">
                  <p className="text-gray-700 font-semibold text-sm sm:font-medium">
                    {content.contactMethods.visit}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Colombo 03, Kollupitiya
                  </p>
                </div>
              </div> */}

              {/* Card 4 */}
              {/* <div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4 relative h-32 w-full sm:w-64 md:w-[200px] sm:p-10">
                <span className="text-primary1 text-3xl absolute top-4 left-4 sm:top-5 sm:left-5">
                  <IoEarth />
                </span>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-5">
                  <p className="text-gray-700 font-semibold text-sm sm:font-medium">
                    {content.contactMethods.website}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    www.biozone.lk
                  </p>
                </div>
              </div>*/}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-x-[50px] md:justify-center md:gap-18 w-full">
              <SecondarySubmitButton1
                TextContent={content.actionButtons.whatsapp}
                onClick={handleWhatsAppClick}
              />
              <SecondarySubmitButton1
                TextContent={content.actionButtons.telegram}
                onClick={handleTelegramClick}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
