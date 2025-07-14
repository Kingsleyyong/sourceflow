import Button from "@/components/ui/Button";
import { Icons } from "@/constants/imageLists";
import { NavListItems } from "@/constants/navBarConstant";
import { NavBarItem, NavBarTypes } from "@/types/navBar";
import clsx from "clsx";
import Image from "next/image";

const NavBar = () => {
  const typesGroupingNavListItems = Map.groupBy(
    NavListItems,
    ({ types }) => types,
  );

  return (
    <div className={`flex h-24 w-full justify-around py-7`}>
      {[...typesGroupingNavListItems.keys()].map((key) => {
        const currentItem =
          typesGroupingNavListItems.get(key) ?? ({} as NavBarTypes[]);

        return (
          <div
            key={NavBarItem[key]}
            className={
              "flexCenter " +
              (key === NavBarItem.PAGES ? "-m-20 w-1/2 justify-start" : "")
            }
          >
            {currentItem.map((item) =>
              key === NavBarItem.LOGO ? (
                <div
                  key={`${key + 1}. ${item.text} flexCenter`}
                  className={clsx(
                    "flexCenter text-xl font-bold",
                    item.textColor,
                    item.bgColor,
                  )}
                >
                  {item.image ? (
                    <Image src={item.image} alt="Logo" />
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ) : key === NavBarItem.PAGES ? (
                <div
                  key={`${key + 1}. ${item.text}`}
                  className={"flexCenter mr-6"}
                >
                  {item.text}
                  <Image
                    className={"ml-3"}
                    src={Icons.DropdownIcon}
                    alt="Dropdown Icon"
                    width={10}
                    height={10}
                  />
                </div>
              ) : key === NavBarItem.BUTTON ? (
                <Button
                  key={`${key + 1}. ${item.text}`}
                  textColor={item.textColor}
                  bgColor={item.bgColor}
                  radius={"rounded-[30px]"}
                  className={"mx-1 px-5 py-3 font-semibold"}
                >
                  {item.text}
                </Button>
              ) : (
                <></>
              ),
            )}
          </div>
        );
      })}
    </div>
  );
};
export default NavBar;
