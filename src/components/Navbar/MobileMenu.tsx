import { menuItem } from "@/utils/menuItems";
import Link from "next/link";
import React, { useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

interface MobileMenuProps {
  toggleMobileMenu: any;
}

const MobileMenuNew: React.FC<MobileMenuProps> = ({ toggleMobileMenu }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [submenuStack, setSubmenuStack] = useState<any[]>([]);

  const openOverlay = (submenu: any) => {
    if (submenu && submenu.length > 0) {
      setSubmenuStack([submenu]);
      setIsOverlayOpen(true);
    }
  };

  const pushToSubmenuStack = (submenu: any) => {
    if (submenu && submenu.length > 0) {
      setSubmenuStack((prevStack) => [...prevStack, submenu]);
    }
  };

  const popFromSubmenuStack = () => {
    setSubmenuStack((prevStack) => prevStack.slice(0, -1));
    if (submenuStack.length === 1) {
      setIsOverlayOpen(false);
    }
  };

  return (
    <div className="p-2 overflow-y-auto h-[100%] pb-28">
      <ul className="space-y-2">
        {menuItem.map((item, index) => {
          const itemUrl = item.url || "#";
          return (
            <li key={index} className="relative group">
              {item.dropdown ? (
                <span
                  onClick={() => openOverlay(item.dropdown)}
                  className={`text-sm px-2 py-3 tracking-wide flex cursor-pointer transition-all ease-in-out hover:text-templatePrimary font-medium items-center justify-between capitalize text-templateText`}
                >
                  {item.name}
                  <IoChevronForwardSharp
                    size={20}
                    className="transition-all group-hover:text-templatePrimary w-10 ease-in-out"
                  />
                </span>
              ) : (
                <span
                  className={`text-sm px-2 py-3 tracking-wide flex cursor-pointer transition-all ease-in-out hover:text-templatePrimary font-medium items-center justify-between capitalize text-templateText`}
                >
                  <Link
                    onClick={toggleMobileMenu}
                    className="w-full"
                    href={itemUrl}
                  >
                    {item.name}
                  </Link>
                </span>
              )}
            </li>
          );
        })}
      </ul>

      {isOverlayOpen && (
        <div
          className={`absolute top-20 right-0 h-full w-full bg-white z-50 transition-transform duration-300 ease-in-out transform ${
            isOverlayOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <button
              className="text-sm font-medium text-templatePrimary mb-4"
              onClick={popFromSubmenuStack}
            >
              &larr; Back
            </button>

            <ul className="space-y-2">
              {submenuStack[submenuStack.length - 1]?.map(
                (item: any, index: number) => {
                  const itemUrl = item.url || "#";
                  return (
                    <li key={index} className="relative group">
                      {item.subMenuItem ? (
                        <div
                          onClick={() => pushToSubmenuStack(item.subMenuItem)}
                          className="text-sm px-2 py-3 tracking-wide flex cursor-pointer transition-all ease-in-out hover:text-templatePrimary font-medium items-center justify-between capitalize text-templateText"
                        >
                          {item.name}
                          <IoChevronForwardSharp />
                        </div>
                      ) : (
                        <div
                          onClick={toggleMobileMenu}
                          className="text-sm px-2 py-3 tracking-wide flex cursor-pointer transition-all ease-in-out hover:text-templatePrimary font-medium items-center justify-between capitalize text-templateText"
                        >
                          <Link href={itemUrl} className="w-full">
                            {item.name}
                          </Link>
                        </div>
                      )}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenuNew;
