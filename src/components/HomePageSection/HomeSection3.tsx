import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Image from "next/image";

const HomeSection3 = () => {
  return (
    <div
      className="relative py-12 bg-fixed md:h-[70vh] h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url("/banners/4.png")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
      <Wrapper>
        <div className="flex flex-col-reverse lg:flex-row w-full gap-5 py-4 md:py-16">
          {/* Left Side: Service Content */}
          <div className="w-full lg:w-1/2 bg-white p-6 z-20 border-b-4 border-black/70 relative">
            <div className="mb-4">
              <h4 className="text-4xl text-black">Our Services</h4>
              <div className="h-1 rounded-full w-16 lg:w-20 mt-1 mb-4 bg-gradient-to-r from-mainColor2 to-mainColor3 duration-300"></div>
              <p className="text-base text-gray-600">
                We specialize in handling diverse cargo types with competitive,
                transparent pricing.
              </p>
            </div>
            <div className="space-y-4 text-gray-600">
              <div>
                <h4 className="text-3xl text-black">
                  Standard and Oversized Freight
                </h4>
                <p className="text-base">
                  Handling all types of goods, from regular shipments to larger,
                  more complex cargo.
                </p>
              </div>
              <div>
                <h4 className="text-3xl text-black">
                  Fragile and High-Value Goods
                </h4>
                <p className="text-base">
                  Ensuring safe, careful transit for sensitive or valuable items
                  with the utmost precision.
                </p>
              </div>
              <div>
                <h4 className="text-3xl text-black">Quality Assurance</h4>
                <p className="text-base">
                  Every shipment is handled with rigorous attention to quality
                  and care, with industry-grade packaging and tracking solutions
                  to meet the highest standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Logistics Image */}
          <div className="relative w-full lg:w-1/2 overflow-hidden group">
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2 bg-gradient-to-tr from-mainColor2 to-mainColor3 group-hover:-translate-x-0 group-hover:-translate-y-0 z-10"></span>
            <span className="absolute inset-0 w-full h-full group-hover:bg-indigo-50 z-20"></span>
            <span className="relative block overflow-hidden border border-gray-400 w-full h-full z-30">
              <Image
                src="https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1380.jpg"
                alt="Logistics"
                layout="responsive"
                width={600}
                height={400}
                className="object-cover w-full h-full duration-300 transform group-hover:scale-105"
              />
            </span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HomeSection3;
