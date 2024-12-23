import React from "react";
import {
	IoMailOutline,
	IoCallOutline,
	IoMapOutline,
	IoEarth,
} from "react-icons/io5";

// SubmitButton Component
const SubmitButton = ({ TextContent }) => {
	return (
		<div className="flex items-center justify-center">
			<button className="text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2 hover:scale-[1.02] rounded-[5px] h-[50px] w-[145px] hover:text-white transition-all duration-200">
				{TextContent}
			</button>
		</div>
	);
};

const SecondarySubmitButton = ({ TextContent }) => {
	return (
		<div className="flex items-center justify-center">
			<button className="text-primary1 border-2 bg-white border-primary1 hover:scale-[1.02] rounded-[5px] h-[48px] w-[145px] hover:text-primaryHover2 transition-all duration-200">
				{TextContent}
			</button>
		</div>
	);
};

const SecondarySubmitButton1 = ({ TextContent }) => {
	return (
		<div className="flex items-center justify-center">
			<button className="text-primary1 border-2 bg-white border-primary1 hover:scale-[1.02] rounded-[5px] h-[48px] w-full sm:w-[298px] hover:text-primaryHover2 transition-all duration-200">
				{TextContent}
			</button>
		</div>
	);
};

const ContactUs = () => {
	return (
		<div className="px-4 md:px-10 lg:px-20 xl:px-52 relative h-full md:h-screen flex items-center justify-center">
			{/* Container */}
			<div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-12 max-w-7xl mx-auto">
				{/* Left Side: Contact Form */}
				<div className="w-full md:w-1/3">
					<p className="text-gray-500 text-[16px] sm:text-[18px] md:text-base mb-4 text-center md:text-left">
						At BioZone, we’re happy to help with any inquiries or feedback.
						Please fill out the form below, and we’ll get back to you as soon as
						possible!
					</p>

					<form className="space-y-6 mt-12">
						{/* Input Fields */}
						<div className="relative">
							<label className="absolute left-4 top-[-15px] px-2 bg-white text-black-500 text-[14px] md:text-[16px]">
								Enter your name
							</label>
							<div className="border border-primary1 rounded-md p-2">
								<input
									type="text"
									className="w-full focus:outline-none placeholder-transparent"
								/>
							</div>
						</div>

						<div className="relative">
							<label className="absolute left-4 top-[-15px] px-2 bg-white text-black-500 text-[14px] md:text-[16px]">
								Enter your email address
							</label>
							<div className="border border-primary1 rounded-md p-2">
								<input
									type="email"
									className="w-full focus:outline-none placeholder-transparent"
								/>
							</div>
						</div>

						<div className="relative">
							<label className="absolute left-4 top-[-15px] px-2 bg-white text-black-500 text-[14px] md:text-[16px]">
								Subject
							</label>
							<div className="border border-primary1 rounded-md p-2">
								<input
									type="text"
									className="w-full focus:outline-none placeholder-transparent"
								/>
							</div>
						</div>

						<div className="relative">
							<label className="absolute left-4 top-[-15px] px-2 bg-white text-black-500 text-[14px] md:text-[16px]">
								Message
							</label>
							<div className="border border-primary1 rounded-md p-3">
								<textarea
									rows="4"
									className="w-full focus:outline-none placeholder-transparent"
								></textarea>
							</div>
						</div>

						{/* Buttons */}
						<div className="flex justify-end gap-3 md:gap-5">
							<SecondarySubmitButton TextContent="Clear" />
							<SubmitButton TextContent="Submit" />
						</div>
					</form>
				</div>

				<div
					className="hidden md:block self-stretch h-screen opacity-50"
					style={{
						background:
							"linear-gradient(to bottom, transparent 10px, #008000 10px, #008000 20px, transparent 20px)", // Green color
						backgroundSize: "100% 20px", // Adjust the 20px to control the gap between dashes
						width: "1px", // Adjust the width to match your original border
					}}
				></div>

				{/* Right Side: Contact Options */}
				<div className="w-full md:w-1/2">
					<h2 className="text-[#008861] text-4xl md:text-[64px] font-[600px] mb-4 lg:mb-10">
						Get in touch
					</h2>
					<p className="text-gray-500 text-sm sm:text-base mb-6">
						At BioZone, we’re here to assist you with any questions or feedback.
						Reach out to us - we’d love to hear from you!
					</p>

					{/* Contact Cards */}
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-x-36 lg:gap-10 sm:gap-6 mb-6 lg:mt-20">
						{/* Card 1 */}
						<div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4 relative h-28 w-full sm:w-64 md:w-60 sm:p-10">
							<span className="text-primary1 text-3xl absolute top-4 left-4 sm:top-5 sm:left-5">
								<IoMailOutline />
							</span>
							<div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-5">
								<p className="text-black font-semibold text-sm sm:font-medium">
									Email Us
								</p>
								<p className="text-black font-light text-xs sm:text-sm opacity-70">
									hello@biozone.lk
								</p>
							</div>
						</div>

						{/* Card 2 */}
						<div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4 relative h-28 w-full sm:w-64 md:w-60 sm:p-10">
							<span className="text-primary1 text-3xl absolute top-4 left-4 sm:top-5 sm:left-5">
								<IoCallOutline />
							</span>
							<div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-5">
								<p className="text-black font-semibold text-sm sm:font-medium">
									Call Us
								</p>
								<p className="text-black font-light text-xs sm:text-sm opacity-70">
									+94 77 721 9676
								</p>
							</div>
						</div>

						{/* Card 3 */}
						<div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4 relative h-28 w-full sm:w-64 md:w-60 sm:p-10">
							<span className="text-primary1 text-3xl absolute top-4 left-4 sm:top-5 sm:left-5">
								<IoMapOutline />
							</span>
							<div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-5">
								<p className="text-gray-700 font-semibold text-sm sm:font-medium">
									Visit Us
								</p>
								<p className="text-gray-500 text-xs sm:text-sm">
									Colombo 03, Kollupitiya
								</p>
							</div>
						</div>

						{/* Card 4 */}
						<div className="bg-white shadow-md rounded-md p-4 flex items-center gap-4 relative h-28 w-full sm:w-64 md:w-60 sm:p-10">
							<span className="text-primary1 text-3xl absolute top-4 left-4 sm:top-5 sm:left-5">
								<IoEarth />
							</span>
							<div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-5">
								<p className="text-gray-700 font-semibold text-sm sm:font-medium">
									Website
								</p>
								<p className="text-gray-500 text-xs sm:text-sm">
									www.biozone.lk
								</p>
							</div>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-6 w-full">
						<SecondarySubmitButton1 TextContent="Chat on Whatsapp" />
						<SecondarySubmitButton1 TextContent="Access to Telegram Group" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
