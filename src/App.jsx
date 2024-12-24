import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Admin/Login";
import PrivateRoute from "./Services/PrivateRoute";
import Home from "./Pages/Home";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SplashScreen from "./Components/SplashScreen";
import PreLoader from "./Components/PreLoader";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);
  const [isPreLoading, setIsPreLoading] = useState(true);
  const navigate = useNavigate();
  const isAuthenticated = false;

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, []);

  const handleLanguageChange = (lang) => {
    localStorage.setItem("language", lang);
    setIsLanguageSelected(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/home?lang=${lang}`);
    }, 3000); // Adjust the duration as needed
  };

  const handlePreLoader = () => {
    setIsPreLoading(false);
  };

  if (isPreLoading) {
    return <PreLoader onLoaded={handlePreLoader} />;
  }

  if (isLoading && !isLanguageSelected) {
    return <SplashScreen handleLanguageChange={handleLanguageChange} />;
  }

  return (
    <div className="app bg-primarybg text-primarytext">
      <Toaster position="top-center" containerStyle={{ top: 60 }} />
      <Routes>
        <Route
          path="/"
          element={<SplashScreen handleLanguageChange={handleLanguageChange} />}
        />
        <Route path="/home" element={<Home />} />
        {/* Admin Routes */}
        <Route path="/admin" element={<Login />} />
        <Route element={<PrivateRoute isAuth={isAuthenticated} />}>
          <Route path="/dashboard" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
