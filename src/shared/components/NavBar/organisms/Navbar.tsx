"use client";
import { useState } from "react";
import { logo } from "@/assets/images/Images";
import Image from "next/image";
import { Container } from "../../atoms/Container";
import NavBarLinks from "../molecule/NavBarLinks";
import NavIcons from "../molecule/NavIcons";
import { TextAlignJustifyEnd, X } from "@/assets/icons/Icons";
import NavBarMnue from "../molecule/NavBarMnue";

const Navbar = () => {
  const [openMenu, setMenu] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      {/* Desktop Navbar */}
      <Container className="hidden lg:flex justify-between items-center py-3">
        <Image src={logo} alt="Logo" width={160} height={50} />
        <NavBarLinks />
        <NavIcons />
      </Container>

      {/* Mobile Navbar */}
      <Container className="flex lg:hidden justify-between items-center py-3">
        <Image src={logo} alt="Logo" width={160} height={50} />

        <button
          onClick={() => setMenu((prev) => !prev)}
          className="cozy-text-brown cursor-pointer"
        >
          {openMenu ? <X /> : <TextAlignJustifyEnd />}
        </button>
      </Container>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
          openMenu ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <NavBarMnue />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
