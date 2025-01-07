import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MenuCategories() {
  const arrNumbers = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <Sheet>
      <SheetTrigger>
        <Menu color="white" size={24} />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
          <SheetDescription>
            Choose between the best movies categories and enjoy!
          </SheetDescription>
        </SheetHeader>
        <ul className="flex flex-col gap-2 text-gray-400 mt-3">
          {arrNumbers.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
