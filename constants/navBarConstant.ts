import { NavBarItem, NavBarTypes } from "@/types/navBar";
export const NavListItems: NavBarTypes[] = [
  {
    types: NavBarItem.LOGO,
    text: "Software Recruitment co.",
    image: "",
    directRoute: "./",
    textColor: "text-light-blue",
  },
  {
    types: NavBarItem.PAGES,
    text: "For jobseekers",
    directRoute: "/jobseekers",
  },
  {
    types: NavBarItem.PAGES,
    text: "For clients",
    directRoute: "/clients",
  },
  {
    types: NavBarItem.PAGES,
    text: "Sectors",
    directRoute: "/sectors",
  },
  {
    types: NavBarItem.PAGES,
    text: "Resources",
    directRoute: "/resources",
  },
  {
    types: NavBarItem.BUTTON,
    text: "Upload CV",
    directRoute: "/cvUpload",
    textColor: "text-brown-black",
    bgColor: "bg-yellow",
  },
  {
    types: NavBarItem.BUTTON,
    text: "Contact Us",
    directRoute: "/contact",
    textColor: "text-brown-black",
    bgColor: "bg-orange",
  },
];
