import React, { useState, useEffect } from "react";
import {
	PrimaryButton,
	SecondaryButton,
	SecondarySubmitButton,
	SubmitButton,
} from "./Elements/Buttons";
import bgimage from "../Assest/Web_Images/Bg Plexus.png";
import portrait from "../Assest/Web_Images/Portrait.png";
import vector from "../Assest/Web_Images/Vector.png";
import bgcardimg from "../Assest/Web_Images/Img Bg.png";
import content from "../content/landingContent";
import { motion } from "framer-motion";

const Landing = () => {
	const [language, setLanguage] = useState("en");

	useEffect(() => {
		const savedLanguage = localStorage.getItem("language");
		if (savedLanguage) {
			setLanguage(savedLanguage);
		}
	}, []);

	const currentContent = content[language];

	return (
		<div className={`2xl:px-52 xl:px-24 px-10 relative max-h-[250vh] h-auto lg:h-screen w-screen flex  flex-col lg:flex-row  items-center justify-start lg:justify-between gap-10 lg:gap-40 overflow-hidden ${language === "si" ? "font-indumathi" : ""}`}>
			<img
				src={bgimage}
				alt="Background DNA sample"
				className="absolute left-0 bottom-0 -z-10 animate-orbit2"
			/>
			<motion.div
				className="flex flex-col lg:flex-col justify-start items-start  gap-4 mt-24 lg:mt-0 ease-linear"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<motion.div
					className="text-[13px] xl:text-[15px] 2xl:text-[16px] flex items-center justify-center -mb-4 text-primary1 border-[1.5px] lg:border-2 bg-white border-primary1 rounded-[4px]  lg:rounded-[8px] h-[28px] w-auto transition-all duration-200 ease-linear px-2"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					{currentContent.conducting}
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<h1 className="lg:w-[350px] text-[35px] xl:text-[52px] mt-2 lg:mt-0 2xl:text-[64px] font-semibold leading-tight ease-linear ">
						{currentContent.title}
					</h1>
				</motion.div>

				<motion.p
					className="w-auto lg:w-[650px] flex-wrap text-[15px] xl:text-[16px] 2xl:text-[17px] font-thin mb-6 mt-5 ease-linear"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.8 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					{currentContent.description}
				</motion.p>

				<motion.div
					className="flex flex-col items-start lg:flex-row gap-3 lg:gap-5 t-10"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<PrimaryButton TextContent={currentContent.onlineStudentPortal} />
					<SecondaryButton TextContent={currentContent.viewTimetables} />
				</motion.div>
			</motion.div>
			<motion.div
				className="relative h-[450px] lg:h-auto flex flex-col gap-5 items-center justify-center mt-16 lg:mt-[20vh] w-[300px] lg:w-[450px]"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				viewport={{ once: true, amount: 0.3 }}
			>
				<img
					src={portrait}
					alt="Portrait Image"
					width={460}
					className="absolute bottom-0 z-30 mb-[6px] lg:mb-[10px] ml-5  lg:ml-12 object-cover"
				/>
				<img
					src={vector}
					alt="vector"
					className="absolute z-20 -ml-20 -top-32"
				/>
				<img
					src={bgcardimg}
					alt="background card image"
					className=" z-20 h-[45vh] lg:h-[60vh] w-[280px] lg:w-[421px]"
				/>

				{/* Glass Effect Cards */}
				<motion.div
					className="absolute z-40 flex flex-col lg:-top-10 lg:-left-15 top-5 -left-2 justify-center  text-primary1 items-center rounded-[8px]  w-[120px] h-[60px] lg:w-[140px] lg:h-[80px] bg-[#FFFFFF99] backdrop-blur-[30px] shadow-[0px_4px_34.6px_0px_#0000001A] animate-orbit"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, delay: 0.7 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<h1 className="text-[28px] xl:text-[36px] 2xl:text-[30px] ">+10</h1>
					<h1 className="text-[14px] xl:text-[16px] 2xl:text-[16px] font-thin mb-2">
						{currentContent.experience}
					</h1>
				</motion.div>
				<motion.div
					className="absolute z-40 flex flex-row items-center justify-center bottom-4 lg:bottom-10 -left-10 lg:-left-28 text-primary1  rounded-[8px] w-[240px] h-[70px] lg:w-[312px] lg:h-[91px] bg-[#FFFFFF99] backdrop-blur-[30px] shadow-[0px_4px_34.6px_0px_#0000001A] animate-orbit2"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.0 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<h1 className="text-[28px] xl:text-[36px] 2xl:text-[40px]">+4</h1>
					<div className="h-[70%] w-[1.5px] bg-primaryHover1 mx-4"></div>
					<div className="flex flex-col items-center justify-center text-center text-primary1 w-[140px] lg:w-[193px]">
						<h1 className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-semibold">
							{currentContent.institutes}
						</h1>
						<p className="text-[13px] w-[80%] lg:w-auto xl:text-[15px] 2xl:text-[16px] font-thin">
							{currentContent.institutesDescription}
						</p>
					</div>
				</motion.div>

				<motion.div
					className="absolute z-40 flex flex-col justify-center items-center text-primary1 -right-10 -lg:right-14 top-58 lg:top-38 rounded-[8px] w-[160px] h-[50px] lg:w-[190px] lg:h-[68px] bg-[#FFFFFF99] backdrop-blur-[30px] shadow-[0px_4px_34.6px_0px_#0000001A] animate-orbit3"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 1.1 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					<p className="text-[13px] w-[80%] lg:w-auto xl:text-[15px] 2xl:text-[16px] text-center font-thin ">
						{currentContent.startJourney}
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Landing;
