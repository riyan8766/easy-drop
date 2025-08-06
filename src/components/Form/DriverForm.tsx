import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import formimg from "../../assets/Images/formimg.png"

import emailjs from "@emailjs/browser"

interface FormData {
  name: string
  contactNumber: string
  Cnic: string
  serviceType: string
  vehicleType: string
  vehiclemodel: string
  seater: string
  experience: string
}

const DriverForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNumber: "",
    Cnic: "",
    serviceType: "",
    vehicleType: "",
    vehiclemodel: "",
    seater: "",
    experience: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formRef.current) {
      emailjs.sendForm("service_easydrop", "template_26m6pql", formRef.current, "pQbL6scWwGL52zucs").then(
        (result) => {
          console.log("Email sent successfully:", result.text)
        },
        (error) => {
          console.error("Error sending email:", error.text)
        },
      )
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12 sm:py-12"
      >
        <div className="container mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-normal leading-[42px] pl-0 sm:pl-[4%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Add{" "}
              <span className="font-semibold bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
                Driver and Vehicle
              </span>{" "}
              details
            </motion.h2>
            <motion.p
              className="text-gray-600 mt-2 pl-0 sm:pl-[4%] text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Submit your driver and vehicle details to join the EasyDrop team and start earning. Help us provide{" "}
              <br className="hidden sm:inline" /> safe and reliable transportation by sharing accurate information.
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="pl-0 sm:pl-[4%] space-y-4 sm:space-y-6 w-full lg:w-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-[#666666]">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#666666] rounded-md font-normal text-sm focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-[#666666]">
                    Contact Number
                  </label>
                  <input
                    id="contactNumber"
                    type="tel"
                    placeholder="Enter Contact Number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#666666] rounded-md font-normal text-sm focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="Cnic" className="block text-sm font-medium text-[#666666]">
                    Cnic
                  </label>
                  <input
                    id="Cnic"
                    type="text"
                    placeholder="Enter Cnic Number"
                    name="Cnic"
                    value={formData.Cnic}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#666666] font-normal text-sm rounded-md focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="serviceType" className="block text-sm font-medium text-[#666666]">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleSelectChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#666666] font-normal text-sm rounded-md focus:outline-none appearance-none"
                  >
                    <option className="font-normal text-sm text-[#666666]" value="">Pick and Drop</option>
                    <option value="1">service1</option>
                    <option value="2">service2</option>
                    <option value="3">service3</option>
                    <option value="4">service4</option>
                  </select>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="Vehicle" className="block text-sm font-medium text-[#666666]">
                    Vehicle Type
                  </label>
                  <select
                    id="Vehicle"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleSelectChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#666666] font-normal text-sm rounded-md focus:outline-none appearance-none"
                  >
                    <option value="1">Bolan</option>
                    <option value="2">Van</option>
                    <option value="3">Car</option>
                    <option value="4">TX</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="vehiclemodel" className="block text-sm font-medium text-[#666666]">
                    Vehicle Model
                  </label>
                  <input
                    id="vehicleModel"
                    type="text"
                    placeholder="2024"
                    name="vehiclemodel"
                    value={formData.vehiclemodel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#666666] font-normal text-sm rounded-md focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="seater" className="block text-sm font-medium text-[#666666]">
                    Seater
                  </label>
                  <select
                    id="seater"
                    name="seater"
                    value={formData.seater}
                    onChange={handleSelectChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#666666] font-normal text-sm font-normal text-sm rounded-md focus:outline-none appearance-none"
                  >
                    <option value="1">9</option>
                    <option value="2">10</option>
                    <option value="3">11</option>
                    <option value="4">12</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="experience" className="block text-sm font-medium text-[#666666]">
                    Experience
                  </label>
                  <input
                    id="experience"
                    type="text"
                    placeholder="5 years"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#e7edf3] text-[#666666] font-normal text-sm rounded-md focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full sm:w-auto rounded-md bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] px-6 py-3 text-[14px] font-semibold text-white leading-[17.07px] text-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Quote
              </motion.button>
            </motion.form>

            <motion.div
              className="flex items-center justify-center lg:items-start lg:justify-start flex-1 mt-4 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              // animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={formimg}
                alt="Tour Illustration"
                className="object-cover w-full sm:w-[400px] md:w-[500px] lg:w-[416.63px] xl:w-[416.63px] h-auto"
              />


            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>

  )
}

export default DriverForm

