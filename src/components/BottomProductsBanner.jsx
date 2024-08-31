import React from "react";
import ProductCard from "./ProductCard";
import design from "../assets/DesignedHeadingStyle.png";

const BottomProductsBanner = () => {
  return (
    <div className="w-full px-32">
      <div className=" flex justify-between gap-10 w-full">
        <ProductCard text={"Raju Rassibomb"} />
        <ProductCard text={"Ladkiyon ki Rani Chani"} />
      </div>
      <div className="flex bg-[#F27121] p-0.5 overflow-hidden my-10">
        <img src={design} alt="style" />
        <img src={design} alt="style" />
        <img src={design} alt="style" />
      </div>
    </div>
  );
};

export default BottomProductsBanner;
