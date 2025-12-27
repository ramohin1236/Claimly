import React from "react";
import images from "../../../public/hero 2-Photoroom.svg";
import aboutImages from "../../../public/about.svg";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex flex-col py-10 px-7 lg:py-20 lg:px-24 bg-linear-to-l from-[#DBEAFE] to-[#EFF6FF] outline-[1px] outline-[#0000001A] xl:flex-row justify-between items-center  gap-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
            {/* left */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl lg:text-[40px] leading-[120%] font-semibold">
                About <span className="text-brand"> Claimly</span>
              </h2>
              <p className="tracking-[1px] leading-[120%] text-color-secondary">
                Helping everyday policyholders understand their insurance claim
                before deciding what to do next.
              </p>
            </div>

            {/* right */}
            <div className="w-">
              <Image
                src={images}
                alt="hro"
                width={100}
                height={100}
                className="md:w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="container mx-auto px-8 py-10 md:py-28">
        <div className="flex justify-between items-center gap-24">
          {/* left */}
          <div>
            <Image
              src={aboutImages}
              alt="about image"
              width={600}
              height={400}
            />
          </div>

          {/* right  */}
          <div className="lg:w-[60%] flex flex-col gap-4 md:gap-7">
            <div>
              <h2 className="text-2xl lg:text-[40px] leading-[120%] font-semibold">
                When an insurance <span className="text-brand"> claim</span>  feels unclear, knowing where you stand matters. 
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="default-list-text">
               Claimly has been created by Australians for Australians with over 10 years’ combined experience in the insurance industry, across claims handling, internal dispute resolution, and external disputes through AFCA. We understand how insurers assess claims, what evidence they rely on, and where misunderstandings commonly arise.
              </p>
              <p className="default-list-text">Claimly helps you make sense of your situation by turning your documents and answers into a clear, plain-English report explaining how a claim may be viewed, what factors usually matter, and what options are commonly available next.</p>
              <p className="default-list-text">Claimly provides general information only - not legal or financial advice.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
