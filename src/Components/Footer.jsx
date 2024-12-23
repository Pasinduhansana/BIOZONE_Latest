import React from "react";
import Logo from "../Assest/Web_Images/BioZoneLogo.png";
import Img1 from "../Assest/Web_Images/1.jpg";
import { IoArrowForward } from "react-icons/io5";
import {
	SubmitButton,
	SecondaryButton,
	PrimaryButton,
} from "./Elements/Buttons";
import bgimg from "../Assest/Web_Images/Bg Plexus.png";

const Footer = () => {
	return (
		<div className="relative flex flex-col w-full items-center justify-center overflow-hidden">
			<img
				src={bgimg}
				alt="bgimage"
				className="absolute bottom-0 lg:translate-y-1/3 -translate-y-1/6 left-10 lg:left-40 -rotate-[15deg] transform scale-y-[-1]"
			/>

			<div className="flex items-center justify-center -mb-5 lg:mb-0">
				<div className="flex flex-col items-center justify-between px-6 py-12 lg:px-64 md:flex-row md:py-4 ">
					{/* Text Section */}
					<div className="max-w-lg mb-8 md:text-left md:mb-0">
						<h2 className="mb-4 text-3xl font-medium lg:font-semibold text-gray-[#606060] px-1 md:text-left sm:text-left md:text-4xl">
							Ready to Elevate Your Biology Knowledge to Global Level?
						</h2>
						<p className="mb-6  text-primarytext3 text-[14px] lg:text-l px-1 md:text-left">
							Start your biology journey today!
						</p>
						{/* Buttons */}
						<div className="flex flex-col w-full lg:flex-row gap-2 lg:gap-5">
							<div className="flex items-center justify-center">
								<button className="flex flex-row items-center justify-center text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2  hover:scale-[1.02] rounded-[8px] lg:h-[48px] lg:w-[228px] h-[42px] w-[92vw] hover:text-white transition-all duration-200">
									Online Student Portal
									<IoArrowForward className="ml-2 w-6 h-6 mb-[0.5]" />
								</button>
							</div>
							<div className="flex items-center justify-center">
								<button className="text-primary1 border-2 bg-white border-primary1  hover:scale-[1.02] rounded-[8px] lg:h-[48px] lg:w-[156px] h-[42px] w-[92vw] hover:text-primaryHover2 transition-all duration-200">
									View Timetables
								</button>
							</div>
						</div>
					</div>

					{/* Image Section */}
					<div className="flex justify-center w-full md:w-1/2">
						<img src={Img1} alt="CTA Image" className="rounded-lg shadow-lg" />
					</div>
				</div>
			</div>

			<div className="flex w-full  items-center justify-between border-t-[1px] mt-5">
				<footer className=" px-4 pt-16 pb-6  sm:px-6 md:px-12 lg:px-64 font-poppins w-screen">
					{/* Grid Layout */}
					<div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between  lg:w-full">
						<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 md:gap-12 w-full lg:w-auto mt-5 lg:mt-0">
							{/* Navigation Section */}
							<div className="text-center lg:-mt-5 md:text-left">
								<h3 className="mb-2 font-[00] text-primary3">Navigation</h3>
								<ul className="space-y-2 pt-1 lg:pt-3 text-primarytext3 text-[13px] lg:text-[14px] font-thin">
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Home
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Gallery
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Location
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Contact us
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
								</ul>
							</div>

							{/* Socials Section */}
							<div className="text-center lg:-mt-5 md:text-left">
								<h3 className="mb-2 font-[400] text-primary3">Socials</h3>
								<ul className="space-y-2 pt-1 lg:pt-3 text-primarytext3 text-[13px] lg:text-[14px] font-thin">
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Facebook
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Instagram
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Youtube
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											TikTok
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
								</ul>
							</div>

							{/* Features Section */}
							<div className="text-center col-span-2 lg:col-span-1 lg:-mt-5 mb-2 md:text-left mt-6">
								<h3 className="mb-2 font-[400] text-primary3">Features</h3>
								<ul className="space-y-2 pt-1 lg:pt-3 text-primarytext3 text-[13px] lg:text-[14px] font-thin">
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Home
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Gallery
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Location
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
									<li>
										<a href="#" className="relative hover:text-primary3 group">
											Contact us
											<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary3 transition-all duration-300 group-hover:w-full"></span>
										</a>
									</li>
								</ul>
							</div>
						</div>

						{/* Newsletter Section */}
						<div className="order-first text-center md:text-left md:order-none lg:w-2/6 mb-5">
							<h3 className="mb-4 text-primarytext3 font-thin text-[15px] px-0 lg:text-[16px]">
								Stay tuned with the latest news and offers! Send us your email,
								and we'll keep you informed.
							</h3>
							<div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 w-[92vw] lg:w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryHover1"
								/>
								<div className="flex items-center justify-center">
									<button className="text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2  hover:scale-[1.02] rounded-[6px] h-[40px] w-[92vw] lg:w-[125px] hover:text-white font-normal transition-all duration-200">
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* Divider */}
					<div className="my-6 border-t border-gray-200"></div>

					{/* Footer Bottom */}
					<div className="flex flex-col items-center justify-between space-y-4 text-primarytext3 md:space-y-0 md:flex-row">
						{/* Logo */}
						<div className="flex items-center space-x-2">
							<img src={Logo} alt="Logo" className="w-10 h-10" />
							<span className="text-3xl font-medium text-primary3">
								BIOZONE
							</span>
						</div>
						{/* Copyright */}
						<p className=" text-[13px] lg:text-sm text-center md:text-left text-[#008661] sm:text-base">
							© 2024 BioZone by Webminds. All rights reserved.
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
