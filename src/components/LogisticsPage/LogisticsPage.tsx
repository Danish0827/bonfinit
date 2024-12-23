"use client";
import React from "react";
import BreadCrumbNew from "../BreadCrumb/BreadCrumb";
import Image from "next/image";
import TestimonialSlider from "./TestimonialSlider";

const LogisticsPage = () => {
  return (
    <>
      <BreadCrumbNew
        title={"Logistics"}
        page={"Logistics"}
        image1="https://img.freepik.com/free-photo/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662990.jpg?t=st=1730193612~exp=1730197212~hmac=50bc45d994f6f7a6da66a5d7506d65bdd3ed6458eabc1cda8a5f225f8566b789&w=900"
        version2={false}
      />

      <div className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-mainColor4 mb-4">
          Our Logistics Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-international-trade_23-2149154534.jpg?t=st=1731665350~exp=1731668950~hmac=2d107f33f9e249e598b28a7bd9724ea5a0f8d69ac419aaa0c397d9b0ba7256d6&w=996"
              alt="Freight Shipping"
              width={400}
              height={300}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">Freight Shipping</h3>
            <p className="text-gray-600 mt-2">
              Reliable freight solutions by air, sea, and land for global reach.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="https://img.freepik.com/premium-photo/3d-flat-icon-warehouse-cloud-symbol-cloudbased-inventory-management-system_980716-278401.jpg?w=740"
              alt="Warehousing & Storage"
              width={400}
              height={300}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              Warehousing & Storage
            </h3>
            <p className="text-gray-600 mt-2">
              Comprehensive warehousing solutions to keep goods safe and
              accessible.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="https://img.freepik.com/free-vector/world-logistic-network-template_1284-14967.jpg?t=st=1731665435~exp=1731669035~hmac=c5ddd7fc6ef435cab80a96c21bbb097d09773fea0a4e0c3a845338d782098700&w=826"
              alt="Supply Chain Management"
              width={400}
              height={400}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              Supply Chain Management
            </h3>
            <p className="text-gray-600 mt-2">
              Streamlined supply chain services to enhance business productivity
              and efficiency.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold text-mainColor4 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          From reducing costs to ensuring timely deliveries, our logistics
          solutions are designed to support business growth and sustainability.
        </p>
        <div className="py-4 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <h3 className="text-xl font-semibold text-mainColor4">
                Global Reach
              </h3>
              <p className="text-gray-600 mt-2">
                Seamless international coverage to meet global demands
                efficiently.
              </p>
              <span className="arrow right-arrow"></span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <h3 className="text-xl font-semibold text-mainColor4">
                Cost Efficiency
              </h3>
              <p className="text-gray-600 mt-2">
                Competitive pricing and optimized logistics for better value.
              </p>
              <span className="arrow right-arrow"></span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <h3 className="text-xl font-semibold text-mainColor4">
                Advanced Tracking
              </h3>
              <p className="text-gray-600 mt-2">
                Real-time tracking to keep you updated every step of the way.
              </p>
              <span className="arrow right-arrow"></span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
              <h3 className="text-xl font-semibold text-mainColor4">
                Custom Solutions
              </h3>
              <p className="text-gray-600 mt-2">
                Tailored logistics services to meet your business’s unique
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TestimonialSlider />

      <section className="py-20 px-6 lg:px-20 bg-white group">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-blue-900"></h2>
        <h2 className="md:text-3xl text-xl font-bold   text-center mb-4 text-black relative">
          Our Commodities and Services
          <span className="h-1 block  mt-2 mx-auto w-16 md:w-20 md:group-hover:w-32 group-hover:w-24 duration-300 bg-gradient-to-r from-mainColor3 to-mainColor4 rounded-lg"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Metals Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-mainColor2">
              Metals
            </h3>
            <Image
              src="https://img.freepik.com/premium-vector/set-bars-tubes-various-types-metals-white-background_858664-3030.jpg?w=996"
              alt="Metals"
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-700">
              We source and market a range of metals essential for industrial
              and commercial sectors globally, ensuring quality and reliability
              in every delivery.
            </p>
          </div>
          {/* Consumer Goods Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-mainColor2">
              Consumer Goods
            </h3>
            <Image
              src="https://img.freepik.com/free-vector/drawn-palm-oil-producing-industry-with-person-protesting_23-2148809011.jpg?t=st=1731665646~exp=1731669246~hmac=d6aecebadb5b80647737330a28d07387264f8bbc0e502c7fd38258fdc96e9a60&w=996"
              alt="Consumer Goods"
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-700">
              From raw materials to finished products, we connect suppliers and
              consumers worldwide with unmatched efficiency and integrity.
            </p>
          </div>
          {/* Agricultural Products Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-mainColor2">
              Agricultural Products
            </h3>
            <Image
              src="https://img.freepik.com/free-vector/set-realistic-canvas-bag-full-grains-cereal_1441-938.jpg?t=st=1731665601~exp=1731669201~hmac=bca4d9719f780f9ab76cf15d054ffe1e09ee4ee0891ed1a7e8cb0c792d88ea80&w=1380"
              alt="Agricultural Products"
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-700">
              Our agricultural commodities span a variety of products, bridging
              the gap between global producers and local markets in need.
            </p>
          </div>
        </div>
      </section>

      <div className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-mainColor4 text-center mb-6">
          Our Process
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {["Planning", "Packaging", "Shipping", "Delivery"].map(
            (step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 w-64 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-mainColor4">
                  {step}
                </h3>
                <p className="text-gray-600 mt-2">
                  Description of the {step.toLowerCase()} phase to illustrate
                  the streamlined logistics process.
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <section className="py-20 px-6 lg:px-20 bg-white group">
        <h2 className="md:text-3xl text-xl text-center mb-4 text-black font-bold relative ">
          What Drives Us Forward
          <span className="h-1 block mt-2 mx-auto w-16 md:w-20 md:group-hover:w-32 group-hover:w-24 duration-300 bg-gradient-to-r from-mainColor2 to-mainColor3 rounded-lg"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Value 1 Card */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center transition-transform transform group-hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              Integrity
            </h3>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://img.freepik.com/free-photo/close-up-hands-putting-together-puzzle_23-2148295449.jpg"
                alt="Integrity"
                width={300}
                height={200}
                className="w-full h-40 object-cover mb-4 rounded-lg transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-300 opacity-20"></div>
            </div>
            <p className="text-gray-700">
              We believe in doing business with honesty and transparency,
              ensuring trust is built in every relationship and transaction.
            </p>
          </div>

          {/* Value 2 Card */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200 transition-transform transform group-hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              Innovation
            </h3>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://img.freepik.com/free-photo/brainstorm-ideas-light-bulbs_53876-127388.jpg"
                alt="Innovation"
                width={300}
                height={200}
                className="w-full h-40 object-cover mb-4 rounded-lg transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-teal-400 opacity-20"></div>
            </div>
            <p className="text-gray-700">
              Our solutions are crafted with a forward-thinking approach, always
              exploring new ways to improve and deliver value to our clients.
            </p>
          </div>

          {/* Value 3 Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-transform transform group-hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Sustainability
            </h3>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://img.freepik.com/free-photo/green-tree-earth-represents-environmental-conservation_53876-130512.jpg"
                alt="Sustainability"
                width={300}
                height={200}
                className="w-full h-40 object-cover mb-4 rounded-lg transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-orange-300 opacity-20"></div>
            </div>
            <p className="text-gray-700">
              We are committed to practices that not only support growth but
              also prioritize environmental and social responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* 
      <div className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold text-mainColor4 mb-6">
          Our Industry Expertise
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          With decades of experience in logistics, we understand the challenges
          and solutions across various industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Manufacturing", "Retail", "Healthcare"].map((industry, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-mainColor4">
                {industry}
              </h3>
              <p className="text-gray-600 mt-2">
                Expertise in logistics tailored for the {industry.toLowerCase()}{" "}
                industry.
              </p>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-mainColor4 text-center mb-6">
          Sustainability Initiatives
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Committed to reducing our carbon footprint through eco-friendly
          practices and green solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "Eco-Friendly Vehicles",
            "Recycling Program",
            "Energy Efficiency",
          ].map((initiative, idx) => (
            <div
              key={idx}
              className="bg-white p-6 w-64 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-blue-900">
                {initiative}
              </h3>
              <p className="text-gray-600 mt-2">
                Details about our {initiative.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </div> */}

      <style jsx>{`
        .arrow {
          position: absolute;
          height: 5px;
          width: 55px;
          background-color: orange;
          top: 50%;
          transform: translateY(-50%);
        }

        .right-arrow {
          right: -55px;
          border-radius: 3px;
        }

        .right-arrow:after {
          content: "";
          position: absolute;
          right: -10px;
          top: 50%;
          margin-top: -5px;
          border: 5px solid transparent;
          border-left: 5px solid blue;
        }

        /* Remove arrow from the last item */
        .grid > div:last-child .right-arrow {
          display: none;
        }
      `}</style>
    </>
  );
};

export default LogisticsPage;
