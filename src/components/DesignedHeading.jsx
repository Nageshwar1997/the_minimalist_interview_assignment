import React from "react";
import design from "../assets/DesignedHeadingStyle.png";

const DesignedHeading = ({ text }) => {
  return (
    <div className="flex justify-between gap-32 px-32 items-center w-full mt-20 mb-12">
      <span className="bg-[#F27121] p-0.5">
        <img src={design} alt="Design" className="w-full" />
      </span>
      <p className="text-3xl text-[#F27121] font-bold w-[200px] text-center text-nowrap">
        {text}
      </p>
      <span className="bg-[#F27121] p-0.5">
        <img src={design} alt="Design" className="w-full" />
      </span>
    </div>
  );
};

export default DesignedHeading;
