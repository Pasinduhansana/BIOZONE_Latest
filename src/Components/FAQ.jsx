import React, { useState, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import faqContent from "../Content/FAQContent";
import { motion } from "framer-motion";
import bgImage from "../Assest/Web_Images/Bg Plexus.png";

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const [language, setLanguage] = useState("en");

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	useEffect(() => {
		const savedLanguage = localStorage.getItem("language");
		if (savedLanguage) {
			setLanguage(savedLanguage);
		}
	}, []);

	const content = faqContent[language] || faqContent.en;
	const faqs = content.questions || [];

	return (
		<div className={`relative w-full lg:min-h-screen py-10 lg:py-0 h-full flex items-center justify-center overflow-hidden ${language === "si" ? "font-indumathi" : ""}`}>
			<img
				src={bgImage}
				alt="Background"
				className="absolute w-full h-full object-cover opacity-90"
			/>
			<div className="2xl:px-52 xl:px-24 px-10 relative flex items-center justify-center overflow-hidden">
				<div className="w-full max-w-3xl flex flex-col justify-center items-center">
					{/* Header */}
					<motion.div
						className="text-center flex flex-col justify-center items-center"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true, amount: 0.3 }}
					>
						<p className=" text-primary1 text-[14px] md:text-[15px] lg:text-[18px] font-[400] lg:font-[500] mb-2">
							{content.support}
						</p>
						<h2 className="font-reddit text-[28px] xl:text-[40px] 2xl:text-[48px] text-primarytext mb-2 font-medium w-auto lg:text-nowrap">
							{content.title}
						</h2>
						<p className="text-gray-500 mb-10 font-sans text-[14px] xl:text-[18px] 2xl:text-[18px]">
							{content.description}
						</p>
					</motion.div>

					{/* FAQ Section */}
					<div className="space-y-4 pb-20 lg:mt-10 lg:w-[45vw] w-[90vw]">
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								className="border-b border-gray-300"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true, amount: 0.3 }}
							>
								{/* Question */}
								<button
									className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
									onClick={() => toggleFAQ(index)}
								>
									<span className="lg:text-lg text-[16px] font-normal lg:font-normal text-gray-700">
										{faq.q}
									</span>
									<span
										className={`text-2xl text-gray-500 transform transition-transform duration-300 ${
											openIndex === index ? "rotate-180" : ""
										}`}
									>
										<IoChevronDownOutline />
									</span>
								</button>

								{/* Answer */}
								<div
									className={`text-gray-600 overflow-hidden transition-all duration-500 ${
										openIndex === index
											? "max-h-40 opacity-100"
											: "max-h-0 opacity-0"
									}`}
								>
									<p className="pb-4 lg:text-sm text-[14px] text-[#7b7b7b]">
										{faq.a}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
