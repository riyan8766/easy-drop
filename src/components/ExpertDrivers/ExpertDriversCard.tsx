import React from "react";

interface ExpertDriversCardProps {
  icon: string;
  title: string;
  description: string;
  experience: string;
}

const ExpertDriversCard: React.FC<ExpertDriversCardProps> = ({
  icon,
  title,
  description,
  experience,
}) => {
  return (
    <div className=" p-4 rounded-xl w-[312px] h-[390px]">
      <div
        className="ww-[194px] h-[194px] rounded-full flex items-center justify-center mb-4"
    
      >
        <img className="" src={icon} alt="icon" />
      </div>
      <div className="w-[280px] h-[123px] bg-[#E9EDF5] text-center rounded-lg">
  <h3 className="text-2xl font-medium leading-[24px] pt-6 pb-2">{title}</h3>
  <p className="text-[#0D0D0C] text-base font-normal leading-[26px]">
    {description}
  </p>
  <p className="text-[#0D0D0C] text-base font-normal leading-[26px]">
    {experience}
  </p>
</div>

     
    </div>
  );
};

export default ExpertDriversCard;
