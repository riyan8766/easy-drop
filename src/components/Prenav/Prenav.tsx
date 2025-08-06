import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Prenav: React.FC = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] fixed top-0 right-0 left-0 z-50">
      <div className="container h-[45px] text-white px-4 flex flex-col md:flex-row justify-around items-center text-xs mx-auto">
        <div className="hidden md:flex items-center space-x-4 md:space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-[16px]" />
            <span className="text-xs sm:text-sm">+92-3454272735</span>  
            <div className="border-l border-[#FFFFFF1A] h-10"></div>
          </div>
          <div className="flex items-center space-x-2">
            <FaLocationDot className="text-[16px]" />
            <span className="text-xs sm:text-sm">City, Address</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <a href="https://www.facebook.com/easydroptravels512" target="_blank" className="flex items-center space-x-1 text-xs sm:text-sm">
            <FaFacebook className="text-[16px]" />
            <span className="text-base">Facebook</span>
          </a>
          <div className="border-l border-[#FFFFFF1A] h-10"></div>
          <a href="https://www.instagram.com/easydroptravel/" target="_blank" className="flex items-center space-x-1 text-xs sm:text-sm">
            <FaInstagram className="text-[16px]" />
            <span>Instagram</span>
          </a>
          <div className="border-l border-[#FFFFFF1A] h-10"></div>
          <a href="https://www.linkedin.com/company/pick-and-drop/" target="_blank" className="flex items-center space-x-1 text-xs sm:text-sm">
            <FaYoutube className="text-[16px]" />
            <span>Youtube</span>
          </a>
        </div>
      </div>
    </div>


  );
};

export default Prenav;
