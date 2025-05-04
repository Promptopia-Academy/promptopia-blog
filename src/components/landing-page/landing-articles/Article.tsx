import Link from "next/link";
import React from "react";

interface IArticleProps {
  Images: string;
  Des: string;
  Id?: number;
}

const Article: React.FC<IArticleProps> = ({ Des, Images }) => {
  return (
    <Link href="#">
      <div
        className="relative w-full h-full rounded-xl overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${Images})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
          <h2 className="text-3xl font-light">{Des}</h2>
          <button className="self-end bg-[#3F8EFC] text-white px-4 py-2 rounded-[12px] text-base font-light w-[120px] h-8">
            Read more...
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Article;
