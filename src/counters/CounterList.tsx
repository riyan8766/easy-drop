import iconBusiness from "../assets/CounterIcons/business.png";
import iconDrivers from "../assets/CounterIcons/drivers.png";
import iconPassengers from "../assets/CounterIcons/passengers.png";
import iconVehicles from "../assets/CounterIcons/vehicles.png";
import Counter from "./counter";

const stats = [
  { icon: iconBusiness, value: "7+", label: "Years in Business" },
  { icon: iconDrivers, value: "60+", label: "Drivers" },
  { icon: iconPassengers, value: "10k+", label: "Passengers" },
  { icon: iconVehicles, value: "60+", label: "Vehicles" },
];

const CounterList: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#E5F4FF] py-12 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-screen-2xl w-full px-4">
        {stats.map((stat, index) => (
          <Counter key={index} {...stat} isActive={index === 0} />
        ))}
      </div>
    </div>

  );
};

export default CounterList;