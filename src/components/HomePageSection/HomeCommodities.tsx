"use client";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import HomeCommoditiesCard from "./HomeCommoditiesCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "./homecommoditiescarousal.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../emblaButtons/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {
  DotButton,
  useDotButton,
} from "../emblaButtons/EmblaCarouselDotButton";
import { commoditiesData } from "@/utils/commoditiesData";

const HomeCommodities: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <Wrapper className="md:py-24 py-12">
      <div className="md:px-4 px-1">
        <div className="flex flex-col md:gap-2 gap-4 md:flex-row space-x-2 w-full">
          <div className="flex flex-col md:w-1/2 w-full">
            <div className="">
              <h3 className="text-mainColor4 font-semibold md:text-2xl text-base uppercase">
                Our Commodities
              </h3>
            </div>

            <div className="md:mt-5 mt-2">
              <h4 className="md:text-5xl text-3xl font-bold md:leading-[50px] leading-0">
                Dive into Our Logistic{" "}
                <span className="text-mainColor4 md:text-5xl text-3xl font-bold">
                  News Update
                </span>
              </h4>

              <p className="mt-5">
                We are dedicated to redefining logistics through innovative
                solutions that meet the unique needs of every client. With a
                commitment to efficiency, reliability, and advanced technology,
                we streamline your cargo and logistics operations, providing
                real-time tracking, transparent communication, and customized
                solutions. Whether you're shipping across town or across the
                globe, our expert team ensures that each step of the process is
                handled with precision, delivering a seamless, stress-free
                experience that keeps your business moving forward.
              </p>
            </div>

            <div className="mt-6">
              <button className="bg-mainColor4 text-white md:text-base text-base uppercase rounded-md   md:px-6 md:py-3 px-4 py-2">
                View Commodities
              </button>
            </div>
          </div>

          <div className="relative  md:w-1/2 w-full">
            <section className="home-commodities">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {commoditiesData &&
                    commoditiesData.length > 0 &&
                    commoditiesData.map((commodity, index) => (
                      <div className="embla__slide" key={index}>
                        <HomeCommoditiesCard
                          title={commodity.title}
                          description={commodity.description}
                          image={commodity.image}
                          url={commodity.url}
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div className="absolute top-0 bottom-[50px] flex justify-between items-center w-full ">
                <button
                  className="bg-mainColor3 w-10 h-10 flex justify-center items-center shadow-lg cursor-pointer"
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                >
                  <FaArrowLeftLong color="white" />
                </button>
                <button
                  className="bg-mainColor3 w-10 h-10 flex justify-center items-center shadow-lg cursor-pointer"
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                >
                  <FaArrowRightLong color="white" />
                </button>
              </div>

              <div className="embla__dots mt-4 flex justify-center gap-2">
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={"embla__dot".concat(
                      index === selectedIndex ? " embla__dot--selected" : ""
                    )}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeCommodities;
