import React from "react";
import Header from "../Components/Header";

const page = () => {
  const sampleCards = [
    {
      id: 1,
      title: "Social Media Template",
      description: "Perfect for Instagram posts, stories, and Facebook covers",
      category: "Social",
      image: "/img/social-template.jpg",
      model: "basic",
    },
    {
      id: 2,
      title: "Business Presentation",
      description: "Professional slides and corporate branding templates",
      category: "Business",
      image: "/img/business-template.jpg",
      model: "basic",
    },
    {
      id: 3,
      title: "Creative Portfolio",
      description: "Artistic templates for designers and creatives",
      category: "Portfolio",
      image: "/img/portfolio-template.jpg",
      model: "premium",
    },
    {
      id: 4,
      title: "Product Showcase",
      description: "Elegant templates for showcasing products and services",
      category: "Product",
      image: "/img/product-template.jpg",
      model: "premium",
    },
    {
      id: 5,
      title: "Personal Blog",
      description: "Personal blog templates for writers and bloggers",
      category: "Blog",
      image: "/img/blog-template.jpg",
      model: "premium",
    },
    {
      id: 6,
      title: "Professional Resume",
      description: "Professional resume templates for job seekers",
      category: "Resume",
      image: "/img/resume-template.jpg",
      model: "premium",
    },
    {
      id: 7,
      title: "Creative Portfolio",
      description: "Artistic templates for designers and creatives",
      category: "Portfolio",
      image: "/img/portfolio-template.jpg",
      model: "premium",
    },
    {
      id: 8,
      title: "Product Showcase",
      description: "Elegant templates for showcasing products and services",
      category: "Product",
      image: "/img/product-template.jpg",
      model: "premium",
    },
  ];
  return (
    <>
      <Header />
      <div className="relative w-full bg-gray-900 pt-24 min-h-screen">
        <div className="w-full px-8 py-4">
          <div className="w-full flex bg-black p-4 items-center justify-center">
            <h1 className="text-white text-3xl">
              Choose Template and Start Editing/Creating
            </h1>
          </div>
          {/* Cards go here */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
              {sampleCards.map((c, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex flex-col mt-10 overflow-hidden border border-gray-500 text-white rounded-2xl p-2"
                  >
                    {/* Image Section */}
                    <div className="rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
                      {c.image}
                    </div>
                    {/* Text Section */}
                    <div className="rounded-lg shadow-md p-4">
                      <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
                      <p className="text-gray-300 mb-2">{c.description}</p>
                      <p className="text-gray-300 mb-2">
                        Category: {c.category}
                      </p>
                    </div>
                    {/* Model Section */}
                    <div className="rounded-lg shadow-md p-4">
                      <p className="text-gray-300 mb-2">Model: {c.model}</p>
                    </div>
                    {/* Button Section */}
                    <div className="rounded-lg shadow-md p-4">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
