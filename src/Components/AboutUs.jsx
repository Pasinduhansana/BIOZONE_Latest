import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BackgroundGradientAnimation from "./Elements/BackgroundGradientAnimation";

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const [isFrozen, setIsFrozen] = useState(true); // Initially frozen to stop scroll

  // Track scroll position in a scrollable wrapper
  useEffect(() => {
    const handleScroll = () => {
      if (!isFrozen) {
        setScrollY(window.scrollY); // Update scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFrozen]);

  // Control scrolling freeze
  useEffect(() => {
    if (isFrozen) {
      document.body.style.overflow = "hidden"; // Freeze scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling after animation
    }
  }, [isFrozen]);

  const handleAnimationComplete = () => {
    setIsFrozen(false); // Unfreeze scroll after the circle animation completes
  };

  // Use scroll position to move, scale, and fade the circle
  const circleTranslateY = scrollY * 0.3; // Adjust speed of movement
  const circleScale = 1 + scrollY / 1000; // Scale the circle as the user scrolls
  const circleOpacity = Math.max(1 - scrollY / 1000, 0.5); // Fade out as user scrolls

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${language === "si" ? "font-indumathi" : ""}`}>
      {/* Background Gradient Animation */}
      <BackgroundGradientAnimation className="absolute inset-0 z-0" />

      {/* Scrollable Wrapper */}
      <div className="relative w-full h-full overflow-y-scroll z-20">
        <div
          className="flex flex-col items-center absolute right-16 top-1/2 transform"
          style={{ transform: `translateY(${circleTranslateY}px)` }} // Move the div vertically based on scrollY
        >
          <div className="flex flex-col justify-center items-center">
            {/* Arrow */}
            <motion.div
              className="flex flex-col justify-center items-center"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {/* Tail */}
              <div className="w-[2px] h-20 bg-gray-600 mt-2" />
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-600" />
            </motion.div>

            {/* Circle */}
            <motion.div
              className="w-8 h-8 absolute bg-transparent border-[1.5px] border-gray-700 rounded-full mt-4 flex items-center justify-center"
              initial={{ scale: 0.5 }}
              animate={{ scale: circleScale }} // Animate scale based on scroll
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              style={{ opacity: circleOpacity }} // Change opacity based on scroll
              onAnimationComplete={handleAnimationComplete} // Trigger unfreeze on animation complete
            >
              <motion.div
                className="w-6 h-6 bg-transparent border-[1.5px] border-gray-700 rounded-full"
                initial={{ scale: 0.5 }}
                animate={{ scale: circleScale }} // Inner circle scaling with outer circle
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
