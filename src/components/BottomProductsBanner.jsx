import React from "react";
import ProductCard from "./ProductCard";
import design from "../assets/DesignedHeadingStyle.png";

const BottomProductsBanner = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-32">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 md:gap-8">
        <ProductCard text={"Raju Rassibomb"} />
        <ProductCard text={"Ladkiyon ki Rani Chani"} />
      </div>
      <div className="flex bg-[#F27121] p-1 overflow-hidden my-6 sm:my-8 md:my-24 dark:bg-[#F27121]">
        <img
          src={design}
          alt="style"
          className=""
        />
        <img
          src={design}
          alt="style"
          className=""
        />
        <img
          src={design}
          alt="style"
          className=""
        />
      </div>
    </div>
  );
};

export default BottomProductsBanner;
