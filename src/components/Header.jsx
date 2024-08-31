import React from "react";
import LightModeLogo from "../assets/LogoLightMode.png";

const Header = () => {
  return (
    <div className="w-full border-b-1 border-[#FF7777] h-[72px] flex items-center px-32 backdrop-blur-[40%] bg-black/20 fixed top-0 left-0">
      <img src={LightModeLogo} alt="Logo" className="w-[116px] h-[47.21px]" />
    </div>
  );
};

export default Header;
