import React from "react";
import { CardProps } from "../../Types/type";
import Card from "./Card";
import { motion } from "framer-motion";

import icon1 from "../../assets/CardIcons/pic and drop.png";
import icon2 from "../../assets/CardIcons/loction.png";
import icon3 from "../../assets/CardIcons/contact.png";
import icon4 from "../../assets/CardIcons/safe and secure.png";
import icon5 from "../../assets/CardIcons/vehicle.png";
import icon6 from "../../assets/CardIcons/call.png";

const cardData: CardProps[] = [
    {
        icon: <img src={icon1} alt="Pick & Drop" className="w-10 h-10 object-contain" />
        , title: "Pick & Drop",
        description: "Effortless commuting made simple with our Pick & Drop service, ensuring a comfortable ride to your destination."
    },
    {
        icon: <img src={icon2} alt="Multiple Locations" className="w-10 h-10 object-contain" />
        , title: "Multiple Locations",
        description: "Discover the convenience of our expansive service network, reaching lots of locations."
    },
    {
        icon: <img src={icon3} alt="Anytime Reservation" className="w-10 h-10 object-contain" />
        , title: "Anytime Reservation",
        description: "Enjoy the flexibility of making reservations at your convenience with our Anytime Reservation service."
    },
    {
        icon: <img src={icon4} alt="Safe & Secure" className="w-10 h-10 object-contain" />,
        title: "Safe & Secure",
        description: "Ensuring safety, punctuality, and comfort with professional drivers and well-maintained vehicles"
    },
    {
        icon: <img src={icon5} alt="Vehicle Options" className="w-10 h-10 object-contain" />,
        title: "Vehicle Options",
        description: "Choose from reliable, comfortable vehicles tailored to your travel needs with Easy Drop!"
    },
    {
        icon: <img src={icon6} alt="Polite Driver" className="w-10 h-10 object-contain" />,
        title: "Polite Driver",
        description: "Travel safely with Easy Drop’s polite and professional drivers, ensuring your comfort!"
    },
];

const CardList: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] px-4 sm:px-6 lg:px-8 py-20">
            <div className="container mx-auto max-w-screen-2xl">
                <div className="lg:text-center sm:text-start mb-12">
                    <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
                        Why <span className="text-[#2E2C80]">choose us</span>
                    </h1>
                    <p className="mt-2 text-gray-600 max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                        At EasyDrop, we prioritize your convenience, safety, and satisfaction. Whether it's reliable pick-and-drop services or unforgettable travel experiences, we ensure top-notch service tailored to your needs.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <Card {...card} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>

    );
};

export default CardList;
