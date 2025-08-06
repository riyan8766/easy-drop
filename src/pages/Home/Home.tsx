import CardList from "../../components/cards/cardList";
import SectionForth from "../../assets/sectionFourth.png"
import CounterList from "../../counters/CounterList";
import TravelTour from "../../components/GalleryBook/TravelTour";
import Driver from "../../Drivers/Driver";
import Testimonials from "../../components/SliderComp/Testimonials";
import ContactForm from '../../components/contactform/ContactForm';
import Footer from '../../components/Footer/Footer';
import { AnimatePresence, motion } from "framer-motion";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import driver from "../../assets/Driver.png"
import jeep from "../../assets/Jeep.png"
import V8 from "../../assets/mainV8.png"
import imxteam from "../../assets/ImxTeam.png"


const slides = [

  {
    image: slide2,
    heading: "Curated Adventures, Tailored for You",
    subtext: "From Your Door To Your Destination, EasyDrop Makes Travel Simple.",
  },
    {
    image: slide1,
    heading: "Reliable Pick & Drop – On Time, Every Time",
    subtext: "EasyDrop Brings You Safe, Comfortable Pickup And Drop-Off Service.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="w-full h-full bg-black/50 flex items-center mt-9">
              <div className="container mx-auto px-6 sm:px-12">
                <div className="text-white text-start max-w-3xl">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4 leading-snug">
                    {slides[current].heading}
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg mb-4 leading-sung">
                    {slides[current].subtext}
                  </p>
                  <a href="#ContactForm">
                    <button className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] px-17 py-4 rounded-lg text-white font-semibold hover:from-[#252369] hover:to-[#1d4683]">
                      Contact Us
                    </button>
                  </a>

                  <div className="mt-10 flex items-center gap-3">
                    <button
                      onClick={prevSlide}
                      className="border-1 border-white text-white rounded-full w-17 h-10 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-gray-100 transition-all hover:text-black"
                    >
                      <FaArrowLeft className="w-6 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="border-1 border-white text-white rounded-full w-17 h-10 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-gray-100 transition-all hover:text-black"
                    >
                      <FaArrowRight className="w-6 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <section id="team" className="bg-white py-20 relative overflow-hidden">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">
              Who <span className="text-[#2E2C80]">We Are</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              At EasyDrop, we provide reliable pick-and-drop services and unforgettable travel experiences.
              With a focus on safety and convenience, our professional team ensures timely commutes and scenic
              tours to breathtaking destinations like Gilgit-Baltistan. EasyDrop is your trusted partner for
              seamless transportation and memorable adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img
              src={jeep}
              alt="Jeep in mountains"
              className="rounded-md object-cover w-full h-[220px]"
            />
            <img
              src={imxteam}
              alt="IMX Team"
              className="rounded-md object-cover w-full h-[220px]"
            />
            <img
              src={V8}
              alt="V8 Vehicle"
              className="rounded-md object-cover w-full h-[220px]"
            />
            <img
              src={driver}
              alt="Driver on mountain road"
              className="rounded-md object-cover w-full h-[220px]"
            />
          </div>
        </div>
      </section>

      <section>
        <CardList />
      </section>

      <section id="travel-tour">
        <TravelTour />
      </section>

      <section id="Pick-and-Drop">
        <div className="container mx-auto max-w-screen-[1920px] flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8 lg:py-30">
          <motion.div
            className="w-full lg:w-1/2 lg:pr-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              <span className="text-[#2E2C80]">Pick & Drop</span> Service
            </h1>
            <p className="max-w-[500px] text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12">
              <span className="text-[#2E2C80] font-bold">Easydrop</span> ensures safe, reliable transportation for students
              and professionals. Affordable monthly plans designed for convenience and flexibility. Sign up online with ease
              and customize your schedule effortlessly. Experience smooth, stress-free commutes tailored to your routine.
            </p>
            <button className="w-full sm:w-[130px] h-[45px] sm:h-[47px] rounded-md text-base sm:text-lg font-medium text-white leading-[17.07px] text-center transition-colors bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] cursor-pointer">
              Subscribe
            </button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 0, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <img src={SectionForth} className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[559px] h-auto object-contain" alt="Pick & Drop Service" />
          </motion.div>
        </div>
      </section>

      <section>
        <CounterList />
      </section>

      <section id="drivers">
        <Driver />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <ContactForm />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}
