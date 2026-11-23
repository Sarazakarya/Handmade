import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { LinksPages } from "../utilis/NavbarData";
import Link from "next/link";

const NavBarMobileDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 font-bold cozy-text-brown justify-between w-full"
        aria-expanded={open}
      >
        Pages
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out mt-1  ${
          open
            ? "translate-y-0 opacity-100 max-h-40 pointer-events-auto"
            : "-translate-y-2 opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        {LinksPages.map((ele, i) => {
          const Icon = ele.Icon;
          return (
            <Link href={ele.href} key={i} className="flex gap-1 font-heading text-[13px] items-center">
              <Icon  className="cozy-text-brand-pink " size={"15px"}/>
              {ele.page}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarMobileDropDown;
