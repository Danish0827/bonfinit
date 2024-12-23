import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const SourceExtract = () => {
  const sections = [
    {
      title: "Source",
      description:
        "Identifying commodities from regions of abundance to meet specific needs.",
    },
    {
      title: "Extract",
      description:
        "Carefully extracting commodities to maintain quality and meet demand.",
    },
    {
      title: "Produce",
      description:
        "Transforming raw materials into valuable products where they are needed most.",
    },
  ];

  return (
    <Wrapper>
      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold text-mainColor4 mb-4">
          Why Choose Us?
        </h2>
        <p className="md:text-lg text-base text-gray-700 max-w-2xl mx-auto mb-8">
          At Binfinit, we source, extract, and transform a diverse range of
          commodities, moving them from regions of abundance to where they are
          most needed, working with both our own and third-party suppliers.
        </p>
        <div className="py-4 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg relative flex flex-col items-center"
              >
                <h3 className="text-xl font-semibold text-mainColor4 uppercase">
                  {section.title}
                </h3>
                <p className="text-gray-600 mt-2 text-center">
                  {section.description}
                </p>
                {index < sections.length - 1 && (
                  <div
                    className={`hidden lg:block absolute w-1 h-24 bg-mainColor4 top-full left-1/2 transform -translate-x-1/2 ${
                      index === 1 || index === 0
                        ? "rotate-180 lg:w-24 lg:h-1 lg:top-1/2 lg:left-full lg:translate-x-0"
                        : ""
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SourceExtract;
