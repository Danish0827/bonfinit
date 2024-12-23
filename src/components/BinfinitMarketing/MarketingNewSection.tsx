import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { FaGlobe, FaCogs, FaChartLine } from "react-icons/fa";
import { FaChartBar, FaChartGantt } from "react-icons/fa6";
import { Globe2 } from "lucide-react";

const MarketingNewSection: React.FC = () => {
  const title = "Binfinit Marketing";
  const description =
    "Delivering essential commodities from areas of surplus to where they are needed most, empowering our customers to create indispensable products that shape modern living.";

  const points = [
    {
      icon: <Globe2 size={40} />,
      text: "Binfinit connects businesses globally, leveraging advanced logistics networks and cutting-edge technology to refine and process products. Our operations empower clients to seamlessly deliver essential commodities to meet modern demands across industries.",
    },
    {
      icon: <FaCogs size={40} />,
      text: "With a focus on innovation, Binfinit applies leading-edge technologies to enhance product quality, ensuring they meet exact customer specifications. Our expertise drives precision and reliability in every stage of the supply chain.",
    },
    {
      icon: <FaChartGantt size={40} />,
      text: "Binfinit's deep market intelligence and strategic insights optimize supply chains, aligning commodity availability with global demands. This ensures timely delivery of products tailored to customer requirements.",
    },
  ];

  return (
    <Wrapper className="">
      <div className="md:px-4 px-0">
        <div className=" my-12  text-black md:p-10  rounded-sm p-0">
          <div className="text-center mb-4">
            <h2 className="text-black md:text-4xl font-semibold text-2xl relative after:content-[''] after:block after:h-[3px] after:mx-auto after:bg-gradient-to-r from-mainColor4 to-mainColor3 after:w-[10%] after:mt-2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-[20%] rounded-md">
              {title}
            </h2>
          </div>
          <p className="md:text-lg text-base mb-8 text-center">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="relative group bg-mainColor4 p-6 rounded-md flex flex-col items-center text-center hover:shadow-xl transition-shadow z-10"
              >
                <div className="absolute inset-0 -z-10 bg-gray-900 rounded-md translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

                <div className="text-mainColor4 mb-4">{point.icon}</div>
                <p className="md:text-base text-base text-gray-200 relative">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MarketingNewSection;
