import React from "react";
import { TOP_BLOGS } from "@/constants";
import Article from "./Article";

const ArticlesDiv = () => {
  return (
    <div className="w-full flex">
      {TOP_BLOGS.map((f) => (
        <Article Des={f.Des} Images={f.Image} key={f.Id} />
      ))}
    </div>
  );
};

export default ArticlesDiv;
