import { FaCartArrowDown, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Search from "../features/search/Search";
import { HiHeart } from "react-icons/hi";

function Header() {
  return (
    <header className="mx-auto flex max-w-[77.5rem] items-center justify-between border-b-[1px] border-stone-400 px-2 py-3 md:px-4 md:py-4">
      <NavLink to="/home">
        <Logo />
      </NavLink>
      <Search />
      <nav className="flex gap-4">
        <NavLink to="/wishlist">
          <HiHeart />
        </NavLink>
        <NavLink to="/cart">
          <FaCartArrowDown />
        </NavLink>
        <NavLink to="/me">
          <FaUserAlt />
        </NavLink>
      </nav>
    </header>
  );
}

function Logo() {
  return <div className="logo text-xl font-extrabold uppercase">shop.co</div>;
}

export default Header;
