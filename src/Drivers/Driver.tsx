import { motion } from "framer-motion";
import TopImage from "../assets/ImagesGallery/image1.png";
import BottomImage from "../assets/ImagesGallery/image2.png";

const Driver = () => {
    return (
        <div className="bg-gradient-to-r from-white to-[#E5F4FF]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Join Our Trusted <span className="text-[#2E2C80]">Drivers in Gilgit</span>
                        </h1>
                        <motion.p
                            className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Become a part of Easy Drop's trusted team of drivers in Gilgit! Enjoy flexible schedules, competitive
                            earnings, and the opportunity to provide safe and reliable transportation services to students, schools,
                            colleges, and businesses. Drive with pride and make a difference in your community.
                        </motion.p>
                        <motion.p
                            className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Join our mission to simplify daily commutes in Gilgit by ensuring safety, punctuality, and reliability.
                            As a trusted Easy Drop driver, you'll play a vital role in connecting people and making their journeys
                            smooth and stress-free.
                        </motion.p>
                        <motion.button
                            className="w-full sm:w-[130px] h-[47px] rounded-lg text-base sm:text-lg font-medium text-white bg-gradient-to-b from-[#2E2C80] to-[#2458A4] hover:from-[#3a3799] hover:to-[#3069b5] transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            Request code
                        </motion.button>
                    </motion.div>
                    <div className="relative w-full h-[400px] lg:h-[600px]">
                        <motion.div
                            className="absolute top-0 left-0 w-[300px] lg:w-[480px] h-[250px] lg:h-[400px]"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <img
                                src={BottomImage}
                                alt="Driver in car"
                                className="w-full h-full object-cover rounded-2xl shadow-lg"
                            />
                        </motion.div>
                        <motion.div
                            className="absolute bottom-8 right-0 w-[250px] lg:w-[350px] h-[180px] lg:h-[280px] translate-y-4"
                            initial={{ opacity: 0, x: 0, y: 50 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        >
                            <img
                                src={TopImage}
                                alt="Driver with passenger"
                                className="w-full h-full object-cover rounded-2xl shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Driver;
