import React, { useState, useEffect } from "react";

const ScrollComponent = () => {
  // Step 1: Set up the state to store the scroll value
  const [scrollY, setScrollY] = useState(0);

  // Step 2: Add event listener to capture scroll position
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Update scrollY with current scroll position
      setScrollY(window.scrollY); // or use document.documentElement.scrollTop
    };

    // Adding the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="h-[200vh]">
        <div className="flex h-full items-center justify-center text-2xl flex-col">
          <h1>Scroll Position: {scrollY}px</h1>
          Scroll down to see the scroll value update in real-time.
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;
