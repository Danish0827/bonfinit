import React from "react";

interface NewCardData {
  banner_image: string;
  alt: string;
  expertise_title: string;
  banner_description: string;
  slug: string;
  icon: React.ReactNode;
}

interface DataProps {
  data: NewCardData;
}

const NewMarketingCard: React.FC<DataProps> = ({ data }) => {
  return (
    <div className="relative w-full hover:border-none h-[300px] md:h-[500px] overflow-hidden group hover:bg-white  hover:justify-start   hover:shadow-sm flex flex-col items-center justify-center transition-transform duration-700 ease-in-out">
      <div className="mb-4 transform group-hover:scale-75 transition-transform duration-700 ease-in-out group-hover:text-black  text-white">
        {data.icon}
      </div>

      <h3 className="text-xl duration-700 ease-in-out  uppercase font-bold text-mainColor4 mb-4">
        {data.expertise_title}
      </h3>

      <p className="text-sm text-gray-600 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0  transition-transform duration-500 ease-[cubic-bezier(0.5,0,0,1)] transform translate-y-4 text-center px-4">
        {data.banner_description}
      </p>
    </div>
  );
};

export default NewMarketingCard;
