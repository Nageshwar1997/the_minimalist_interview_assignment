import React from "react";
import flower from "../assets/flower.png";
import footerLine from "../assets/footerLine.png";
import {
  FaInstagram,
  FaSquareFacebook,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full bg-green-600 dark:bg-darkBackground">
      <img src={footerLine} alt="Footer Line" className="w-full" />
      <div className="w-full flex justify-between p-2 md:px-10">
        <div className="max-w-[56px] max-h-[96px] w-full h-full mx-auto md:mx-0">
          <img
            src={flower}
            alt="Flower"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p
            className="text-center text-lg md:text-xl font-bold text-yellow-400 dark:text-darkText"
            style={{
              textShadow:
                "1px 1px 0px black, 2px 2px 0px gray, 3px 3px 0px black, 4px 4px 0px gray",
            }}
          >
            Follow Us On
          </p>
          <div className="w-full flex justify-center items-center gap-2 md:gap-4 text-gray-900 text-sm sm:text-lg md:text-xl lg:text-2xl">
            <div className="p-2 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
              <FaInstagram className="text-white" />
            </div>

            <div className="p-2 rounded-full shadow-lg bg-gradient-to-r from-blue-500 via-black to-pink-500 flex items-center justify-center">
              <FaTiktok className="text-white" />
            </div>

            <div className="p-2 rounded-full shadow-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 flex items-center justify-center">
              <FaYoutube className="text-white" />
            </div>
            <div className="p-2 rounded-full shadow-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center">
              <FaSquareFacebook className="text-white" />
            </div>

            <div className="p-2 rounded-full shadow-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 flex items-center justify-center">
              <FaTwitter className="text-white" />
            </div>
          </div>
        </div>
        <div className="max-w-[56px] max-h-[96px] w-full h-full mx-auto md:mx-0">
          <img
            src={flower}
            alt="Flower"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <img src={footerLine} alt="Footer Line" className="w-full" />
    </div>
  );
};

export default Footer;
