"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <Button
        size="icon-lg"
        onClick={handleClick}
        className={`fixed bottom-8 right-6 z-50  transition-all duration-300 ease-in-out ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <FaArrowUp size={18} />
      </Button>
    </div>
  );
};

export default BackToTop;
