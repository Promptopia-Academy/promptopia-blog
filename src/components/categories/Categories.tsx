"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Categories = () => {
  const [active, setActive] = useState("All");

  const fakeArray = ["All", "Ai", "Tech", "Coding", "Games", "Other"];
  return (
    <div className="w-full h-32 bg-gradient-to-r from-[#FAF9F96B] to-[#EAEAEA91] flex gap-3 items-center justify-center rounded-2xl mt-20">
      {fakeArray.map((item, index) => (
        <Button
          key={index}
          className={cn(
            active === item
              ? "bg-chart-2 text-background text-2xl font-normal w-36 h-12"
              : "bg-accent text-2xl font-normal text-foreground w-36 h-12"
          )}
          onClick={() => setActive(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
