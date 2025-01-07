import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuOptions } from "@/data/MenuOption";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export function MenuInfo() {
  // const arrNumbers = Array.from({ length: 5 }, (_, i) => i + 1);

  const menuOption = MenuOptions;

  return (
    <Sheet>
      <SheetTrigger>
        <Menu color="white" size={24} />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Choose between the best movies categories and enjoy!
          </SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col gap-2 text-gray-400 mt-3">
          {menuOption.map((optionData, index) => (
            <NavLink key={index} to={"/popular-series"}>
              <li>{optionData.option}</li>
            </NavLink>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
