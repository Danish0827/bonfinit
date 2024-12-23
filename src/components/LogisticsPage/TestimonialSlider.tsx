"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../emblaButtons/EmblaCarouselArrowButtons";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Their logistics services are seamless and reliable. We’re grateful for their support and commitment.",
    author: "Client A",
  },
  {
    quote:
      "Exceptional service and professionalism in every project. Highly recommended!",
    author: "Client B",
  },
  {
    quote:
      "Great customer service and attention to detail. They go above and beyond.",
    author: "Client C",
  },
  {
    quote: "Quick and efficient delivery every time. Couldn’t ask for more.",
    author: "Client D",
  },
  {
    quote: "Always a pleasure to work with. They make complex tasks simple.",
    author: "Client E",
  },
  {
    quote: "Their team is proactive and communicative. Outstanding experience!",
    author: "Client F",
  },
];

const TestimonialSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
    },
  });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="py-12 bg-[#f3f4f6]">
      <h3 className="text-3xl font-bold text-mainColor4 text-center mb-3  ">
        What Our Clients Say
      </h3>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full sm:min-w-[50%] p-6">
                <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 shadow-md">
                  <div className="ml-1 mb-2 ">
                    <Image
                      src={"./resume_icon.svg"}
                      alt="resume_icon"
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className="text-gray-700 italic">“{testimonial.quote}”</p>
                  <h4 className="text-blue-900 font-semibold mt-4">
                    - {testimonial.author}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 ml-[26px]">
          <div
            className={`bg-mainColor3 px-4 ${
              prevBtnDisabled ? "opacity-50" : ""
            }`}
          >
            <HiArrowLongLeft
              color={prevBtnDisabled ? "black" : "white"}
              className="cursor-pointer"
              onClick={!prevBtnDisabled ? onPrevButtonClick : undefined}
              size={22}
            />
          </div>
          <div
            className={`bg-mainColor3 px-4 ${
              nextBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <HiArrowLongRight
              color={nextBtnDisabled ? "black" : "white"}
              onClick={!nextBtnDisabled ? onNextButtonClick : undefined}
              className="cursor-pointer"
              size={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
