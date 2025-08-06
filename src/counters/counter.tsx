import { motion } from "framer-motion";
import CountUp from "react-countup";

interface CounterProps {
  icon: string;
  value: string;
  label: string;
  isActive?: boolean;
}

const Counter: React.FC<CounterProps> = ({ icon, value, label }) => {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");

  return (
    <motion.div
      className="bg-white rounded-xl flex items-center p-4 ull min-h-[235px] gap-10 transition-all duration-300 
      border-b-0 
      hover:shadow-[6px_6px_15px_rgba(46,44,128,0.3)] hover:border-b-[6px] hover:border-[#2E2C80] 
      hover:scale-105 cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[75px] h-[70px] flex items-center justify-center">
        <img src={icon} alt={label} className="w-[80px] h-[80px]" />
      </div>
      <div className="flex flex-col justify-center w-[200px] h-[90px]">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#2E2C80] to-[#2458A4] 
             text-transparent bg-clip-text">
          <CountUp
            start={0}
            end={numericValue}
            duration={4}
            separator=","
            useEasing
            enableScrollSpy 
            scrollSpyDelay={200} 
          />
          {suffix}
        </h1>
        <p className="text-black text-2xl font-medium">{label}</p>
      </div>
    </motion.div>
  );
};

export default Counter;
