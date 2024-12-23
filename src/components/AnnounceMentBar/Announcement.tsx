import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const Announcement = () => {
  return (
    <div className="hidden md:flex h-[6svh] px-20 bg-gradient-to-r from-[#539248] to-[#008518] items-center justify-between">
      <div>
        <ul className="flex gap-5">
          <li className="flex text-white text-sm gap-2 items-center">
            <span>
              <Phone size={17} strokeWidth={2} color="white" />
            </span>
            <a
              href="tel:022 - 22825913"
              style={{ color: "white" }}
              className=" text-white"
            >
              Landline: 022 - 22825913
            </a>
          </li>
          <li className="flex text- gap-2 items-center">
            <span>
              <Mail size={17} strokeWidth={2} color="white" />
            </span>
            <a href="mailto:info@awfirealestate.com" className="text-white">
              info@awfirealestate.com
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-3 items-center">
          <li className="bg-white rounded-full px-2 py-2">
            <a
              href="https://www.facebook.com/thetrueyogawithshiv?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={17} color="green" />
            </a>
          </li>
          <li className="bg-white rounded-full px-2 py-2">
            <a
              href="https://www.instagram.com/yogawithshiv?igsh=eWoyMHMxdTQ1MDJl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={17} color="green" />
            </a>
          </li>
          <li className="bg-white rounded-full px-2 py-2">
            <a
              href="https://youtube.com/@yogawithshivhelp?si=R86Wflx0-b5ZHY3e"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={17} color="green" />
            </a>
          </li>
          <li className="bg-white rounded-full px-2 py-2">
            <a
              href="https://www.linkedin.com/in/shivam-pandey-6835a6215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} color="green" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
