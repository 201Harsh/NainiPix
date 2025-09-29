"use client";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useRouter } from "next/navigation";
import AxiosInstance from "@/config/Axios";
import { Flip, toast } from "react-toastify";

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
  const Router = useRouter();

  useEffect(() => {
    const GetAllTemplates = async () => {
      try {
        const res = await AxiosInstance.get("/template/getAll");

        if (res.status === 200) {
          setTemplates(res.data.Templates);
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
      }
    };
    GetAllTemplates();
  }, []);

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
              {Templates.map((c, idx) => {
                const model_check =
                  c.category === "free" ? "bg-blue-900" : "bg-pink-900";
                return (
                  <div
                    key={idx}
                    onClick={() => handleRouting(c._id)}
                    className="flex cursor-pointer flex-col mt-10 backdrop-blur-sm overflow-hidden shadow-lg shadow-pink-30 hover:scale-95 transition-all duration-150 ease-linear hover:border border-gray-500 text-white rounded-2xl p-2 bg-gradient-to-tl from-blue-900/30
                     to-pink-900/50"
                  >
                    {/* Image Section */}
                    <img
                      src={c.thumbnail}
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
                        Model: {c.category}
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
