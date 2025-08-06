import { motion } from "framer-motion";
import React from "react";
interface SliderProps {
  name: string;
  color: string;
  image: string;
  review: string;

}
const SliderCard: React.FC<SliderProps> = ({
  name,
  color,
  image,
  review,
}) => {
  return (
    <motion.div
      className="Slider_cards bg-white w-full h-[323px] border  border-[#1F75BA]/20 rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="flex flex-col items-center sm:items-start flex-shrink-0">
        <div className="mb-2 sm:mb-4">
          <img
            src={image || "/placeholder.svg"}
            alt={`${name}'s profile`}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
          />
        </div>
        <h3 className="font-semibold text-base sm:text-lg text-center sm:text-left">
          {name} <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] 
            text-transparent bg-clip-text font-bold">{color}</span>
        </h3>
      </div>

      <p className="text-[#787878] text-sm font-normal leading-[22px] mt-2 flex-grow overflow-hidden">
        {review}
      </p>
    </motion.div>




  );
};

export default SliderCard;
