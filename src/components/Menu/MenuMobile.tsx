import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";
import { GiFrayedArrow } from "react-icons/gi";
import { MdSubdirectoryArrowRight } from "react-icons/md";

interface MenuProps {
  showAllMenus: boolean;
  setShowAllMenus: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile: React.FC<MenuProps> = ({
  showAllMenus,
  setShowAllMenus,
  setMobileMenu,
}) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const toggleCategory = (categoryId: number) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
    }
  };

  const data = [
    { id: 1, name: "About Us", url: "/" },
    {
      id: 2,
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
    { id: 3, name: "Logistics", url: "/logistics" },
    { id: 4, name: "Contact Us", url: "/contact" },
  ];

  const handleMenuClick = (id: number) => {
    setActiveMenu(activeMenu === id ? null : id);
    setShowAllMenus(!showAllMenus);
  };

  return (
    <ul className="flex flex-col md:hidden font-semibold font-sans absolute top-[80px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black mt-4">
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {item.subMenu ? (
            <li className="py-4 px-5 border-b flex flex-col relative">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleMenuClick(item.id)}
              >
                <span>{item.name}</span>
                {activeMenu === item.id ? (
                  <FaChevronUp size={14} />
                ) : (
                  <FaChevronDown size={14} />
                )}
              </div>

              {activeMenu === item.id && (
                <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                  {item.subMenuData.map((category) => (
                    <li key={category.id} className="border-t">
                      <div
                        className="flex items-center cursor-pointer py-2 px-5"
                        onClick={() => toggleCategory(category.id)}
                      >
                        <FaPlus
                          className={`mr-2 transition-transform ${
                            activeCategory === category.id ? "rotate-45" : ""
                          }`}
                        />
                        <span className="font-semibold">{category.name}</span>
                      </div>
                      {activeCategory === category.id && (
                        <ul>
                          {category.innerPages.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.url}
                              onClick={() => {
                                setShowAllMenus(false);
                                setMobileMenu(false);
                              }}
                            >
                              <li className="py-2 px-8 border-t flex gap-1 items-center">
                                <MdSubdirectoryArrowRight />
                                {subItem.name}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="py-4 px-5 border-b">
              <Link href={item.url ?? ""} onClick={() => setMobileMenu(false)}>
                {item.name}
              </Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MenuMobile;
