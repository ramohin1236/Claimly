/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useRef, useEffect } from "react";
import verifyImage from "../../../../public/verify_email.svg";
import Image from "next/image";
import Link from "next/link";

const VerifyOtp: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Set focus on the first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;
    if (isNaN(Number(value))) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

   
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6).split("");
    if (pasteData.every((char) => !isNaN(Number(char)))) {
      const newOtp = [...otp];
      pasteData.forEach((char, index) => {
        newOtp[index] = char;
      });
      setOtp(newOtp);
      // Focus the last filled input or the first empty one
      const lastIndex = Math.min(pasteData.length, 5);
      inputRefs.current[lastIndex]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("Submitted OTP:", code);
    // Add verification logic here
  };

  return (
    <div>
      <div className="flex items-center gap-8">
        {/* Left Image */}
        <div className="w-full hidden lg:block">
          <Image
            src={verifyImage}
            alt="verify-otp-image"
            width={100}
            height={100}
            className="w-full"
          />
        </div>

        {/* Right Form */}
        <div className="w-full p-8 max-w-lg mx-auto flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#1E293B] text-3xl">
              Verify OTP
            </h1>
            <p className="text-[#64748B] text-sm">
              We have sent a 6-digit verification code to your email address.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* OTP Input Container */}
              <div
                className="flex justify-between gap-2 mt-4"
                onPaste={handlePaste}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full h-14 text-center text-xl font-semibold text-[#1E293B] bg-white rounded-xl border border-[#DBEAFE] focus:border-blue-600 outline-none transition-all shadow-sm"
                  />
                ))}
              </div>

              {/* Resend Link */}
              <div className="">
                <p className="text-sm text-slate-600">
                  Didn't receive the code?
                  <button
                    type="button"
                    className="text-[#4E9AF1] font-medium hover:underline ml-1"
                  >
                    Resend OTP
                  </button>
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#2563EB]/80 hover:bg-[#2563EB] text-white text-sm font-semibold transition-all shadow-lg active:scale-[0.98]"
              >
                Verify
              </button>

             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
