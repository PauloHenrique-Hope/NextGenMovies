import { Popcorn } from "lucide-react";
import { MenuInfo } from "./MenuInfo";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="flex items-center justify-around p-2 bg-gray-950 text-white">
      <Popcorn color="white" size={32} />
      <Link to={"/"}>
        <h1 className="font-semibold text-3xl">NextGenMovies</h1>
      </Link>
      <MenuInfo />
    </nav>
  );
}
