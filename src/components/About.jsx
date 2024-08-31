import React from "react";

const About = () => {
  return (
    <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] w-full mx-auto text-center bg-whiteBackground dark:bg-darkBackground p-4 sm:p-6 lg:p-8 rounded">
      <p className="leading-relaxed text-base sm:text-lg md:text-xl dark:text-darkText">
        Our products are crafted exclusively from the dreams and screams of
        young kids who wanted to show their mastery in their chosen fields, but
        were directed towards a factory for daily wages. Each cracker bursts
        brighter than their lost smiles, and can be heard louder than their
        cries for miles. Buy them, burst them, brag about them.
      </p>
      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 dark:text-darkText">
        The choice is yours. Because they don’t have one.
      </h4>
    </div>
  );
};

export default About;
