import Link from "next/link";
import React from "react";

const Bookmark = () => {
  const bookmarks = ["Home", "About", "Blog", "Contact"];

  return (
    <div className="flex gap-8 items-center">
      {bookmarks.map((bookmarks, index) => (
        <Link href="#" key={index} className="text-2xl font-normal hover:text-white hover:scale-105 transition-all duration-300">
          {bookmarks}
        </Link>
      ))}
    </div>
  );
};

export default Bookmark;
