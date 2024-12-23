import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdSubdirectoryArrowRight } from "react-icons/md";

interface MenuProps {
  showAllMenus?: boolean;
  setShowAllMenus?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ showAllMenus, setShowAllMenus }) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About Us", url: "/about" },
    {
      id: 3,
      name: "Commodities",
      subMenu: true,
      subMenuData: [
        {
          id: 1,
          name: "Metal",
          innerPages: [
            { id: 1, name: "CRGO", url: "/commodities/metal/crgo" },
            {
              id: 2,
              name: "Stainless Steel",
              url: "/commodities/metal/stainless-steel",
            },
            { id: 3, name: "HMS 1 & 2", url: "/commodities/metal/hms-1-2" },
          ],
        },
        {
          id: 2,
          name: "Consumer Goods",
          innerPages: [
            {
              id: 1,
              name: "Cooking Oil (MCA)",
              url: "/commodities/consumer-goods/cooking-oil",
            },
            {
              id: 2,
              name: "Palm Oil (MCA)",
              url: "/commodities/consumer-goods/palm-oil",
            },
            { id: 3, name: "Copra", url: "/commodities/consumer-goods/copra" },
          ],
        },
        {
          id: 3,
          name: "Agriculture Products",
          innerPages: [
            {
              id: 1,
              name: "Rice",
              url: "/commodities/agriculture-products/rice",
            },
            {
              id: 2,
              name: "Gambier",
              url: "/commodities/agriculture-products/gambier",
            },
          ],
        },
        {
          id: 4,
          name: "Paper & Pulp",
          innerPages: [
            {
              id: 1,
              name: "Copier Paper",
              url: "/commodities/paper/copier-paper",
            },
            {
              id: 2,
              name: "Tissue Paper",
              url: "/commodities/paper/tissue-paper",
            },
          ],
        },
      ],
    },
    { id: 4, name: "Logistics", url: "/logistics" },
    { id: 5, name: "Contact Us", url: "/contact" },
  ];

  const handleMenuClick = (id: number) => {
    setShowAllMenus && setShowAllMenus(true);
    setActiveMenu(activeMenu === id ? null : id);
  };

  // const handleMouseEnter = (id: number) => {
  //   setActiveMenu(id);
  // };

  // const handleMouseLeave = () => {
  //   setActiveMenu(null);
  // };

  return (
    <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-black">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {item.subMenu ? (
            <li
              className="cursor-pointer flex items-center gap-2 text-[14px] lg:text-[16px] uppercase relative"
              onClick={() => handleMenuClick(item.id)}
              // onMouseEnter={() => handleMouseEnter(item.id)}
              // onMouseLeave={handleMouseLeave}
            >
              {item.name}
              {activeMenu === item.id ? (
                <FaChevronUp size={14} />
              ) : (
                <FaChevronDown size={14} />
              )}
            </li>
          ) : (
            <li className="text-[14px] lg:text-[16px] uppercase">
              <Link href={item.url ?? " "}>
                <p className={pathname === item.url ? "text-[#f88e4f]" : ""}>
                  {item.name}
                </p>
              </Link>
            </li>
          )}

          {showAllMenus && activeMenu === item.id && (
            <Wrapper className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-mainbgColor shadow-lg p-4 lg:p-6 z-50 ">
              <div className="container mx-auto flex flex-col lg:flex-row lg:flex-wrap">
                {item.subMenuData?.map((category) => (
                  <ul
                    key={category.id}
                    className="w-full lg:w-1/2 xl:w-1/4 p-2 lg:p-4"
                  >
                    <div className="text-xl font-semibold text-mainbgColor mb-2">
                      <h3 className="relative after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r from-mainbgColor to-white after:w-1/2 after:mt-1">
                        {category.name}
                      </h3>
                    </div>
                    {category.innerPages.map((subItem) => (
                      <li key={subItem.id} className="mb-2">
                        <Link href={subItem.url}>
                          <p className="flex items-center gap-2 p-2 text-gray-800 hover:bg-mainColor3 hover:text-white rounded transition duration-200 ease-in-out">
                            <MdSubdirectoryArrowRight className="text-mainColor2 hover:text-mainbgColor" />
                            <span>{subItem.name}</span>
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </Wrapper>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Menu;
