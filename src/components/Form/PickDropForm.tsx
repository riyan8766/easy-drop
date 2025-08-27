import type React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import formimg from "../../assets/Images/formimg.png";

interface FormData {
  student: string;
  fatherName: string;
  contactNumber: string;
  pickupTime: string;
  pickupLocation: string;
  institute: string;
  department: string;
  semester: string;
  guardianName: string;
  guardianContact: string;
  email: string;
}

const PickDropForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    student: "",
    fatherName: "",
    contactNumber: "",
    pickupTime: "",
    pickupLocation: "",
    institute: "",
    department: "",
    semester: "",
    guardianName: "",
    guardianContact: "",
    email: "",
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
          () => {
            alert("Request sent successfully!");
            formRef.current?.reset();
            setFormData({
              student: "",
              fatherName: "",
              contactNumber: "",
              pickupTime: "",
              pickupLocation: "",
              institute: "",
              department: "",
              semester: "",
              guardianName: "",
              guardianContact: "",
              email: "",
            });
          },
          (error) => {
            console.error("Error sending email:", error.text);
          }
        );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]"
    >
      <div className="container mx-auto px-4 py-10 sm:py-14 lg:py-20">
        <motion.div
          className="mb-6 sm:mb-10 text-center lg:text-left"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug sm:leading-[42px]">
            Monthly Pick &{" "}
            <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
              Drop Services
            </span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full lg:flex-1 space-y-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { label: "Student", id: "student", type: "text" },
                { label: "Father Name", id: "fatherName", type: "text" },
                { label: "Contact Number", id: "contactNumber", type: "tel" },
              ].map(({ label, id, type }) => (
                <div key={id} className="flex flex-col">
                  <label
                    htmlFor={id}
                    className="mb-1 text-sm font-medium text-[#666666]"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    placeholder={`Enter ${label}`}
                    name={id}
                    value={formData[id as keyof FormData]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2458A4]"
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label
                  htmlFor="pickupTime"
                  className="mb-1 text-sm font-medium text-[#666666]"
                >
                  Pick Up Timing
                </label>
                <input
                  id="pickupTime"
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2458A4]"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="pickupLocation"
                  className="mb-1 text-sm font-medium text-[#666666]"
                >
                  Pick Up Location
                </label>
                <select
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2458A4]"
                >
                  <option value="">Choose location</option>
                  <option value="Gilgit">Gilgit</option>
                  <option value="Jutial">Jutial</option>
                  <option value="Danyore">Danyore</option>
                  <option value="City">City</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="institute"
                  className="mb-1 text-sm font-medium text-[#666666]"
                >
                  School / Institute
                </label>
                <input
                  id="institute"
                  type="text"
                  name="institute"
                  placeholder="Enter institute"
                  value={formData.institute}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2458A4]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { label: "Department", id: "department", type: "text" },
                { label: "Semester", id: "semester", type: "text" },
                { label: "Guardian Name", id: "guardianName", type: "text" },
                {
                  label: "Guardian Mobile #",
                  id: "guardianContact",
                  type: "tel",
                },
                {
                  label: "Email",
                  id: "email",
                  type: "email",
                },
              ].map(({ label, id, type }) => (
                <div key={id} className="flex flex-col">
                  <label
                    htmlFor={id}
                    className="mb-1 text-sm font-medium text-[#666666]"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    placeholder={`Enter ${label}`}
                    name={id}
                    value={formData[id as keyof FormData]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2458A4]"
                  />
                </div>
              ))}
            </div>

            <motion.button
              type="submit"
              className="cursor-pointer w-full sm:w-auto rounded-md bg-gradient-to-b from-[#2E2C80] to-[#2458A4] px-6 py-3 text-white font-semibold shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Now
            </motion.button>
          </motion.form>

          <div className="flex justify-center lg:justify-end lg:flex-1">
            <motion.img
              src={formimg}
              alt="Form Illustration"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto object-contain"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PickDropForm;
