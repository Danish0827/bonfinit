import { productCardsData } from "@/utils/productCardsData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface productCardProps {
  title: string;
  main_image_primary: string;
  main_image_secondary: string;
  slug: string;
}

const ProductCards: React.FC<productCardProps> = ({
  title,
  main_image_primary,
  main_image_secondary,
  slug,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Link href={`/commodities/${slug}`}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative aspect-[4/5] bg-bgMain  shadow-md border border-gray-100 overflow-hidden cursor-pointer mb-2 "
        >
          <div className="absolute left-0 top-0 w-full h-full">
            {main_image_secondary && (
              <Image
                src={isHovered ? main_image_secondary : main_image_primary}
                width={340}
                height={410}
                alt={title}
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-600 hover:scale-105 duration-300 ease-in-out "
              />
            )}
          </div>
          <div className="  absolute bottom-0 left-0 text-center md:mb-1 mb-0 w-full">
            <h4 className="md:text-[14px] text-[14px] font-medium text-black rounded-md py-1 px-2 z-10 md:line-clamp-none line-clamp-1">
              {title}
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCards;
