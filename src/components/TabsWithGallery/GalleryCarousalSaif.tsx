import React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  useDotButton,
} from "../emblaButtons/EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../emblaButtons/EmblaCarouselArrowButtons";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "./tabswithgallery.css";

type PropType = {
  slides: { id: number; src: string }[];
  options?: EmblaOptionsType;
  initialIndex: number;
};

const GalleryCarousalSaif: React.FC<PropType> = ({
  slides,
  options,
  initialIndex,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    startIndex: initialIndex,
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
    <div className="relative embla-gallery-saif">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div
              className="embla__slide flex justify-center items-center bg-transparent"
              key={slide.id}
            >
              <div className="max-h-[80vh]  ">
                <Image
                  src={slide.src}
                  alt={`Slide ${slide.id}`}
                  width={800}
                  height={600}
                  className="  max-h-[70vh] !object-contain w-full h-full"
                />
              </div>
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
      <div className="embla__controls">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}
        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${
                index === selectedIndex ? "embla__dot--selected" : ""
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default GalleryCarousalSaif;
