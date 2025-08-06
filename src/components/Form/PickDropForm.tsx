import type React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import formimg from "../../assets/Images/formimg.png";

interface FormData {
  name: string;
  contactNumber: string;
  location: string;
  pickup: string;
  droptiming: string;
  vehicleType: string;
  destination: string;
}

const PickDropForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNumber: "",
    location: "",
    pickup: "",
    droptiming: "",
    vehicleType: "",
    destination: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_easydrop",
          "template_26m6pql",
          formRef.current,
          "pQbL6scWwGL52zucs"
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Request sent successfully!");
            formRef.current?.reset();

            setFormData({
              name: "",
              contactNumber: "",
              location: "",
              pickup: "",
              droptiming: "",
              vehicleType: "",
              destination: "",
            });
          },

          (error) => {
            console.error("Error sending email:", error.text);
          }
        );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]"
    >
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.h2
              className="text-3xl sm:text-[38px] font-semibold leading-[1.2] sm:leading-[42px] pl-0 sm:pl-[4%]"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileInView={{ opacity: 1 }}
            >
              Monthly Pick &{" "}
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Drop Services
              </span>
            </motion.h2>
            <motion.p
              className="text-[#666666] text-sm sm:text-base md:text-lg leading-[1.5] sm:leading-[27px] mt-2 pl-0 sm:pl-[4%]"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileInView={{ opacity: 1 }}
            >
              Secure your spot with just a click! Whether it's a daily commute or an adventure of a{" "}
              <br className="hidden sm:inline" /> lifetime, EasyDrop makes booking quick and hassle-free.
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="pl-0 sm:pl-[4%] space-y-4 sm:space-y-6 w-full lg:w-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { label: "Name", id: "name", type: "text" },
                  { label: "Contact Number", id: "contactNumber", type: "tel" },
                  { label: "Pick Up Timing", id: "pickup", type: "time" },
                  { label: "Drop off Timing", id: "droptiming", type: "time" },
                ].map(({ label, id, type }) => (
                  <div className="space-y-2" key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-[#666666]">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={`Enter ${label}`}
                      name={id}
                      value={formData[id as keyof FormData]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#666666] rounded-md focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: "Location", id: "location", options: ["Gilgit", "Jutial", "Danyore", "City"] },
                  { label: "Vehicle Type", id: "vehicleType", options: ["Bolan", "Van", "Car", "TX"] },
                  { label: "Destination", id: "destination", options: ["Gilgit", "Hunza", "Jutial", "City"] },
                ].map(({ label, id, options }) => (
                  <div className="space-y-2" key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-[#666666]">
                      {label}
                    </label>
                    <select
                      id={id}
                      name={id}
                      value={formData[id as keyof FormData]}
                      onChange={handleSelectChange}
                      className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#666666] rounded-md focus:outline-none appearance-none"
                    >
                      <option value="">Choose {label.toLowerCase()}</option>
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <motion.button
                type="submit"
                className="w-full sm:w-auto rounded-md bg-gradient-to-b from-[#2E2C80] to-[#2458A4] px-6 py-3 text-white text-[14px] font-semibold text-center transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Quote
              </motion.button>
            </motion.form>

            <div className="flex items-center justify-center lg:items-start lg:justify-start flex-1 mt-8 lg:mt-0">
              <motion.img
                src={formimg}
                alt="Tour Illustration"
                className="w-full h-auto object-cover"
                initial={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileInView={{ opacity: 1, y: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PickDropForm;
