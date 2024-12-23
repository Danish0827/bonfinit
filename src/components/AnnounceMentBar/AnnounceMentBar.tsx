"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { BsEnvelopeAt } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";

const AnnouncementBar = () => {
  const announcements = [
    "NO COST EMI AVAILABLE ON ORDER ABOVE",
    "FREE SHIPPING ON ORDERS OVER $50",
    "LIMITED TIME OFFER: 20% OFF SITEWIDE",
    "SIGN UP FOR OUR NEWSLETTER FOR EXCLUSIVE DEALS",
  ];

  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-mainColor4">
      <Wrapper>
        <div className="hidden h-[45px] md:flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex md:gap-5 gap-2 mb-2 items-center">
            <div className="flex items-center gap-2">
              <IoCallSharp />
              <p className="text-sm md:text-base">022-89768574654</p>
            </div>

            <div className="w-[2px] h-auto bg-black self-stretch"></div>
            <div className="flex items-center gap-2">
              <BsEnvelopeAt />
              <p className="text-sm md:text-base">info@calibarwatch.com</p>
            </div>
          </div>

          {/* <div className="announcement-container  mx-2">
            <div className="announcement-text">
              <p className="text-center text-sm md:text-base">
                {announcements[currentAnnouncement]}
              </p>
            </div>
          </div> */}

          <div className="text-center mt-2 md:mt-0">
            <p className="text-sm md:text-base">
              Flat 60% Discount On Order above 5000.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AnnouncementBar;
