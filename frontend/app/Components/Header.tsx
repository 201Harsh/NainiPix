import Image from "next/image";
import React from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full max-w-screen fixed top-0 z-50 backdrop-blur-sm bg-black/50">
      <div className="w-full flex items-center justify-between px-5 py-2 md:px-8 md:py-3">
        <div className="relative flex items-center space-x-0 md:space-x-2">
          <Image
            src="/img/logo.png"
            alt="NainiPix AI Logo"
            width={60}
            height={60}
            priority
            className="drop-shadow-lg"
          />
          <h1 className="font-Antonio font-bold text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-sky-300 to-violet-400">
            NainiPix AI
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="cursor-pointer">
            <IoMdMenu color="white" className="md:h-11 md:w-11 h-10 w-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
