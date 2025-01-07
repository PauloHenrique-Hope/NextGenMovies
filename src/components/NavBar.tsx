import { Popcorn } from "lucide-react";
import { MenuCategories } from "./MenuCategories";

export function NavBar() {
  return (
    <nav className="flex items-center justify-around">
      <MenuCategories />
      <h1 className="font-semibold text-3xl">NextGenMovies</h1>
      <Popcorn color="black" size={32} />
    </nav>
  );
}
