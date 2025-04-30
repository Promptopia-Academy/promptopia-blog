import { TOP_BLOGS } from "@/constants";
import React from "react";
import TopBlogCard from "./TopBlogCard";

const TopBlogsDiv = () => {
  return (
    <div className="h-[900px] flex flex-col overflow-x-scroll justify-start items-start gap-7 max-w-7xl my-10 py-5 hide-scrollbar">
      <h1 className="text-[#141414] text-4xl font-medium">Top blog</h1>
      <div className="flex overflow-hidden gap-8 ">
        {TOP_BLOGS.map((f) => (
          <TopBlogCard Des={f.Des} Image={f.Image} Title={f.Title} key={f.Id} />
        ))}
      </div>
    </div>
  );
};

export default TopBlogsDiv;
