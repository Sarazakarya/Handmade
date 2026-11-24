"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { HelpTabsData } from "../types/Helpdata";
import AnswerAccording from "./AnswerAccording";

const HelpTabs = () => {
  const [active, setActive] = useState("All Questions");
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {HelpTabsData.map((ele, i) => (
          <Button
            key={i}
            className="rounded-full whitespace-nowrap text-xs sm:text-sm"
            variant={active === ele ? "default" : "outline"}
            onClick={() => setActive(ele)}
          >
            {ele}
          </Button>
        ))}
        <AnswerAccording item={active} />;
      </div>
    </div>
  );
};

export default HelpTabs;
