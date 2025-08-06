import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import formimg from "../../assets/ImagesGallery/formimg.png";

interface FormData {
  name: string;
  contactNumber: string;
  numberOfDays: string;
  location: string;
  vehicleType: string;
  destination: string;
  passengers: string;
}

const Form: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNumber: "",
    numberOfDays: "",
    location: "",
    vehicleType: "",
    destination: "",
    passengers: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.preventDefault();

    if (!formRef.current) return;
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
            numberOfDays: "",
            location: "",
            vehicleType: "",
            destination: "",
            passengers: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]">
      <motion.div
        className="container mx-auto px-4 py-8 sm:py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Book a
              <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                {" "}
                Tour
              </span>
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Secure your spot with just a click! Whether it's a daily commute
              or an adventure of a lifetime, EasyDrop makes booking quick and
              hassle-free.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6 w-full lg:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  "Name",
                  "ContactNumber",
                  "location",
                  "VehicleType",
                  "Passengers",
                ].map((key) => (
                  <motion.div
                    key={key}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * Object.keys(formData).indexOf(key),
                    }}
                  >
                    <label
                      htmlFor={key}
                      className="block text-[#666666] text-sm  font-medium"
                    >
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    <input
                      id={key}
                      type="text"
                      placeholder={`Enter ${key}`}
                      name={key}
                      value={formData[key as keyof FormData]}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-8 py-3 sm:py-4 bg-[#2838410F] font-normal text-sm rounded-md focus:outline-none"
                    />
                  </motion.div>
                ))}

                <motion.div className="space-y-2">
                  <label
                    htmlFor="numberOfDays"
                    className="block text-sm font-medium text-[#666666]"
                  >
                    Number of Days
                  </label>
                  <select
                    id="numberOfDays"
                    name="numberOfDays"
                    value={formData.numberOfDays}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-8 py-3 sm:py-4 bg-[#2838410F] text-[#666666] font-normal text-sm rounded-md focus:outline-none appearance-none"
                  >
                    <option value="">Select Days</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </motion.div>

                <motion.div className="space-y-2">
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-[#666666]"
                  >
                    Destination
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-8 py-3 sm:py-4 bg-[#2838410F] font-normal text-sm text-[#666666] rounded-md focus:outline-none appearance-none"
                  >
                    <option value="">Select Destination</option>
                    <option value="paris">Gilgit</option>
                    <option value="new-york">Danyore</option>
                    <option value="tokyo">City</option>
                    <option value="dubai">Sultanabad</option>
                    <option value="rome">oshikhandas</option>
                  </select>
                </motion.div>
              </div>

              <motion.button
                type="submit"
                className="w-full sm:w-auto rounded-md bg-gradient-to-r from-[#2E2C80] to-[#2458A4] px-6 py-3 text-sm font-semibold text-white leading-[17.07px] text-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Quote
              </motion.button>
            </motion.form>

            <motion.div
              className="flex items-center justify-center lg:items-start lg:justify-start flex-1 mt-4 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={formimg}
                alt="Tour Illustration"
                className="object-contain w-full max-w-[416px] h-[250px]"
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Form;
