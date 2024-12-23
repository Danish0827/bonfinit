"use client";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const SuperiorCargoSection = () => {
  return (
    <div
      className="w-full md:h-[70vh] h-screen py-6 relative flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url("/banners/7.png")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

      <Wrapper>
        <div className="relative z-10 text-center w-full max-w-3xl mx-auto md:px-6 px-2">
          <h4 className="text-white text-3xl md:text-5xl font-bold leading-relaxed mb-6 animate-fade-in-up">
            Power Your Projects with{" "}
            <span className="text-mainColor4">Global</span> Material Supply{" "}
            <br />
            Excellence
          </h4>

          <p className="text-white text-lg md:text-lg opacity-90 leading-relaxed mb-8 animate-fade-in-up delay-200 font-thin">
            We specialize in delivering essential materials worldwide to meet
            the demands of diverse industries. From raw resources to custom
            solutions, our services ensure quality, reliability, and efficiency
            for your global supply chain.
          </p>

          <div className="animate-fade-in-up delay-400">
            <button className="bg-mainColor4 text-white md:text-base text-base uppercase rounded-md px-6 py-2 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-mainColor4 focus:outline-none focus:ring-2 focus:ring-mainColor4">
              Get Started
            </button>
          </div>
        </div>
      </Wrapper>

      {/* Tailwind Animations */}
      <style jsx>{`
        @layer utilities {
          .animate-fade-in-up {
            @apply opacity-0 transform translate-y-5 transition-all duration-700 ease-out;
          }
          .animate-fade-in-up-active {
            @apply opacity-100 transform translate-y-0;
          }
          .delay-200 {
            animation-delay: 200ms;
          }
          .delay-400 {
            animation-delay: 400ms;
          }
        }
      `}</style>
    </div>
  );
};

export default SuperiorCargoSection;
