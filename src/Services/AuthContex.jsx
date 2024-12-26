import React, { createContext, useContext, useState } from "react";

// Create Context
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// Provider Component
export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);

	const login = () => {
		setIsAuth(true);
	};

	// Function to log out
	const logout = () => {
		setIsAuth(false);
	};

	return (
		<AuthContext.Provider value={{ isAuth, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
