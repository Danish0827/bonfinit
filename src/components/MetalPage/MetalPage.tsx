import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { singleProductImagesData } from "@/utils/singleProductImages";
import Image from "next/image";
import DropDownSaif from "./DropDownSaif";
import { FiChevronsRight } from "react-icons/fi";
import Link from "next/link";

export interface singleProductProps {
  title: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
}

const MetalPage: React.FC<singleProductProps> = ({
  title,
  image1,
  image2,
  image3,
  image4,
  content1,
  content2,
  content3,
  content4,
  content5,
}) => {
  return (
    <Wrapper className="md:py-12 py-8">
      <div className="w-full md:flex md:flex-row flex-col gap-6 md:px-4 px-2">
        {/* Image Gallery */}
        <div className="md:w-[65%] w-full  space-y-4">
          <div className="grid grid-cols-2  gap-2">
            <div className="aspect-[4/5] bg-bgMain">
              <Image
                src={image1}
                width={458}
                height={572}
                alt="Gallery image 1"
              />
            </div>
            <div className="aspect-[4/5] bg-bgMain">
              <Image
                src={image2}
                width={458}
                height={572}
                alt="Gallery image 2"
              />
            </div>
            <div className="aspect-[4/5] bg-bgMain">
              <Image
                src={image3}
                width={458}
                height={572}
                alt="Gallery image 3"
              />
            </div>
            <div className="aspect-[4/5] bg-bgMain">
              <Image
                src={image4}
                width={458}
                height={572}
                alt="Gallery image 4"
              />
            </div>
          </div>
        </div>

        {/* Product Details and Accordion */}
        <div className="md:w-[35%] w-full md:mt-0 mt-9 h-full sticky top-24">
          <div className="mb-3">
            <ul className="flex items-center text-sm justify-start gap-1 pt-2">
              <li>
                <Link
                  href={"/"}
                  className="text-mainColor4 font-medium uppercase"
                >
                  Home
                </Link>
              </li>
              <FiChevronsRight size={19} color="black" />
              <li className="text-black uppercase">Commodities</li>
              <FiChevronsRight size={19} color="black" />
              <li className="text-black uppercase">{title}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
            {/* <h3 className="text-2xl font-semibold text-gray-900">
              Products Detail
            </h3> */}
          </div>

          <DropDownSaif
            content1={content1}
            content2={content2}
            content3={content3}
            content4={content4}
            content5={content5}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default MetalPage;
