import React from "react";

const pages = ({ params: { id } }: any) => {
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
      model: "premium",
    },
    {
      id: 7,
      title: "Creative Portfolio",
      description: "Artistic templates for designers and creatives",
      category: "Portfolio",
      image:
        "https://plus.unsplash.com/premium_photo-1666184129856-e421e3edc1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyb3VwJTIwb2YlMjBmcmllbmR8ZW58MHwwfDB8fHww",
      model: "premium",
    },
  ];

  const card = sampleCards.find((c) => c.id === Number(id));

  if (!card) {
    return <h1>Card not found</h1>;
  }

  return (
    <>
      <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">{card.title}</h1>
        <p className="text-gray-300 mb-4">{card.description}</p>
        <img src={card.image} alt={card.title} className="mb-4 object-cover" />
      </div>
    </>
  );
};

export default pages;
