import { JSX } from "react";

export enum NavBarItem {
  LOGO,
  PAGES,
  BUTTON,
}

export type NavBarTypes = {
  types: NavBarItem;
  directRoute: string;
  text: string;
  image?: string;
  dropdowns?: string[] | JSX.Element;
};
