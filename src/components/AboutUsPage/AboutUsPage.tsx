"use client";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import BreadCrumbNew from "../BreadCrumb/BreadCrumb";
import Image from "next/image";
import OurJourney from "./OurJourneySection";
import TeamSection from "./TeamSection";
import OurJourneyReverse from "./OurJourneyReverse";
import { FcGlobe } from "react-icons/fc";

const AboutUsPage = () => {
  return (
    <>
      <BreadCrumbNew
        title={"About Us"}
        page={"about us"}
        image1="https://img.freepik.com/free-photo/view-worker-grinding-piece-metal_268835-4092.jpg?t=st=1730109799~exp=1730113399~hmac=ad78f210ecf7e1c6db0d0347aa0b6195cd99393149b35a1940fd5365777a7f25&w=1060"
        version2={false}
      />

      <Wrapper>
        <main className="bg-white text-gray-800">
          <OurJourney />
          {/* <section id="mission" className="py-16 px-6 lg:px-20 bg-white group">
          <h2 className="md:text-3xl text-xl text-center mb-4 text-black relative ">
            Our Mission
            <span className="h-1 block  mt-2 mx-auto w-16 md:w-20 md:group-hover:w-32 group-hover:w-24 duration-300 bg-gradient-to-r from-blue-900 to-blue-500 rounded-lg"></span>
          </h2>

          <p className="text-sm lg:text-base text-center max-w-4xl mx-auto mb-6 leading-relaxed">
            Since our inception in Dubai in 2017, we've been dedicated to
            delivering innovative trade solutions across steel, consumer goods,
            and logistics industries globally. We connect where commodities are
            plentiful with regions that need them, ensuring reliable and
            efficient transportation.
          </p>
          <p className="text-sm lg:text-base text-center max-w-4xl mx-auto leading-relaxed">
            Our foundation lies in bridging global supply and demand through
            optimized transport, storage, and distribution, supported by a
            global network with local market expertise.
          </p>
        </section> */}

          {/* Reach and Capabilities Section */}
          {/* <section className="py-20 px-6 lg:px-20 bg-gray-100 group">
            <h2 className="md:text-3xl text-xl   text-center mb-4 text-black relative">
              Our Global Reach and Capabilities
              <span className="h-1 block  mt-2 mx-auto w-16 md:w-20 md:group-hover:w-32 group-hover:w-24 duration-300 bg-gradient-to-r from-mainColor3 to-mainColor4 rounded-lg"></span>
            </h2>

            <div className="flex flex-col md:flex-row items-center md:justify-between max-w-6xl mx-auto">
              <div className="md:w-1/2 mb-8 md:mb-0 md:text-base mr-6 text-sm text-gray-700 leading-relaxed">
                <div className="flex gap-2 items-center mb-2">
                  <FcGlobe size={25} />
                  <h4 className="text-2xl text-mainColor3 ">Global Reach</h4>
                </div>
                <p className="text-justify">
                  {" "}
                  With an expansive presence across key global markets, we
                  leverage deep-rooted market intelligence and expertise to
                  deliver products meticulously tailored to meet our customers'
                  unique specifications. Our extensive networks and reliable
                  logistics systems empower us to transport large volumes of
                  commodities safely, swiftly, and efficiently, ensuring
                  seamless supply chains that span continents.{" "}
                </p>
                <p className="mt-4 text-justify">
                  {" "}
                  We take pride in our nuanced understanding of diverse markets,
                  which allows us to adapt our services to cater to specific
                  regional demands. This enables us to provide industry-leading
                  logistics and distribution solutions that not only meet but
                  exceed expectations, fostering growth and resilience for our
                  clients and partners around the world.{" "}
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://img.freepik.com/free-photo/people-celebrating-world-population-day_23-2151493235.jpg?t=st=1730112694~exp=1730116294~hmac=a9e9ea4524ae2e24ce3b3eab7b72e8e15283e0c92c661e499d52e7d15ada5108&w=1060"
                  alt="Global Reach"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section> */}

          <OurJourneyReverse />

          {/* Commodities and Services Section */}
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
                  src="https://img.freepik.com/free-photo/interior-view-steel-factory_1359-123.jpg?t=st=1730112549~exp=1730116149~hmac=08be53f23cee00c928e90f097a49efb9f2233452c334ed46411098a9150e4e18&w=1060"
                  alt="Metals"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <p className="text-gray-700">
                  We source and market a range of metals essential for
                  industrial and commercial sectors globally, ensuring quality
                  and reliability in every delivery.
                </p>
              </div>
              {/* Consumer Goods Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4 text-mainColor2">
                  Consumer Goods
                </h3>
                <Image
                  src="https://img.freepik.com/free-photo/welding-work-with-metal-construction-busy-metal-factory_613910-3857.jpg?t=st=1730112490~exp=1730116090~hmac=c245660b3367461001d7d62c5665b2faad6df00efa8fdfe5d426878be0d15710&w=1060"
                  alt="Consumer Goods"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <p className="text-gray-700">
                  From raw materials to finished products, we connect suppliers
                  and consumers worldwide with unmatched efficiency and
                  integrity.
                </p>
              </div>
              {/* Agricultural Products Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4 text-mainColor2">
                  Agricultural Products
                </h3>
                <Image
                  src="https://img.freepik.com/free-photo/welding-work-with-metal-construction-busy-metal-factory_613910-17130.jpg?t=st=1730112141~exp=1730115741~hmac=219a8da56da77f91a57929044f7ef06c71354243035365912bef2e355130f610&w=1060"
                  alt="Agricultural Products"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <p className="text-gray-700">
                  Our agricultural commodities span a variety of products,
                  bridging the gap between global producers and local markets in
                  need.
                </p>
              </div>
            </div>
          </section>

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
                  Our solutions are crafted with a forward-thinking approach,
                  always exploring new ways to improve and deliver value to our
                  clients.
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
        </main>
      </Wrapper>
    </>
  );
};

export default AboutUsPage;
