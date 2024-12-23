import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiMining, GiFactory } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import Wrapper from "../Wrapper/Wrapper";
import { SiCoinmarketcap, SiMarketo } from "react-icons/si";

const sections = [
  {
    banner_image: "/global.jpg",
    alt: "Global Footprint",
    expertise_title: "Global Footprint",
    banner_description:
      "Binfinit connects businesses worldwide, optimizing the flow of commodities to bridge the gap between regions of surplus and demand.",
    
    slug: "/commodities/metal",
    icon: <BiWorld size={30} className="text-white" />,
  },
  // {
  //   banner_image: "/banners/ban13.jpg",
  //   alt: "Massive Trade Operations",
  //   expertise_title: "1 Million Tons",
  //   banner_description:
  //     "Managing over 1 million tons of commodities annually, Binfinit streamlines supply chains with precision and reliability.",
  //   slug: "/our-commodities",
  //   icon: <SiCoinmarketcap size={30} className="text-white" />,
  // },
  {
    banner_image: "/banners/ban11.jpg",
    alt: "marketing",
    expertise_title: "Binfinit Marketing",
    banner_description:
      "Innovative marketing strategies enhance commodity visibility, ensuring businesses thrive in competitive markets.",

      slug: "/binfinit-marketing",

    icon: <SiMarketo size={30} className="text-white" />,
  },
  {
    banner_image: "/manufacture.avif",
    alt: "Commodities",
    expertise_title: "Commodities",
    banner_description:
      "Binfinit leverages advanced technology to deliver actionable insights, enhancing the efficiency and value of commodities globally.",
    slug: "/commodities/consumer-goods",

    icon: <GiFactory size={30} className="text-white" />,
  },
];

const NewSectionHome = () => {
  return (
    <Wrapper>
      <div className="mt-4 md:px-4 px-0  md:my-16 md:sjcontainer">
        <div className="md:ml-[30px] ml-[8px] mb-8 mt-10">
          <h3 className="text-black  md:text-3xl text-2xl font-bold  mb-4 md:text-start text-center">
            About Us{" "}
          </h3>

          <p className="text-black/[0.7] md:text-lg text-base md:text-start text-center">
            We transform commodities by bridging the gap between regions of
            abundance and areas of demand, ensuring they reach where they are
            needed most.
          </p>
        </div>{" "}
        <div className="grid-cols-2 grid md:grid-cols-3 gap-2 md:gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative w-full bg-black h-[270px] md:h-[400px] overflow-hidden group"
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
                  className="mt-1 md:mt-4 text-xs md:text-base line-clamp-6 transition-transform duration-500 ease-out group-hover:translate-x-0 translate-x-[500px]"
                  dangerouslySetInnerHTML={{
                    __html: section.banner_description,
                  }}
                />

                {/* Link positioned at the bottom */}
                <Link
                  href={`${section.slug}`}
                  className="absolute flex items-center duration-300 translate-y-10 group-hover:translate-y-0 bottom-2 right-2 text-white hover:text-primary-dark font-bold hover:text-primary1"
                >
                  Explore <ArrowRight strokeWidth={3} size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default NewSectionHome;
