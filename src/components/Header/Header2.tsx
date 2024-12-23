"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { ArrowDownToLine, Menu, Phone, PhoneCall } from "lucide-react";
import SearchBarComp from "../Search/SearchBarComp";
import MobileSearch from "../Search/MobileSearch";
import DesktopMenu from "../Navbar/DesktopMenu";
import MobileMenuNew from "../Navbar/MobileMenu";
import Wrapper from "../Wrapper/Wrapper";

interface headerV1SettingsProps {}

const Header2: React.FC<headerV1SettingsProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className={`sticky w-full top-0 z-40 transition-colors duration-300 bg-white shadow`}
      >
        <div className="pb-3  pt-3 md:pt-4 lg:pt-4 space-y-4">
          <Wrapper>
            <div className="sacontainer flex items-center justify-between">
              <div className="w-full flex items-center justify-start">
                <div className="hidden lg:block">
                  <SearchBarComp hasScrolled={true} />
                </div>

                <div
                  className="lg:hidden text-templateText"
                  onClick={toggleMobileMenu}
                >
                  <Menu />
                </div>
              </div>
              {/* Logo */}
              <div className="w-full flex items-center justify-center ">
                <Link href={"/"}>
                  <Image
                    src={"/2.png"}
                    alt="Binfinit "
                    height={800}
                    width={700}
                    className="h-[45px] w-auto lg:h-[50px] object-contain"
                  />
                </Link>
              </div>
              {/* Account and Cart Icons */}
              <div className="w-full flex items-center justify-end gap-2.5 lg:gap-6">
                <div className="lg:hidden">
                  <MobileSearch hasScrolled={true} />
                </div>
                <div className="fixed lg:relative bottom-0 w-full lg:w-auto left-0">
                  <Link href="#">
                    <button className=" w-full  bg-mainColor4 text-white py-3 lg:py-2 hover:lg:border-templatePrimary hover:lg:bg-white hover:lg:text-templatePrimary transition-all justify-center ease lg:border px-5 font-normal capitalize tracking-wider flex items-center gap-1 text-[1rem] lg:text-[0.85rem]">
                      <PhoneCall
                        size={15}
                        className="mb-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="">Contact Us</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Wrapper>
          {/* -----------------DESKTOP MENU-------------- */}
          <div className="sacontainer hidden lg:block">
            <DesktopMenu hasScrolled={true} />
          </div>
          {/* -----------------MOBILE MENU DRAWER-------------- */}
        </div>
        <div
          className={` fixed top-0 left-0 h-full overflow-hidden w-[320px] !mt-0 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 shadow-md">
            <Link href={"/"}>
              <Image
                src={"/2.png"}
                alt="Binfinit Web App"
                height={100}
                width={200}
                className="h-[40px] w-auto lg:h-[40px] object-contain"
              />
            </Link>

            <IoMdClose
              onClick={toggleMobileMenu}
              className="text-templateText"
            />
          </div>
          {/* <hr /> */}
          {/* <div className="w-full h-[1px] bg-gray-500"></div> */}
          <MobileMenuNew toggleMobileMenu={toggleMobileMenu} />
        </div>
        {/* Overlay for closing mobile menu */}
        {isMobileMenuOpen && (
          <div
            onClick={toggleMobileMenu}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          ></div>
        )}
      </div>
    </>
  );
};

export default Header2;
