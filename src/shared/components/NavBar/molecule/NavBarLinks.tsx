"use client";

import { Links } from "../utilis/NavbarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import PagesHoverItem from "./NavBarDropDown";

const NavBarLinks = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-8">
        {Links.map((ele) => {
          if (ele.page === "Pages") {
            return (
              <NavigationMenuItem key={ele.page}>
                <PagesHoverItem label={ele.page} />
              </NavigationMenuItem>
            );
          }

          const active =
            ele.href === "/" ? pathname === "/" : pathname.startsWith(ele.href);

          return (
            <NavigationMenuItem key={ele.href}>
              <Link
                href={ele.href}
                className={`font-bold transition-colors duration-200 ${
                  active
                    ? "cozy-text-brand-pink"
                    : "cozy-text-brown hover:cozy-text-brand-pink"
                }`}
              >
                {ele.page}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBarLinks;
