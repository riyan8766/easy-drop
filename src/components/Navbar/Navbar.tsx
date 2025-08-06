import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Pick & Drop", path: "/pick-drop" },
    { name: "Travel & Tour", path: "/travel" },
    { name: "Be a Partner", path: "/partner" },
  ];

  const handleContactClick = () => {
    if (location.pathname === "/") {
      document.getElementById("ContactForm")?.scrollIntoView({ behavior: "auto" });
    } else {
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  useEffect(() => {
    if (location.state?.scrollToContact) {
      document.getElementById("ContactForm")?.scrollIntoView({ behavior: "auto" });
    }
  }, [location]);

  return (
    <header className="fixed top-11 left-0 w-full bg-white z-50">
      <nav className="container mx-auto h-[90px] flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          src={Logo}
          alt="Logo"
          className="w-[150px] h-[40px] sm:w-[172px] sm:h-[50px]"
        />

        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-bold text-sm lg:text-base">
          {navLinks.map((link) => (
            <motion.li
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              key={link.name}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `pb-1 transition duration-300 hover:text-[#284393] ${isActive ? "border-b-2 border-[#284393] font-bold text-[#284393]" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        <button
          onClick={handleContactClick}
          className="hidden md:block w-[120px] h-[40px] lg:w-[134px] lg:h-[47px] rounded-lg text-sm lg:text-lg font-medium text-white
            transition-colors duration-200 bg-gradient-to-b from-[#2E2C80] to-[#2458A4] 
            hover:from-[#252369] hover:to-[#1d4683] cursor-pointer"
        >
          Contact Us
        </button>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white absolute top-[70px] left-0 w-full shadow-lg z-50"
        >
          <ul className="flex flex-col items-start space-y-4 py-6 mx-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `pb-1 transition duration-300 hover:text-blue-500 ${isActive ? "font-semibold md:border-b-2 md:border-blue-500" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>

              </li>
            ))}
            <button
              onClick={handleContactClick}
              className="w-[120px] h-[40px] rounded-lg text-sm font-medium text-white
                transition-colors duration-200 bg-gradient-to-r from-[#2E2C80] to-[#2458A4] 
                hover:from-[#252369] hover:to-[#1d4683]"
            >
              Contact Us
            </button>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
