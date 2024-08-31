import React from "react";
import backgroundImage from "../assets/TopBannerBackgroundImage.png";

const TopBanner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="w-full h-[527px]" style={backgroundImageStyle}>
      <div className="w-full h-full flex flex-col justify-end pb-24 px-32">
        <h1 className="text-white text-[44px] font-bold leading-[56px]">
          The choice is yours. <br /> Because they don't have one.
        </h1>
        <button className="bg-white text-[#FE0000] w-[211px] h-[52px] mt-12 rounded-sm font-bold uppercase">
          Quick View
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
