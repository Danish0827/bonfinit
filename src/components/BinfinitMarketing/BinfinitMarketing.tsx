import React from "react";
import BreadCrumbNew from "../BreadCrumb/BreadCrumb";
import Wrapper from "../Wrapper/Wrapper";
import BinfinitMainDivComp from "./BinfinitMainDivComp";
import BinfinitMainDivCompReversed from "./BinfinitMainDivCompReverse";
import NewMarketingSectionPage from "../NewMarketingSectionPage/NewMarketingSectionPage";
import SourceExtract from "./SourceExtract";
import BinfinitSegments from "./BinfinitSegments";
import MarketingNewSection from "./MarketingNewSection";

export const reverseData = [
  {
    id: 1,
    title: "Consumer Goods",
    img: "/banners/cons.jpg",
    desc: "At Binfinit, we transform consumer goods from regions of abundance to where they are most needed, meeting the demands of customers across the globe.",
    viewtxt: "Find out more about our business",
    viewmoreredirect: "/our-commodities",
  },
  {
    id: 2,
    title: "Paper",
    img: "/products/paper/paper2.jpg",
    desc: "At Binfinit, we specialize in transforming paper from regions of abundance to where it is most needed, serving the needs of customers around the world.",
    viewtxt: "Find out more about our business",
    viewmoreredirect: "/our-commodities",
  },
  {
    id: 3,
    title: "Projects / Machinery",
    img: "/banners/machinery11.jpg",
    desc: "We specialize in transforming commodities from regions of abundance to where they are needed most, providing essential machinery and resources to power critical industries and build a sustainable future.",
    viewtxt: "Find out more about our business",
    viewmoreredirect: "/our-commodities",
  },
  {
    id: 4,
    title: "Global Trading",
    img: "/banners/trading1.jpg",
    desc: "Our foundations lie in bridging global supply and global demand. We do this through optimising the transport, storage and distribution of bulk raw materials. Through our global network, we understand the nuances of each market, catering to distinct local needs in the context of global trading conditions.",
    viewtxt: "Find out more about our business",
    viewmoreredirect: "/our-commodities",
  },
];

const BinfinitMarketing = () => {
  return (
    <>
      <BreadCrumbNew
        title={"Binfinit Marketing"}
        page={"Binfinit Marketing"}
        image1="/banners/5.png"
        version2={false}
      />

      {/* <NewMarketingSectionPage /> */}
      <MarketingNewSection />
      <BinfinitSegments />
      <SourceExtract />

      <Wrapper>
        <div className="py-12 md:px-4 px-1">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-mainColor4 mb-4 text-center">
              Our Commodities
            </h2>
            <p className="md:text-lg text-base text-gray-700 max-w-2xl mx-auto mb-8">
              We transform commodities by bridging the gap between regions of
              abundance and areas of demand, ensuring they reach where they are
              needed most.
            </p>
          </div>
          <BinfinitMainDivComp
            title={"Metals "}
            desc={
              "At Binfinit, we transform metals and minerals such as copper, cobalt, nickel, zinc, lead, and ferroalloys, moving them from regions of abundance to where they are most needed."
            }
            img={"/marketing/metals1.jpg"}
            viewtxt={"Find out more about our business"}
            viewmoreredirect={"/our-commodities"}
          />
        </div>

        <div className=" md:px-4 px-1 space-y-12">
          <BinfinitMainDivCompReversed data={reverseData[0]} />
        </div>

        <div className="py-12 md:px-4 px-1">
          <BinfinitMainDivComp
            title={"Agricultural Products"}
            desc={
              "We transform agricultural commodities from regions of abundance to where they are most needed, meeting the growing demands of customers worldwide. "
            }
            viewtxt={"Find out more about our business"}
            img={"/banners/agri111.jpg"}
            viewmoreredirect={"http://localhost:3000/binfinit-marketing"}
          />
        </div>

        <div className=" md:px-4 px-1 space-y-12">
          <BinfinitMainDivCompReversed data={reverseData[1]} />
        </div>

        <div className="py-12 md:px-4 px-1">
          <BinfinitMainDivComp
            title={"Industrial Raw Materials"}
            desc={
              "We transform industrial raw materials by relocating them from areas of abundance to regions of critical need, specializing in recycling end-of-life electronics and extracting valuable metals such as copper, nickel, cobalt, gold, silver, platinum, and palladium."
            }
            viewtxt={"Find out more about our business"}
            img={"/products/rawmaterials/carbon1.jpg"}
            viewmoreredirect={"http://localhost:3000/binfinit-marketing"}
          />
        </div>

        <div className="mb-5 md:px-4 px-1 space-y-12">
          <BinfinitMainDivCompReversed data={reverseData[2]} />
        </div>
      </Wrapper>
    </>
  );
};

export default BinfinitMarketing;
