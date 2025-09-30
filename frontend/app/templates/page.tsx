"use client";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useRouter } from "next/navigation";
import AxiosInstance from "@/config/Axios";
import { Flip, toast } from "react-toastify";
import Debouncing from "../hooks/Debouncing";

interface Template {
  _id: string;
  name: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  prompt: string;
}
const page = () => {
  const [Templates, setTemplates] = useState<Template[]>([]);
  const [SearchQuery, setSearchQuery] = useState("");
  const [FilteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [Error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const Router = useRouter();

  const DebounceSerach = Debouncing(SearchQuery, 550);

  useEffect(() => {
    if (DebounceSerach.trim()) {
      const filtered = Templates.filter((t) =>
        t.name.toLowerCase().includes(DebounceSerach.toLowerCase())
      );
      setFilteredTemplates(filtered);
    } else {
      setFilteredTemplates(Templates);
    }
  }, [DebounceSerach, Templates]);

  const GetAllTemplates = async () => {
    try {
      setIsLoading(true);
      const res = await AxiosInstance.get("/template/getAll");

      if (res.status === 200) {
        setTemplates(res.data.Templates);
      }
    } catch (error: any) {
      setError(error.response?.data?.error || "Templates not found");
      toast.error(error.response?.data?.error || "Templates not found", {
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
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    }
  };
  useEffect(() => {
    GetAllTemplates();
  }, []);

  const handleRouting = (id: any) => {
    Router.push(`/templates/${id}`);
  };

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
    <>
      <Header />
      <div className="relative w-full bg-gray-950 pt-24 min-h-screen">
        <div className="w-full px-8 py-4">
          <div className="md:w-1/2 w-full md:mx-auto flex flex-col text-center p-4 items-center justify-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mb-6">
              <span className="text-3xl">🎨</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-Antonio">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
                Template
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-inter font-semibold">
              Select from our professionally designed templates and start
              creating stunning visuals with AI-powered tools
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8 mb-8 px-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={SearchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-lg border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all duration-200"
                />
                {SearchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    <svg
                      className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Cards go here */}
          <div className="max-w-7xl 2xl:max-w-full mx-auto mt-8">
            {/* Loading State */}
            {isLoading && (
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {[...Array(10)].map((_, idx) => (
                  <div key={idx} className="animate-pulse">
                    <div className="bg-gray-800/50 rounded-2xl h-96">
                      <div className="h-48 bg-gray-700 rounded-t-2xl"></div>
                      <div className="p-6 space-y-4">
                        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-700 rounded w-full"></div>
                        <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                        <div className="h-8 bg-gray-700 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error State */}
            {Error && !isLoading && (
              <div className="max-w-2xl mx-auto text-center md:mt-10 mt-16">
                <div className="w-24 h-24 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">😔</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Oops! Something went wrong
                </h2>
                <p className="text-gray-400 text-lg mb-8">{Error}</p>
                <button
                  onClick={GetAllTemplates}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200"
                >
                  Try Again
                </button>
              </div>
            )}
            {!isLoading && !Error && SearchQuery && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-center">
                  {FilteredTemplates.map((template, idx) => (
                    <div
                      key={template._id}
                      onClick={() => handleRouting(template._id)}
                      className="group relative bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-violet-500/10"
                    >
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`${getCategoryBadge(
                            template.category
                          )} text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm`}
                        >
                          {template.category.toUpperCase()}
                        </span>
                      </div>

                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={template.thumbnail}
                          alt={template.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <h1
                          className={`text-2xl font-bold font-Antonio text-center bg-clip-text text-transparent ${getCategoryBadge(
                            template.category
                          )} mb-4`}
                        >
                          {template.name}
                        </h1>
                        <p className="text-sm md:text-base font-inter font-semibold text-white mb-3 line-clamp-1">
                          {template.title}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                          {template.description}
                        </p>

                        {/* Model Indicator */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(
                                template.category
                              )}`}
                            ></div>
                            <span className="text-gray-400 text-sm capitalize">
                              {template.category} Model
                            </span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 group-hover:shadow-lg group-hover:shadow-violet-500/25 flex items-center justify-center space-x-2 cursor-pointer">
                          <span>Use Template</span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {!FilteredTemplates.length && (
                  <div className="max-w-2xl w-full mx-auto text-center md:mt-10 mt-16">
                    <div className="w-24 h-24 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">😔</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-Antonio">
                      Oops! No Templates Found.
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 font-inter">
                      We couldn't find any templates
                      <span className="text-pink-500 ml-2 font-bold">
                        {SearchQuery}
                      </span>
                    </p>
                  </div>
                )}
              </>
            )}
            {!isLoading && !SearchQuery && !Error && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-center">
                {Templates.map((template, idx) => (
                  <div
                    key={template._id}
                    onClick={() => handleRouting(template._id)}
                    className="group relative bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-violet-500/10"
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`${getCategoryBadge(
                          template.category
                        )} text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm`}
                      >
                        {template.category.toUpperCase()}
                      </span>
                    </div>

                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={template.thumbnail}
                        alt={template.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h1
                        className={`text-2xl font-bold font-Antonio text-center bg-clip-text text-transparent ${getCategoryBadge(
                          template.category
                        )} mb-4`}
                      >
                        {template.name}
                      </h1>
                      <p className="text-sm md:text-base font-inter font-semibold text-white mb-3 line-clamp-1">
                        {template.title}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {template.description}
                      </p>

                      {/* Model Indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(
                              template.category
                            )}`}
                          ></div>
                          <span className="text-gray-400 text-sm capitalize">
                            {template.category} Model
                          </span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 group-hover:shadow-lg group-hover:shadow-violet-500/25 flex items-center justify-center space-x-2 cursor-pointer">
                        <span>Use Template</span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
