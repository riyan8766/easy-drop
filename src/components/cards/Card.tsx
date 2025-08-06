import clsx from "clsx";
import { CardProps } from "../../Types/type";

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div
      className={clsx(
        "bg-white p-6 sm:p-12 pb-5 flex flex-col items-start text-start hover:bg-blue-900 group",
        "transition-all duration-300 ease-in-out",
        "rounded-xl hover:shadow-md",
        "w-full h-auto sm:h-[367px]",
        "cursor-pointer"
      )}
    >
      <div className="mb-4 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex items-center justify-center bg-gray-100 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-base sm:text-xl font-semibold text-gray-900 group-hover:text-white">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 text-xs sm:text-base group-hover:text-white">
          {description}
        </p>
      </div>
    </div>

  );
};

export default Card;
