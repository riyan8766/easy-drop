import { motion } from "framer-motion";
import { useState } from "react";
import van from "../../assets/Images/van.jpg";
import tx from "../../assets/Images/tx.jpg";
import bolan from "../../assets/Images/bolan.jpg";
import btncar from "../../assets/Images/btncar.png";

interface Vehicle {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("bolan");

  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Bolan Van",
      image: van,
      price: 10000,
      type: "bolan",
    },
    {
      id: 2,
      name: "Tx Parado",
      image: tx,
      price: 10000,
      type: "parado",
    },
    {
      id: 3,
      name: "Bolan Van",
      image: bolan,
      price: 10000,
      type: "bolan",
    },
    {
      id: 4,
      name: "Tx Parado",
      image: tx,
      price: 10000,
      type: "parado",
    },
  ];
  const filteredVehicles = vehicles;

  return (
    <div className="bg-[#F7F9FC]">
      <div className="container mx-auto px-2 lg:px-4 py-12">
        <motion.div
          className="lg:text-center sm:text-start mb-8"
          initial={{ opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl font-semibold leading-[42px] mb-4 mt-10">
            <span className="bg-gradient-to-b from-[#2E2C80] to-[#2458A4] text-transparent bg-clip-text">
              Book
            </span>
            Vehicle
          </h1>
          <p className="text-[#666666] text-base sm:text-lg mx-auto max-w-[755px]">
          Pre-designed tour packages to explore the beauty of Gilgit-Baltistan. Customizable trips with your choice of
           vehicle, destinations, and duration. Comfortable and well-maintained transport for a stress-free travel experience.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "bolan", label: "Bolan Car" },
            { id: "suzuki", label: "Suzuki" },
            { id: "parado", label: "TX Parado" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`group flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base font-medium rounded-md shadow-md transition-all duration-300
            ${
              activeTab === tab.id
                ? "bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] text-white"
                : "bg-white text-black hover:bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] hover:text-white"
            }`}
            >
              <img
                src={btncar}
                alt="icon"
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300
                ${
                  activeTab === tab.id ? "invert" : "filter-none"
                } group-hover:invert`}
              />
              {tab.label}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center p-2">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#F7F9FC] border hover:bg-white border-[#E6E6E6] shadow-md rounded-lg overflow-hidden transition-all duration-300"
            >
              <div className="w-full h-auto sm:h-56 md:h-64 lg:h-72 lg:p-4 sm:p-0">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              <div className="p-4 flex justify-between items-center">
                <h3 className="text-sm sm:text-lg font-semibold">
                  {vehicle.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Starting from <br />
                  <span className="block text-[#2C3486] text-sm font-medium">
                    PKR. {vehicle.price}
                  </span>
                </p>
              </div>

              <div className="flex pl-4 pb-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm border border-[#2C3486] text-[#2C3486] rounded-md shadow-md hover:bg-[linear-gradient(180deg,#2E2C80_0%,#2458A4_100%)] hover:text-white transition-all"
                >
                  Request a Quote
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
