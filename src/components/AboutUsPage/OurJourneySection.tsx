import Image from "next/image";
import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const OurJourney = () => {
  return (
    <div className={`   `}>
      <Wrapper>
        <div
          className={`flex  md:sacontainer flex-col-reverse py-8  md:py-16 lg:flex-row w-full `}
        >
          {/* Text Section */}
          <div className=" md:px-4 flex-1 group">
            <span className="    text-xl md:-ml-1 md:text-3xl py-1.5  text-primary">
              Our Journey
            </span>
            <div className="h-1 rounded-full w-16 md:w-20  md:group-hover:w-32 group-hover:w-24 duration-300 mt-1 mb-4 bg-gradient-to-r from-mainColor2 to-mainColor3 "></div>
            {/* <span className='  -ml-2  py-1.5 text-2xl  '>
                
              </span> */}
            <div className="relative  inline-block lg:hidden font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2  bg-gradient-to-tr from-mainColor2 to-mainColor3 group-hover:-translate-x-0 group-hover:-translate-y-0 z-10"></span>
              <span className="absolute inset-0 w-full h-full  group-hover:bg-indigo-50 z-20"></span>
              <span className="relative block overflow-hidden border border-[#BCC1C9] w-full h-full z-30">
                <Image
                  src="/cards/journey.jpg"
                  alt="banner"
                  className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px]"
                  width={600}
                  height={80}
                />
              </span>
            </div>

            <div className="text-sm md:text-base text-gray-600 duration-300 group-hover:text-black mt-4 text-justify">
              Since our establishment in Dubai in 2017, we have consistently
              focused on delivering innovative trade solutions to a wide range
              of industries, including steel, consumer goods, and logistics. Our
              mission is to bridge the gap between regions abundant in resources
              and those with rising demand, ensuring the seamless flow of
              essential goods. Through a reliable, efficient, and resilient
              transport network, we connect markets across the globe,
              facilitating growth and sustainability for our partners and
              clients alike.
            </div>
            <div className="text-sm md:text-base text-gray-600 duration-300 group-hover:text-black mt-4 text-justify">
              Our foundation rests on the unwavering commitment to streamline
              global supply chains, offering innovative solutions in transport,
              storage, and distribution services. By leveraging cutting-edge
              technology and data-driven strategies, we aim to enhance
              efficiency and reliability at every stage of the logistics
              process. Supported by a robust international network of trusted
              partners, we combine global reach with a nuanced understanding of
              local markets, ensuring seamless operations that cater to diverse
              client needs. Our expertise lies in bridging distances and
              strengthening connections between industries and markets, driving
              trade forward in today’s interconnected world.
            </div>
            <div className="text-sm md:text-base text-gray-600 duration-300 group-hover:text-black mt-4 text-justify">
              We recognize that in a rapidly evolving global economy,
              adaptability and precision are key to success. That’s why we
              continually refine our processes, embracing sustainable practices
              and advanced logistics tools to minimize environmental impact
              while maximizing operational excellence. Our team of seasoned
              professionals works tirelessly to anticipate challenges, deliver
              tailored solutions, and uphold the highest standards of service.
            </div>
          </div>
          <div className="relative  lg:block hidden mx-2 font-medium group md:w-full md:h-full md:min-h-[300px] md:max-w-[500px]">
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2  bg-gradient-to-tr from-mainColor2 to-mainColor3 group-hover:-translate-x-0 group-hover:-translate-y-0 z-10"></span>
            <span className="absolute inset-0 w-full h-full  group-hover:bg-indigo-50 z-20"></span>
            <span className="relative hidden lg:block overflow-hidden border border-gray-400 w-full h-full z-30">
              <Image
                src="/cards/journey.jpg"
                alt="banner"
                className="!object-cover group-hover:scale-105 duration-300 w-full h-full md:min-h-[300px] md:max-w-[500px]"
                width={600}
                height={600}
              />
            </span>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurJourney;
