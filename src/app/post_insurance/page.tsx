"use client";
import React, { useState } from "react";
import Image from "next/image";
import chkimage from "../../../public/check.svg";
import StepOne from "@/components/post-insurance/StepOne";
import StepTwo from "@/components/post-insurance/StepTwo";
import StepThree from "@/components/post-insurance/StepThree";
import StepFour from "@/components/post-insurance/StepFour";

const PostInsurance = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleNext = () => currentPage < 4 && setCurrentPage((p) => p + 1);
  const handlePrev = () => currentPage > 1 && setCurrentPage((p) => p - 1);
  const renderItem = (step: number) => {
    switch (step) {
      case 1: return <StepOne onNext={handleNext} />;
      case 2: return <StepTwo onNext={handleNext} onPrev={handlePrev} />;
      case 3: return <StepThree onNext={handleNext} onPrev={handlePrev} />;
      case 4: return <StepFour onPrev={handlePrev} />;
      default: return null;
    }
  };
  return (
    <div className="container mx-auto px-6 lg:px-8 py-10 lg:py-28 flex flex-col lg:flex-row gap-12 lg:gap-24">
      {/* Timeline Sidebar */}
      <div className="relative flex lg:flex-col items-center lg:items-start h-auto lg:h-[400px] w-full lg:w-fit overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
        <div className="hidden lg:block absolute left-[13px] top-0 h-full w-[2px] bg-[#64748B]" />
        <div className="flex lg:flex-col justify-between items-center lg:items-start w-full lg:h-full gap-8 z-10 shrink-0">
          {Array.from({ length: 4 }).map((_, i) => {
            const step = i + 1;
            return (
              <div key={i} className="flex-shrink-0">
                {currentPage === step && (
                  <div className="w-7 h-7 flex items-center justify-center rounded-full border border-[#2563EB] bg-[#DBEAFE]">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#2563EB]" />
                  </div>
                )}
                {currentPage > step && (
                  <div className="w-7 h-7 flex items-center justify-center rounded-full border border-[#2563EB] bg-[#DBEAFE]">
                    <Image src={chkimage} alt="check" width={16} height={16} />
                  </div>
                )}
                {currentPage < step && (
                  <div className="w-7 h-7 flex items-center justify-center rounded-full border border-[#64748B] bg-white">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#64748B]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Content Area */}
      <div className="flex-1 w-full">{renderItem(currentPage)}</div>
    </div>
  );
};
export default PostInsurance;
