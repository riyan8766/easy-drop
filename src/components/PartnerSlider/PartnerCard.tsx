
import React from "react";

interface SliderProps {
  name: string;
  image: string;
  review: string;
}
const PartnerCard: React.FC<SliderProps> = ({
  name,

  image,
  review,
}) => {
  return (
    <div className="relative flex flex-col w-full">
      <div className="flex flex-col mb-4 w-full">
        <div className="mb-4 sm:mb-6 w-full">
          <img
            src={image || "/placeholder.svg"}
            alt={`${name}'s profile`}
            className="w-full h-auto sm:h-[279px] object-cover"
          />
          <div className="py-5">
            <h3 className="font-semibold text-lg leading-[24px] sm:text-lg mb-2 sm:mb-4 w-full">
              {name}
            </h3>
            <p className="text-[#333333] text-base font-normal leading-[24px] w-full">
              {review}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PartnerCard;
