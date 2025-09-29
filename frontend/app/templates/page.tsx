"use client";
import React from "react";
import Header from "../Components/Header";
import { useRouter } from "next/navigation";

const page = () => {
  const sampleCards = [
    {
      id: 1,
      title: "Social Media Template",
      description: "Perfect for Instagram posts, stories, and Facebook covers",
      category: "Social",
      image:
        "https://images.unsplash.com/photo-1747993114958-87c5b3f7ee57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMHdvbWFuJTIwaW4lMjBzdW5zZXR8ZW58MHwwfDB8fHww",
      model: "basic",
    },
    {
      id: 2,
      title: "Business Presentation",
      description: "Professional slides and corporate branding templates",
      category: "Business",
      image:
        "https://plus.unsplash.com/premium_photo-1667520524170-f7f44b5b0376?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJlYXV0aWZ1bCUyMHdvbWFufGVufDB8MHwwfHx8MA%3D%3D",
      model: "basic",
    },
    {
      id: 3,
      title: "Creative Portfolio",
      description: "Artistic templates for designers and creatives",
      category: "Portfolio",
      image:
        "https://plus.unsplash.com/premium_photo-1683147643184-b388f52374e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGJlYXV0aWZ1bCUyMHdvbWFufGVufDB8MHwwfHx8MA%3D%3D",
      model: "premium",
    },
    {
      id: 4,
      title: "Product Showcase",
      description: "Elegant templates for showcasing products and services",
      category: "Product",
      image:
        "https://images.unsplash.com/photo-1614028522165-1708c7aa9c2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByZXR0eSUyMGdpcmx8ZW58MHwwfDB8fHww",
      model: "premium",
    },
    {
      id: 5,
      title: "Personal Blog",
      description: "Personal blog templates for writers and bloggers",
      category: "Blog",
      image:
        "https://plus.unsplash.com/premium_photo-1666298865553-7e4120c11f50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lbnxlbnwwfDB8MHx8fDA%3D",
      model: "premium",
    },
    {
      id: 6,
      title: "Professional Resume",
      description: "Professional resume templates for job seekers",
      category: "Resume",
      image:
        "https://images.unsplash.com/photo-1604984091170-2a06be09ca71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGN5cGVycHVuayUyMHBlb3BsZXxlbnwwfDB8MHx8fDA%3D",
      model: "basic",
    },
    {
      id: 7,
      title: "Creative Portfolio",
      description: "Artistic templates for designers and creatives",
      category: "Portfolio",
      image:
        "https://plus.unsplash.com/premium_photo-1666184129856-e421e3edc1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyb3VwJTIwb2YlMjBmcmllbmR8ZW58MHwwfDB8fHww",
      model: "basic",
    },
  ];

  const Router = useRouter();

  const handleRouting = (id: any) => {
    Router.push(`/templates/${id}`);
  };

  return (
    <>
      <Header />
      <div className="relative w-full bg-gray-950 pt-24 min-h-screen">
        <div className="w-full px-8 py-4">
          <div className="md:w-1/2 w-full md:mx-auto flex p-4 items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-center font-Antonio uppercase">
              Choose <span className="text-pink-400">Template</span> and Start{" "}
              <span className="text-sky-500">Editing/Creating</span>
            </h1>
          </div>
          {/* Cards go here */}
          <div className="max-w-7xl 2xl:max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 justify-center">
              {sampleCards.map((c, idx) => {
                const model_check =
                  c.model === "basic" ? "bg-blue-900" : "bg-pink-900";
                return (
                  <div
                    key={idx}
                    onClick={() => handleRouting(c.id)}
                    className="flex cursor-pointer flex-col mt-10 backdrop-blur-sm overflow-hidden shadow-lg shadow-pink-30 hover:scale-95 transition-all duration-150 ease-linear hover:border border-gray-500 text-white rounded-2xl p-2 bg-gradient-to-tl from-blue-900/30
                     to-pink-900/50"
                  >
                    {/* Image Section */}
                    <img
                      src={c.image}
                      alt="thumbnail"
                      className="w-full object-cover rounded-t-lg h-48"
                    />
                    {/* Text Section */}
                    <div className="rounded-lg p-4">
                      <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
                      <p className="text-gray-300 mb-2">{c.description}</p>
                      <p className="text-gray-300 mb-2">
                        Category: {c.category}
                      </p>
                    </div>
                    {/* Model Section */}
                    <div className="rounded-lg p-4">
                      <p
                        className={`text-gray-300 mb-2 flex items-center justify-center font-bold px-5 py-3 ${model_check}`}
                      >
                        Model: {c.model}
                      </p>
                    </div>
                    {/* Button Section */}
                    <div className="rounded-lg p-2 md:flex hidden">
                      <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                        Use Template
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
