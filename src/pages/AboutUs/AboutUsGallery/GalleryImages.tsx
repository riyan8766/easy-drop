import Image1 from "../../../assets/Image1.png";
import Image2 from "../../../assets/Image2.png";
import Image3 from "../../../assets/Image3.png";

const imagesGallery = [Image1, Image2, Image3];

const GalleryImages: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
      <img
        src={imagesGallery[0]}
        alt="Van"
        className="rounded-2xl w-full h-[350px] object-cover col-span-1 sm:col-span-2"
      />

      <div className="hidden sm:flex flex-col gap-4">
        <img
          src={imagesGallery[1]}
          alt="Car"
          className="rounded-2xl w-full h-[170px] object-cover"
        />
        <img
          src={imagesGallery[2]}
          alt="Driver"
          className="rounded-2xl w-full h-[170px] object-cover"
        />
      </div>
    </div>
  );
};

export default GalleryImages;
