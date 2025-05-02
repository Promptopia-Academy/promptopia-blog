import React from "react";
import Logo from "./Logo";
import Bookmark from "./Bookmark";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="  my-4 px-5  bg-secondary py-2.5 flex flex-row items-center justify-between rounded-2xl bg-gradient-to-r from-[#E5E5E533] to-[#7F7F7F63]">
      <div className="flex flex-row items-center">
        <Logo title={true} />
      </div>
      <div className="flex items-center gap-9">
        <Bookmark />
        <div className="w-9 h-9 relative">
          <Image
            src="/icons/search-3.svg"
            alt="search"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Button className="bg-accent text-foreground w-40 h-12 text-2xl">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Header;
