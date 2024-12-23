/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "Arial", "sans-serif"],
			},
			colors: {
				primarytext: "#383838", //Back text colour
				primarytext2: "#686868", //Back text colour
				primarytext3: "#606060", //Back text colour
				primarytextwhite: "#E3E3E3", //White text colour
				secondarytext: "#9333EA", //White text colour
				primary1: "#159D72", // Primary gradian Green Colour 1
				primary2: "#07958F",
				primary3: "#008861", // Primary gradian Green Colour 2
				primaryHover1: "#2CA680", // Primary gradian Green Colour 1
				primaryHover2: "#1F9F9A", // Primary gradian Green Colour 2
				accent: "#F59E0B", //  Secondary Green Colour
				background: "#EFEFEF", // Custom background color
			},
			spacing: {
				// Custom spacing (padding, margin, etc.)
				18: "4.5rem", // Custom spacing value
				22: "5.5rem",
			},
			boxShadow: {
				// Custom box shadows
				custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
			},
			animation: {
				orbit: "orbit 10s linear infinite",
				orbit2: "orbit2 15s ease-in-out infinite",
				orbit3: "orbit3 12s ease-in-out infinite",
			},
			keyframes: {
				orbit: {
					"0%": { transform: "translate(0, 0)" },
					"25%": { transform: "translate(10px, -10px)" },
					"50%": { transform: "translate(0, -20px)" },
					"75%": { transform: "translate(-10px, -10px)" },
					"100%": { transform: "translate(0, 0)" },
				},
				orbit2: {
					"0%": { transform: "translate(0, 0)" },
					"20%": { transform: "translate(15px, -5px)" },
					"40%": { transform: "translate(10px, -15px)" },
					"60%": { transform: "translate(-15px, -10px)" },
					"80%": { transform: "translate(-10px, 10px)" },
					"100%": { transform: "translate(0, 0)" },
				},
				orbit3: {
					"0%": { transform: "translate(0, 0)" },
					"15%": { transform: "translate(12px, -8px)" },
					"30%": { transform: "translate(20px, 5px)" },
					"50%": { transform: "translate(0, 15px)" },
					"70%": { transform: "translate(-18px, 10px)" },
					"85%": { transform: "translate(-12px, -5px)" },
					"100%": { transform: "translate(0, 0)" },
				},
			},
		},
	},
	plugins: [],
};
