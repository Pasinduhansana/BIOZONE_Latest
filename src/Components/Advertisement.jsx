import React, { useState, useEffect } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import axios from "axios";
import { motion } from "framer-motion";

const Advertisement = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const response = await axios.get("http://localhost:3080/api/admin/");
        if (response.data.message === "Advertisements fetched successfully") {
          setAdvertisements(response.data.data);
        } else {
          console.error("Failed to fetch advertisements.");
        }
      } catch (error) {
        console.error("Error fetching advertisements:", error);
      }
    };

    fetchAdvertisements();
  }, []);

  // Image array
  const images = advertisements.map((ad) => ad.imageUrl);
  if (images.length === 0) {
    return <div></div>;
  }

  // Calculate the visible images with the last image first
  const visibleImages = [
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  // Navigate to the previous image
  const goToPrevious = () => {
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Navigate to the next image
  const goToNext = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="container relative  mx-auto flex flex-col items-center justify-center h-screen lg:gap-10 gap-0 w-screen overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <p className="text-green-600 font-reddit uppercase text-sm font-semibold mb-3">
          Highlights
        </p>
        <h2 className="text-2xl xl:text-3xl px-20 lg;px-0 2xl:text-4xl text-primarytext mb-2 font-medium">
          Featuring Key Highlights
        </h2>
        <p className="text-gray-600 mb-3 lg:mb-10 font-sans text-[16px] px-8 lg:px-0 mt-3 xl:text-lg 2xl:text-lg font-thin">
          Discover the latest highlights, schedules, and topics from our
          classes. These showcase important events, <br />
          learning opportunities, and updates for students.
        </p>
      </motion.div>

      <motion.div
        className="hidden overflow-hidden relative flex-row lg:flex items-center justify-center gap-4 h-[500px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <button onClick={goToPrevious} className="top-1/2 left-0">
          <VscChevronLeft className="text-gray-500 text-[55px]" />
        </button>

        <div className="overflow-hidden px-2 lg:w-[1214px] h-full flex flex-row items-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className="flex"
          >
            {images.map((image, index) => {
              // Determine if the current image is the middle image
              const isMiddleImage =
                index === (currentIndex + 1) % images.length;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[300px] border-[1.5px] overflow-hidden rounded-[15px] border-gray-200 h-[300px] mr-[150px] transition-transform duration-500 ${
                    isMiddleImage ? "scale-150" : "scale-100"
                  }`} // Scale middle image
                >
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="object-cover  h-full w-full "
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        <button onClick={goToNext} className="top-1/2 right-0">
          <VscChevronRight className="text-gray-500 text-[55px]" />
        </button>
      </motion.div>

      <motion.div
        className="flex overflow-hidden relative flex-col lg:hidden items-center justify-center gap-2 h-[400px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="overflow-hidden px-2 w-[320px] h-full flex flex-row items-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            {images.map((image, index) => {
              // Determine if the current image is the middle image
              const isMiddleImage =
                index === (currentIndex + 1) % images.length;

              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[300px] h-[300px]  mr-[150px] transition-transform duration-500`} // Scale middle image
                >
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="object-cover  h-full w-full rounded-lg"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="flex flex-row mb-4">
          <button onClick={goToPrevious} className="top-1/2 left-0">
            <VscChevronLeft className="text-gray-500 text-[30px]" />
          </button>
          <button onClick={goToNext} className="top-1/2 right-0">
            <VscChevronRight className="text-gray-500 text-[30px]" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Advertisement;
