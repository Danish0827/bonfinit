import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { BiWorld } from "react-icons/bi";
import { GiFactory, GiMineTruck, GiMining, GiWorld } from "react-icons/gi";
import NewMarketingCard from "./NewMarketingCard";
import { ImStatsBars2 } from "react-icons/im";
import { TfiBarChart, TfiWorld } from "react-icons/tfi";

const NewData = [
  {
    banner_image: "/global-reach.jpg",
    alt: "Global Reach",
    expertise_title: "Global Reach",
    banner_description:
      "Binfinit delivers unparalleled logistics solutions, connecting businesses across continents with a reliable and efficient global network.",
    slug: "/our-services",
    icon: <TfiWorld size={120} />,
  },
  {
    banner_image: "/optimized-operations.jpg",
    alt: "Optimized Operations",
    expertise_title: "Optimized Operations",
    banner_description:
      "Empowering businesses with data-driven strategies, Binfinit handles complex marketing and logistics operations seamlessly and efficiently.",
    slug: "/our-services",
    icon: <TfiBarChart size={120} />,
  },
  {
    banner_image: "/supply-chain.jpg",
    alt: "Integrated Supply Chain",
    expertise_title: "Integrated Supply Chain",
    banner_description:
      "Streamlining supply chain processes with innovative tools and technologies to ensure timely and cost-effective delivery for our partners.",
    slug: "/our-services",
    icon: <GiMineTruck size={120} />,
  },
  {
    banner_image: "/custom-solutions.jpg",
    alt: "Custom Solutions",
    expertise_title: "Custom Solutions",
    banner_description:
      "At Binfinit, we specialize in crafting tailored marketing and logistics solutions to meet the unique needs of every client.",
    slug: "/our-services",
    icon: <GiFactory size={120} />,
  },
];

const NewMarketingSectionPage = () => {
  return (
    <div className=" md:mb-16 bg-black">
      <Wrapper>
        <div className="px-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {NewData.map((data, index) => (
            <NewMarketingCard key={index} data={data} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default NewMarketingSectionPage;
