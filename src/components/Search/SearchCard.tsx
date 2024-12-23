import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  data: {
    image: string;
    slug: string;
    title: string;
  };
}

const SearchCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Link
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-photo/white-line-background-10_978463-2231.jpg?w=740")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      href={`/commodities/${data.slug} || "#"`}
      className="block  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-gray-100 bg-white rounded-sm"
    >
      <div className="aspect-[4/4] lg:aspect-[4/4] p-1 overflow-hidden">
        <Image
          src={data.image}
          alt=""
          height={600}
          sizes="138px"
          className="h-full w-full object-contain transition-all ease-linear scale-95 hover:scale-100 duration-100"
          width={600}
        />
      </div>
      <div className="p-2 lg:p-2 space-y-1 ">
        <h2 className="text-[13px] lg:text-[12px] text- tracking-wide text-templateText">
          {data.title}
        </h2>
      </div>
    </Link>
  );
};

export default SearchCard;
