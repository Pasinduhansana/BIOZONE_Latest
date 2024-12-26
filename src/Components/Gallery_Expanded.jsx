import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring"; // Import react-spring for animation
import { motion } from "framer-motion";
import Img1 from "../Assest/Web_Images/1.jpg";
import Img2 from "../Assest/Web_Images/2.jpeg";
import Img3 from "../Assest/Web_Images/3.jpg";
import Img4 from "../Assest/Web_Images/4.jpg";
import Img5 from "../Assest/Web_Images/5.jpg";
import Img6 from "../Assest/Web_Images/6.jpg";
import Img7 from "../Assest/Web_Images/7.jpg";
import Img8 from "../Assest/Web_Images/8.jpg";
import Img9 from "../Assest/Web_Images/9.jpg";
import content from "../content/galleryContent";
import { SecondaryButton } from "./Elements/Buttons";
import { useNavigate } from "react-router-dom";
import Logo from "../Assest/Web_Images/BioZoneLogo.png";

export default function App() {
	const [counter1, setCounter1] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	const [counter4, setCounter4] = useState(0);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const target1 = 10;
	const target2 = 321;
	const target3 = 134;
	const target4 = 321;

	const gridRef1 = useRef(null);
	const gridRef2 = useRef(null);
	const gridRef3 = useRef(null);
	const gridRef4 = useRef(null);

	const observerOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	};

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/home"); // Navigate to the Gallery_Expanded page
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target === gridRef1.current) {
						setCounter1(target1);
					} else if (entry.target === gridRef2.current) {
						setCounter2(target2);
					} else if (entry.target === gridRef3.current) {
						setCounter3(target3);
					} else if (entry.target === gridRef4.current) {
						setCounter4(target4);
					}
				}
			});
		}, observerOptions);

		if (gridRef1.current) observer.observe(gridRef1.current);
		if (gridRef2.current) observer.observe(gridRef2.current);
		if (gridRef3.current) observer.observe(gridRef3.current);
		if (gridRef4.current) observer.observe(gridRef4.current);

		return () => {
			if (gridRef1.current) observer.unobserve(gridRef1.current);
			if (gridRef2.current) observer.unobserve(gridRef2.current);
			if (gridRef3.current) observer.unobserve(gridRef3.current);
			if (gridRef4.current) observer.unobserve(gridRef4.current);
		};
	}, []);

	const animatedCounter1 = useSpring({
		number: counter1,
		from: { number: 0 },
		config: { duration: 1000 },
	});
	const animatedCounter2 = useSpring({
		number: counter2,
		from: { number: 0 },
		config: { duration: 1000 },
	});
	const animatedCounter3 = useSpring({
		number: counter3,
		from: { number: 0 },
		config: { duration: 1000 },
	});
	const animatedCounter4 = useSpring({
		number: counter4,
		from: { number: 0 },
		config: { duration: 1000 },
	});

	const [language, setLanguage] = useState("en");

	useEffect(() => {
		const savedLanguage = localStorage.getItem("language");
		if (savedLanguage) {
			setLanguage(savedLanguage);
		}
	}, []);

	const currentContent = content[language];

	return (
		<>
			<nav className="shadow-md w-screen overflow-hidden">
				<div className="navcard 2xl:px-56 xl:px-36 px-5 w-full h-16 lg:h-auto  bg-[#f9fefca9] backdrop-blur-[20px] py-3 pt-6 lg:flex items-center justify-between shadow-sm fixed top-0 left-0 z-50">
					{/* Logo */}
					<div className="flex flex-row justify-between z-50 -mt-3 w-full">
						<div className="flex items-center cursor-pointer w-auto">
							<img src={Logo} alt="Logo" className="w-14 h-auto" />
						</div>
						<SecondaryButton
							TextContent={currentContent.backto}
							onclickevent={handleClick}
						/>
					</div>
				</div>
			</nav>
			<PhotoProvider>
				<div className="relative overflow-hidden bg-white h-full lg:h-full">
					<div className="relative flex flex-col justify-center w-full h-full py-12 mx-auto gap-8">
						<div className="py-2 flex flex-col  text-center justify-center items-center mt-5">
							<h3 className="text-primary1 text-[14px] md:text-[15px] lg:text-[18px] font-[400] lg:font-[500] mb-2">
								{currentContent.gallery}
							</h3>
							<h1 className="font-reddit text-[28px] xl:text-[40px] 2xl:text-[48px] text-primarytext mb-2 font-medium w-auto lg:text-nowrap">
								{currentContent.chatToTeam}
							</h1>
							<p className="text-gray-500 mb-10 font-sans text-[14px] xl:text-[18px] 2xl:text-[18px]">
								{currentContent.witness}
							</p>
						</div>
						<div className="pt-6 py-2 px-6 overflow-hidden mx-auto mt-0 text-gray-500  border-neutral-200 text-balance">
							{/* Desktop Gallery */}
							<div className="hidden lg:grid grid-cols-1   gap-4 md:grid-cols-4 lg:grid-cols-7  grid-flow-row">
								{/* 1 */}
								<motion.div
									ref={gridRef1}
									className={`relative lg:h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-3 ${
										hoveredIndex !== null && hoveredIndex !== 0 ? "blur-sm" : ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.1 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(0)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img1}>
										<img
											src={Img1}
											alt="image1"
											className="absolute object-cover w-full h-full bottom-0"
										/>
									</PhotoView>
								</motion.div>

								{/* 2 */}
								<motion.div
									className={`relative lg:h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-1 ${
										hoveredIndex !== null && hoveredIndex !== 1 ? "blur-sm" : ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(1)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img8}>
										<img
											src={Img8}
											alt="image1"
											className="absolute object-cover w-full h-full bottom-0"
										/>
									</PhotoView>
								</motion.div>

								{/* 3 */}
								<motion.div
									ref={gridRef2}
									className={`lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-3 ${
										hoveredIndex !== null && hoveredIndex !== 2 ? "blur-sm" : ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.3 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(2)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img2}>
										<img
											src={Img2}
											alt="Grid 1"
											className="object-cover w-full h-full"
										/>
									</PhotoView>
								</motion.div>

								{/* 4 */}
								<motion.div
									className={`lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-4 ${
										hoveredIndex !== null && hoveredIndex !== 3 ? "blur-sm" : ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(3)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img3}>
										<img
											src={Img3}
											alt="Grid 1"
											className="object-cover w-full h-full"
										/>
									</PhotoView>
								</motion.div>

								{/* 5 */}
								<motion.div
									className={`lg:h-[35vh] flex flex-col gap-4 bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-3 ${
										hoveredIndex !== null && hoveredIndex !== 4 ? "blur-sm" : ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(4)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img4}>
										<img
											src={Img4}
											alt="Grid 1"
											className="object-cover w-full h-[50%] rounded-xl"
										/>
									</PhotoView>
									<div
										className={`lg:h-[35vh] flex flex-col gap-4 bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-3 `}
									>
										<PhotoView src={Img4}>
											<img
												src={Img4}
												alt="Grid 1"
												className="object-cover w-full h-auto rounded-xl"
											/>
										</PhotoView>
									</div>
								</motion.div>

								{/* 6 */}
								<motion.div
									className={`lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-3 ${
										hoveredIndex !== null && hoveredIndex !== 5 ? "blur-sm" : ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(5)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img2}>
										<img
											src={Img2}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>

								{/* 8 */}
								<motion.div
									className={`lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-4 ${
										hoveredIndex !== null && hoveredIndex !== 6 ? "blur-sm" : ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(6)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img5}>
										<img
											src={Img5}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>

								{/* 9 */}
								<motion.div
									className={`lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-3 ${
										hoveredIndex !== null && hoveredIndex !== 7 ? "blur-sm" : ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(7)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img6}>
										<img
											src={Img6}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>

								{/* 10 */}
								<motion.div
									className={`lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-3 ${
										hoveredIndex !== null && hoveredIndex !== 8 ? "blur-sm" : ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(8)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img7}>
										<img
											src={Img7}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>

								{/* 11  */}
								<motion.div
									ref={gridRef3}
									className={`lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-1 ${
										hoveredIndex !== null && hoveredIndex !== 9 ? "blur-sm" : ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(9)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img1}>
										<img
											src={Img1}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>

								{/* 11 */}
								<motion.div
									className={`lg:h-[35vh] flex flex-col gap-4 bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-3 ${
										hoveredIndex !== null && hoveredIndex !== 10
											? "blur-sm"
											: ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(10)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img4}>
										<img
											src={Img4}
											alt="Grid 1"
											className="object-cover w-full h-[50%] rounded-xl"
										/>
									</PhotoView>
									<div
										className={`lg:h-[35vh] flex flex-col gap-4 bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-3 `}
									>
										<PhotoView src={Img6}>
											<img
												src={Img6}
												alt="Grid 1"
												className="object-cover w-full h-full rounded-xl"
											/>
										</PhotoView>
									</div>
								</motion.div>

								{/* 12 */}
								<motion.div
									className={`lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-4 ${
										hoveredIndex !== null && hoveredIndex !== 11
											? "blur-sm"
											: ""
									}`}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 1.2 }}
									viewport={{ once: true, amount: 0.1 }}
									onMouseEnter={() => setHoveredIndex(11)}
									onMouseLeave={() => setHoveredIndex(null)}
								>
									<PhotoView src={Img8}>
										<img
											src={Img8}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>
							</div>

							{/* Mobile Gallery */}
							<div className="flex lg:hidden gap-4 flex-col">
								{/* 1 */}
								<motion.div
									ref={gridRef1}
									className="relative h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] overflow-hidden"
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.1 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<PhotoView src={Img1}>
										<img
											src={Img1}
											alt="Grid 1"
											className="absolute object-cover  w-full h-full"
										/>
									</PhotoView>
								</motion.div>

								{/* Positive Feedback */}
								<motion.div
									className="relative h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] overflow-hidden col-span-5"
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<PhotoView src={Img5}>
										<img
											src={Img5}
											alt="Grid 1"
											className="absolute object-cover  w-full h-full"
										/>
									</PhotoView>
								</motion.div>

								{/* 3 */}
								<motion.div
									ref={gridRef2}
									className="h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] overflow-hidden "
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.3 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<PhotoView src={Img2}>
										<img
											src={Img2}
											alt="Grid 1"
											className="object-cover w-full h-full "
										/>
									</PhotoView>
								</motion.div>

								{/* 4 */}
								<motion.div
									className="h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] overflow-hidden "
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<PhotoView src={Img4}>
										<img
											src={Img4}
											alt="Grid 1"
											className="object-cover w-full h-full"
										/>
									</PhotoView>
								</motion.div>

								{/* 9 */}
								<motion.div
									className="h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.9 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<PhotoView src={Img6}>
										<img
											src={Img6}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>

								{/* 6 */}
								<motion.div
									className="h-[35vh] flex flex-col items-center justify-center p-6 text-white shadow ring-1 ring-inset col-span-3 md:row-span-1 rounded-xl bg-gradient-to-r from-primary1 to-primary2"
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.7 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<p className="mb-5 text-[22px] font-semibold text-center">
										{currentContent.inspiringMoments}
									</p>
									<p className="text-[16px] text-center font-thin">
										{currentContent.witness}
										<br />
										{currentContent.activities}
									</p>
								</motion.div>

								{/* 8 */}
								<motion.div
									className="h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.8 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<PhotoView src={Img5}>
										<img
											src={Img5}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>

								{/* 9 */}
								<motion.div
									className="h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.9 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<PhotoView src={Img6}>
										<img
											src={Img6}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>

								{/* 10 */}
								<motion.div
									className="h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 1.0 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<PhotoView src={Img7}>
										<img
											src={Img7}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>

								{/* 11 */}
								<motion.div
									className="h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<PhotoView src={Img7}>
										<img
											src={Img7}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>

								{/* 12 */}
								<motion.div
									className="h-[25vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 1.2 }}
									viewport={{ once: true, amount: 0.1 }}
								>
									<PhotoView src={Img8}>
										<img
											src={Img8}
											alt="Grid 1"
											className="object-cover w-full h-full rounded-xl"
										/>
									</PhotoView>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</PhotoProvider>
		</>
	);
}
