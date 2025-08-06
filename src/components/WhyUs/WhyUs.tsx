import type React from "react";
import { easeInOut, motion } from "framer-motion";
import Car from "../../assets/Images/Car.png"
import gcar from "../../assets/Images/gcar.png"
import location from "../../assets/Images/location.png"

interface FeatureCard {
  title: string;
  description: string;
  icon1: string;
  icon2: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "Pick & Drop",
    description:
      "Effortless commuting made simple with our Pick & Drop service, ensuring a comfortable ride to your destination.",
    icon1: gcar,
    icon2: location,
  },
  {
    title: "Safe & Secure",
    description:
      "Ensuring safety, punctuality, and comfort with professional drivers and well-maintained vehicles.",
    icon1: Car,
    icon2: location,
  },
  {
    title: "Anytime Reservation",
    description:
      "Enjoy the flexibility of making reservations at your convenience with our Anytime Reservation service.",
    icon1: gcar,
    icon2: location,
  },
  {
    title: "Pick & Drop",
    description:
      "Effortless commuting made simple with our Pick & Drop service, ensuring a comfortable ride to your destination.",
    icon1: gcar,
    icon2: location,
  },
];
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut, // ✅ FIXED
    },
  },
};

const WhyChooseUs: React.FC = () => {
  return (
    <motion.section
      className="py-12 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Why{" "}
            <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
              choose us
            </span>
          </h2>
          <p className="text-[#666666] mt-2 text-sm sm:text-base md:text-lg">
            At EasyDrop, we prioritize your convenience, safety, and satisfaction. Whether it's reliable pick-and-drop
            <br />
            services or unforgettable travel experiences, we ensure top-notch service tailored to your needs.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <motion.div
            className="grid gap-10 md:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg w-full h-[284px]"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex justify-between mb-4">
                  <img src={card.icon1 || "/placeholder.svg"} alt={card.title} className="h-[63px] w-[50px]" />
                  <img src={card.icon2 || "/placeholder.svg"} alt={card.title} className="h-[50px] w-[41px]" />
                </div>
                <h3 className="text-2xl pt-6 leading-[30px] font-medium text-left">{card.title}</h3>
                <p className="mt-4 text-base font-normal leading-[24px] text-[#666666] text-left">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
