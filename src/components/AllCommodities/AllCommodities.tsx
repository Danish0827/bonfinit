import React from "react";
import BreadCrumbNew from "../BreadCrumb/BreadCrumb";
import Wrapper from "../Wrapper/Wrapper";
import HomeCommoditiesCard from "../HomePageSection/HomeCommoditiesCard";
import { commoditiesData } from "@/utils/commoditiesData";

const AllCommodities = () => {
  return (
    <>
      <BreadCrumbNew
        title={"Our Commodities"}
        page={"Our Commodities"}
        image1="./banners/3.png"
        version2={false}
      />

      <Wrapper className="py-12 group">
        <div>
          <h2 className="md:text-4xl text-xl font-semibold   text-center mb-4 text-black relative">
            Our Commodities
            <span className="h-1 block  mt-2 mx-auto w-16 md:w-20 md:group-hover:w-32 group-hover:w-24 duration-300 bg-gradient-to-r from-mainColor3 to-mainColor4 rounded-lg"></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-3 grid-cols-1 px-4">
          {commoditiesData &&
            commoditiesData.length > 0 &&
            commoditiesData.map((commodity, index) => (
              <HomeCommoditiesCard
                key={index}
                title={commodity.title}
                description={commodity.description}
                image={commodity.image}
                url={commodity.url}
              />
            ))}
        </div>
      </Wrapper>
    </>
  );
};

export default AllCommodities;
