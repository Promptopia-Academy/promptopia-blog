import { TOP_BLOGS } from "@/constants";
import React from "react";
import TopBlogCard from "./TopBlogCard";
import Image from "next/image";

const TopBlogsDiv = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-4 hide-scrollbar mt-7">
      <h1 className="text-[#000000] text-5xl font-semibold">
        We are talking to you about the future.
      </h1>
      <div className="flex flex-row items-center ml-auto gap-5 mb-5 mr-3">
        <p className="text-2xl">More</p>
        <Image src={"/icons/Right-1.svg"} alt="right" width={20} height={20} />
      </div>
      <div className="flex gap-6 overflow-x-scroll overflow-hidden no-scrollbar w-full py-5">
        {TOP_BLOGS.map((f) => (
          <TopBlogCard
            Des={f.Des}
            Images={f.Image}
            Title={f.Title}
            key={f.Id}
            Author={f.Author}
          />
        ))}
      </div>
    </div>
  );
};

export default TopBlogsDiv;
