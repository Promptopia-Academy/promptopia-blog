import { TOP_BLOGS } from "@/constants";
import React from "react";
import TopBlogCard from "./TopBlogCard";

const TopBlogsDiv = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 hide-scrollbar mt-20">
      <h1 className="text-[#000000] text-5xl font-semibold">
        We are talking to you about the future.
      </h1>
      <div className="flex overflow-x-scroll overflow-hidden gap-6 hide-scrollbar max-w-7xl">
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
