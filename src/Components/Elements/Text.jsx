import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundGradientAnimation from "./BackgroundGradientAnimation";
import Advertisement from "../Advertisement";
import Content from "../../content/AboutUsContent";

const Text = () => {
	const [language, setLanguage] = useState("en");

	useEffect(() => {
		const savedLanguage = localStorage.getItem("language");
		if (savedLanguage) {
			setLanguage(savedLanguage);
		}
	}, []);

	const currentContent = Content[language];
	// Create refs for each animation
	const section1Ref = useRef(null);
	const section2Ref = useRef(null);
	const section3Ref = useRef(null);
	const section4Ref = useRef(null);

	// Check if sections are in view
	const section1InView = useInView(section1Ref, {
		once: false,
		margin: "0px 0px -30% 0px",
	});
	const section2InView = useInView(section2Ref, {
		once: false,
		margin: "0px 0px -30% 0px",
	});
	const section3InView = useInView(section3Ref, {
		once: false,
		margin: "0px 0px -30% 0px",
	});
	const section4InView = useInView(section4Ref, {
		once: false,
		margin: "0px 0px -30% 0px",
	});

	return (
		<div className="flex flex-col min-h-screen">
			{language === "si"
				? <>
					{/* Sinhala Content */}
					<div className="relative flex flex-col justify-center w-full min-h-full items-center z-20 ">
						<BackgroundGradientAnimation
							className={"-translate-y-[0%] lg:translate-y-[-10%]"}
						/>
						<div className="hidden  lg:flex flex-col justify-start items-center lg:h-[70vh] w-full md:w-[1000px] gap-5 z-50 px-4 md:px-0">
							<p className=" text-primary1 text-[14px] md:text-[15px] lg:text-[18px] font-[400] lg:font-[500] mb-10">
								{currentContent.topic}
							</p>

							<motion.div
								className="flex flex-col md:flex-row  justify-start items-start gap-10 "
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								viewport={{ once: true, amount: 0.3 }}
								useInView={section2InView}
							>
								{/*  Row - total Column */}
								<p className="text-5xl text-start md:text-[80px] lg:text-[120px] font-serif text-gray-700 leading-none">
									{currentContent.title2}
								</p>
							</motion.div>
							<motion.div
								className="flex flex-col md:flex-row text-justify items-center gap-20  w-full"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								viewport={{ once: true, amount: 0.3 }}
								useInView={section3InView}
							>
								{/*  Row - total Column */}
								<p
									className="text-gray-900 text-justify text-base md:text-lg lg:text-xl max-w-full md:max-w-[500px] lg:w-1/3 animate-orbit6 gap-20 font-thin"
									initial={{ opacity: 0, x: 0, y: 0 }}
									animate={{ opacity: 1, x: -360, y: 440 }}
									transition={{ duration: 2.8, ease: "easeInOut" }}
								>
									{currentContent.description3}
								</p>
								<p className="text-5xl md:text-[80px] text-right lg:text-[120px] font-serif text-gray-700 leading-none">
									තාක්ෂණය
								</p>

							</motion.div>
							<motion.div
								className="flex flex-col md:flex-row justify-between items-center w-full gap-10"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.9 }}
								viewport={{ once: true, amount: 0.3 }}
							>
								{/*  Row - total Column */}
								<p className="text-5xl md:text-[80px] lg:text-[120px] w-full flex justify-center font-serif text-gray-700 leading-none ">
									{currentContent.title4}
								</p>
								<p
									className="text-gray-900 text-base md:text-lg lg:text-xl max-w-full md:max-w-[500px] lg:max-w-full animate-orbit4 delay-[400ms] gap-20 font-thin "
									initial={{ opacity: 0, x: 0, y: 0 }}
									animate={{ opacity: 1, x: -360, y: 440 }}
									transition={{ duration: 2.8, ease: "easeInOut" }}
								>
									{currentContent.description1}
								</p>

							</motion.div>
							<motion.div
								className="flex flex-col md:flex-row justify-between items-center gap-10 w-full"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true, amount: 0.3 }}
								useInView={section1InView}
							>
								{/*  Row - total Column */}

								<p
									className="text-gray-900 text-base md:text-lg lg:text-xl max-w-full md:max-w-[500px] lg:max-w-full animate-orbit7 delay-[200ms] font-thin"
									initial={{ opacity: 0, x: 0, y: 0 }}
									animate={{ opacity: 1, x: -360, y: 440 }}
									transition={{ duration: 2.8, ease: "easeInOut" }}
								>
									{currentContent.description1}
								</p>
								<h1 className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 ">
									{currentContent.title1}
								</h1>
							</motion.div>
						</div>

						<div className="flex lg:hidden flex-col justify-center items-center h-full w-full md:w-[1000px] gap-5 z-50 px-10 md:px-0 pb-10">
							<motion.div
								className="flex flex-col md:flex-row justify-between items-center gap-4 w-full"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true, amount: 0.3 }}
								useInView={section1InView}
							>
								<p className=" text-primary1 text-[14px] md:text-[15px] lg:text-[18px] font-[400] lg:font-[500]">
									{currentContent.topic}
								</p>
								{/* 1st Row - total Column */}

								<p className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 leading-none">
									{currentContent.title2}
								</p>
								<p className="text-5xl text-center md:text-[80px] lg:text-[120px] font-serif text-gray-700 leading-none">
									{currentContent.title3}
								</p>
								<p className="text-5xl md:text-[80px] lg:text-[120px] w-full flex justify-center font-serif text-gray-700 leading-none">
									{currentContent.title4}
								</p>
								<h1 className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 ">
									{currentContent.title1}
								</h1>

								<div className="flex flex-col md:flex-row justify-between items-center w-full gap-20">
									<p
										className="text-gray-900 text-sm font-thin md:text-lg lg:text-xl text-center max-w-full md:max-w-[500px] lg:max-w-full animate-orbit7 delay-[200ms]"
										initial={{ opacity: 0, x: 0, y: 0 }}
										animate={{ opacity: 1, x: -360, y: 440 }}
										transition={{ duration: 2.8, ease: "easeInOut" }}
									>
										{currentContent.description1}
									</p>
									<p
										className="text-gray-900 text-sm md:text-lg font-thin lg:text-xl text-center max-w-full md:max-w-[500px] lg:max-w-full animate-orbit6"
										initial={{ opacity: 0, x: 0, y: 0 }}
										animate={{ opacity: 1, x: -360, y: 440 }}
										transition={{ duration: 2.8, ease: "easeInOut" }}
									>
										{currentContent.description3}
									</p>
									<p
										className="text-gray-900  text-sm md:text-lg font-thin lg:text-xl max-w-full text-center md:max-w-[500px] lg:max-w-full animate-orbit4 delay-[400ms]"
										initial={{ opacity: 0, x: 0, y: 0 }}
										animate={{ opacity: 1, x: -360, y: 440 }}
										transition={{ duration: 2.8, ease: "easeInOut" }}
									>
										{currentContent.description4}
									</p>
								</div>
							</motion.div>
						</div>
						<Advertisement />
					</div>
				</>
				: <>
					{/* English Content */}
					<div className="relative flex flex-col justify-center w-full items-center z-20 ">
						<BackgroundGradientAnimation
							className={"-translate-y-[0%] lg:translate-y-[-10%]"}
						/>
						<div className="hidden  lg:flex flex-col justify-start items-center lg:h-[70vh] w-full md:w-[1000px] gap-5 z-50 px-4 md:px-0">
							<p className=" text-primary1 text-[14px] md:text-[15px] lg:text-[18px] font-[400] lg:font-[500] mb-10">
								{currentContent.topic}
							</p>
							<motion.div
								className="flex flex-col md:flex-row justify-between items-center gap-10 w-full"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true, amount: 0.3 }}
								useInView={section1InView}
							>
								{/* 1st Row - total Column */}
								<h1 className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 ">
									{currentContent.title1}
								</h1>
								<p
									className="text-gray-900 text-base md:text-lg lg:text-xl max-w-full md:max-w-[500px] lg:max-w-full animate-orbit7 delay-[200ms] font-thin"
									initial={{ opacity: 0, x: 0, y: 0 }}
									animate={{ opacity: 1, x: -360, y: 440 }}
									transition={{ duration: 2.8, ease: "easeInOut" }}
								>
									{currentContent.description1}
								</p>
							</motion.div>
							<motion.div
								className="flex flex-col md:flex-row justify-between items-center gap-10 w-full"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								viewport={{ once: true, amount: 0.3 }}
								useInView={section2InView}
							>
								{/* 2nd Row - total Column */}
								<p
									className="text-gray-900 text-base md:text-lg lg:text-xl max-w-full md:max-w-[500px] lg:max-w-full animate-orbit6 font-thin"
									initial={{ opacity: 0, x: 0, y: 0 }}
									animate={{ opacity: 1, x: -360, y: 440 }}
									transition={{ duration: 2.8, ease: "easeInOut" }}
								>
									{currentContent.description3}
								</p>
								<p className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 leading-none">
									Biology&nbsp;and
								</p>
							</motion.div>
							<motion.div
								className="flex flex-col md:flex-row justify-between items-center gap-10 w-full"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								viewport={{ once: true, amount: 0.3 }}
								useInView={section3InView}
							>
								{/* 3rd Row - total Column */}
								<p className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 leading-none">
									{currentContent.title3}
								</p>
								<p
									className="text-gray-900 text-base md:text-lg lg:text-xl max-w-full md:max-w-[500px] lg:max-w-full animate-orbit5 font-thin"
									initial={{ opacity: 0, x: 0, y: 0 }}
									animate={{ opacity: 1, x: -360, y: 440 }}
									transition={{ duration: 2.8, ease: "easeInOut" }}
								>{currentContent.description5}
								</p>
							</motion.div>
							<motion.div
								className="flex flex-col md:flex-row justify-between items-center w-full"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.9 }}
								viewport={{ once: true, amount: 0.3 }}
							>
								{/* 4th Row - total Column */}
								<p
									className="text-gray-900 text-base md:text-lg lg:text-xl max-w-full md:max-w-[500px] lg:max-w-full animate-orbit4 delay-[400ms] font-thin"
									initial={{ opacity: 0, x: 0, y: 0 }}
									animate={{ opacity: 1, x: -360, y: 440 }}
									transition={{ duration: 2.8, ease: "easeInOut" }}
								>
									{currentContent.description1}
								</p>
								<p className="text-5xl md:text-[80px] lg:text-[120px] w-full flex justify-center font-serif text-gray-700 leading-none">
									{currentContent.title4}
								</p>
							</motion.div>
						</div>

						<div className="flex lg:hidden flex-col justify-center items-center h-full w-full md:w-[1000px] gap-5 z-50 px-10 md:px-0 pb-10">
							<motion.div
								className="flex flex-col md:flex-row justify-between items-center gap-4 w-full"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true, amount: 0.3 }}
								useInView={section1InView}
							>
								<p className=" text-primary1 text-[14px] md:text-[15px] lg:text-[18px] font-[400] lg:font-[500]">
									{currentContent.topic}
								</p>
								{/* 1st Row - total Column */}
								<h1 className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 ">
									{currentContent.title1}
								</h1>
								<p className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 leading-none">
									Biology&nbsp;and
								</p>
								<p className="text-5xl md:text-[80px] lg:text-[120px] font-serif text-gray-700 leading-none">
									{currentContent.title3}
								</p>
								<p className="text-5xl md:text-[80px] lg:text-[120px] w-full flex justify-center font-serif text-gray-700 leading-none">
									{currentContent.title4}
								</p>

								<div className="flex flex-col md:flex-row justify-between items-center gap-20 w-full">
									<p
										className="text-gray-900 text-sm font-thin md:text-lg lg:text-xl text-center max-w-full md:max-w-[500px] lg:max-w-full animate-orbit7 delay-[200ms]"
										initial={{ opacity: 0, x: 0, y: 0 }}
										animate={{ opacity: 1, x: -360, y: 440 }}
										transition={{ duration: 2.8, ease: "easeInOut" }}
									>
										{currentContent.description1}
									</p>
									<p
										className="text-gray-900 text-sm md:text-lg font-thin lg:text-xl text-center max-w-full md:max-w-[500px] lg:max-w-full animate-orbit6"
										initial={{ opacity: 0, x: 0, y: 0 }}
										animate={{ opacity: 1, x: -360, y: 440 }}
										transition={{ duration: 2.8, ease: "easeInOut" }}
									>
										{currentContent.description5}
									</p>
									<p
										className="text-gray-900  text-sm md:text-lg font-thin lg:text-xl max-w-full text-center md:max-w-[500px] lg:max-w-full animate-orbit4 delay-[400ms]"
										initial={{ opacity: 0, x: 0, y: 0 }}
										animate={{ opacity: 1, x: -360, y: 440 }}
										transition={{ duration: 2.8, ease: "easeInOut" }}
									>
										{currentContent.description4}
									</p>
								</div>
							</motion.div>
						</div>
					</div>
				</>}
		</div>
	);
};

export default Text;
