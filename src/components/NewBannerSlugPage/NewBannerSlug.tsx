import React from "react";
import Image from "next/image";
import Wrapper from "../Wrapper/Wrapper";

interface ProductCardProps {
  title: string;
  main_image_primary: string;
  main_image_secondary: string;
  MainTaLine: string;
  bannerImg: string;
  slug: string;
}

const NewBannerSlug: React.FC<ProductCardProps> = ({
  bannerImg,
  title,
  MainTaLine,
}) => {
  return (
    <div
      className="relative h-[90vh] overflow-hidden bg-bottom object-cover"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <Wrapper className="relative z-10 h-full flex flex-col justify-center items-start">
        <div className="px-5 md:px-12 text-white">
          <h1 className="text-lg md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-sm md:text-lg max-w-xl">{MainTaLine}</p>
        </div>
      </Wrapper>
    </div>
  );
};

export default NewBannerSlug;
