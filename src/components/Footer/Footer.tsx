import { allProducts } from "@/utils/allProducts";
import { commoditiesData } from "@/utils/commoditiesData";
import { menuItem } from "@/utils/menuItems";

import { defaultDescription } from "@/utils/utilsimp";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { BsPhone, BsWhatsapp } from "react-icons/bs";
import { MapPin, PhoneCall } from "lucide-react";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-bgMain">
      <Wrapper>
        <div className="sacontainer  md:px-4 px-1 text-black py-6 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="space-y-5 ">
            <Link href={"/"}>
              <Image
                src={"/logomain.png"}
                alt="logo"
                height={800}
                width={800}
                className="w-[60%] object-cover"
              />
            </Link>
            {/* <h2 className="text-[18px] lg:text-[25px] leading-none tracking-wide uppercase font-medium">
            Binfinit Web App
          </h2> */}
            <p className="text-sm font-light md:text-left text-left tracking-wider">
              {defaultDescription}
            </p>
          </div>

          <div className="space-y-4">
            <div className=" lg:w-[210px] w-full mx-auto space-y-4">
              <h2 className="text-xl font- tracking-wide">OUR COMMODITIES</h2>
              <div className="w-[100px]  h-[1.5px] bg-mainColor3"></div>
              <ul className="space-y-3 md:space-y-4 text-sm font-light">
                {commoditiesData.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`${item.url}`}
                      className="hover:text-templateOrange hover:pl-2 transition-all ease"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4 ">
            <div className=" lg:w-[150px] w-full mx-auto space-y-4">
              <h2 className="text-xl font- tracking-wide">USEFUL LINKS</h2>
              <div className="w-[100px]  h-[1.5px] bg-mainColor3"></div>
              <ul className="space-y-2 md:space-y-3 text-sm font-light">
                {menuItem.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="hover:text-templateOrange hover:pl-2 transition-all ease"
                      href={item.url}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                {/* <li>
              <Link
                className=" hover:text-templateOrange hover:pl-2 transition-all ease"
                href={"/sitemap.xml"}
              >
                Sitemap
              </Link>
            </li> */}
              </ul>
            </div>
          </div>
          <div className="space-y-4 ">
            <h2 className="text-xl font- tracking-wide">CONTACT DETAILS</h2>
            <div className="w-[100px] h-[1.5px] bg-mainColor3"></div>
            <div className="space-y-2">
              <h2 className="text-lg font-medium">HEAD OFFICE</h2>
              <div className="flex gap-2 items-start">
                <div>
                  <MapPin className="text-base" />
                </div>
                <p className="text-sm tracking-wide">
                  Binfinit Global Business Bv Keizersgrscht B172, D 1016 EJ
                  Amsterdam, Netherlands
                </p>
              </div>
            </div>

            {/* <div className="space-y-2">
              <h2 className="text-lg font-medium">SECOND OFFICE</h2>
              <p className="text-sm tracking-wide">
                Binfinit International FZE P2, Hamriyah Free Zone P.O BOX -5170,
                UAE x
              </p>
            </div> */}

            {/* <div className="space-y-2">
            <h2 className="text-lg font-medium">THIRD OFFICE</h2>
            <p className="text-sm tracking-wide">
              Binfinit Global PTE Ltd 21 Collyer Quay Singapore, 049320
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-medium">FOURTH OFFICE</h2>
            <p className="text-sm tracking-wide">
              PT. Binfinit Global JLN. Tanah, Nomor 11F DKI Jakarta-10610,
              Indonesia
            </p>
          </div> */}
            <div className="w-full h-[1px] bg-black/10"></div>
            <div className="space-y-2">
              <h2 className="text-lg font-medium">EMAIL</h2>
              <div className="flex gap-2 items-center">
                <MdOutlineEmail />
                <Link
                  href="mailto: sales@binfinit.co"
                  className="text-sm tracking-wide"
                >
                  sales@binfinit.co
                </Link>
              </div>

              <div className="flex gap-2 items-center">
                <MdOutlineEmail />
                <Link
                  href="mailto:info@binfinit.co"
                  className="text-sm tracking-wide"
                >
                  info@binfinit.co
                </Link>
              </div>
            </div>
            <div className="w-full h-[1px] bg-black/10"></div>
            <div className="space-y-2">
              <h2 className="text-lg font-medium">CONTACT</h2>
              {/* <div className="flex gap-2 items-center">
                <BsPhone />
                <Link
                  href="tel:+918087010270"
                  className="text-sm tracking-wide"
                >
                  08978678907
                </Link>
              </div> */}

              <div className="flex gap-2 items-center">
                <BsWhatsapp />
                <Link
                  target="_blank"
                  href="https://wa.me/6281110068051"
                  className="text-sm tracking-wide"
                >
                  +62-811-1006-8051
                </Link>
              </div>

              {/* <div className="flex gap-2 items-center">
                <BsWhatsapp />
                <Link
                  target="_blank"
                  href="https://wa.me/6281119999764"
                  className="text-sm tracking-wide"
                >
                  +62-811‑1999‑9764
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="sacontainer ">
        <hr />
      </div>
      <div className="sacontainer text-black py-6">
        <p className="text-sm tracking-wider text-center">
          © Copyright 2024 | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
