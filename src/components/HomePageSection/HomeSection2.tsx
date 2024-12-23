import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";
import { FaCheckDouble } from "react-icons/fa";

const HomeSection2 = () => {
  return (
    <Wrapper>
      <div className="md:px-4 px-1 md:pt-8 md:pb-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white order-2 md:order-1">
            <h3 className="text-mainColor4 font-semibold md:text-2xl text-base uppercase">
              Our Strengths
            </h3>

            <div className="md:mt-5 mt-1">
              <h4 className="md:text-5xl text-3xl font-bold md:leading-[50px] leading-0">
                Empowering{" "}
                <span className="text-mainColor4 md:text-5xl text-3xl font-bold">
                  Businesses{" "}
                </span>
                with Unmatched Expertise
              </h4>

              <p className="mt-5 text-justify text-gray-600">
                With a proven track record in logistics and marketing, Binfinit
                delivers tailored solutions to meet your unique challenges. From
                seamless operations to innovative strategies, we empower your
                business for growth and efficiency.
              </p>
            </div>

            <div className="mt-6 md:w-[75%] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-mainColor4" />
                  <h4 className="md:text-lg text-base text-gray-600">
                    Expertise You Can Trust
                  </h4>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-mainColor4" />
                  <h4 className="md:text-lg text-base text-gray-600">
                    Strategic Partnerships
                  </h4>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-mainColor4" />
                  <h4 className="md:text-lg text-base text-gray-600">
                    Innovative Solutions
                  </h4>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-mainColor4" />
                  <h4 className="md:text-lg text-base text-gray-600">
                    Industry Insights
                  </h4>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-mainColor4" />
                  <h4 className="md:text-lg text-base text-gray-600">
                    Reliable Operations
                  </h4>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckDouble className="text-mainColor4" />
                  <h4 className="md:text-lg text-base text-gray-600">
                    Growth-Oriented Focus
                  </h4>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-mainColor4 text-white md:text-base text-base uppercase rounded-md md:px-8 px-6 md:py-2 py-2 hover:bg-mainColor4 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center items-center">
            <Image
              src={"/home/bin1.png"}
              width={700}
              height={700}
              alt="logistics-image"
              className="md:w-[85%] w-full "
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection2;
