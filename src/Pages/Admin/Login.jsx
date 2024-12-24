import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../Services/AuthContex";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { login } = useAuth();

	const handleSubmit = (e) => {
		e.preventDefault();

		// Call login function from AuthContext
		const success = login(username, password);

		if (success) {
			toast.success("Login successful!");
			navigate("/admin/dashboard");
		} else {
			toast.error("Invalid credentials. Please try again.");
		}
	};
	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	//credentials check
	// 	if (username === "admin@email.com" && password === "Admin") {
	// 		navigate("/admin/dashboard");
	// 	} else {
	// 		toast.error("Invalid credentials. Please try again.");
	// 	}
	// };

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
				<h2 className="text-2xl font-bold text-center text-gray-800">
					Admin Login
				</h2>
				<form className="space-y-4" onSubmit={handleSubmit}>
					{/* Username Input */}
					<div>
						<label
							htmlFor="username"
							className="block text-sm font-medium text-gray-700"
						>
							Username
						</label>
						<input
							id="username"
							type="text"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-primary1 focus:outline-none"
						/>
					</div>

					{/* Password Input */}
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:ring-2 focus:ring-primary1 focus:outline-none"
						/>
					</div>

					{/* Login Button */}
					<div>
						<button
							type="submit"
							className="w-full px-4 py-2 text-white bg-primary1 rounded-md hover:bg-primary2 focus:outline-none"
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
