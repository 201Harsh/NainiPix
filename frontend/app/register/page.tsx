"use client";
import AxiosInstance from "@/config/Axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Flip, Slide, toast, Zoom } from "react-toastify";

const page = () => {
  const [name, setname] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [isSubmitting, setisSubmitting] = useState<boolean>(false);
  const [showPassword, setshowPassword] = useState<boolean>(false);

  const Router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setisSubmitting(true);
      const response = await AxiosInstance.post("/users/register", {
        name,
        email,
        password,
      });
      if (response.status === 201) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      }
      localStorage.setItem("email", response.data.tempuser.email);
      setname("");
      setemail("");
      setpassword("");
      Router.push("/verify");
    } catch (error: any) {
      const errors = error.response?.data?.errors;

      toast.error(error.response?.data, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      toast.error(
        error.response?.data?.error ||
          errors.forEach((e: any) => {
            toast.error(e.msg, {
              position: "top-right",
              autoClose: 3500,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Zoom,
            });
          }),
        {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        }
      );
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        {/* Register Card */}
        <div className="w-full max-w-md">
          {/* Logo Header */}
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-sky-600 to-violet-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative flex items-center space-x-3 bg-gray-900/90 rounded-full px-4 py-2 ring-1 ring-white/10 backdrop-blur">
                <Image
                  src="/img/logo.png"
                  alt="NainiPix AI Logo"
                  width={40}
                  height={40}
                  priority
                  className="drop-shadow-lg"
                />
                <h1 className="font-Antonio font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-sky-300 to-violet-400">
                  NainiPix AI
                </h1>
              </div>
            </div>
          </div>

          {/* Register Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-2xl animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Create Account
              </h2>
              <p className="text-gray-400">
                Join thousands of creators using NainiPix AI
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-violet-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative">
                    <input
                      required
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all duration-200"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <span className="text-gray-400">👤</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative">
                    <input
                      required
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-transparent transition-all duration-200"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <span className="text-gray-400">✉️</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative">
                    <input
                      required
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-200"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-8 pr-3 flex items-center z-10"
                      onClick={() => setshowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="h-5 w-5 text-gray-400" />
                      ) : (
                        <FaEye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <span className="text-gray-400">🔒</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center space-x-3">
                <input
                  required
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-violet-600 bg-gray-800 border-white/10 rounded focus:ring-violet-500 focus:ring-offset-gray-900"
                />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I agree to the{" "}
                  <span className="text-violet-400 hover:text-violet-300 cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-violet-400 hover:text-violet-300 cursor-pointer">
                    Privacy Policy
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full group relative bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 ease-out text-white font-semibold py-4 px-6 rounded-lg cursor-pointer shadow-2xl hover:shadow-violet-500/25 hover:scale-[1.02]"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="animate-pulse font-bold">
                      Creating Account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-violet-400 hover:text-violet-300 cursor-pointer font-semibold"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>

          {/* Security Badge */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center space-x-2 text-gray-400 text-sm bg-white/5 rounded-full px-4 py-2">
              <span>🛡️</span>
              <span>Your data is securely encrypted</span>
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

export default page;
