import WhyChooseUs from "../../components/WhyUs/WhyUs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SliderCard from "../../components/SliderCard/SliderCard";
import { SliderData } from "../../components/SliderCard/SliderData";
import PickDropForm from "../../components/Form/PickDropForm";
import { motion } from "framer-motion";
import CounterList from "../../counters/CounterList";
import Testimonials from "../../components/SliderComp/Testimonials";
import group from "../../assets/Images/group.png"
import kiu from "../../assets/Images/kiu.png"
import school from "../../assets/Images/school.png"
import Akhss from "../../assets/Images/Akhss.png"
import elysian from "../../assets/Images/elysian.png"
import police from "../../assets/Images/police.png"
import Footer from '../../components/Footer/Footer';
import { FaArrowRight } from "react-icons/fa";

const Pick = () => {
  const schools = [
    {
      name: "International School",
      logo: kiu,
    },
    {
      name: "College Logo",
      logo: school,
    },
    {
      name: "Modern Education",
      logo: Akhss,
    },
    {
      name: "Elysian",
      logo: elysian,
    },
    {
      name: "Educational Institution",
      logo: police,
    },
  ];

  return (
    <>
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto lg:mt-[8%] md:mt-[10%] sm:mt-[25%] mt-[30%] px-4 flex flex-col lg:flex-row items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full max-w-2xl px-2 lg:px-0 lg:text-left text-start"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-[clamp(28px,6vw,50px)] font-semibold mb-4 sm:mb-6 leading-[clamp(36px,7vw,65px)] "
            >
              Your <span className="text-[#2E2C80]">Journey, </span> <br />
              Our Commitment
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
              className="text-[clamp(14px,1.5vw,18px)] leading-[clamp(22px,2vw,30px)] mb-6"
            >
              Easy Drop offers reliable pick-and-drop services for students, schools,
              colleges, and businesses with monthly fixed-budget plans. We <span className="text-[#2E2C80] font-bold">ensure safe, punctual,</span> and hassle-free commuting every day.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-[140px] h-[45px] sm:h-[50px] rounded-md text-[clamp(14px,1vw,18px)] font-medium text-white transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)]"
            >
              Subscribe
            </motion.button>
          </motion.div>

          <div className="w-full flex justify-center lg:justify-end">
            <motion.img
              src={group}
              alt="Pick & Drop Service"
              className="w-full max-w-[380px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[550px] h-auto object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false }}
            />
          </div>
        </div>
      </section>


      <div>
        <CounterList />
      </div>

      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            className="max-w-3xl mb-14"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-4xl leading-[57px] font-semibold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Drive Safe,
              </span>{" "}
              Arrive Happy!
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg leading-[27px] max-w-3xl text-[#666666]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Your safety inspires us to go the extra mile, ensuring every
              journey is secure, reliable, and stress-free.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".prev-button",
                nextEl: ".next-button",
              }}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1280: { slidesPerView: 3 },
                1380: { slidesPerView: 2 },
                1480: { slidesPerView: 4 },
              }}
              className="!pb-20"
            >
              {SliderData.map((review, index) => (
                <SwiperSlide key={index}>
                  <SliderCard {...review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <div className="flex flex-col sm:flex-row border-b-2 border-[#c1d0e5] justify-between items-center lg:pb-10 relative w-full sm:w-[560px]">
            <h2 className="text-xl sm:text-2xl font-bold leading-[32px] sm:leading-[44px] lg:mb-4 sm:mb-0">
              Need <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">Pick & Drop</span>
            </h2>
            <div className="flex gap-4 sm:gap-[100px] items-center">
              <button className="next-button cursor-pointer w-12 h-12 flex items-center justify-center">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div>
        <PickDropForm />
      </div>


      <div>
        <WhyChooseUs />
      </div>

      <div>
        <Testimonials />
      </div>

      {/* Our Trusted School Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-8 sm:py-12 md:py-16 bg-white"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-tight">
              Our Trusted{" "}
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                School and Colleges
              </span>
              , Universities
            </h2>
            <p className="text-[#666666] font-normal leading-relaxed max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Reliable transportation for schools, colleges, and universities,
              ensuring safe and timely commutes every day
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {schools.map((school, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-[197px] aspect-square flex items-center justify-center"
              >
                <img
                  src={school.logo || "/placeholder.svg"}
                  alt={school.name}
                  className="w-full h-full max-w-[98px] max-h-[96px] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Pick;
