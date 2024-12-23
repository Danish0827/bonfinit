"use client";
import Image from "next/image";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const OurJourneyReverse = () => {
  return (
    <div className={`   `}>
      <Wrapper>
        <div
          className={`flex  md:sacontainer flex-col-reverse py-4  md:py-16 lg:flex-row w-full `}
        >
          {/* Text Section */}

          <div className="relative  lg:block hidden mx-2 font-medium group md:w-full md:h-full md:min-h-[300px] md:max-w-[500px]">
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2  bg-gradient-to-tr from-mainColor2 to-mainColor3 group-hover:-translate-x-0 group-hover:-translate-y-0 z-10"></span>
            <span className="absolute inset-0 w-full h-full  group-hover:bg-indigo-50 z-20"></span>
            <span className="relative hidden lg:block overflow-hidden border border-gray-400 w-full h-full z-30">
              <Image
                src="/cards/values.jpg"
                alt="banner"
                className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px]"
                width={600}
                height={80}
              />
            </span>
          </div>

          <div className=" md:px-8 flex-1 group">
            <span className="    text-xl md:-ml-2 md:text-3xl py-1.5  text-primary">
              Our Values
            </span>
            <div className="h-1 rounded-full w-16 md:w-20  md:group-hover:w-32 group-hover:w-24 duration-300 mt-1 mb-4 bg-gradient-to-r from-mainColor2 to-mainColor3 "></div>

            <div className="relative  inline-block lg:hidden font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2  bg-gradient-to-tr from-mainColor2 to-mainColor3 group-hover:-translate-x-0 group-hover:-translate-y-0 z-10"></span>
              <span className="absolute inset-0 w-full h-full  group-hover:bg-indigo-50 z-20"></span>
              <span className="relative block overflow-hidden border border-[#BCC1C9] w-full h-full z-30">
                <Image
                  src="/cards/values.jpg"
                  alt="banner"
                  className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px]"
                  width={600}
                  height={80}
                />
              </span>
            </div>

            <div className="text-sm md:text-base text-gray-600 duration-300 group-hover:text-black mt-4">
              <p className="text-justify">
                At the core of our business are values that drive every decision
                and interaction we make. We believe in fostering trust through
                integrity and transparency, ensuring that all relationships with
                our clients and partners are open and honest. With a strong
                client-centric approach, we prioritize understanding and meeting
                the unique needs of each customer, adapting our solutions to add
                value to their business. In an ever-evolving global market, we
                embrace innovation and adaptability, leveraging technology and
                creative thinking to overcome challenges and improve efficiency.
              </p>
              <p className="mt-3 text-justify">
                Excellence in execution is a standard we uphold in every
                project, ensuring quality from initial planning to final
                delivery. Furthermore, we are committed to sustainability,
                recognizing our responsibility to operate in ways that are
                environmentally and socially conscious. Our values reflect not
                just our commitment to success but also our dedication to making
                a positive impact on the industries and communities we serve.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurJourneyReverse;
