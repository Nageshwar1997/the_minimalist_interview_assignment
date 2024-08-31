import React from "react";
import flower from "../assets/flower.png";
import footerLine from "../assets/footerLine.png";
import instagram from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedIn from "../assets/linkedIn.png";
const Footer = () => {
  return (
    <div className="w-full bg-green-600">
      <img src={footerLine} alt="Footer Line" className="w-full" />
      <div className="w-full flex justify-between p-2 px-10">
        <div className="max-w-14 max-h-24 w-full h-full">
          <img src={flower} alt="Flower" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-2">
          <p
            className="text-center text-xl font-bold text-yellow-400"
            style={{
              textShadow:
                "1px 1px 0px black, 2px 2px 0px gray, 3px 3px 0px black, 4px 4px 0px gray",
            }}
          >
            Follow Us On
          </p>
          <div className="w-full flex justify-center items-center gap-4">
            <img src={instagram} alt="instagram" className="w-9 h-9" />
            <img src={youtube} alt="youtube" className="w-9 h-9" />
            <img src={twitter} alt="twitter" className="w-9 h-9" />
            <img src={facebook} alt="facebook" className="w-9 h-9" />
            <img src={linkedIn} alt="linkedIn" className="w-9 h-9" />
          </div>
        </div>
        <div className="max-w-14 max-h-24 w-full h-full">
          <img src={flower} alt="Flower" className="w-full h-full" />
        </div>
      </div>
      <img src={footerLine} alt="Footer Line" className="w-full" />
    </div>
  );
};

export default Footer;
