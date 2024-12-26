import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

// Reusable component for text with animations
const AnimatedText = ({ children, initial, animate, transition, className, inView }) => (
  <motion.p
    className={className}
    initial={initial}
    animate={inView ? animate : initial} // Only animate if the section is in view
    transition={transition}
  >
    {children}
  </motion.p>
);

const TemAbout = () => {
  const sectionRef = useRef(null); // Reference to the section
  const inView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" }); // Trigger animation when scrolled into view

  return (
    <div
      ref={sectionRef} // Attach the ref to the main container
      className="min-h-screen flex flex-col items-center justify-center px-4 py-10 relative"
    >
      {/* Background gradients */}
      <div className="bg__gradient w-1/3 h-1/3 absolute inset-0 bg-primary2 mix-blend-multiply filter blur-lg rounded-full hidden md:block"></div>
      <div className="bg__gradient_main w-1/4 h-1/2 absolute inset-0 bg-primary2 mix-blend-multiply filter blur-lg rounded-full hidden md:block"></div>

      <div className="max-w-screen-lg w-full px-6 md:px-8 lg:px-10 py-6">
        {/* First Section */}
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
          <p className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 leading-none">
            Where
          </p>
          <AnimatedText
            className="text-gray-900 text-base md:text-lg lg:text-xl max-w-full md:max-w-[500px]"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: -360, y: 440 }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            inView={inView}
          >
            Now through this web site, he is ready to guide you towards your academic goals with personalized support and resources.
          </AnimatedText>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-start mb-6">
          <p className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-800 leading-none">
            <AnimatedText
              initial={{ opacity: 0, x: -50, y: 0 }}
              animate={{ opacity: 0, x: -50, y: 0 }}
              transition={{ duration: 1.4 }}
              className="text-gray-700"
              inView={inView}
            >
              Biology and
            </AnimatedText>
            <AnimatedText
              initial={{ opacity: 0, x: 330, y: -120 }}
              animate={{ opacity: 1, x: 330, y: -120 }}
              transition={{ duration: 1.4, delay: 1 }}
              className="text-gray-700"
              inView={inView}
            >
              Biology and
            </AnimatedText>
          </p>
        </div>

        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center mb-6">
          <AnimatedText
            className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 leading-none"
            initial={{ opacity: 0, x: 0, y: -110 }}
            animate={{ opacity: 1, x: 0, y: -110 }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            inView={inView}
          >
            Technology
          </AnimatedText>
          <AnimatedText
            className="text-gray-900 text-base md:text-lg lg:text-xl max-w-full md:max-w-[550px]"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: -600, y: -250 }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            inView={inView}
          >
            His dedication and expertise have made him a trusted mentor for Advanced Level students.
          </AnimatedText>
        </div>

        {/* Fourth Section */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
          <AnimatedText
            className="text-gray-900 text-base md:text-lg lg:text-xl max-w-full md:max-w-[550px]"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 400, y: -520 }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            inView={inView}
          >
            Graduating from the University of Peradeniya, Dr. Charitha Munasinghe has over 10 years of experience in teaching biology and helping students gain admission to Sri Lanka's top state universities.
          </AnimatedText>
          <AnimatedText
            className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 leading-none"
            initial={{ opacity: 0, x: 0, y: -110 }}
            animate={{ opacity: 1, x: 0, y: -110 }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            inView={inView}
          >
            meet
          </AnimatedText>
        </div>
        {/*fifth section */}
        <AnimatedText
            className="text-gray-900 text-base md:text-lg lg:text-xl max-w-full md:max-w-[350px]"
            initial={{ opacity: 0, x: 650, y: -350 }}
            animate={{ opacity: 1, x: 650, y: -350 }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            inView={inView}
          >
            His dedication and expertise have made him a trusted mentor for Advanced Level students.
          </AnimatedText>
        </div>
      </div>
    
  );
};

export default TemAbout;
