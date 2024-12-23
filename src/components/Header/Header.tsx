"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { IoClose } from "react-icons/io5";

import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";
import Image from "next/image";
import Menu from "../Menu/Menu";
import MenuMobile from "../Menu/MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showAllMenus, setShowAllMenus] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const controlNavBar = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
      window.scrollY > lastScrollY && !mobileMenu
        ? setShow("-translate-y-0")
        : setShow("shadow-sm");
    } else if (window.scrollY < 100) {
      setIsScrolled(false);
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`w-full bg-white flex items-center justify-between z-40 sticky top-0 transition-all duration-500 ${show} ${
          isScrolled ? "h-[100px]" : "md:h-[121px] h-[100px]"
        } shadow-sm`}
      >
        <Wrapper className=" flex justify-between items-center">
          <Link href={"/"} className="flex">
            <Image
              src="/logo1.jpg"
              alt="Our Office"
              height={isScrolled ? 65 : 75}
              width={isScrolled ? 160 : 180}
            />
          </Link>

          <Menu showAllMenus={showAllMenus} setShowAllMenus={setShowAllMenus} />

          {mobileMenu && (
            <MenuMobile
              showAllMenus={showAllMenus}
              setShowAllMenus={setShowAllMenus}
              setMobileMenu={setMobileMenu}
            />
          )}

          <div className="flex items-center gap-2 text-black md:hidden">
            {/* Mobile Icon Start */}
            <div className="w-8 md:w-12 h-8 md:h-12  flex md:hidden justify-center items-center hover:bg-white/[0.5] cursor-pointer hover:text-mainbgColor relative -mr-2">
              {mobileMenu ? (
                <IoClose
                  color="white"
                  className="text-[25px]"
                  onClick={() => setMobileMenu(false)}
                />
              ) : (
                <GiHamburgerMenu
                  color="white"
                  className="text-[25px] "
                  onClick={() => setMobileMenu(true)}
                />
              )}
            </div>
            {/* Mobile Icon end */}
          </div>
        </Wrapper>
      </header>
    </>
  );
};

export default Header;
