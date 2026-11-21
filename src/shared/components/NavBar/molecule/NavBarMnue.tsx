import Link from "next/link";
import { InputWithIcon } from "../../molecule/InputWithIcon";
import { ChevronDown, SearchIcon } from "lucide-react";
import {  LinksMobile } from "../utilis/NavbarData";
import { useState } from "react";

const NavBarMnue = () => {
    const[open,setOpen] = useState(false)
  return (
    <div className="w-full bg-white shadow-md p-5">
      <form action="/search" className="w-full">
        <InputWithIcon
          type="search"
          name="q"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
          icon={SearchIcon}
        />
      </form>

      <div className="mt-4 flex flex-col gap-3">
        {LinksMobile.map((ele) => {
        return (
          <div key={ele.href}>
            <Link
              href={ele.href}
              className={`group flex items-center gap-1.5 font-bold transition-colors duration-200 cozy-text-brown hover:cozy-text-brand-pink`}
            >
              {ele.page}

              {ele.page === "Pages" && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    open ? "rotate-180" : "group-hover:rotate-180"
                  }`}
                />
              )}
            </Link>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default NavBarMnue;
