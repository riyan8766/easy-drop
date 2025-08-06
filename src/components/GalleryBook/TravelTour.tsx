import Gallery from "./Gallery";
import { motion } from "framer-motion";


const TravelTour: React.FC = () => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-25">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 sm:text-start text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-[#2E2C80]">Travel & Tour</span> Service
            </motion.h1>

            <motion.p
              className="max-w-[500px] text-gray-800 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg sm:text-start text-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore the world with our reliable Travel & Tour services! We offer customized packages, hassle-free bookings,
              and exceptional support for unforgettable journeys. Whether it’s a family vacation, a solo adventure,
              or a corporate trip, we ensure a seamless travel experience. Let us make your dream destinations a reality!
            </motion.p>

            <motion.button
              className="w-full sm:w-[160px] h-[45px] rounded-md text-base sm:text-lg font-medium text-white transition-colors bg-gradient-to-b from-[#2E2C80] to-[#2458A4] hover:from-[#252369] hover:to-[#1d4683] cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 0, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Gallery />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TravelTour;
