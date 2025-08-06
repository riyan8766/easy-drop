import React, { useEffect } from "react";
import AboutGallery from "./AboutUsGallery/AboutGallery";
import CounterList from "../../counters/CounterList";
import FAQ from "./FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import { RightNowData } from "../../components/RightNow/RightNowData";
import RightNowCard from "../../components/RightNow/RightNowCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";


const AboutUs: React.FC = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");

      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          setTimeout(scrollToElement, 100);
        }
      };

      setTimeout(scrollToElement, 100);
    }
  }, [location]);


  return (
    <>
      {/* First Section */}
      <div>
        <AboutGallery />
      </div>

      {/* Second Section */}
      <section id="story" className="bg-[#F7F9FC] py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] 
               text-transparent bg-clip-text">Story</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base md:text-lg">
            Easy Drop was founded to make daily commuting stress-free and reliable for students, schools, colleges, and businesses.
            We identified the need for a safe and punctual pick-and-drop service and created a solution built on trust and convenience.
            Our focus is on providing reliable, hassle-free, and affordable travel. With fixed-budget plans, we ensure every ride is safe and on time.
            Easy Drop is your trusted partner for seamless daily commuting!
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base md:text-lg">
            Over the years, Easy Drop has become a trusted partner for families and organizations by providing reliable services with fixed-budget monthly plans.
            We prioritize safety, affordability, and convenience to make daily travel stress-free. Our services ensure every ride is secure and on time.
            With a focus on hassle-free commuting, we bridge the gap for students and professionals. Easy Drop is your dependable solution for seamless everyday travel.
          </p>
          <hr className="w-full max-w-md border-t border-gray-600 mb-2" />
          <p className="bg-gradient-to-r from-[#2E2C80] to-[#2458A4] 
               text-transparent bg-clip-text font-medium text-sm sm:text-base md:text-lg">
            Easy Drop
          </p>
        </div>
      </section>

      {/* Third Section */}
      <div>
        <CounterList />
      </div>

      {/* Slider Section */}
      <div className="w-full bg-white py-12 md:py-16">
        <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-48 2xl:px-48">
          <div className="max-w-3xl mb-14">
            <h2 className="text-4xl md:text-4xl leading-[57px] font-semibold mb-4 text-center">
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Right now
              </span>{" "}
              at Easy Drop
            </h2>
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            allowTouchMove={false}
            breakpoints={{
              1280: { slidesPerView: 3 },
              1380: { slidesPerView: 2 },
              1480: { slidesPerView: 4 },
            }}
          >
            {RightNowData.map((review, index) => (
              <SwiperSlide key={index} className="swiper-no-swiping">
                <RightNowCard
                  {...review}
                  showVerticalLine={index < RightNowData.length - 1}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-col sm:flex-row border-b border-[#c1d0e5] justify-between items-center mt-8 mb-5 relative w-full sm:w-[560px]">
            <h2 className="text-xl sm:text-2xl font-bold leading-[32px] sm:leading-[44px] mb-4 sm:mb-0">
              Be A Partner With Us
            </h2>
            <div className="flex gap-4 sm:gap-[100px] items-center">
              <button className="next-button cursor-pointer w-12 h-12 flex items-center justify-center">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Slider Section */}

      <section id="faq">
        <FAQ />
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
