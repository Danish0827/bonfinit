import Link from "next/link";
import React, { useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { menuItem } from "@/utils/menuItems";

interface NestedSubMenuItem {
  name: string;
  url: string;
}

interface SubMenuItem {
  name: string;
  url?: string;
  nestedSubMenuItem?: NestedSubMenuItem[];
}

interface DropdownItem {
  name: string;
  url?: string;
  subMenuItem?: SubMenuItem[];
}

interface MenuItem {
  name: string;
  url: string;
  dropdown?: DropdownItem[];
}

interface DesktopMenuProps {
  hasScrolled: boolean;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ hasScrolled }) => {
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState<number | null>(null);
  const [hoveredNestedSubMenu, setHoveredNestedSubMenu] = useState<
    number | null
  >(null);
  const pathname = usePathname();
  const version = 3;

  return (
    <div>
      <ul className="flex items-center justify-center gap-3">
        {menuItem.map((item: MenuItem, index: number) => {
          const isActive = pathname === item.url;
          const itemUrl = item.url || "#";

          return (
            <li
              key={index}
              className={`relative ${
                version === 3
                  ? `${hasScrolled ? "v3hover-class" : "v2hover-class"}`
                  : ``
              } ${
                isActive
                  ? version === 3
                    ? "v2active-class"
                    : "active-class"
                  : ""
              }`}
              onMouseEnter={() => setHoveredDropdown(index)}
              onMouseLeave={() => {
                setHoveredDropdown(null);
                setHoveredSubMenu(null);
                setHoveredNestedSubMenu(null);
              }}
            >
              {itemUrl === "#" ? (
                <span
                  className={`text-[15.5px] cursor-default tracking-wider flex items-center gap-0.5 px-2 capitalize ${
                    isActive ? "text-templatePrimary" : ""
                  } ${hasScrolled ? "text-templateText" : "text-white"}`}
                >
                  {item.name}
                  {item.dropdown && (
                    <IoChevronForwardSharp className="mt-0.5 rotate-90" />
                  )}
                </span>
              ) : (
                <Link
                  className={`text-[15.5px] tracking-wider flex items-center  md:text-nowrap text-wrap gap-0.5 px-2 capitalize ${
                    isActive ? "text-templatePrimary" : ""
                  } ${hasScrolled ? "text-templateText" : "text-white"}`}
                  href={itemUrl}
                >
                  {item.name}
                  {item.dropdown && (
                    <IoChevronForwardSharp className="mt-0.5 rotate-90" />
                  )}
                </Link>
              )}

              {/* Dropdown Level 1 */}
              {item.dropdown && hoveredDropdown === index && (
                <div className="absolute w-[270px] left-0">
                  <ul className="mt-4 py-2.5 bg-white rounded-[3px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => {
                      const dropdownItemUrl = dropdownItem.url || "#";

                      return (
                        <li
                          key={dropdownIndex}
                          className="relative"
                          onMouseEnter={() => setHoveredSubMenu(dropdownIndex)}
                          onMouseLeave={() => setHoveredSubMenu(null)}
                        >
                          {dropdownItemUrl === "#" ? (
                            <span
                              className={`text-[13px] flex items-center cursor-default justify-between text-templateText hover:text-templatePrimary px-4 py-2.5 hover:pl-5 transition-all ease-linear ${
                                hoveredSubMenu === dropdownIndex
                                  ? "text-templatePrimary"
                                  : "text-templateText"
                              }`}
                            >
                              {dropdownItem.name}
                              {dropdownItem.subMenuItem && (
                                <IoChevronForwardSharp />
                              )}
                            </span>
                          ) : (
                            <Link
                              href={dropdownItemUrl}
                              className={`text-[13px] flex items-center justify-between text-templateText hover:text-templatePrimary px-4 py-2.5 hover:pl-5 transition-all ease-linear ${
                                hoveredSubMenu === dropdownIndex
                                  ? "text-templatePrimary"
                                  : "text-templateText"
                              }`}
                            >
                              {dropdownItem.name}
                              {dropdownItem.subMenuItem && (
                                <IoChevronForwardSharp />
                              )}
                            </Link>
                          )}

                          {/* Dropdown Level 2 */}
                          {dropdownItem.subMenuItem &&
                            hoveredSubMenu === dropdownIndex && (
                              <div className="absolute left-full top-0 w-[230px]">
                                <ul className="mt-0 py-2.5 bg-white rounded-[3px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                                  {dropdownItem.subMenuItem.map(
                                    (subMenuItem, subMenuIndex) => {
                                      const subMenuItemUrl =
                                        subMenuItem.url || "#";

                                      return (
                                        <li
                                          key={subMenuIndex}
                                          className="relative"
                                          onMouseEnter={() =>
                                            setHoveredNestedSubMenu(
                                              subMenuIndex
                                            )
                                          }
                                          onMouseLeave={() =>
                                            setHoveredNestedSubMenu(null)
                                          }
                                        >
                                          {subMenuItemUrl === "#" ? (
                                            <span
                                              className={`text-[12px] flex items-center cursor-default justify-between text-templateText hover:text-templatePrimary px-4 py-2.5 hover:pl-5 transition-all ease-linear ${
                                                hoveredNestedSubMenu ===
                                                subMenuIndex
                                                  ? "text-templatePrimary"
                                                  : "text-templateText"
                                              }`}
                                            >
                                              {subMenuItem.name}
                                              {subMenuItem.nestedSubMenuItem && (
                                                <IoChevronForwardSharp />
                                              )}
                                            </span>
                                          ) : (
                                            <Link
                                              href={subMenuItemUrl}
                                              className={`text-[12px] flex items-center justify-between text-templateText hover:text-templatePrimary px-4 py-2.5 hover:pl-5 transition-all ease-linear ${
                                                hoveredNestedSubMenu ===
                                                subMenuIndex
                                                  ? "text-templatePrimary"
                                                  : "text-templateText"
                                              }`}
                                            >
                                              {subMenuItem.name}
                                              {subMenuItem.nestedSubMenuItem && (
                                                <IoChevronForwardSharp />
                                              )}
                                            </Link>
                                          )}

                                          {/* Dropdown Level 3 */}
                                          {subMenuItem.nestedSubMenuItem &&
                                            hoveredNestedSubMenu ===
                                              subMenuIndex && (
                                              <div className="absolute left-full top-0 w-[200px]">
                                                <ul className="mt-0 py-2 bg-white rounded-[3px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                                                  {subMenuItem.nestedSubMenuItem.map(
                                                    (
                                                      nestedSubMenuItem,
                                                      nestedIndex
                                                    ) => (
                                                      <li
                                                        key={nestedIndex}
                                                        className="text-[11px] px-4 py-2.5 text-templateText hover:text-templatePrimary hover:pl-5 transition-all ease-linear"
                                                      >
                                                        <Link
                                                          href={
                                                            nestedSubMenuItem.url ||
                                                            "#"
                                                          }
                                                        >
                                                          {
                                                            nestedSubMenuItem.name
                                                          }
                                                        </Link>
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              </div>
                                            )}
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                            )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopMenu;
