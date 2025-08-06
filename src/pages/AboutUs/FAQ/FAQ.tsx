import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I register for monthly pick & drop services for college?",
    answer:
      "To register for Easy Drop’s monthly pick-and-drop service, simply visit our Contact page. Fill out the form with your details or give us a call, and we’ll arrange safe, punctual, and hassle-free commuting for you.",
  },
  {
    question: "Can I pay for a trip with Easypaisa?",
    answer: "Yes, we accept Easypaisa payments for all our services.",
  },
  {
    question: "What areas do you cover for pick-and-drop services?",
    answer: "We cover most areas within the city. Please contact us for specific locations.",
  },
  {
    question: "What safety measures do you follow?",
    answer:
      "We prioritize safety with regular vehicle maintenance, trained drivers, and strict safety protocols.",
  },
  {
    question: "Are your services available for individuals or groups?",
    answer: "Our services are available for both individuals and groups, depending on your needs.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6v mb-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-600 text-center mb-8 text-sm sm:text-base md:text-lg">
        Find answers to many of your questions by looking in our FAQs
      </p>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-[#F2F4F6] shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left text-gray-800 font-medium"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 text-sm sm:text-base">{item.question}</span>
              <div
                className={`cursor-pointer flex items-center justify-center text-center w-8 h-8 rounded-full transition-transform duration-300 sm:w-9 sm:h-9 ${openIndex === index
                  ? "bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-white rotate-90"
                  : "bg-white text-gray-800"
                }`}
              >
                <GoArrowRight />
              </div>
            </button>

            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700 text-sm sm:text-base">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
