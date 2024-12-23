import React from "react";
import { motion } from "framer-motion";

// Reusable component for text with animations
const AnimatedText = ({
	children,
	initial,
	animate,
	transition,
	className,
}) => (
	<motion.p
		className={className}
		initial={initial}
		animate={animate}
		transition={transition}
	>
		{children}
	</motion.p>
);

const AboutUs = () => {
	return (
		<div className="relative h-screen flex flex-col items-center justify-center px-4 py-4 overflow-hidden">
			<div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 ">
				<div className="bg__gradient w-1/5 h-1/5 absolute inset-0 bg-primary2 mix-blend-multiply filter blur-md rounded-full hidden md:block"></div>
				<div className="bg__gradient_main w-1/5 h-2/5 absolute inset-0 bg-primary2 mix-blend-multiply filter blur-md rounded-full hidden md:block"></div>
				<div className="max-w-screen-lg w-full px-4 py-2">
					{/* First Section */}
					<div className="flex items-center space-x-4 mb-4">
						<p className="text-[120px] font-serif  text-gray-500 leading-none">
							Where
						</p>
						<p className="text-gray-700 text-lg max-w-[550px]">
							Now through this web site, he is ready to guide you towards your
							academic goals with personalized support and resourses.
						</p>
						<p className="text-[120px] font-serif text-gray-500 leading-none">
							Where
						</p>
						<AnimatedText
							className="text-gray-700 text-lg max-w-[500px]"
							initial={{ opacity: 1, x: 0, y: 0 }}
							animate={{ opacity: 1, x: -360, y: 400 }}
							transition={{ duration: 2.8, ease: "easeInOut" }}
						>
							Now through this web site, he is ready to guide you towards your
							academic goals with personalized support and resources.
						</AnimatedText>
					</div>

					{/* Second Section */}
					<div className="flex items-center mb-4">
						<p className="text-[120px] font-serif ml-12 text-gray-800 leading-none">
							<span className="text-gray-500">Biology and</span>
							<AnimatedText
								initial={{ opacity: 1, x: -50, y: 0 }}
								animate={{ opacity: 0, x: -50, y: 0 }}
								transition={{ duration: 1.4 }}
								className="text-gray-500"
							>
								Biology and
							</AnimatedText>
							<AnimatedText
								initial={{ opacity: 0, x: 330, y: -120 }}
								animate={{ opacity: 1, x: 330, y: -120 }}
								transition={{ duration: 1.4, delay: 1 }}
								className="text-gray-500"
							>
								Biology and
							</AnimatedText>
						</p>
					</div>

					{/* Third Section */}
					<div className="flex items-center mb-4">
						<p className="text-[120px] font-serif text-gray-500 leading-none">
							Technology
						</p>
						<p className="text-gray-700 text-lg max-w-[550px]"></p>
						<div className="flex items-center">
							<AnimatedText
								className="text-[120px] font-serif text-gray-500 leading-none"
								initial={{ opacity: 1, x: 0, y: -110 }}
								animate={{ opacity: 1, x: 0, y: -110 }}
								transition={{ duration: 2.8, ease: "easeInOut" }}
							>
								Technology
							</AnimatedText>
							<AnimatedText
								className="text-gray-700 text-lg max-w-[550px]"
								initial={{ opacity: 1, x: 0, y: 0 }}
								animate={{ opacity: 1, x: -600, y: -250 }}
								transition={{ duration: 2.8, ease: "easeInOut" }}
							>
								His dedication and expertise have made him a trusted mentor for
								Advanced Level students.
							</AnimatedText>
						</div>

						{/* Fourth Section */}
						<div className="flex items-center mb-4 space-x-4">
							<p className="text-gray-700 text-lg max-w-[500px]">
								Graduating from the University of Peradeniya, Dr. Charitha
								Munasinghe has over 10 years of experience in teaching biology
								and helping students gain admission to Sri Lanka's top state
								universities.
							</p>
							<p className="text-[120px] font-serif text-gray-500 leading-none">
								meet
							</p>
						</div>
						<AnimatedText
							className="text-gray-700 text-lg max-w-[550px]"
							initial={{ opacity: 1, x: 0, y: 0 }}
							animate={{ opacity: 1, x: 400, y: -520 }}
							transition={{ duration: 2.8, ease: "easeInOut" }}
						>
							Graduating from the University of Peradeniya, Dr. Charitha
							Munasinghe has over 10 years of experience in teaching biology and
							helping students gain admission to Sri Lanka's top state
							universities.
						</AnimatedText>
						<AnimatedText
							className="text-[120px] font-serif text-gray-500 leading-none"
							initial={{ opacity: 1, x: 0, y: -110 }}
							animate={{ opacity: 1, x: 0, y: -110 }}
							transition={{ duration: 2.8, ease: "easeInOut" }}
						>
							meet
						</AnimatedText>
					</div>

					{/* Fifth Section */}
					<div className="flex items-center mb-4 space-x-4">
						<AnimatedText
							className="text-gray-700 text-lg max-w-[350px]"
							initial={{ opacity: 0, x: 650, y: -330 }}
							animate={{ opacity: 1, x: 650, y: -330 }}
							transition={{ duration: 1.4, ease: "easeInOut", delay: 1 }}
						>
							His dedication and expertise have made him a trusted mentor for
							Advanced Level students.
						</AnimatedText>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
