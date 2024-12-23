import React from "react";
import { IoArrowForward } from "react-icons/io5";

const PrimaryButton = ({ TextContent }) => {
	return (
		<div className="flex items-center justify-center">
			<button className="flex flex-row items-center justify-center text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2  hover:scale-[1.02] rounded-[8px] h-[48px] w-[228px] hover:text-white transition-all duration-200">
				{TextContent}
				<IoArrowForward className="ml-2 w-6 h-6 mb-[0.5]" />
			</button>
		</div>
		// hover:from-primaryHover1 hover:to-primaryHover2
	);
};

const SecondaryButton = ({ TextContent }) => {
	return (
		<div className="flex items-center justify-center">
			<button className="text-primary1 border-2 bg-white border-primary1  hover:scale-[1.02] rounded-[8px] h-[48px] w-[156px] hover:text-primaryHover2 transition-all duration-200">
				{TextContent}
			</button>
		</div>
		// hover:from-primaryHover1 hover:to-primaryHover2
	);
};

const SubmitButton = ({ TextContent }) => {
	return (
		<div className="flex items-center justify-center">
			<button className="text-primarytextwhite bg-gradient-to-r from-primary1 to-primary2  hover:scale-[1.02] rounded-[5px] h-[50px] w-[145px] hover:text-white transition-all duration-200">
				{TextContent}
			</button>
		</div>
	);
};

const SecondarySubmitButton = ({ TextContent }) => {
	return (
		<div className="flex items-center justify-center">
			<button className="text-primary1 border-2 bg-white border-primary1  hover:scale-[1.02] rounded-[5px] h-[48px] w-[145px] hover:text-primaryHover2 transition-all duration-200">
				{TextContent}
			</button>
		</div>
	);
};

export { PrimaryButton, SubmitButton, SecondaryButton, SecondarySubmitButton };
