import React, { useContext } from "react";
import backgroundImage from "../assets/TopBannerBackgroundImage.png";
import { Context } from "../context/product.context";

const TopBanner = () => {
  const { setShowProductDetailsCard, setProductDetails } = useContext(Context);
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      className="w-full h-[527px] bg-cover bg-center"
      style={backgroundImageStyle}
    >
      <div className="w-full h-full flex flex-col justify-end pb-6 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-black/40 dark:bg-darkBackground/40">
        <h1 className="text-white text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold leading-tight sm:leading-[48px] md:leading-[52px] lg:leading-[56px]">
          The choice is yours. <br /> Because they don't have one.
        </h1>
        <button
          className="bg-white text-[#FE0000] w-full sm:w-[211px] h-[52px] mt-6 sm:mt-12 rounded-sm font-bold uppercase"
          onClick={() => {
            setShowProductDetailsCard(true);
            setProductDetails({
              name: "Raju Rassibomb",
              price: "₹ 1,00,000",
            });
          }}
        >
          Quick View
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
