import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { GiMineTruck } from "react-icons/gi";
import Image from "next/image";
import { GiVikingLonghouse } from "react-icons/gi";
import { FRONTEND_URL } from "@/utils/utilsimp";
import Link from "next/link";

const HomeSection1 = () => {
  console.log(FRONTEND_URL, "FrontendUrl");
  return (
    <>
      <Wrapper>
        <div className="md:sacontainer md:py-24 py-8">
          <div className="grid md:grid-cols-2 grid-cols-1  md:gap-8 gap-5">
            <div className="flex justify-center items-center order-2 md:order-1">
              <Image
                src={"/home/bin2.png"}
                width={700}
                height={700}
                alt="left"
                className="md:w-[70%] w-full"
              />
            </div>
            <div className="bg-white order-1 md:order-2">
              <div>
                <h3 className="text-mainColor4 font-semibold md:text-2xl text-base uppercase">
                  About Us
                </h3>
              </div>

              <div className="md:mt-5 mt-1">
                <h1 className="md:text-5xl text-3xl font-bold md:leading-[50px] leading-0">
                  Empowering Industries with{" "}
                  <span className="text-mainColor4 md:text-5xl text-3xl font-bold">
                    Tailored Solutions
                  </span>
                </h1>

                <p className="mt-5">
                  At the heart of our operations lies a commitment to providing
                  innovative marketing solutions that connect industries with
                  the products they need. We specialize in delivering
                  high-quality materials and services tailored to support your
                  business goals. Whether it's raw materials, energy products,
                  or advanced logistics, we ensure seamless integration into
                  your supply chain.
                </p>
              </div>

              <div className="mt-6 space-y-6">
                <div className="flex md:flex-row flex-col md:gap-5 gap-2">
                  <div>
                    <GiMineTruck size={70} color="#f49344" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">
                      Customized Commodities
                    </h4>

                    <h6 className="text-base text-gray-700">
                      Our extensive portfolio includes metals, energy products,
                      and specialty raw materials, ensuring we meet your exact
                      specifications with sustainable sourcing practices.
                    </h6>
                  </div>
                </div>

                <div className="flex md:flex-row flex-col md:gap-5 gap-2">
                  <div className="">
                    <GiVikingLonghouse size={70} color="#f49344" />
                    {/* <Image
                      src={"/safehouse.svg"}
                      width={500}
                      height={500}
                      alt="safehouse"
                      className="md:w-40 w-72"
                    /> */}
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold">
                      Warehouse Solution
                    </h4>

                    <h6 className="text-base text-gray-700">
                      With state-of-the-art facilities and advanced inventory
                      management systems, we offer complete control over your
                      stock, ensuring accurate, real-time visibility for optimal
                      decision-making.
                    </h6>
                  </div>
                </div>

                <div>
                  <Link href="/binfinit-marketing">
                    <button className="bg-mainColor4 text-white md:text-base text-base uppercase rounded-md   md:px-8 px-6 md:py-3 py-2">
                      Binfinit Marketing
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default HomeSection1;
