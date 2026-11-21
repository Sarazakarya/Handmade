"use client";

import { Links } from "../utilis/NavbarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

const NavBarLinks = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-8">
        {Links.map((ele) => {
          const active =
            ele.href === "/" ? pathname === "/" : pathname.startsWith(ele.href);

          return (
            <NavigationMenuItem key={ele.href}>
              <Link
                href={ele.href}
                aria-current={active ? "page" : undefined}
                className={`group flex items-center gap-1.5 font-bold transition-colors duration-200 ${
                  active
                    ? "cozy-text-brand-pink"
                    : "cozy-text-brown hover:cozy-text-brand-pink"
                }`}
              >
                {ele.page}

                {ele.page === "Pages" && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      active ? "rotate-180" : "group-hover:rotate-180"
                    }`}
                  />
                )}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBarLinks;
