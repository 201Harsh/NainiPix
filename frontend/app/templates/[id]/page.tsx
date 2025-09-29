"use client";
import AxiosInstance from "@/config/Axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
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

const pages = () => {
  const Params = useParams();

  const id = Params.id;

  const [Template, setTemplate] = useState<Template | null>(null);
  useEffect(() => {
    const GetAllTemplates = async () => {
      try {
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
      }
    };
    GetAllTemplates();
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">{Template?.title}</h1>
        <p className="text-gray-300 mb-4">{Template?.description}</p>
        <img
          src={Template?.thumbnail}
          alt={Template?.title}
          className="mb-4 object-cover"
        />
      </div>
    </>
  );
};

export default pages;
