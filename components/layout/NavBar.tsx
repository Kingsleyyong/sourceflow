"use client";

import Button from "@/components/ui/Button";
import { Icons } from "@/constants/imageLists";
import { NavListItems } from "@/constants/navBarConstant";
import { NavBarItem, NavBarTypes } from "@/types/navBar";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const typesGroupingNavListItems = Map.groupBy(
    NavListItems,
    ({ types }) => types,
  );

  return (
    <nav className="bg-background text-foreground w-full px-4 py-4">
      {/* Desktop Nav */}
      <div className="hidden w-full justify-around xl:flex">
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
                  <Link
                    href="/"
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
                  </Link>
                ) : key === NavBarItem.PAGES ? (
                  <Link
                    key={`${key + 1}. ${item.text}`}
                    className={
                      "flexCenter hover:text-dark-blue mr-6 hover:font-medium"
                    }
                    href={`${item.directRoute}`}
                  >
                    {item.text}
                    <Image
                      className={"ml-2"}
                      src={Icons.DropdownIcon}
                      alt="Dropdown Icon"
                      width={10}
                      height={10}
                    />
                  </Link>
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

      {/* Mobile Nav */}
      <div className="flex w-full flex-col xl:hidden">
        <div className="flex items-center justify-between py-4">
          {[...(typesGroupingNavListItems.get(NavBarItem.LOGO) || [])].map(
            (item) => (
              <Link
                href="/"
                key={`logo-${item.text}`}
                className={clsx(
                  "flex items-center text-xl font-bold",
                  item.textColor,
                  item.bgColor,
                )}
              >
                {item.image ? (
                  <Image src={item.image} alt="Logo" />
                ) : (
                  <span>{item.text}</span>
                )}
              </Link>
            ),
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-sm font-medium"
          >
            Menu
          </button>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col gap-4 px-4 pb-4">
            {[...typesGroupingNavListItems.keys()].map((key) => {
              const currentItem =
                typesGroupingNavListItems.get(key) ?? ({} as NavBarTypes[]);

              return currentItem.map((item) => {
                if (key === NavBarItem.PAGES) {
                  return (
                    <Link
                      key={`${key + 1}. ${item.text}`}
                      className="hover:text-dark-blue flexCenter text-center text-sm font-medium"
                      href={`${item.directRoute}`}
                    >
                      {item.text}
                      <Image
                        className={"ml-2"}
                        src={Icons.DropdownIcon}
                        alt="Dropdown Icon"
                        width={10}
                        height={10}
                      />
                    </Link>
                  );
                }
                if (key === NavBarItem.BUTTON) {
                  return (
                    <Button
                      key={`${key + 1}. ${item.text}`}
                      textColor={item.textColor}
                      bgColor={item.bgColor}
                      radius="rounded-[30px]"
                      className="px-5 py-2 font-semibold"
                    >
                      {item.text}
                    </Button>
                  );
                }
                return null;
              });
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
