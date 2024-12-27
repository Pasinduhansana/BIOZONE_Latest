import React from "react";
import { motion } from "framer-motion";

const BackgroundGradientAnimation = ({ className }) => {
	return (
		<div
			className={`absolute inset-0 ${className} overflow-hidden min-h-screen  pt-20 pb-10`}
			style={{ backgroundColor: "" }}
		>
			<motion.div
				className="absolute w-[40vh] h-[40vh] bg-primaryHover1 rounded-full filter blur-3xl"
				initial={{ opacity: 0.5, scale: 1 }}
				animate={{
					opacity: 0.7,
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
				className="absolute w-[40vh] h-[40vh] bg-primary2 rounded-full filter blur-3xl"
				initial={{ opacity: 0.5, scale: 1 }}
				animate={{
					opacity: 0.6,
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
