import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Poster = () => {
  return (
    <div className="w-full h-[439px] flex items-center bg-gradient-to-r from-[#1717175b] to-white rounded-2xl justify-between mb-11">
      <div className="m-16 flex flex-col gap-11">
        <p className="text-[40px] font-medium w-[411px]">
          CodeStorm 2025: Riding the Digital Surge of Programming Innovation!
        </p>
        <Button className="bg-primary h-12 text-black rounded-2xl w-max p-4 flex justify-center items-center text-[20px]">
          Read more...
        </Button>
      </div>
      <Image
        src={"/images/pc.png"}
        width={549}
        height={465}
        className="mt-[-35px]"
        alt="Poster Image"
      />
    </div>
  );
};

export default Poster;
