"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarFooterLink } from "../utilis/NavbarData";

const NavbarFooter = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-40 lg:hidden">
      <div className="flex items-center justify-around px-2 py-3">
        {NavbarFooterLink.map((ele) => {
          const isActive = pathname === ele.href;

          return (
            <Link
              key={ele.href}
              href={ele.href}
              className={`flex flex-1 flex-col items-center justify-center gap-1 text-xs font-medium transition-colors duration-200 ${
                isActive
                  ? "cozy-text-brand-pink"
                  : "cozy-text-brown hover:cozy-text-brand-pink"
              }`}
            >
              <ele.icon className="w-5 h-5" />
              <span>{ele.page}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavbarFooter;
