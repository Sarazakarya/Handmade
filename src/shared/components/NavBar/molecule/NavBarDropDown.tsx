"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LinksPages } from "../utilis/NavbarData";

const PagesHoverItem = ({ label }: { label: string }) => {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpen(true);
  };

  const handleClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };



  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
        <DropdownMenuTrigger
          className={`group flex cursor-pointer items-center gap-1.5 font-bold transition-colors duration-200 outline-none bg-transparent border-0 p-0 ${
            open
              ? "cozy-text-brand-pink"
              : "cozy-text-brown hover:cozy-text-brand-pink"
          }`}
        >
          {label}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          sideOffset={8}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          className="min-w-60 rounded-xl border bg-white p-4 shadow-md"
        >
          <DropdownMenuGroup className="flex flex-col gap-1">
            <div className="flex items-center justify-between font-heading text-[13px]">
              <DropdownMenuLabel className="p-0 font-heading text-[13px]">
                STOREFRONT PAGES
              </DropdownMenuLabel>
            </div>

            <hr className="mt-1 cozy-bg-light-brown opacity-70" />

            {LinksPages.map((ele, i) => {
              const Icon = ele.Icon;
              return (
                <DropdownMenuItem
                  key={i}
                  className="mt-2 flex w-full cursor-pointer items-center gap-2.5 rounded-lg font-heading text-[13px]"
                >
                  <Link
                    href={ele.href}
                    className="flex w-full items-center gap-2.5"
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{ele.page}</span>
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PagesHoverItem;
