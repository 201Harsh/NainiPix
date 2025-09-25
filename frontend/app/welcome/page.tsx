import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative z-10 h-full w-full justify-center flex flex-col">
        {/* Header */}
        <div className="w-full flex items-center justify-center mb-8 animate-fade-in mt-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-sky-600 to-violet-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative flex items-center space-x-4 bg-gray-900/90 rounded-full px-6 py-3 ring-1 ring-white/10 backdrop-blur">
              <Image
                src="/img/logo.png"
                alt="NainiPix AI Logo"
                width={60}
                height={60}
                priority
                className="drop-shadow-lg"
              />
              <h1 className="font-Antonio font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-sky-300 to-violet-400">
                NainiPix AI
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center px-4 py-8 space-y-8">
          {/* Hero Text */}
          <div className="text-center space-y-6 max-w-4xl animate-slide-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl uppercase font-Antonio font-bold text-white leading-tight">
              Create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                Stunning
              </span>{" "}
              Visuals
              <br />
              with
              <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-sky-400">
                AI Power
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 font-inter max-w-2xl mx-auto leading-relaxed">
              Welcome to NainiPix AI — your ultimate image generator & editor.
              Create stunning visuals, explore aesthetic templates, and
              transform photos with artificial intelligence in just one click.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in-up">
            <button className="group relative bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 ease-out text-white font-semibold py-4 px-8 rounded-full cursor-pointer shadow-2xl hover:shadow-violet-500/25 hover:scale-105">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>

            <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-300 ease-out text-white font-semibold py-4 px-8 rounded-full cursor-pointer hover:scale-105">
              <span className="flex items-center gap-2">
                See Examples
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </button>
          </div>

          {/* Features Grid */}
          <h1 className="md:mt-14 mt-5 font-Antonio capitalize font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-sky-300 to-violet-400 animate-fade-in">
            see all Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            {[
              {
                icon: "✨",
                title: "AI Image Generation",
                desc: "Turn text prompts into stunning images instantly.",
              },
              {
                icon: "🎨",
                title: "Creative Templates",
                desc: "Choose from anime, retro, cyberpunk, and more styles.",
              },
              {
                icon: "🖼️",
                title: "Background Change",
                desc: "Swap or customize backgrounds with a single click.",
              },
              {
                icon: "🪄",
                title: "Smart Object Editing",
                desc: "Easily add or remove objects from your photos.",
              },
              {
                icon: "👕",
                title: "Dress & Style Swap",
                desc: "Try new outfits, hairstyles, or creative looks.",
              },
              {
                icon: "📸",
                title: "Collages & Aesthetic Grids",
                desc: "Make Instagram-worthy collages effortlessly.",
              },
              {
                icon: "🤖",
                title: "Face & Emotion Editing",
                desc: "Change expressions, swap faces, or clone subjects.",
              },
              {
                icon: "👥",
                title: "Group Photos",
                desc: "Combine multiple people into one frame with ease.",
              },
              {
                icon: "⚡",
                title: "Fantasy & Power Modes",
                desc: "Transform into heroes, gods, or paranormal styles.",
              },
              {
                icon: "🆓",
                title: "Free Daily Edits",
                desc: "Enjoy 5 free edits daily, no subscription required.",
              },
              {
                icon: "💎",
                title: "Premium Unlocks",
                desc: "Access pro templates like Ghost, Gaming, and Mythology.",
              },
              {
                icon: "🚀",
                title: "Fast & Responsive",
                desc: "Optimized for GenZ — quick, sleek, and mobile-friendly.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-pink-300"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Minimalist Badge Footer */}
          <div className="flex flex-col items-center mt-16 space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-400/30 rounded-full px-4 py-2">
                <span className="text-violet-400 text-sm font-medium capitalize">
                  🔥 Trending aesthetic Templates
                </span>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-4 py-2">
                <span className="text-green-400 text-sm font-medium">
                  ⭐ 4.9/5 Rating
                </span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full px-4 py-2">
                <span className="text-blue-400 text-sm font-medium">
                  🚀 100+ Users
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center max-w-md">
              Trusted by designers, marketers, and creators worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-float animation-delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-violet-400 rounded-full animate-float animation-delay-4000"></div>
    </div>
  );
};

export default page;
