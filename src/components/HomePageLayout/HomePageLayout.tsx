import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Prenav from "../Prenav/Prenav";
import { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";

const HomePageLayout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Prenav />
      <Navbar />
      <main>
        <Outlet />
      </main>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 opacity-100 hover:opacity-80"
        >
          <GoArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default HomePageLayout;
