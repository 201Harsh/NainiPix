import Image from "next/image";
import React from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="h-24 w-full max-w-screen fixed z-50">
      <div className="w-full flex items-center justify-between px-5 py-3 md:px-8 md:py-3">
        <div className="relative flex items-center space-x-0 md:space-x-2 px-1 py-2 md:px-6 md:py-3 backdrop-blur">
          <Image
            src="/img/logo.png"
            alt="NainiPix AI Logo"
            width={60}
            height={60}
            priority
            className="drop-shadow-lg"
          />
          <h1 className="font-Antonio font-bold text-xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-sky-300 to-violet-400">
            NainiPix AI
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="cursor-pointer">
            <IoMdMenu color="white" className="md:h-12 md:w-12 h-10 w-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
