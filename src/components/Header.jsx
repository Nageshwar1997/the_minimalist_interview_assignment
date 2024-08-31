import React from "react";
import LightModeLogo from "../assets/LogoLightMode.png";

const Header = () => {
  return (
    <div className="w-full border-b border-[#FF7777] h-[72px] flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 backdrop-blur-sm bg-black/10 fixed top-0 left-0">
      <img src={LightModeLogo} alt="Logo" className="w-[116px] h-[47.21px]" />
    </div>
  );
};

export default Header;
