import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Tabs from "../../components/Tabs/Tabs";
import Form from "../../components/Form/Form";
import { motion } from "framer-motion";
import CounterList from "../../counters/CounterList";
import Testimonials from "../../components/SliderComp/Testimonials";
import baltit from "../../assets/Images/baltit.png";
import deosai from "../../assets/Images/deosai.png";
import ghizer from "../../assets/Images/ghizer.png";
import rakaposhi from "../../assets/Images/rakaposhi.png";
import skardu from "../../assets/Images/skardu.png";
import gilgit from "../../assets/Images/gilgit.png";
import background from "../../assets/Images/background.jpg";
import Footer from "../../components/Footer/Footer";
interface SlideData {
  title: string[];
  description: string;
  image: string;
}

const slides: SlideData[] = [
  {
    title: ["Your Adventure,", "our Mission"],
    description:
      "Easy Drop Travels Offers Reliable Travel Services With Tailored Packages For Families, Businesses, And Solo Travelers. We Ensure Safe, Comfortable, And Hassle-Free Journeys Every Time.",
    image: "/images/background.jpg",
  },
  {
    title: ["Explore", "the World"],
    description:
      "Discover breathtaking destinations and create unforgettable memories with our expertly curated travel experiences. From serene beaches to bustling cities, we've got you covered.",
    image: "/images/background.jpg",
  },
  {
    title: ["Travel", "Worry-Free"],
    description:
      "Let us handle the details while you focus on enjoying your journey. Our comprehensive travel packages ensure a smooth and stress-free experience from start to finish.",
    image: "/images/background.jpg",
  },
];

const Tour: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="mx-auto relative h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}></div>

        <div className="container z-10 text-start flex flex-col items-start px-4 sm:px-8">
          <h1 className="mb-4 font-semibold text-white text-[clamp(28px,5vw,64px)] leading-[clamp(36px,6vw,70px)]">
            {slides[currentSlide].title.map((line, index) => (
              <span key={index} className="block">{line}</span>
            ))}
          </h1>

          <p className="mb-8 max-w-xl text-[clamp(14px,1.5vw,20px)] leading-[clamp(24px,2vw,30px)] font-normal text-white/90">
            {slides[currentSlide].description}
          </p>

          <button className="rounded-md bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] px-6 py-3 text-[clamp(12px,1vw,16px)] font-semibold text-white transition-all hover:shadow-[0_0_12px_rgba(36,88,164,0.5)] cursor-pointer">
            Make your trip
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="cursor-pointer flex h-[clamp(32px,4vw,40px)] w-[clamp(32px,4vw,40px)] items-center justify-center border border-white rounded-full bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] text-white"
            aria-label="Previous slide"
            style={{ padding: "8px" }}
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="cursor-pointer flex h-[clamp(32px,4vw,40px)] w-[clamp(32px,4vw,40px)] items-center justify-center border border-white rounded-full bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] text-white"
            aria-label="Next slide"
            style={{ padding: "8px" }}
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>

      <div>
        <Tabs />
      </div>

      <div>
        <CounterList />
      </div>

      <motion.section
        className="py-16 px-4 md:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold mb-4">
              Recent{" "}
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Gallery
              </span>
            </h2>
            <p className="text-[#666666] text-lg font-normal leading-[30px]  max-w-[1119px]">
              From serene valleys to majestic mountains, every trip is crafted
              with your comfort and exploration in mind. Let us handle the
              logistics while you create memories that last a lifetime. Start
              your adventure today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              className="relative rounded-2xl overflow-hidden md:col-span-2 row-span-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <img
                src={baltit}
                alt="Hunza Baltit Fort"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                  Hunza Baltit Fort
                </h3>
              </div>
            </motion.div>

            {[
              { src: deosai, alt: "Deosai Lake", height: "h-[240px]" },
              { src: skardu, alt: "Skardu", height: "h-[240px]" },
              { src: ghizer, alt: "Ghizer Valley", height: "h-[300px]" },
              { src: gilgit, alt: "Gilgit", height: "h-[300px]" },
              { src: rakaposhi, alt: "Rakhaposhi", height: "h-[300px]" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full ${item.height} object-cover`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                    {item.alt}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>


          <div className="text-center mt-12">
            <motion.button
              className="cursor-pointer w-full sm:w-[130px] lg:w-[156px] rounded-md bg-gradient-to-b from-[#2E2C80] to-[#2458A4] px-6 py-4 text-[14px] font-semibold text-white leading-[17.07px] hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Explore Now
            </motion.button>
          </div>
        </div>
      </motion.section>

      <section>
        <Form />
      </section>

      <div>
        <Testimonials />
      </div>

      <div>
        <Footer />
      </div>

    </>
  );
};

export default Tour;
