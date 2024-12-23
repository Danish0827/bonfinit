"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { Menu, PhoneCall } from "lucide-react";
import SearchBarComp from "../Search/SearchBarComp";
import MobileSearch from "../Search/MobileSearch";
import DesktopMenu from "../Navbar/DesktopMenu";
import MobileMenuNew from "../Navbar/MobileMenu";
import Wrapper from "../Wrapper/Wrapper";

interface headerV1SettingsProps {}

const Header3: React.FC<headerV1SettingsProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="sticky w-full top-0 z-40 transition-colors duration-300 bg-white shadow">
        <div className="pb-3 pt-3 md:pt-4 lg:pt-4 space-y-4">
          <Wrapper>
            <div className="sacontainer flex items-center justify-between ">
              {/* Logo and Hamburger Menu for Mobile */}
              <div className="w-full flex items-center justify-start lg:w-auto">
                <div
                  className="lg:hidden text-templateText mr-4"
                  onClick={toggleMobileMenu}
                >
                  <Menu className="cursor-pointer" />
                </div>
              </div>
              <Link href={"/"}>
                <Image
                  src={"/logomain.png"}
                  alt="Binfinit"
                  height={800}
                  width={700}
                  className="lg:hidden max-h-[45px] w-[600px] flex justify-center items-center object-cover"
                />
              </Link>

              {/* Desktop Menu, Logo, Search, and Contact Button */}
              <div className="hidden lg:flex items-center space-x-6 w-full justify-start">
                <Link href={"/"}>
                  <Image
                    src={"/logomain.png"}
                    alt="Binfinit"
                    height={800}
                    width={700}
                    className="w-[200px] max-h-[52px]  object-contain min-w-[150px]"
                  />
                </Link>
              </div>

              <div className="lg:block hidden ">
                <DesktopMenu hasScrolled={true} />
              </div>

              {/* Search Component */}
              <div className="lg:hidden w-full flex items-center justify-end lg:justify-center lg:gap-6">
                {/* <div className="">
                  <MobileSearch hasScrolled={true} />
                </div> */}
              </div>

              {/* Contact Button */}
              <div className="hidden lg:flex justify-end items-center gap-5 w-full lg:w-full">
                {/* <div className="hidden lg:block">
                  <SearchBarComp hasScrolled={true} />
                </div> */}
                <Link href="/contact">
                  <button className="w-full bg-mainColor4 text-white py-3 lg:py-2 hover:lg:border-templatePrimary hover:lg:bg-white hover:lg:text-templatePrimary transition-all justify-center ease lg:border px-5 font-normal capitalize tracking-wider flex items-center gap-1 text-[1rem] lg:text-[0.85rem]">
                    <PhoneCall size={15} className="mb-0.5" strokeWidth={1.5} />
                    <span>Contact Us</span>
                  </button>
                </Link>
              </div>
            </div>
          </Wrapper>

          {/* -----------------MOBILE MENU DRAWER-------------- */}
          <div
            className={`fixed top-0 left-0 h-full overflow-hidden w-[320px] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out lg:hidden ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4 shadow-md">
              <Link href={"/"}>
                <Image
                  src={"/logomain.png"}
                  alt="Binfinit Web App"
                  height={100}
                  width={200}
                  className="h-[40px] w-auto lg:h-[40px] object-contain"
                />
              </Link>
              <IoMdClose
                onClick={toggleMobileMenu}
                className="text-templateText cursor-pointer"
              />
            </div>
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
      </div>
    </>
  );
};

export default Header3;
