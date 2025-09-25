import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full bg-gray-900">
      <div className="h-full w-full justify-center flex flex-col">
        <div className="w-full flex items-center justify-center">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={100}
            height={100}
            priority
          />
          <h1 className="font-Antonio font-bold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-sky-300 to-violet-500">
            NainiPix AI
          </h1>
        </div>
        <div className="flex items-center justify-center px-4 py-2">
          <p className="text-white w-3/4 md:w-1/3 font-inter font-semibold text-sm md:text-lg text-center">
            Welcome to NainiPix AI — your image generator & editor. Create
            stunning visuals, explore aesthetic templates, and transform photos
            in just a click
          </p>
        </div>
        <div className="flex items-center justify-center font-poppins text-sm gap-5 mt-10">
          <button
            className="bg-violet-600 hover:bg-violet-800 transition-all duration-200 ease-in-out text-white font-semibold 
          py-4 px-6 rounded-full cursor-pointer"
          >
            Get Started
          </button>

          <button
            className="bg-emerald-600 hover:bg-emerald-800 transition-all duration-200 ease-in-out text-white font-semibold 
          py-4 px-6 rounded-full cursor-pointer"
          >
            See Examples
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
