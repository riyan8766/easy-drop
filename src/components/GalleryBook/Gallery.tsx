import mountain from "../../assets/ImagesGallery/mountain.jpg";
import ski from "../../assets/ImagesGallery/ski.jpg";
import hiking from "../../assets/ImagesGallery/hiking.jpg";
import road from "../../assets/ImagesGallery/road.jpg";

const images = [mountain, ski, hiking, road];

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <img
        src={images[0]}
        alt="Mountain"
        className="rounded-2xl w-full h-[300px] xs:h-[300px] sm:h-[400px] object-cover col-span-1 sm:col-span-1 sm:row-span-2"
      />
      <img
        src={images[2]}
        alt="Hiking"
        className="rounded-2xl w-full h-[200px] xs:h-[250px] sm:h-[190px] object-cover"
      />
      
      <div className="grid grid-cols-2 gap-4 w-full sm:w-[350px]">
        <img
          src={images[1]}
          alt="Ski"
          className="rounded-2xl w-full h-[200px] xs:h-[250px] sm:h-[190px] object-cover"
        />
        <img
          src={images[3]}
          alt="Road"
          className="rounded-2xl w-full h-[200px] xs:h-[250px] sm:h-[190px] object-cover"
        />
      </div>
    </div>
  );
};

export default Gallery;
