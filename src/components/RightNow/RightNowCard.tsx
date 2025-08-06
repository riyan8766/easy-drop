interface SliderProps {
    name: string;
    image: string;
    review: string;
    showVerticalLine?: boolean;
}

const RightNowCard: React.FC<SliderProps> = ({ name, image, review, showVerticalLine }) => {
    return (
        <div className="relative bg-white w-full h-[254px] p-6 items-center rounded-xl text-center gap-16">
            <div className="items-center">
                <div className="mb-6 flex justify-center">
                    <img src={image} alt="profile" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <div className="font-normal text-base leading-[29px]">
                    <h3 className="font-semibold mb-4 text-lg">{name}</h3>
                </div>
            </div>
            <p className="text-[#787878] text-sm font-normal leading-[22px]">{review}</p>

            {showVerticalLine && (
                <div className="hidden xl:block absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
            )}
        </div>
    );
};

export default RightNowCard;
