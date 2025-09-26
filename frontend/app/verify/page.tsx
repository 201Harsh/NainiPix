"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [email, setemail] = useState("NainiPixAI@gmail.com");

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newOtp = [...otp];

    pastedData.split("").forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });

    setOtp(newOtp);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const enteredOtp = otp.join("");
    console.log("OTP Submitted:", enteredOtp);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsVerified(true);

    // Reset after success
    setTimeout(() => {
      setIsVerified(false);
      setOtp(["", "", "", ""]);
    }, 300);
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="min-h-screen w-full bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        {/* OTP Card */}
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

          {/* OTP Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-2xl animate-slide-up">
            {/* Success Message */}

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                OTP Verification
              </h2>
              <p className="text-gray-400">
                Enter the 4-digit code sent to your email
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-400  to-violet-400 ml-1">
                  {email}
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* OTP Inputs */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-300 text-center block">
                  Verification Code
                </label>

                <div
                  className="flex justify-center space-x-3"
                  onPaste={handlePaste}
                >
                  {otp.map((digit, index) => (
                    <div key={index} className="relative group">
                      <div
                        className={`absolute -inset-0.5 rounded-lg blur transition-all duration-300 ${
                          digit
                            ? "bg-gradient-to-r from-violet-600 to-purple-600 opacity-75"
                            : "bg-gradient-to-r from-gray-600 to-gray-600 opacity-30"
                        } group-hover:opacity-100`}
                      ></div>
                      <input
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="relative w-12 h-12 text-center text-white text-xl font-bold bg-gray-800/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  ))}
                </div>

                {/* Resend Code */}
                <div className="text-center">
                  <button
                    type="button"
                    className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors duration-200"
                  >
                    Didn't receive code?{" "}
                    <span className="underline">Resend</span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isOtpComplete || isSubmitting}
                className={`w-full group relative transition-all duration-300 ease-out text-white font-semibold py-4 px-6 rounded-lg cursor-pointer shadow-2xl ${
                  isOtpComplete && !isSubmitting
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 hover:scale-[1.02] hover:shadow-violet-500/25"
                    : "bg-gray-700 cursor-not-allowed opacity-50"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Verifying...</span>
                  </div>
                ) : isVerified ? (
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-xl">🎉</span>
                    <span>Verified!</span>
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">Verify OTP</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </>
                )}
              </button>
            </form>

            {/* Back Link */}
            <div className="text-center mt-6">
              <Link href="/register" className="text-gray-400 hover:text-gray-300 transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
                <span>←</span>
                <span>Back to registration</span>
              </Link>
            </div>
          </div>

          {/* Security Note */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center space-x-2 text-gray-400 text-sm bg-white/5 rounded-full px-4 py-2">
              <span>⏱️</span>
              <span>Code expires in 5 minutes</span>
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
