"use client";
import NewAgriPage from "@/components/AboutUsPage/NewAgriPage";
import OurJourneyReverse from "@/components/AboutUsPage/OurJourneyReverse";
import OurJourney from "@/components/AboutUsPage/OurJourneySection";
import BinfinitMainDivComp from "@/components/BinfinitMarketing/BinfinitMainDivComp";
import BinfinitMainDivCompReversed from "@/components/BinfinitMarketing/BinfinitMainDivCompReverse";
import { reverseData } from "@/components/BinfinitMarketing/BinfinitMarketing";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import NewHomeBanner from "@/components/HomeBanner/NewHomeBanner";
import HomeCommodities from "@/components/HomePageSection/HomeCommodities";
import HomeSection1 from "@/components/HomePageSection/HomeSection1";
import HomeSection2 from "@/components/HomePageSection/HomeSection2";
import HomeSection3 from "@/components/HomePageSection/HomeSection3";
import SuperiorCargoSection from "@/components/HomePageSection/SuperiorCargoSection";
import NewSectionHome from "@/components/NewSectionHome/NewSectionHome";
import WhyChooseUsSection from "@/components/WhyChooseUsSection/WhyChooseUsSection";
import Wrapper from "@/components/Wrapper/Wrapper";
import { FRONTEND_URL } from "@/utils/utilsimp";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const detectMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    setIsMobile(detectMobile());

    const handleResize = () => setIsMobile(detectMobile());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = [
    "/banners/1113.png",
    "/banners/10.png",
    "/banners/12.png",
    "/banners/13.png",
    // "/banners/1222.png",
    // "/banners/ban11.jpg",
    "/banners/1112.png",
  ];

  const mobileSlides = [
    "/mobilebanners/n1.png",
    "/mobilebanners/8.png",
    "/mobilebanners/2.png",
    "/mobilebanners/3.png",
    "/mobilebanners/10.png",
    // "/mobilebanners/5.png",
    // "/mobilebanners/7.png",
  ];

  const slidesToShow = isMobile ? mobileSlides : slides;

  const options = {
    loop: true,
    draggable: true,
    align: "center" as const,
  };

  return (
    <>
      {/* <HomeBanner
        slides={slides}
        options={options}
        slidesContent={[
          {
            title: "What can we do for you?",
            description:
              "We are an independent commodity house delivering innovative trade solutions and developing productive assets in the global Energy and Steel Industry",
            buttonText: "About Us",
          },
          {
            title: "Our Unique Marketing Solutions",
            description:
              "We are an independent commodity house delivering innovative trade solutions and developing productive assets in the global Energy and Steel Industry",
            buttonText: "Learn More",
          },
          {
            title: "Connect Today, Lead Tomorrow.",
            description:
              "We keep a ready supply of best-in-class reusable steel. We are open to business in all kinds of steel products – long or flat, new or used, prime or second choice.",
            buttonText: "Contact Us",
          },
          {
            title: "Creative Strategy Campaigns.",
            description:
              "At Binfinit, we bridge the gap in the global agricultural supply chain by transforming produce from regions of surplus to areas of demand, ensuring food security worldwide.",
            buttonText: "Contact Us",
          },
          {
            title: "Data-Driven Insights",

            description:
              "Binfinit specializes in the global distribution of industrial equipment, ensuring that businesses have access to the tools they need to thrive, no matter where they are located.",
            buttonText: "Contact Us",
          },
        ]}
      /> */}

      <NewHomeBanner
        slides={slidesToShow}
        options={options}
        slidesContent={[
          {
            title: "What can we do for you?",
            description:
              "We are an independent commodity house delivering innovative trade solutions and developing productive assets in the global  Industry.",
            buttonText: "About Us",
          },
          {
            title: "Our Unique Marketing Solutions",
            description:
              "We are an independent commodity house delivering innovative trade solutions and developing productive assets in the global  Industry.",
            buttonText: "Learn More",
          },
          {
            title: "Connect Today, Lead Tomorrow.",
            description:
              "We keep a ready supply of best-in-class reusable steel. We are open to business in all kinds of steel products – long or flat, new or used, prime or second choice.",
            buttonText: "Contact Us",
          },
          {
            title: "Creative Strategy Campaigns.",
            description:
              "At Binfinit, we bridge the gap in the global agricultural supply chain by transforming produce from regions of surplus to areas of demand, ensuring food security worldwide.",
            buttonText: "Contact Us",
          },
          {
            title: "Data-Driven Insights",

            description:
              "Binfinit specializes in the global distribution of industrial equipment, ensuring that businesses have access to the tools they need to thrive, no matter where they are located.",
            buttonText: "Contact Us",
          },
        ]}
      />

      <NewSectionHome />

      <Wrapper>
        <div className="py-12 md:px-4 px-1">
          <div className="md:ml-[30px] ml-[8px] mb-8">
            <h3 className="text-black  md:text-3xl text-2xl font-bold  mb-4 md:text-start text-center">
              Our Commodities{" "}
            </h3>

            <p className="text-black/[0.7] md:text-lg text-base md:text-start text-center">
              Responsibly sourcing the commodities that advance everyday life.
            </p>
          </div>{" "}
          <BinfinitMainDivComp
            title={"Powering the Future"}
            desc={
              "Our energy solutions fuel homes, industries, and economies. See how we ensure reliable and sustainable energy distribution."
            }
            img={"/marketing/commodities.svg"}
            viewtxt={"Find out more about our business"}
            viewmoreredirect={"/our-commodities"}
          />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="py-12 md:px-4 px-1">
          <BinfinitMainDivCompReversed data={reverseData[3]} />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="py-12 md:px-4 px-1">
          <BinfinitMainDivComp
            title={"Binfinit Marketing"}
            desc={
              "At Binfinit, we specialize in  commodities, moving them from regions of abundance to where they are most needed. See how we support industries and economies worldwide."
            }
            img={"/banners/mining1.jpg"}
            viewtxt={"Find out more about our business"}
            viewmoreredirect={"/our-commodities"}
          />
        </div>
      </Wrapper>

      {/* <HomeSection1 /> */}

      {/* <HomeCommodities /> */}
      {/* <OurJourney /> */}
      {/* <SuperiorCargoSection /> */}
      {/* <OurJourneyReverse /> */}
      <WhyChooseUsSection />
      {/* <HomeSection2 /> */}
      {/* <NewAgriPage /> */}

      {/* <HomeSection3 /> */}
    </>
  );
}
