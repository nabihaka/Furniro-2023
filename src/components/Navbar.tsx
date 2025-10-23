import React from "react";
import Link from "next/link";
import { navbarLinks } from "@/models/navbarLinks";
import FurniroLogo from "@/assets/png/furniro_logo.png";
import AccountIcon from "@/assets/svg/account_icon.svg";
import SearchIcon from "@/assets/svg/search_icon.svg";
import FavoriteIcon from "@/assets/svg/favorite_icon.svg";
import CartIcon from "@/assets/svg/cart_icon.svg";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full px-14 py-5 bg-white">
      <div className="flex justify-between items-center w-full">
        <a href="/home">
          <img src={FurniroLogo.src} />
        </a>
        <ul className="flex items-center gap-[75px] font-medium text-base text-black">
          {navbarLinks.map((navItem) => (
            <li key={navItem.id} className="cursor-pointer">
              <div className="group w-max">
                <Link href={navItem.url}>{navItem.name}</Link>
                <hr className="w-0 group-hover:w-full transition-all" />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-11">
          <div className="relative group">
            <img src={AccountIcon.src} className="cursor-pointer" />
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-3 py-1 bg-white border opacity-0 rounded-md transition group-hover:opacity-100 group-hover:delay-700">
              Account
            </div>
          </div>
          <div className="relative group">
            <img src={SearchIcon.src} className="cursor-pointer" />
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-3 py-1 bg-white border opacity-0 rounded-md transition group-hover:opacity-100 group-hover:delay-700">
              Search
            </div>
          </div>
          <div className="relative group">
            <img src={FavoriteIcon.src} className="cursor-pointer" />
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-3 py-1 bg-white border opacity-0 rounded-md transition group-hover:opacity-100 group-hover:delay-700">
              Favorite
            </div>
          </div>
          <div className="relative group">
            <img src={CartIcon.src} className="cursor-pointer" />
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-3 py-1 bg-white border opacity-0 rounded-md transition group-hover:opacity-100 group-hover:delay-700">
              Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
