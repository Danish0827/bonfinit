// utils/menuTypes.ts

export interface NestedSubMenuItem {
  name: string;
  url: string;
}

export interface SubMenuItem {
  name: string;
  url: string;
  nestedSubMenuItem?: NestedSubMenuItem[]; // Optional nested sub-menu
}

export interface DropdownItem {
  name: string;
  url: string;
  subMenuItem?: SubMenuItem[]; // Optional submenu items
}

export interface MenuItem {
  name: string;
  url: string;
  dropdown?: DropdownItem[]; // Optional dropdown items
}
