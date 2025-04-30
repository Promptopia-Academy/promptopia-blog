import React from "react";
import Logo from "./Logo";
import Bookmark from "./Bookmark";
import Image from "next/image";
import Button from "@/modules/Button";

const Header = () => {
  return (
    <div className="mx-32  my-4 px-5  bg-secondary h-20 flex flex-row items-center justify-between rounded-2xl">
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
        <Button text="Login" />
      </div>
    </div>
  );
};

export default Header;
