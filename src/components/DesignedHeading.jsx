import React from "react";
import design from "../assets/DesignedHeadingStyle.png";

const DesignedHeading = ({ text }) => {
  return (
    <div className="flex justify-between gap-8 sm:gap-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 items-center w-full mt-8 sm:mt-12 lg:mt-20 mb-8 sm:mb-12 dark:bg-darkBackground">
      <span className="bg-[#F27121] p-0.5">
        <img
          src={design}
          alt="Design"
          className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[450px]"
        />
      </span>
      <p className="text-xl text-nowrap sm:text-2xl md:text-3xl lg:text-4xl text-[#F27121] font-bold text-center dark:text-darkText">
        {text}
      </p>
      <span className="bg-[#F27121] p-0.5">
        <img
          src={design}
          alt="Design"
          className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[450px]"
        />
      </span>
    </div>
  );
};

export default DesignedHeading;
