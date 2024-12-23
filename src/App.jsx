import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Admin/Login";
import PrivateRoute from "./Services/PrivateRoute";
import Home from "./Pages/Home";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function App() {
	const isAuthenticated = false;

	return (
		<BrowserRouter>
			<Toaster position="top-center" containerStyle={{ top: 60 }} />

			<div className="app bg-primarybg text-primarytext">
				<Routes>
					<Route path="/" element={<Home />} />

					{/* Admin Routes */}
					<Route path="/admin" element={<Login />} />
					<Route element={<PrivateRoute isAuth={isAuthenticated} />}>
						<Route path="/dashboard" element={<Admin />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}
export default App;
