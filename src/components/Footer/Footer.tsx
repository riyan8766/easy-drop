import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import footerImg from "../../assets/Images/footerLogo.png";

const Footer: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-white">
      <footer className="container mx-auto pt-20 pb-5 px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeIn}>
            <div className="mb-4">
              <img
                src={footerImg}
                alt="Easy Drop Travel Logo"
                className="h-10 w-auto"
              />
            </div>
            <h4 className="font-medium mb-3">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/easydroptravels512"
                target="_blank"
                aria-label="Facebook"
                className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
              >
                <FaFacebookF className="text-[#2458A4]" />
              </a>
              <a
                href="https://www.instagram.com/easydroptravel/"
                target="_blank"
                aria-label="Instagram"
                className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
              >
                <FaInstagram className="text-[#2458A4]" />
              </a>
              <a
                href="https://www.linkedin.com/company/easy-drop-travel/posts/?feedView=all"
                target="_blank"
                aria-label="LinkedIn"
                className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
              >
                <FaLinkedinIn className="text-[#2458A4]" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h4 className="font-semibold mb-4 text-sm sm:text-base md:text-lg">Our Destinations</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Gilgit-Baltistan"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  Gilgit
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Hunza_Valley"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  Hunza
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Skardu"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  Skardu
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Fairy_Meadows_National_Park"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  Fairy Meadows
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h4 className="font-semibold mb-4 text-sm sm:text-base md:text-lg">Our Activities</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#Pick-and-Drop" className="hover:text-gray-300">
                  Pick & Drop Services
                </a>
              </li>
              <li>
                <a href="/#travel-tour" className="hover:text-gray-300">
                  Travel & Tour Service
                </a>
              </li>
              <li>
                <a href="/#drivers" className="hover:text-gray-300">
                  Drivers
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h4 className="font-semibold mb-4 text-sm sm:text-base md:text-lg">About Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-gray-300 text-sm sm:text-base md:text-lg">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/home#team" className="hover:text-gray-300 text-sm sm:text-base md:text-lg">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="/about#faq" className="hover:text-gray-300 text-sm sm:text-base md:text-lg">
                  FAQs
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h4 className="font-semibold text-sm sm:text-base md:text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <span>0355 4173434</span>
              </li>
              <li>
                <a
                  href="mailto:easydroptravels@gmail.com"
                  className="hover:text-gray-300"
                >
                  easydroptravels@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 pt-4 text-center text-sm sm:text-base md:text-lg border-t border-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          © 2025 EasyDrop. All Rights Reserved.
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
