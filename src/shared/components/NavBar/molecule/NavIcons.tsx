"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, SearchIcon } from "lucide-react";
import { NavbarIcons } from "../utilis/NavbarData";
import { InputWithIcon } from "../../molecule/InputWithIcon";

const NavIcons = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex items-center gap-7 text-[#78351f]">
      <div className="relative" ref={searchRef}>
        <button onClick={() => setShowSearch(!showSearch)}>
          <Search size={24} strokeWidth={1.6} />
        </button>

        {showSearch && (
          <form action="/search" className="absolute right-0 top-10 w-64">
            <InputWithIcon
              type="search"
              name="q"
              placeholder="Search..."
              autoFocus
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
              icon={SearchIcon}
          
            />
          </form>
        )}
      </div>

      {NavbarIcons.map((item) => {
        const Icon = item.icon;

        return (
          <Link key={item.label} href={item.href} aria-label={item.label}>
            <Icon size={24} strokeWidth={1.6} />
          </Link>
        );
      })}
    </div>
  );
};

export default NavIcons;
