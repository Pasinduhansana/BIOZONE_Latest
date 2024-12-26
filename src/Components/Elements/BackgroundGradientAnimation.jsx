import React from "react";
import { motion } from "framer-motion";

const BackgroundGradientAnimation = ({ className }) => {
  return (
    <div
      className={`absolute inset-0 ${className} overflow-hidden`}
      style={{ backgroundColor: "white" }}
    >
      <motion.div
        className="absolute w-[50vh] h-[50vh] bg-green-500 rounded-full filter blur-3xl"
        initial={{ opacity: 0.5, scale: 2 }}
        animate={{
          opacity: 0.6,
          scale: 2,
          x: ["-50%", "50%", "50%", "-50%", "-50%"],
          y: ["-20%", "-20%", "30%", "30%", "-30%"],
        }}
        transition={{
          duration: 20,
          ease: "easeIn",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: "40%",
          left: "70%",
          transform: "translate(-50%, -60%)",
        }}
      />

      <motion.div
        className="absolute w-[30vh] h-[30vh] bg-gray-600 rounded-full filter blur-3xl"
        initial={{ opacity: 0.8, scale: 1.3 }}
        animate={{
          opacity: 0.8,
          scale: 1.5,
          x: ["-60%", "60%", "60%", "-60%", "-60%"],
          y: ["-50%", "-50%", "50%", "30%", "-30%"],
        }}
        transition={{
          duration: 20,
          ease: "easeIn",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: "20%",
          left: "20%",
          transform: "translate(-20%, -50%)",
        }}
      />
    </div>
  );
};

export default BackgroundGradientAnimation;
