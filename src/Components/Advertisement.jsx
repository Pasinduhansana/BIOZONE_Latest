import React, { useState, useEffect, useRef } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import axios from "axios";
import { motion } from "framer-motion";
import content from "../content/advertisementContent";

const Advertisement = () => {


  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const currentContent = content[language];

  const [advertisements, setAdvertisements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isScalingDown, setIsScalingDown] = useState(false);
  const [direction, setDirection] = useState(1);  // control mobile view image sliding direction

  const autoSlideInterval = useRef(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

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
      } finally {
        setLoading(false);
      }
    };

    fetchAdvertisements();
  }, []);

  useEffect(() => {
    if (advertisements.length > 0) {
      startAutoSlide();
    }
    return () => stopAutoSlide(); // Cleanup
  }, [advertisements]);

  const startAutoSlide = () => {
    stopAutoSlide(); // Clear any existing interval
    autoSlideInterval.current = setInterval(() => {
      goToNext();
    }, 5000); // Auto-slide every 5 seconds
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  };

  const goToPrevious = () => {
    stopAutoSlide(); // Reset auto-slide timer
    startAutoSlide();
    setDirection(-1);
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + advertisements.length) % advertisements.length
      );
    }
  };

  const goToNext = () => {
    stopAutoSlide(); // Reset auto-slide timer
    startAutoSlide();
    setDirection(1);
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % advertisements.length);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    if (advertisements.length > 0) {
      const scaleDownTimer = setTimeout(() => {
        setIsScalingDown(true);
      }, 4800);  // 5 seconds - 1.5 seconds

      return () => {
        clearTimeout(scaleDownTimer);
        setIsScalingDown(false);  // Reset scale-down state after each slide
      }
    }
  }, [currentIndex, advertisements])

  if (loading) {
    return <div>Loading advertisements...</div>;
  }

  if (advertisements.length === 0) {
    return <div>No advertisements available</div>;
  }

  const images = advertisements.map((ad) => ad.imageUrl);

  // Calculate visible images
  const visibleImages = [
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <div className="container relative mx-auto flex flex-col items-center justify-center h-screen lg:gap-10 gap-0 w-screen overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <p className="text-green-600 font-reddit uppercase text-sm font-semibold mb-3">
          {currentContent.highlights}
        </p>
        <h2 className="text-2xl xl:text-3xl px-20 lg:px-0 2xl:text-4xl text-primarytext mb-2 font-medium">
          {currentContent.title}
        </h2>
        <p className="text-gray-600 mb-3 lg:mb-10 font-sans text-[16px] px-8 lg:px-0 mt-3 xl:text-lg 2xl:text-lg font-thin">
          {currentContent.description}

        </p>
      </motion.div>
      {/* Desktop Carousel */}
      <motion.div
        className="hidden overflow-hidden relative flex-row lg:flex items-center justify-center gap-4 h-[500px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-12 z-10 bg-white bg-opacity-50 rounded-full transform -translate-y-1/2"
          aria-label="Previous slide"
        >
          <VscChevronLeft className="text-gray-500 text-[55px]" />
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden lg:w-[1214px] h-full flex flex-row items-center">
          <div className="flex ">
            {visibleImages.map((image, index) => (
              <motion.img
                key={`${image}-${currentIndex}-${index}`}
                src={image}
                alt={`Slide ${index}`}
                className={`object-cover h-full w-full border-[1.5px] overflow-hidden rounded-[15px] border-gray-200 mx-2 ${
                  index === 1 ? `mx-2` : `mx-0`
                }`}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{
                  scale: index === 1 ? (isScalingDown ? 0.8 : 1.2) : 0.8, // Scale larger for the center, slightly smaller for sides
                  opacity: index === 1 ? 1 : 0.7, // Full opacity for center, reduced for sides
                  x: index === 0 ? -10 : index === 2 ? 10 : 0, // Subtle horizontal translation for left/right images
                }}
                transition={{
                  scale: { duration: 0.7 },
                  opacity: { duration: 0.7 },
                  x: { duration: 0.7 }, // Smooth transition
                }}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-12 z-10 bg-white bg-opacity-50 rounded-full transform -translate-y-1/2"
          aria-label="Next slide"
        >
          <VscChevronRight className="text-gray-500 text-[55px]" />
        </button>
      </motion.div>

      {/* Mobile Carousel */}
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
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <div className="w-[300px] h-[300px] rounded-lg overflow-hidden">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="object-cover h-full w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
        <div className="flex flex-row mt-4">
          <button onClick={goToPrevious} aria-label="Previous slide" className="p-2">
            <VscChevronLeft className="text-gray-500 text-[30px]" />
          </button>
          <button onClick={goToNext} aria-label="Next slide" className="p-2">
            <VscChevronRight className="text-gray-500 text-[30px]" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Advertisement;
