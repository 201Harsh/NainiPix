"use client";
import AxiosInstance from "@/config/Axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Flip, toast } from "react-toastify";

interface Template {
  _id: string;
  name: string;
  title: string;
  desc: string;
  thumbnail: string;
  category: string;
  prompt: string;
  example: string[];
  explainer: string;
}

const Page = () => {
  const Params = useParams();
  const id = Params.id;

  const [Template, setTemplate] = useState<Template | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const GetAllTemplates = async () => {
      try {
        setIsLoading(true);
        const res = await AxiosInstance.get(`/template/get/${id}`);

        if (res.status === 200) {
          setTemplate(res.data.Template);
        }
      } catch (error: any) {
        toast.error(error.response.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      } finally {
        setIsLoading(false);
      }
    };
    GetAllTemplates();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 text-lg">Loading template...</p>
        </div>
      </div>
    );
  }

  if (!Template) {
    return (
      <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-2">Template Not Found</h1>
          <p className="text-gray-400">
            The requested template could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "free":
        return "from-emerald-500 to-green-500";
      case "premium":
        return "from-amber-500 to-orange-500";
      case "pro":
        return "from-purple-500 to-pink-500";
      default:
        return "from-blue-500 to-cyan-500";
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category.toLowerCase()) {
      case "free":
        return "bg-gradient-to-r from-emerald-500 to-green-500";
      case "premium":
        return "bg-gradient-to-r from-amber-500 to-orange-500";
      case "pro":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      default:
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-10">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={Template.thumbnail}
                    alt={Template.name}
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`bg-black/50 ${getCategoryBadge(
                        Template.category
                      )} text-white fon-inter font-bold text-sm uppercase px-4 py-2 rounded-full backdrop-blur-sm border border-white/20`}
                    >
                      {Template.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {Template.example.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {Template.example.map((items: any, index) => (
                    <div
                      key={index}
                      className={`group relative aspect-square rounded-xl border-2 overflow-hidden cursor-pointer transition-all duration-300 ${
                        selectedImage === index
                          ? "border-violet-500 ring-2 ring-violet-500/50"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <img
                        src={items.image}
                        alt={`${Template.name} example ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Templates</span>
                  <span>•</span>
                  <span className="text-violet-400 capitalize font-inter">
                    {Template.category}
                  </span>
                </div>

                <h1 className="text-4xl font-Antonio uppercase lg:text-5xl font-bold text-white leading-tight">
                  {Template.name}
                </h1>

                <h2 className="text-2xl font-Antonio lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 font-semibold">
                  {Template.title}
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                  <span className="font-poppins font-semibold">
                    Description
                  </span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed font-inter">
                  {Template.desc}
                </p>
              </div>

              {/* Explainer */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span className="font-poppins font-semibold">
                    How It Works
                  </span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {Template.explainer}
                </p>
              </div>

              {/* Prompt (Locked for Free Users) */}
              {Template.prompt && (
                <div className="space-y-3 relative">
                  <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>AI Prompt</span>
                  </h3>

                  {/* Blurred Box */}
                  <div className="bg-gray-800/50 select-none rounded-xl cursor-not-allowed p-4 border border-white/10 relative">
                    <p className="text-gray-200 italic blur-[2px]">
                      "{Template.prompt.slice(0, 50)}"...
                    </p>

                    {/* Overlay Message */}
                    <div className="absolute z-10 inset-0 flex items-center justify-center bg-black/60 rounded-xl">
                      <p className="text-yellow-400 font-semibold text-sm">
                        🔒 Buy Subscription to Unlock Prompt
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 text-white font-semibold py-4 px-8 rounded-xl cursor-pointer shadow-2xl hover:shadow-violet-500/25 hover:scale-105 flex-1">
                  <span className="relative z-10">Use This Template</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>

                <button className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-300 text-white font-semibold py-4 px-8 rounded-xl cursor-pointer hover:scale-105 flex-1">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Share Template</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-lg">🎨</span>
                  <span className="text-sm">AI Powered</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-lg">⚡</span>
                  <span className="text-sm">Fast Generation</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-lg">🔄</span>
                  <span className="text-sm">Easy to Use</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <span className="text-lg">💾</span>
                  <span className="text-sm">Save & Export</span>
                </div>
              </div>
            </div>
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

export default Page;
