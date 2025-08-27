import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SliderImage from "../../assets/Images/SliderImage.png"

const testimonials = [
  {
    id: 1,
    name: "Muhammad Iqbal",
    position: "CEO - Ideometrix",
    message:
      "Easy Drop ensures my kids' safety with reliable pick-and-drop services and polite drivers. Highly recommended for parents!",
    avatar: SliderImage,
  },
  {
    id: 2,
    name: "Waqar",
    position: "Head - School",
    message:
      "Easy Drop is the perfect solution for college students! Affordable, punctual, and always reliable. It makes daily commuting hassle-free and convenient.",
    avatar: SliderImage,
  },
  {
    id: 3,
    name: "Aalam Khan",
    position: "Head - Drivers",
    message:
      "Professional drivers and well-maintained vehicles make Easy Drop perfect for office commutes and travel tours alike!",
    avatar: SliderImage,
  },
  {
    id: 4,
    name: "Sarah Ali",
    position: "Teacher",
    message:
      "Excellent service! The drivers are always on time, and the vehicles are comfortable and clean. Highly reliable!",
    avatar: SliderImage,
  },
];

const TestimonialsSlider = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };
  const handleNext = () => sliderRef.current?.slickNext();
  const handlePrev = () => sliderRef.current?.slickPrev();

  return (
    <motion.div
      className="max-w-[1920px] py-[150px] mx-auto bg-[#FFFFFF]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-3 lg:text-center sm:text-start">
        <h2 className="text-4xl font-bold text-gray-900">
          What <span className="text-[#2E2C80]">Our Customers</span> Say!
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-[600px] mx-auto">
          Real stories from satisfied travelers and daily commuters who trust
          EasyDrop for seamless journeys and unforgettable experiences.
        </p>
      </div>

      <div className="mt-12 container mx-auto relative">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="sm:p-10 p-2 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
            >
              <div className="testimonial transition-all duration-300 transform hover:scale-[1.1] rounded-b-lg">
                <div className="bg-white border-t-4 border-[#2E2C80] rounded-lg p-6 relative h-[300px] flex flex-col justify-between">
                  <p className="text-gray-700 italic mb-8">
                    "{testimonial.message}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <div className="hidden">                  <img
                    src='/LoctionIcon.png'
                    alt="Testimonial Icon"
                    className="absolute bottom-10 right-6 w-10 h-10 hidden"
                    
                  />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>

        <div className="absolute -bottom-16 left-0 right-0 flex justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="cursor-pointer text-white transition-colors duration-200 bg-gradient-to-b from-[#2E2C80] to-[#2458A4] hover:from-[#252369] hover:to-[#1d4683] w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          >
            <FiArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer text-white transition-colors duration-200 bg-gradient-to-b from-[#2E2C80] to-[#2458A4] hover:from-[#252369] hover:to-[#1d4683] w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          >
            <FiArrowRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSlider;
