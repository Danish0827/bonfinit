import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiCoinmarketcap } from "react-icons/si";
import { IoConstructOutline } from "react-icons/io5";
import { GiCargoShip } from "react-icons/gi";

const segments = [
  {
    banner_image: "/banners/ban12.jpg",
    alt: "Industrial",
    expertise_title: "Industrial",
    banner_description:
      "Binfinit  industrial business spans the metals and energy markets, producing multiple commodities from over 60 assets",
    slug: "/our-commodities",
    icon: <IoConstructOutline size={30} className="text-white" />,
  },
  {
    banner_image: "/banners/whowe.avif",
    alt: "Marketing",
    expertise_title: "Marketing",
    banner_description:
      "We move commodities from where they are plentiful to where they are needed",
    slug: "/our-commodities",
    icon: <GiCargoShip size={30} className="text-white" />,
  },
];

const BinfinitSegments = () => {
  return (
    <Wrapper className="pt-12 pb-4">
      <div className="md:px-6 px-2 mb-8">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="w-full md:w-[41.9%]">
            <div className="mb-4 text-start">
              <h2 className="md:text-3xl text-2xl font-bold text-black mb-4">
                At a glance
              </h2>

              <p className="text-justify">
                Our team has consistently delivered high-quality results in
                transforming commodities from regions of abundance to where they
                are most needed. This extensive experience allows us to
                understand the unique challenges of supply and demand,
                anticipate potential hurdles, and provide innovative solutions,
                ensuring smooth and efficient execution from start to finish.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="border border-black/[0.6] rounded- flex-1 flex flex-col items-center justify-center px-4 py-8 h-auto">
                <h4 className="text-black font-semibold text-3xl">60+</h4>
                <p>Commodities</p>
              </div>

              <div className="border border-black/[0.6] rounded-sm flex-1 flex flex-col items-center justify-center px-4 py-8 w-full h-auto">
                <h4 className="text-black font-semibold text-3xl">15+</h4>
                <p>countries</p>
              </div>

              <div className="border border-black/[0.6] rounded-sm flex flex-col items-center justify-center px-4 py-8 w-full h-auto">
                <h4 className="text-black font-semibold text-3xl">90+</h4>
                <p>Contractors</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[59.1%] ">
            <div className=" md:px-4 px-0  md:sacontainer">
              <div className="mb-6">
                {" "}
                <h2 className="md:text-3xl text-2xl md:text-start text-center font-bold text-black mb-4">
                  Two Business Segments
                </h2>
              </div>
              <div className="grid-cols-2 grid md:grid-cols-2 gap-2 md:gap-4">
                {segments.map((section, index) => (
                  <div
                    key={index}
                    className="relative w-full bg-black h-[240px] md:h-[400px] overflow-hidden group"
                  >
                    {/* Background Image */}
                    <Image
                      src={section.banner_image}
                      alt={section.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0 transition-transform duration-500 ease-in-out group-hover:translate-x-[500px] group-hover:translate-y-[500px]"
                      width={800}
                      height={500}
                    />

                    {/* Content on top of the background */}
                    <div className="relative z-10 p-3 px-2 md:p-6 text-white h-[270px] md:h-[400px] transition-colors duration-300 delay-1000 ease-in-out">
                      <div className="flex items-center gap-2">
                        {section.icon}
                        <h3 className="text-base md:text-2xl text-left group-hover:text-primary1 font-semibold">
                          {section.expertise_title}
                        </h3>
                      </div>
                      <div
                        className="mt-1 md:mt-4 text-xs md:text-base line-clamp-6 transition-transform duration-500 ease-out"
                        dangerouslySetInnerHTML={{
                          __html: section.banner_description,
                        }}
                      />

                      {/* Link positioned at the bottom */}
                      {/* <Link
                        href={`${section.slug}`}
                        className="absolute flex items-center duration-300 translate-y-10 group-hover:translate-y-0 bottom-2 right-2 text-white hover:text-primary-dark font-bold hover:text-primary1"
                      >
                        Explore <ArrowRight strokeWidth={3} size={15} />
                      </Link> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BinfinitSegments;
