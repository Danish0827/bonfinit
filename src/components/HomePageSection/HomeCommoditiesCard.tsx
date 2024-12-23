import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { GiMetalBar } from "react-icons/gi";
import { MdAgriculture } from "react-icons/md";
import { RiFilePaper2Fill } from "react-icons/ri";

type HomeCommoditiesCardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const HomeCommoditiesCard: React.FC<HomeCommoditiesCardProps> = ({
  title,
  description,
  image,
  url,
}) => {
  return (
    <Link href={url || "#"}>
      <div className="border-2 border-b-mainColor4  rounded-md ">
        <div className="w-full md:h-auto h-full">
          <Image
            src={image}
            width={600}
            height={600}
            alt="commodity"
            className="rounded-md h-[250px]"
          />
        </div>

        <div className="mt-5 space-y-4 px-4 pb-2">
          <div className="flex gap-2 items-center">
            {title === "Agriculture Products" && (
              <MdAgriculture size={22} color="#f49344" />
            )}
            {title === "Metal" && <GiMetalBar size={22} color="#f49344" />}
            {title === "Consumer Goods" && (
              <FaBoxOpen size={22} color="#f49344" />
            )}
            {title === "Paper" && (
              <RiFilePaper2Fill size={22} color="#f49344" />
            )}
            <h3 className="text-xl font-bold">{title}</h3>
          </div>

          <p className="line-clamp-3">{description}</p>
          <div className="pb-2">
            <button className="bg-mainColor4 text-white text-sm uppercase rounded-md    px-8 py-2">
              See Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCommoditiesCard;
