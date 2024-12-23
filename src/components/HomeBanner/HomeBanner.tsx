"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../emblaButtons/EmblaCarouselArrowButtons";
import {
  DotButton,
  useDotButton,
} from "../emblaButtons/EmblaCarouselDotButton";

type SlideContentType = {
  title: string;
  description: string;
  buttonText: string;
};

type PropType = {
  slides: string[];
  slidesContent: SlideContentType[];
  options?: EmblaOptionsType;
};

const HomeBanner: React.FC<PropType> = ({ slides, options, slidesContent }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 600);
    return () => clearTimeout(timer);
  }, [selectedIndex]);

  return (
    <>
      <div className="embla">
        <div className="relative">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="embla__slide relative" key={index}>
                  <div className="w-full h-screen relative">
                    <Image
                      src={slide}
                      // className={`${index === 2 && "scale-x-[-1]"}`}
                      layout="fill"
                      objectFit="cover"
                      alt={`banner_${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="embla__overlay absolute top-0 right-0 w-full md:w-1/2 h-full flex flex-col justify-center items-start p-5 md:p-10 bg-black/[0.5]">
            <div
              className={`bg-gray-100 h-[2.5px] mb-4 transition-transform duration-600 ${
                animate ? "animate-width" : "w-[90px]"
              }`}
            ></div>
            {/* <h3
              className={`text-[36px] md:text-[54px] leading-tight text-white transition-opacity duration-600 ${
                animate
                  ? "opacity-0 translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
              style={{
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              {slidesContent[selectedIndex]?.title}
            </h3> */}
            <p
              className={`text-[16px] md:text-[25px] mt-1 text-white transition-opacity duration-600 ${
                animate
                  ? "opacity-0 translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
              style={{
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                animationDelay: "0.2s",
              }}
            >
              {slidesContent[selectedIndex]?.description}
            </p>
            {/* <button
              className={`bg-[#f49344] text-white px-8 rounded-md py-2 mt-4 transition-opacity duration-600 ${
                animate
                  ? "opacity-0 translate-y-5"
                  : "opacity-100 translate-y-0"
              }`}
              style={{
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                animationDelay: "0.4s",
              }}
            >
              {slidesContent[selectedIndex]?.buttonText}
            </button> */}
          </div>
        </div>

        {/* Fixed overlay */}

        {/* Fixed buttons for scrolling */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`md:w-4 md:h-4 w-3 h-3 rounded-full ${
                index === selectedIndex ? "bg-mainColor4" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Keyframes for fadeInUp animation */}
      <style jsx>{`
        @keyframes widthGrow {
          0% {
            width: 90px;
          }
          100% {
            width: 3px;
          }
        }

        .animate-width {
          animation: widthGrow 1s forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default HomeBanner;
