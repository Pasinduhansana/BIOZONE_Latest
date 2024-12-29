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
import Img10 from "../Assest/Web_Images/10.jpg";
import Img11 from "../Assest/Web_Images/11.jpg";
import Img12 from "../Assest/Web_Images/12.jpg";
import Img13 from "../Assest/Web_Images/13.jpg";
import Img14 from "../Assest/Web_Images/14.jpg";
import Img15 from "../Assest/Web_Images/15.jpg";
import Img16 from "../Assest/Web_Images/16.jpg";
import Img17 from "../Assest/Web_Images/17.jpg";
import Img18 from "../Assest/Web_Images/18.jpg";
import Img19 from "../Assest/Web_Images/19.jpg";
import Img20 from "../Assest/Web_Images/20.jpg";
import Img21 from "../Assest/Web_Images/21.jpg";
import Img22 from "../Assest/Web_Images/22.jpg";
import Img23 from "../Assest/Web_Images/23.jpg";
import Img24 from "../Assest/Web_Images/24.jpg";
import Img25 from "../Assest/Web_Images/25.jpg";
import Img26 from "../Assest/Web_Images/26.jpg";
import Img27 from "../Assest/Web_Images/27.jpg";
import Img28 from "../Assest/Web_Images/28.jpg";
import Img29 from "../Assest/Web_Images/29.jpg";
import Img30 from "../Assest/Web_Images/30.jpg";
import Img31 from "../Assest/Web_Images/31.jpg";
import Img32 from "../Assest/Web_Images/32.jpg";
import Img33 from "../Assest/Web_Images/33.jpg";
import Img34 from "../Assest/Web_Images/34.jpg";
import Img35 from "../Assest/Web_Images/35.jpg";
import Img36 from "../Assest/Web_Images/36.jpg";
import Img37 from "../Assest/Web_Images/37.jpg";
import Img38 from "../Assest/Web_Images/38.jpg";

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
			<nav className={`shadow-md w-screen overflow-hidden ${language === "si" ? "font-indumathi" : ""}`}>
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
                  <PhotoView src={Img30}>
                    <img
                      src={Img30}
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
                  <PhotoView src={Img2}>
                    <img
                      src={Img2}
                      alt="Grid 1"
                      className="object-cover w-full h-[50%] rounded-xl"
                    />
                  </PhotoView>
                  <div
                    className={`relative lg:h-[35vh] flex flex-col gap-4 bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-3 `}
                  >
                    <PhotoView src={Img4}>
                      <img
                        src={Img4}
                        alt="Grid 1"
                        className="object-cover w-full h-auto rounded-xl absolute -top-20"
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

                {/* 7 */}
                <motion.div
                  className={`relative lg:h-[35vh] bg-gray-100 overflow-hidden shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-4 ${
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
                      className="absolute object-cover w-full h-auto rounded-xl -top-24"
                    />
                  </PhotoView>
                </motion.div>

                {/* 9 */}
                <motion.div
                  className={`lg:h-[35vh] overflow-hidden bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-3 ${
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
                      className="object-cover w-full h-auto rounded-xl"
                    />
                  </PhotoView>
                </motion.div>

                {/* 9 */}
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

                {/* 10  */}
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
                  <PhotoView src={Img10}>
                    <img
                      src={Img10}
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
                  <PhotoView src={Img11}>
                    <img
                      src={Img11}
                      alt="Grid 1"
                      className="object-cover w-full h-[50%] rounded-xl"
                    />
                  </PhotoView>
                  <div
                    className={`lg:h-[35vh] flex flex-col gap-4 bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-3 `}
                  >
                    <PhotoView src={Img12}>
                      <img
                        src={Img12}
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
                  <PhotoView src={Img13}>
                    <img
                      src={Img13}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>

                {/* 13 */}
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
                  <PhotoView src={Img14}>
                    <img
                      src={Img14}
                      alt="image1"
                      className="absolute object-cover w-full h-AUTO -top-5"
                    />
                  </PhotoView>
                </motion.div>

                {/* 14 */}
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
                  <PhotoView src={Img30}>
                    <img
                      src={Img30}
                      alt="image1"
                      className="absolute object-cover w-full h-full bottom-0"
                    />
                  </PhotoView>
                </motion.div>

                {/* 15 */}
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
                  <PhotoView src={Img16}>
                    <img
                      src={Img16}
                      alt="Grid 1"
                      className="object-cover w-full h-full"
                    />
                  </PhotoView>
                </motion.div>

                {/* 16 */}
                <motion.div
                  className={`relative  lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-4 ${
                    hoveredIndex !== null && hoveredIndex !== 3 ? "blur-sm" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.1 }}
                  onMouseEnter={() => setHoveredIndex(3)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <PhotoView src={Img17}>
                    <img
                      src={Img17}
                      alt="Grid 1"
                      className="absolute object-cover w-full h-auto -top-10"
                    />
                  </PhotoView>
                </motion.div>

                {/* 17 */}
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
                  <PhotoView src={Img18}>
                    <img
                      src={Img18}
                      alt="Grid 1"
                      className="object-cover w-full h-[50%] rounded-xl"
                    />
                  </PhotoView>
                  <div
                    className={`lg:h-[35vh] flex flex-col gap-4 bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-3 `}
                  >
                    <PhotoView src={Img19}>
                      <img
                        src={Img19}
                        alt="Grid 1"
                        className="object-cover w-full h-auto rounded-xl"
                      />
                    </PhotoView>
                  </div>
                </motion.div>

                {/* 18 */}
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
                  <PhotoView src={Img20}>
                    <img
                      src={Img20}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>

                {/* 19 */}
                <motion.div
                  className={`relative lg:h-[35vh] bg-gray-100 overflow-hidden shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-4 ${
                    hoveredIndex !== null && hoveredIndex !== 6 ? "blur-sm" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  onMouseEnter={() => setHoveredIndex(6)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <PhotoView src={Img21}>
                    <img
                      src={Img21}
                      alt="Grid 1"
                      className="absolute object-cover w-full h-auto rounded-xl -top-24"
                    />
                  </PhotoView>
                </motion.div>

                {/* 20 */}
                <motion.div
                  className={`overflow-hidden relative lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-3 ${
                    hoveredIndex !== null && hoveredIndex !== 7 ? "blur-sm" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  onMouseEnter={() => setHoveredIndex(7)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <PhotoView src={Img26}>
                    <img
                      src={Img26}
                      alt="Grid 1"
                      className="absolute object-cover w-full h-auto rounded-xl -top-28"
                    />
                  </PhotoView>
                </motion.div>

                {/* 21 */}
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
                  <PhotoView src={Img23}>
                    <img
                      src={Img23}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>

                {/* 22  */}
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
                  <PhotoView src={Img24}>
                    <img
                      src={Img24}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>

                {/* 23 */}
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
                  <PhotoView src={Img22}>
                    <img
                      src={Img22}
                      alt="Grid 1"
                      className="object-cover w-full h-[50%] rounded-xl"
                    />
                  </PhotoView>
                  <div
                    className={`lg:h-[35vh] flex flex-col gap-4 bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl overflow-hidden col-span-3 `}
                  >
                    <PhotoView src={Img2}>
                      <img
                        src={Img2}
                        alt="Grid 1"
                        className="object-cover w-full h-full rounded-xl"
                      />
                    </PhotoView>
                  </div>
                </motion.div>

                {/* 24 */}
                <motion.div
                  className={`relative overflow-hidden lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-4 ${
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
                  <PhotoView src={Img27}>
                    <img
                      src={Img27}
                      alt="Grid 1"
                      className="absolute object-cover w-full h-auto rounded-xl -top-36"
                    />
                  </PhotoView>
                </motion.div>

                {/* 25 */}
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
                  <PhotoView src={Img28}>
                    <img
                      src={Img28}
                      alt="image1"
                      className="absolute object-cover w-full h-AUTO -top-5"
                    />
                  </PhotoView>
                </motion.div>

                {/* 26 */}
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
                  <PhotoView src={Img29}>
                    <img
                      src={Img29}
                      alt="image1"
                      className="absolute object-cover w-full h-full bottom-0"
                    />
                  </PhotoView>
                </motion.div>

                {/* 27 */}
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
                  <PhotoView src={Img15}>
                    <img
                      src={Img15}
                      alt="Grid 1"
                      className="object-cover w-full h-full"
                    />
                  </PhotoView>
                </motion.div>

                {/* 28 */}
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
                  <PhotoView src={Img31}>
                    <img
                      src={Img31}
                      alt="Grid 1"
                      className="object-cover w-full h-full"
                    />
                  </PhotoView>
                </motion.div>

                {/* 29 */}
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
                  <PhotoView src={Img32}>
                    <img
                      src={Img32}
                      alt="Grid 1"
                      className="object-cover w-full h-[50%] rounded-xl"
                    />
                  </PhotoView>
                  <div
                    className={`relative overflow-hidden lg:h-[35vh] flex flex-col gap-4 bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl  col-span-3 `}
                  >
                    <PhotoView src={Img33}>
                      <img
                        src={Img33}
                        alt="Grid 1"
                        className="absolute  object-cover w-full h-auto -bottom-20 rounded-xl"
                      />
                    </PhotoView>
                  </div>
                </motion.div>

                {/* 30 */}
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
                  <PhotoView src={Img34}>
                    <img
                      src={Img34}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>

                {/* 31 */}
                <motion.div
                  className={`relative lg:h-[35vh] bg-gray-100 overflow-hidden shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-4 ${
                    hoveredIndex !== null && hoveredIndex !== 6 ? "blur-sm" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  onMouseEnter={() => setHoveredIndex(6)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <PhotoView src={Img35}>
                    <img
                      src={Img35}
                      alt="Grid 1"
                      className="absolute object-cover w-full h-auto rounded-xl -top-24"
                    />
                  </PhotoView>
                </motion.div>

                {/* 32 */}
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
                  <PhotoView src={Img36}>
                    <img
                      src={Img36}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>

                {/* 33 */}
                <motion.div
                  className={`relative overflow-hidden lg:h-[35vh] bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-xl col-span-3 ${
                    hoveredIndex !== null && hoveredIndex !== 8 ? "blur-sm" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  onMouseEnter={() => setHoveredIndex(8)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <PhotoView src={Img37}>
                    <img
                      src={Img37}
                      alt="Grid 1"
                      className="absolute object-cover w-full h-auto top-0 rounded-xl"
                    />
                  </PhotoView>
                </motion.div>

                {/* 34  */}
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
                  <PhotoView src={Img38}>
                    <img
                      src={Img38}
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
                  <PhotoView src={Img35}>
                    <img
                      src={Img35}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>

                {/* 12 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
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
                {/* 13 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img9}>
                    <img
                      src={Img9}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 14 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img10}>
                    <img
                      src={Img10}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 15 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img11}>
                    <img
                      src={Img11}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 16 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img12}>
                    <img
                      src={Img12}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 17 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img13}>
                    <img
                      src={Img13}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 18 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img14}>
                    <img
                      src={Img14}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 15 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img15}>
                    <img
                      src={Img15}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 16 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img16}>
                    <img
                      src={Img16}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 17 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img17}>
                    <img
                      src={Img17}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 18 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img18}>
                    <img
                      src={Img18}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 19 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img19}>
                    <img
                      src={Img19}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 20 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img20}>
                    <img
                      src={Img20}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 21 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img21}>
                    <img
                      src={Img21}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 22 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img22}>
                    <img
                      src={Img22}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 23 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img23}>
                    <img
                      src={Img23}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 24 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img24}>
                    <img
                      src={Img24}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 25 */}
                <motion.div
                  className="h-[35vh] relative overflow-hidden  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img25}>
                    <img
                      src={Img25}
                      alt="Grid 1"
                      className="object-cover w-full h-auto rounded-xl absolute -top-20l"
                    />
                  </PhotoView>
                </motion.div>
                {/* 26 */}
                <motion.div
                  className="h-[35vh] relative overflow-hidden  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img26}>
                    <img
                      src={Img26}
                      alt="Grid 1"
                      className="object-cover w-full h-auto rounded-xl absolute -top-20"
                    />
                  </PhotoView>
                </motion.div>
                {/* 27 */}
                <motion.div
                  className="h-[35vh] relative overflow-hidden bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img27}>
                    <img
                      src={Img27}
                      alt="Grid 1"
                      className="object-cover w-full h-auto rounded-xl absolute -top-20"
                    />
                  </PhotoView>
                </motion.div>
                {/* 28 */}
                <motion.div
                  className="h-[35vh] relative overflow-hidden  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img28}>
                    <img
                      src={Img28}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 29 */}
                <motion.div
                  className="h-[35vh] relative overflow-hidden  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img29}>
                    <img
                      src={Img29}
                      alt="Grid 1"
                      className="object-cover w-full h-auto rounded-xl absolute -top-20"
                    />
                  </PhotoView>
                </motion.div>
                {/* 30 */}
                <motion.div
                  className="h-[35vh] relative overflow-hidden  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img30}>
                    <img
                      src={Img30}
                      alt="Grid 1"
                      className="object-cover w-full h-auto rounded-xl absolute -top-20"
                    />
                  </PhotoView>
                </motion.div>
                {/* 31 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img31}>
                    <img
                      src={Img31}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 32 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img32}>
                    <img
                      src={Img32}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 33 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img33}>
                    <img
                      src={Img33}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 34 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img34}>
                    <img
                      src={Img34}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 35 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img35}>
                    <img
                      src={Img35}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 36 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img36}>
                    <img
                      src={Img36}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 37 */}
                <motion.div
                  className="h-[35vh]  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img37}>
                    <img
                      src={Img37}
                      alt="Grid 1"
                      className="object-cover w-full h-full rounded-xl"
                    />
                  </PhotoView>
                </motion.div>
                {/* 38 */}
                <motion.div
                  className="h-[35vh] relative overflow-hidden  bg-gray-100 shadow ring-1 ring-inset ring-gray-200 rounded-[8px] "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <PhotoView src={Img38}>
                    <img
                      src={Img38}
                      alt="Grid 1"
                      className="object-cover w-full h-auto rounded-xl absolute -top-20"
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
