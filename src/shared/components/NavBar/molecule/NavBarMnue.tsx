"use client";

import Link from "next/link";
import { InputWithIcon } from "../../molecule/InputWithIcon";
import { SearchIcon } from "lucide-react";
import { LinksMobile } from "../utilis/NavbarData";
import NavBarMobileDropDown from "./NavBarMobileDropDown";

const NavBarMnue = () => {
  return (
    <div className="w-full bg-white p-5 shadow-md">
      <form action="/search" className="w-full">
        <InputWithIcon
          type="search"
          name="q"
          placeholder="Search..."
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none"
          icon={SearchIcon}
        />
      </form>

      <div className="mt-4 flex flex-col gap-3 w-full">
        {LinksMobile.map((ele) => (
          <div key={ele.href}>
            {ele.page === "Pages" ? (
              <NavBarMobileDropDown />
            ) : (
              <Link
                href={ele.href}
                className="flex items-center gap-1.5 font-bold cozy-text-brown transition-colors duration-200 hover:cozy-text-brand-pink"
              >
                {ele.page}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBarMnue;
