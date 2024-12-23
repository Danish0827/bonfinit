import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const NewAgriPage = () => {
  return (
    <div className="sacontainer px-4 py-12">
      <Wrapper>
        <div className="flex flex-col">
          <div>
            <div className="w-[2px] h-[17px] bg-gray-800 self-stretch"></div>
            <h4 className="text-2xl font-bold">Services</h4>
            <h4 className="text-staragrimain text-xl font-semibold">
              From sowing to square off
            </h4>
          </div>

          <div className="mt-5">
            <h4>
              At StarAgri, we’re creating an efficient platform across the agri
              value chain connecting producers with consumers, from harvest to
              home.
            </h4>
          </div>

          <div className="border border-staragrimain px-6 py-2 w-[160px] flex justify-center items-center">
            <button>Read More</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NewAgriPage;
