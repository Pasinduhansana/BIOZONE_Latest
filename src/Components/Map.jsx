import React, { useState, useEffect } from "react";
import { VscArrowRight, VscChromeClose } from "react-icons/vsc";
import classimage1 from "../Assest/Web_Images/1.jpg";
import classimage2 from "../Assest/Web_Images/5.jpg";
import classimage3 from "../Assest/Web_Images/4.jpg";
import classimage4 from "../Assest/Web_Images/7.jpg";
import mapContent from "../Content/MapContent";
import classData from "../content/classdata";
import { motion } from "framer-motion";

const Map = () => {
	// State to control the visibility of the modal and the selected timetable data
	const [selectedTimetable, setSelectedTimetable] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [language, setLanguage] = useState("en");

	useEffect(() => {
		const savedLanguage = localStorage.getItem("language");
		if (savedLanguage) {
			setLanguage(savedLanguage);
		}
	}, []);

	// Function to open the modal with the timetable details
	const openModal = (institute) => {
		setSelectedTimetable(institute);
		setIsModalOpen(true);
	};

	// Function to close the modal
	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedTimetable(null);
	};

	const mapimages = [classimage1, classimage2, classimage3, classimage4];
	const content = mapContent[language] || mapContent.en;
	const data = classData[language] || classData.en;

	return (
		<div className="container mx-auto relative min-h-auto  lg:min-h-full mt-10 lg:mt-0 py-5 pb-10 lg:py-16">
			<div className="text-center lg:p-5 p-3">
				<div className="flex flex-col items-center justify-center px-5 lg:px-0">
					<motion.div
						className="text-primary1 text-[14px] md:text-[15px] lg:text-[18px] font-[400] lg:font-[500] mb-2"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true, amount: 0.3 }}
					>
						{content.title}
					</motion.div>
					<motion.div
						className="font-reddit text-[28px] xl:text-[40px] 2xl:text-[48px] text-primarytext mb-2 font-medium w-auto lg:text-nowrap"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true, amount: 0.3 }}
					>
						{content.subtitle}
					</motion.div>
					<motion.div
						className="text-gray-500 mb-10 font-sans text-[14px] xl:text-[18px] 2xl:text-[18px]"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true, amount: 0.3 }}
					>
						{content.description}
					</motion.div>
				</div>
			</div>
			<div className="flex justify-center">
				<motion.div
					className="relative grid lg:grid-cols-2 grid-cols-1 gap-8 justify-center"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true, amount: 0.3 }}
				>
					{data.map((institute, index) => (
						<div
							key={index}
							className="rounded-[16px] overflow-hidden transform transition-all  duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[90vw] h-[340px] lg:h-[17vw] lg:w-[28vw] "
							style={{
								backgroundImage: `url(${mapimages[index]})`,
								backgroundSize: "cover",
							}}
							onClick={() => openModal(institute)}
						>
							<div className="absolute bottom-0 w-full h-[110px] p-2 pl-5   mt-2 bg-[#FFFFFF99] backdrop-blur-[10px] flex flex-col gap-1 border-none ">
								<h2 className="text-[20px] xl:text-[24px] 2xl:text-[26px]  text-[#090909] font-[500]">
									{institute.locationName}
								</h2>
								<p className="text-[14px] xl:text-[15px] 2xl:text-[16px] font-normal text-[#606060]">
									{institute.address}
								</p>
								<a
									className="text-primary2 hover:text-primaryHover1 text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center  transition-all duration-300 hover:scale-[1.02]"
									onClick={() => openModal(institute)}
								>
									{content.viewTimetable}
									<VscArrowRight />
								</a>
							</div>
						</div>
					))}
				</motion.div>
			</div>


			{/* Modal for Timetable Details */}
			{isModalOpen && (
				<div className="fixed inset-0  flex items-center justify-center backdrop-blur-[10px] bg-black bg-opacity-10 z-50">
					<div className="bg-white lg:w-4/5 lg:h-5/6 w-full h-full  relative rounded-lg">
						<button
							className="absolute  right-1 m-3  w-8 h-8 bg-white border border-solid border-gray-300 flex justify-center items-center rounded-full hover:bg-primaryHover1 hover:text-white"
							onClick={closeModal}
						>
							<VscChromeClose />
						</button>
						<iframe
							className="w-full h-full object-cover rounded-lg" // Adjust iframe style
							src={selectedTimetable.addressLink || "default-source"}
							width="600"
							title="Map"
						/>

						<div className="absolute  bg-[#FFFFFF99] backdrop-blur-[5px] lg:p-4 bottom-0 rounded-[16px] w-screen lg:w-5/12 -mb-5 lg:mb-0 2xl:w-4/12 h-[400px] lg:h-[450px] lg:top-1/2 lg:right-5 transform  pb-5 lg:pb-0 translate-y-* lg:-translate-y-1/2 flex items-center justify-center shadow-lg">
							<div className="relative  overflow-hidden lg:w-11/12">
								{/* Location Name and Address */}
								<div className="text-2xl text-gray-800 mb-2 lg:mb-4 text-center p-2">
									<div className="font-medium text-[18px] xl:text-[22px] 2xl:text-[24px]">
										{selectedTimetable.locationName}
									</div>
									<div>
										<p className="mb-2 text-gray-600 font-thin text-[14px] xl:text-[16px] 2xl:text-[18px]">
											{selectedTimetable.address}
										</p>
									</div>
								</div>

								{/* Classes List */}
								<div>
									{selectedTimetable.classes.map((classItem, index) => (
										<motion.div
											key={index}
											className="flex items-center p-2 rounded-lg m-2 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 justify-between pr-5 ease-linear"
											initial={{ opacity: 0, x: 300 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.5, delay: 0.1 * index }}
											viewport={{ once: true, amount: 0 }}
										>
											{/* Class Details */}
											<div className="bg-gradient-to-r from-primary2 to-primary1 text-white p-3 rounded-lg w-7/12">
												<div className="flex justify-between w-full">
													<span className="font-medium text-[16px] xl:text-[18px] mt-[3px] 2xl:text-[20px] w-16">
														{classItem.classtype}
													</span>
													<span className="font-light text-[16px] xl:text-[17px] mt-1 2xl:text-[20px]">
														{classItem.year}
													</span>
													<span className="p-1 border border-solid border-white rounded-md pl-2 pr-2 text-[10px] xl:text-[12px] 2xl:text-[14px]">
														{classItem.medium}
													</span>
												</div>
											</div>
											{/* Class Time */}
											<div className="ml-3 text-right text-gray-700">
												<p className="text-base font-normal">{classItem.day}</p>
												<p className="text-xs text-center">{classItem.time}</p>
											</div>
										</motion.div>
									))}
								</div>

								{/* Footer Note */}
								<div className="text-base font-light text-gray-800 mt-4 text-center">
									<div>{content.footerNote}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Map;
