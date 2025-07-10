import { NavListItems } from "@/constants/navBarConstant";
import { NavBarItem, NavBarTypes } from "@/types/navBar";
import Image from "next/image";

function NavBar() {
  const typesGroupingNavListItems = Map.groupBy(
    NavListItems,
    ({ types }) => types,
  );
  return (
    <div className={"flex w-full justify-around"}>
      {typesGroupingNavListItems.keys().map((key) => {
        const currentItem =
          typesGroupingNavListItems.get(key) ?? ({} as NavBarTypes[]);

        return (
          <div key={NavBarItem[key]} className={"flex justify-between"}>
            {currentItem.map((item) =>
              key === NavBarItem.LOGO ? (
                <div
                  key={`${key + 1}. ${item.text}`}
                  className={
                    "flexCenter text-xl text-[20px] leading-[100%] font-bold tracking-[0%]"
                  }
                >
                  {item.image ? (
                    <Image src={item.image} alt="Logo" />
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ) : key === NavBarItem.PAGES ? (
                <div key={`${key + 1}. ${item.text}`} className={"flexCenter"}>
                  {item.text}{" "}
                  <Image src={""} alt="Dropdown Icon" width={10} height={10} />
                </div>
              ) : key === NavBarItem.BUTTON ? (
                <button key={`${key + 1}. ${item.text}`}>{item.text}</button>
              ) : (
                <></>
              ),
            )}
          </div>
        );
      })}
    </div>
  );
}
export default NavBar;
