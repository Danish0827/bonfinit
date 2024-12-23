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

type DescriptionType = {
  text: string;
  duration: number; // duration to show the description
  showDelay: number; // delay before showing the description
};

const NewHomeBanner: React.FC<PropType> = ({
  slides,
  options,
  slidesContent,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [showWords, setShowWords] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showDescription1, setShowDescription1] = useState(false);

  const [showAdditionalDescription, setShowAdditionalDescription] =
    useState(false);

  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);

  const descriptions: DescriptionType[] = [
    {
      text: "We are an independent commodity house delivering innovative trade solutions and developing productive assets in the global industry.",
      duration: 3000, // Show for 3 seconds
      showDelay: 1000, // Delay before showing this description
    },
    {
      text: "We keep a ready supply of best-in-class reusable steel. We are open to business in all kinds of steel products – long or flat, new or used, prime or second choice.",
      duration: 3000, // Show for 3 seconds
      showDelay: 1000, // Delay before showing this description
    },
    {
      text: "At Binfinit, we bridge the gap in the global agricultural supply chain by transforming produce from regions of surplus to areas of demand, ensuring food security worldwide.",
      duration: 3000, // Show for 3 seconds
      showDelay: 1000, // Delay before showing this description
    },
    {
      text: "Binfinit specializes in the global distribution of industrial equipment, ensuring that businesses have access to the tools they need to thrive, no matter where they are located.",
      duration: 3000, // Show for 3 seconds
      showDelay: 1000, // Delay before showing this description
    },
  ];

  useEffect(() => {
    const wordTimeout = setTimeout(() => {
      setShowWords(true);
      // setShowDescription(true);
    }, 100);

    const removeWordsTimeout = setTimeout(() => {
      setShowWords(false);
    }, 3500);

    const descriptionTimeout = setTimeout(() => {
      setShowDescription(true);
    }, 4000);

    const descriptionTimeoout2 = setTimeout(() => {
      setShowAdditionalDescription(true);
    }, 4000);
    const removeDescTimeout2 = setTimeout(() => {
      setShowAdditionalDescription(false);
    }, 7000);

    return () => {
      clearTimeout(wordTimeout);
      clearTimeout(removeWordsTimeout);
      clearTimeout(descriptionTimeout);
      clearTimeout(descriptionTimeoout2);
      clearTimeout(removeDescTimeout2);
    };
  }, []);

  useEffect(() => {
    const cycleDescriptions = () => {
      setShowDescription1(true);
      setTimeout(() => {
        setShowDescription1(false);
      }, descriptions[currentDescriptionIndex].duration);

      setTimeout(() => {
        setCurrentDescriptionIndex((prevIndex) =>
          prevIndex < descriptions.length - 1 ? prevIndex + 1 : 0
        );
      }, descriptions[currentDescriptionIndex].duration + 500);
    };

    const descriptionCycleInterval = setInterval(
      cycleDescriptions,
      descriptions[currentDescriptionIndex].showDelay +
        descriptions[currentDescriptionIndex].duration +
        1000
    );

    return () => clearInterval(descriptionCycleInterval);
  }, [currentDescriptionIndex]);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 9000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="embla">
        <div className="relative">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="embla__slide relative" key={index}>
                  <div className="w-full md:h-screen h-[80vh] relative">
                    <Image
                      src={slide}
                      width={1600}
                      height={1000}
                      objectFit="cover"
                      alt={`banner_${index + 1}`}
                      className="!object- object-center  h-full w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="embla__overlay absolute top-0 right-0 w-full md:w-full h-full flex flex-col justify-center items-start bg-black/[0.5]">
            <div className="w-full  mt-[-90px]  relative">
              <div className=" relative max-w-[700px] lg:pl-[175px] md:pl-[140px] pl-4">
                <h4
                  className="md:text-[125px] text-[60px] text-white uppercase"
                  data-aos="fade-down"
                  data-aos-duration="700"
                  data-aos-delay="200"
                >
                  Binfinit
                </h4>
                <span className="hidden lg:block absolute w-[16px] h-[16px] bg-white/[1.5] rounded-full right-[217px] top-[20px] z-10"></span>

                <span
                  className={`hidden lg:block absolute right-[223px] top-[20px] bg-white w-[3.5px] h-[400px] mb-4 transition-transform duration-600 animate-lineGrow`}
                />
              </div>

              {/* Paragraph container */}
              <div className=" w-full  absolute lg:left-[490px] md:left-[170px] pl-4 md:mt-[-33px]  max-w-[600px] !overflow-hidden">
                {showWords && (
                  <div className="flex flex-col items-start">
                    <p
                      className="text-[25px] md:text-[30px] mt-1 text-white"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="0"
                    >
                      Sourcing
                    </p>
                    <p
                      className="text-[25px] md:text-[30px] mt-1 text-white"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="500"
                    >
                      Supplying
                    </p>
                    <p
                      className="text-[25px] md:text-[30px] mt-1 text-white"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-delay="1000"
                    >
                      Sustaining
                    </p>
                  </div>
                )}

                {showDescription1 && (
                  <p
                    className="md:hidden block text-[14px] md:text-[25px] mt-1 md:pr-0 pr-8 text-white/[0.8]"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="1500"
                    style={{
                      transition:
                        "opacity 0.6s ease-out, transform 0.6s ease-out",
                    }}
                  >
                    {descriptions[currentDescriptionIndex].text}
                  </p>
                )}

                {showDescription && (
                  <p
                    className="md:block hidden text-[14px] md:text-[25px] mt-1 md:pr-0 pr-8 text-white/[0.8]"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    style={{
                      transition:
                        "opacity 0.6s ease-out, transform 0.6s ease-out",
                    }}
                  >
                    {slidesContent[selectedIndex]?.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

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
    </>
  );
};

export default NewHomeBanner;
