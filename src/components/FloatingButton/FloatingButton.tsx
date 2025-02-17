import Link from "next/link";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { MdCall } from "react-icons/md";

const FloatingButton = () => {
  return (
    <div className="group z-50 drop-shadow-xl fixed bottom-5 right-5 p-2  flex items-end justify-end w-24 h-24 ">
      <div className="text-white shadow-xl flex items-center cursor-pointer justify-center p-3 rounded-full bg-gradient-to-r from-mainColor2 to-[#ca4a00] z-50 absolute  ">
        <FiMessageCircle color="white" size={25} />
      </div>
      <Link
        target="_blank"
        href="https://wa.me/6281110068051"
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2.5 hover:p-3 bg-green-500 scale-100 hover:bg-green-400 text-white"
      >
        <FaWhatsapp className="text-2xl" />
      </Link>
      <Link
        target="_blank"
        href="tel:+918087010270"
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2.5 hover:p-3 bg-blue-500 hover:bg-blue-400  text-white"
      >
        <MdCall className="text-2xl" />
      </Link>
      <Link
        target="_blank"
        href={"mailto: info@binfinit.co"}
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2.5 hover:p-3 bg-red-500 hover:bg-red-400 text-white"
      >
        <CgMail className="text-2xl" />
      </Link>
    </div>
  );
};

export default FloatingButton;
